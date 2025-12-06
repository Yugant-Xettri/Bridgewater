"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, Bot, GripVertical, ExternalLink } from "lucide-react";
import Link from "next/link";

interface ActionButton {
  label: string;
  url: string;
  type: "primary" | "secondary";
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
  actions?: ActionButton[];
}

const quickQuestions = [
  "What programs do you offer?",
  "How can I apply for admission?",
  "Tell me about scholarships",
  "What are the fees?",
];

export default function AIChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: "Hi! I'm BWIC Assistant powered by AI. How can I help you today?", 
      isUser: false,
      actions: [
        { label: "Explore Programs", url: "/academics", type: "primary" },
        { label: "Apply Now", url: "/admissions/apply", type: "secondary" }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const tooltipTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isUser: true,
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const history = messages.filter(m => !m.isTyping).map(m => ({
        text: m.text,
        isUser: m.isUser
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageText,
          history: history
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const aiResponse: Message = {
          id: Date.now() + 1,
          text: data.response,
          isUser: false,
          actions: data.actions || []
        };
        setMessages(prev => [...prev, aiResponse]);
      } else {
        const errorResponse: Message = {
          id: Date.now() + 1,
          text: data.error || "Sorry, I couldn't process that. Please try again or call us at +977-1-4481590.",
          isUser: false,
          actions: [
            { label: "Contact Us", url: "/contact", type: "primary" }
          ]
        };
        setMessages(prev => [...prev, errorResponse]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorResponse: Message = {
        id: Date.now() + 1,
        text: "I'm having trouble connecting. Please try again or contact us directly at +977-1-4481590.",
        isUser: false,
        actions: [
          { label: "Contact Us", url: "/contact", type: "primary" }
        ]
      };
      setMessages(prev => [...prev, errorResponse]);
    }

    setIsTyping(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleButtonClick = () => {
    if (!isDragging) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-50" />
      
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.1}
        dragMomentum={false}
        onDragStart={() => {
          setIsDragging(true);
          setShowTooltip(false);
          if (tooltipTimeoutRef.current) {
            clearTimeout(tooltipTimeoutRef.current);
          }
        }}
        onDragEnd={() => {
          setTimeout(() => setIsDragging(false), 100);
          tooltipTimeoutRef.current = setTimeout(() => {
            setShowTooltip(true);
          }, 1500);
        }}
        className="fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing"
        whileDrag={{ scale: 1.1 }}
      >
        <motion.button
          onClick={handleButtonClick}
          aria-label={isOpen ? "Close AI chat assistant" : "Open AI chat assistant"}
          aria-expanded={isOpen}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#c9a227] via-[#d4af37] to-[#e8c547] shadow-lg shadow-[#c9a227]/30 flex items-center justify-center group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#c9a227] to-[#d4af37] animate-pulse opacity-50" />
          
          <div className="absolute -inset-1 rounded-full opacity-30">
            <div className="absolute inset-0 rounded-full border-2 border-[#c9a227] animate-ping" />
          </div>
          
          <div className="absolute -inset-2 rounded-full opacity-20">
            <div className="absolute inset-0 rounded-full border border-[#c9a227] animate-ping" style={{ animationDelay: "0.5s" }} />
          </div>

          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 sm:w-7 sm:h-7 text-white relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="bg-white/90 rounded px-1.5 py-0.5 shadow-sm">
              <GripVertical className="w-3 h-3 text-gray-500" />
            </div>
          </div>
        </motion.button>

        <AnimatePresence>
          {!isOpen && showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute bottom-full right-0 mb-2 whitespace-nowrap pointer-events-none"
            >
              <div className="bg-white rounded-lg shadow-lg px-3 py-2 text-sm text-gray-700 font-medium border border-gray-100">
                <span className="flex items-center gap-1.5">
                  <Bot className="w-4 h-4 text-[#c9a227]" />
                  Ask BWIC AI
                </span>
                <p className="text-[9px] text-gray-600 mt-0.5">Drag me anywhere!</p>
                <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-gray-100" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-[400px] max-h-[75vh] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden flex flex-col"
          >
            <div className="bg-gradient-to-r from-[#0a1628] to-[#162a3f] p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9a227] to-[#d4af37] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-sm">BWIC AI Assistant</h3>
                <p className="text-white/60 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Powered by Mistral AI
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat window"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[350px] bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[90%] ${message.isUser ? "" : "w-full"}`}>
                    <div
                      className={`rounded-2xl px-4 py-2.5 text-sm ${
                        message.isUser
                          ? "bg-[#c9a227] text-white rounded-br-md ml-auto w-fit"
                          : "bg-white text-gray-700 border border-gray-100 rounded-bl-md shadow-sm"
                      }`}
                    >
                      {!message.isUser && (
                        <div className="flex items-center gap-1.5 mb-1">
                          <Bot className="w-3.5 h-3.5 text-[#c9a227]" />
                          <span className="text-[10px] font-medium text-[#c9a227]">BWIC AI</span>
                        </div>
                      )}
                      <p className="whitespace-pre-wrap">{message.text}</p>
                    </div>
                    
                    {!message.isUser && message.actions && message.actions.length > 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap gap-2 mt-2"
                      >
                        {message.actions.map((action, idx) => (
                          <Link
                            key={idx}
                            href={action.url}
                            onClick={() => setIsOpen(false)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                              action.type === "primary"
                                ? "bg-[#c9a227] hover:bg-[#b8921f] text-white shadow-sm"
                                : "bg-white border border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10"
                            }`}
                          >
                            {action.label}
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-700 border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Bot className="w-3.5 h-3.5 text-[#c9a227]" />
                      <span className="text-[10px] font-medium text-[#c9a227]">BWIC AI is thinking...</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <motion.div
                        className="w-2 h-2 bg-[#c9a227] rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#c9a227] rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-[#c9a227] rounded-full"
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {messages.length === 1 && (
              <div className="px-4 pb-3 bg-gray-50">
                <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-xs bg-white border border-gray-200 hover:border-[#c9a227] hover:text-[#c9a227] text-gray-600 px-3 py-1.5 rounded-full transition-all"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about BWIC..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#c9a227] focus:ring-1 focus:ring-[#c9a227]/20 transition-all"
                  disabled={isTyping}
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!inputValue.trim() || isTyping}
                  aria-label="Send message"
                  className="w-10 h-10 bg-[#c9a227] hover:bg-[#b8922a] disabled:bg-gray-200 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
              <p className="text-[10px] text-gray-600 text-center mt-2">
                AI-powered by Mistral • Call +977-1-4481590 for support
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
