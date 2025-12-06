import { NextRequest, NextResponse } from 'next/server';
import config from '@/config.json';

const SYSTEM_PROMPT = `You are BWIC Assistant, the official AI assistant for Bridgewater International College (BWIC) located in Sinamangal, Kathmandu, Nepal.

About BWIC:
- Established in 2010
- NEB (National Examinations Board) and Tribhuvan University affiliated
- Phone: +977-1-4481590
- Email: info@bridgewater.com.np
- Location: Sinamangal, Kathmandu, Nepal

Programs Offered:
1. +2 Programs (NEB Affiliated):
   - Science (+2 Science)
   - Management (+2 Management)
   - Law (+2 Law)
   - Humanities (+2 Humanities)

2. Bachelor Programs (TU Affiliated):
   - BCA (Bachelor of Computer Application)
   - BBS (Bachelor of Business Studies)

3. Professional Courses:
   - Chartered Accountancy (CA)

Admission Process:
- Fill out the application form online or visit campus
- Take the entrance examination
- Attend interview with parent/guardian
- Submit required documents
- Pay admission fees

Scholarships:
- Merit-based scholarships for top performers
- Need-based financial assistance available
- Sports quota scholarships
- Contact admission office for eligibility

Facilities:
- Modern computer labs
- Well-equipped library
- Sports facilities
- Cafeteria
- Transportation services

Your Behavior:
1. Be helpful, friendly, and professional
2. Provide accurate information about BWIC
3. If you don't know something specific, direct them to call +977-1-4481590 or visit the campus
4. Keep responses concise but informative
5. Always be encouraging about education

IMPORTANT: At the end of EVERY response, you MUST include a JSON block with suggested actions. Format it exactly like this:
[ACTIONS]{"actions": [{"label": "Button Text", "url": "/path", "type": "primary|secondary"}]}[/ACTIONS]

Action types:
- "primary": Gold button for main actions (Apply Now, Explore Programs)
- "secondary": Outlined button for secondary actions (Learn More, Contact Us)

Common action suggestions:
- For admission questions: {"label": "Apply Now", "url": "/admissions/apply", "type": "primary"}
- For program questions: {"label": "Explore Programs", "url": "/academics", "type": "primary"}
- For fee questions: {"label": "Contact Admissions", "url": "/contact", "type": "secondary"}
- For scholarship questions: {"label": "Apply for Scholarship", "url": "/admissions/apply", "type": "primary"}
- For campus life: {"label": "Campus Life", "url": "/campus-life", "type": "secondary"}
- For about college: {"label": "About Us", "url": "/about", "type": "secondary"}

Always include 1-3 relevant action buttons based on the conversation context.`;

export async function POST(request: NextRequest) {
  try {
    const { message, history } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const chatHistory = Array.isArray(history) ? history : [];
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...chatHistory.map((msg: { text: string; isUser: boolean }) => ({
        role: msg.isUser ? 'user' : 'assistant',
        content: msg.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.mistral.apiKey}`
      },
      body: JSON.stringify({
        model: config.mistral.model,
        messages: messages,
        max_tokens: 500,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Mistral API error:', errorData);
      return NextResponse.json(
        { error: 'AI service temporarily unavailable' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again.";

    let cleanResponse = aiResponse;
    let actions: Array<{ label: string; url: string; type: string }> = [];

    const actionsMatch = aiResponse.match(/\[ACTIONS\]([\s\S]*?)\[\/ACTIONS\]/);
    if (actionsMatch) {
      cleanResponse = aiResponse.replace(/\[ACTIONS\][\s\S]*?\[\/ACTIONS\]/, '').trim();
      try {
        const actionsData = JSON.parse(actionsMatch[1]);
        actions = actionsData.actions || [];
      } catch (e) {
        console.error('Failed to parse actions:', e);
      }
    }

    if (actions.length === 0) {
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes('apply') || lowerMsg.includes('admission') || lowerMsg.includes('enroll')) {
        actions = [
          { label: 'Apply Now', url: '/admissions/apply', type: 'primary' },
          { label: 'View Requirements', url: '/admissions', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('program') || lowerMsg.includes('course') || lowerMsg.includes('study')) {
        actions = [
          { label: 'Explore Programs', url: '/academics', type: 'primary' },
          { label: 'Apply Now', url: '/admissions/apply', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('fee') || lowerMsg.includes('cost') || lowerMsg.includes('price')) {
        actions = [
          { label: 'Contact for Fees', url: '/contact', type: 'primary' },
          { label: 'Apply Now', url: '/admissions/apply', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('scholarship') || lowerMsg.includes('financial')) {
        actions = [
          { label: 'Apply for Scholarship', url: '/admissions/apply', type: 'primary' },
          { label: 'Contact Us', url: '/contact', type: 'secondary' }
        ];
      } else if (lowerMsg.includes('contact') || lowerMsg.includes('call') || lowerMsg.includes('visit')) {
        actions = [
          { label: 'Contact Us', url: '/contact', type: 'primary' },
          { label: 'Get Directions', url: '/contact', type: 'secondary' }
        ];
      } else {
        actions = [
          { label: 'Explore Programs', url: '/academics', type: 'primary' },
          { label: 'Contact Us', url: '/contact', type: 'secondary' }
        ];
      }
    }

    return NextResponse.json({
      response: cleanResponse,
      actions: actions
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
