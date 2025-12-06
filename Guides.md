# Bridgewater International College Website

## Overview
A modern college/university website built with Next.js 16, React, and Tailwind CSS for Bridgewater International College (BWIC), established in 2010 in Sinamangal, Kathmandu, Nepal. Features a professional dual topbar navigation design suitable for educational institutions.

## Project Structure
```
app/
├── about/
│   └── history/
│       └── page.tsx         # Detailed history page with milestones
├── components/
│   ├── Header.tsx           # Main header combining both topbars
│   ├── TopBar.tsx           # Upper info bar (contact, social, quick links)
│   ├── MainNavBar.tsx       # Main navigation with logo and menu
│   ├── OurHistorySection.tsx # Homepage history timeline component
│   ├── HeroSection.tsx      # Homepage hero section
│   ├── Footer.tsx           # Site footer
│   └── ...                  # Other section components
├── globals.css              # Global styles and Tailwind imports
├── layout.tsx               # Root layout with Header
└── page.tsx                 # Homepage content
```

## Key Features
- **Dual Topbar Design**: Professional header with two navigation layers
  - Top bar: Contact info (+977-1-4481590), email, social media, portal links
  - Main nav: Logo, dropdown menus, CTA button
- **Responsive Design**: Mobile-friendly with hamburger menu
- **College Theme**: Navy blue (#1e3a5f) and gold (#c9a227) color scheme
- **Modern UI**: Smooth transitions, hover effects, dropdown menus, Framer Motion animations
- **History Page**: Comprehensive history with founding story, vision/mission, milestones timeline, and education network

## College Information (Bridgewater International College)
- **Established**: 2010
- **Location**: Sinamangal, Kathmandu, Nepal (near KMC Hospital)
- **Contact**: +977-1-4481590, info@bridgewater.com.np
- **Affiliations**: NEB (National Examination Board), Tribhuvan University
- **Part of**: Bridgewater Education Foundation & Research Center
- **Sister Institutions**: 
  - Danfe College (BCA, BBS)
  - Academy of Commerce (CA Coaching)
  - Bridgewater International School (Classes 1-10)
  - Bridgewater Pre-School (Play Group to UKG)

## Programs Offered (with Accurate Admission Requirements)

### +2 Programs (NEB Affiliated, 2 Years)
- **Science**: GPA 3.0 minimum, C+ in Science/Math, Optional Math compulsory
- **Management**: GPA 2.40 minimum, D+ in English/Math/Social/Nepali
- **Humanities**: GPA 2.40 minimum, D+ in core subjects
- **Law**: GPA 2.40 minimum, D+ in core subjects

### Bachelor Programs (TU Affiliated, 4 Years)
- **BCA**: 126 credits, 8 semesters, D+ minimum, training in React/Node.js/Laravel/Django
- **BBS**: Faculty of Management, specializations in Finance/Marketing/HR

### Professional Course
- **CA Coaching**: CAP I/II/III through Academy of Commerce (ICAN/ICAI affiliated)

### Admission Process
- Entrance examination (mandatory and comprehensive)
- Personal interview with parent/guardian
- Scholarship: Merit-based and need-based available

## Running the Project
The development server runs on port 5000:
```bash
npm run dev
```

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
- Framer Motion (animations)
- Lucide React (icons)

## Color Scheme
- Primary (Navy): #1e3a5f
- Accent (Gold): #c9a227
- Light backgrounds: gray-50, white
- Dark footer: gray-900

## Campus Life Section (Research-Based Content)
All campus life content is based on actual research about Bridgewater International College, Sinamangal:

### Campus Life Pages Structure
```
app/campus-life/
├── page.tsx              # Main landing page with overview of all facilities
├── hostel/page.tsx       # Hostel & Boarding facilities
├── cafeteria/page.tsx    # Cafeteria & dining services
├── sports/page.tsx       # Sports & Futsal facilities
├── library/page.tsx      # Library resources
└── events/page.tsx       # Events & Activities
```

### Hostel & Boarding (Verified Data)
- Separate hostels for boys and girls
- Room Types: Deluxe (1 bed), Standard (2 beds), Normal (4 beds)
- Amenities: Hot water, bed boxes, cupboard, writing table & chair, internet, laundry
- Services: Self-reading room, 24/7 security, no smoking policy
- Support: Dedicated teacher team, student counseling

### Cafeteria (Verified Data)
- Hygienic and spacious facility with pure drinking water
- Variable daily menu with 2000+ calories per day
- Cuisines: Nepali (veg & non-veg), Continental, Indian, Chinese
- Color-coded crockery for vegetarian/non-vegetarian separation
- Supervised by dietician and school doctor

### Sports Facilities (Verified Data)
- In-house Futsal Ground (professional-grade)
- Sports: Football, Basketball, Cricket, Table Tennis
- Tournaments: Bridgewater Cup, SEE Futsal Tournament, Bridgewater Sports Meet

### Library (Verified Data)
- Comprehensive books, journals, and digital resources
- Support for all programs: +2 (Science, Management, Humanities, Law) and Bachelor (BCA, BBS)
- Focus on modern teaching methodologies and innovation

### Events & Activities (Verified Data)
- Bridgewater Fest (annual college festival)
- Results Distribution ceremonies
- Personality Development Program (PDP)
- Career Counselling
- Pre-Medical, Pre-Engineering, Pre-CMAT preparation classes

## Contact Section (Research-Based, Mobile-First Design)
- **Address**: Baburam Acharya Street, Sinamangal, Kathmandu, Nepal 44600
- **Landlines**: +977-1-4481590, +977-1-4480069, +977-1-4581590
- **Mobile Numbers**: +977 9807500491, +977 9609555948, +977 9802344649, +977 9802334186, +977 9851056032, +977 9803756714
- **Email**: info@bridgewater.com.np
- **Office Hours**: Sunday - Friday: 6:00 AM - 5:00 PM (Saturday Closed)
- **Websites**: bridgewater.com.np, bridgewater.edu.np
- **Social**: Facebook (BridgewaterInternationalCollege), YouTube channel
- **Features**: 
  - Mobile-first responsive design with 2x2 grid on mobile, 4-column on desktop
  - Interactive phone number expansion (show more button)
  - Google Maps embed with location
  - Contact form with mailto integration
  - FAQ section for quick answers
  - Call-to-action banner

## New Pages Created (December 2025)
All pages are linked in the footer:

### Quick Links Section
- `/about` - About Us (overview, stats, why choose BWIC)
- `/programs` - Programs overview (links to all academic programs)
- `/facilities` - Facilities overview (labs, library, sports, transport, security)

### Resources Section
- `/library` - Library page (services, hours, resources)
- `/careers` - Career Services (resume help, interview prep, job fairs)
- `/portal` - Student Portal (Coming Soon page with feature previews)
- `/alumni` - Alumni Network (success stories, benefits, registration)
- `/news` - News & Events (latest news, upcoming events, categories)
- `/gallery` - Photo Gallery (filterable gallery with lightbox)

### Legal Pages
- `/privacy` - Privacy Policy
- `/terms` - Terms of Service

## SEO Configuration (Production Domain: bridgewater.edu.np)

### Implemented SEO Features
- **Comprehensive Metadata**: Title templates, descriptions, keywords targeting "Bridgewater International College", "best college in Kathmandu", "+2 Science/Management", "BCA/BBS college Nepal"
- **Open Graph & Twitter Cards**: Social sharing optimization with college branding
- **robots.txt**: Configured for all major search engines (Google, Bing, Yahoo, DuckDuckGo, Baidu, Yandex) and social bots
- **sitemap.xml**: 35+ pages with priority-based crawling (daily for homepage/news, monthly for programs)
- **JSON-LD Structured Data**: 
  - EducationalOrganization schema with programs, accreditations, and facilities
  - WebSite schema with search action
  - LocalBusiness schema with opening hours and contact info
- **Page-Specific SEO**: About, Academics, Admissions, Contact, Campus Life pages have targeted metadata
- **PWA Manifest**: App-like experience on mobile devices
- **Geo Tags**: Location coordinates for local SEO (Sinamangal, Kathmandu)

### Before Going Live
1. Replace `add-your-google-search-console-verification-code` in `app/layout.tsx` with actual Google Search Console verification code
2. Submit sitemap.xml to Google Search Console: https://search.google.com/search-console
3. Create proper 1200x630 OG image at `public/og-image.png` (currently using logo as placeholder)

## JSON-Based Content Management
All dynamic content is managed via JSON files for easy updates without code changes:

```
json/
├── academics.json          # Academic programs (7 programs + stats)
├── homegallery.json        # Homepage gallery images
├── leadership.json         # Leadership team members
└── whatourstudentsay.json  # Student testimonials
```

### academics.json
- Contains all 7 academic programs with images, descriptions, icons, and categories
- Programs are categorized: plus2, bachelor, professional
- Stats section for academic statistics display
- Icon mapping: Beaker, TrendingUp, BookOpen, Scale, Monitor, Briefcase, Calculator

### Adding New Content
Simply add entries to the respective JSON files - the components auto-render unlimited entries.

## Recent Changes (December 2024)
- **NEW: Mobile-First Contact Section** redesigned for all devices
  - Responsive 2x2/4-column contact info cards
  - Interactive phone number expansion
  - Optimized form layout for touch devices
  - Google Maps integration
  - FAQ section and CTA banner
- **NEW: Comprehensive Campus Life Section** with 6 pages based on actual BWIC research
  - Main landing page with overview
  - Hostel & Boarding with verified room types and amenities
  - Cafeteria with verified menu and nutrition details
  - Sports & Futsal with in-house ground details and tournaments
  - Library with resources for all academic programs
  - Events & Activities with PDP, career programs, and cultural events
- Added custom error pages (404, Error, Global Error) with college branding
  - not-found.tsx: Custom 404 page with animations and navigation links
  - error.tsx: Runtime error handling with reset functionality
  - global-error.tsx: Root-level error handling with full page recovery
- Redesigned history page with comprehensive content based on research
- Added founding story section with philosophy quote
- Added vision & mission section
- Updated milestones timeline with colored icons
- Added Bridgewater Education Foundation network section
- Updated statistics section with accurate data
- Improved OurHistorySection component with better visuals
- Created comprehensive academic program pages with web-researched accurate data
- Updated all 7 program pages (+2 Science, Management, Humanities, Law, BCA, BBS, CA)
- Added accurate NEB/TU/ICAN affiliation details and admission requirements
- Created reusable ProgramPage component for consistent program presentation
