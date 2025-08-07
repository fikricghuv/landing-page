import React, { useEffect, useState, useRef } from 'react';
import { Play, ArrowRight, Bot, User } from 'lucide-react';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import animationData from '../../assets/animation.json';

export const Hero: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);

  type Message = {
    sender: string;
    text: string;
    time: string;
    typing?: boolean;
  };

  const messages: Message[] = [
    { sender: 'customer', text: 'Hi! I need help with product insurance for my new laptop', time: '2:34 PM' },
    { sender: 'ai', text: "Hello! I'd be happy to help you with laptop insurance. Can you tell me the brand and model of your laptop?", time: '2:34 PM' },
    { sender: 'customer', text: "It's a MacBook Pro 16-inch, I bought it last week for $2,500", time: '2:35 PM' },
    { sender: 'ai', text: "Perfect! For a $2,500 MacBook Pro, I recommend our Premium Protection plan:\n• Accidental damage coverage\n• 24/7 repair service\n💲19.99/month", time: '2:35 PM' },
  ];

  // Animasi pesan
  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];
    messages.forEach((_, i) => {
      const timeout = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, i]);
      }, 1000 * (i + 1));
      timeouts.push(timeout);
    });
    return () => timeouts.forEach(clearTimeout);
  }, []);

  // Auto scroll chat
  useEffect(() => {
    if (visibleMessages.length > 0 && chatRef.current) {
      const scrollTimeout = setTimeout(() => {
        chatRef.current?.scrollTo({
          top: chatRef.current.scrollHeight,
          behavior: 'smooth',
        });
      }, 300);
      return () => clearTimeout(scrollTimeout);
    }
  }, [visibleMessages]);

  // Animasi section masuk & keluar viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen bg-gradient-to-br from-[#0d47a1] via-[#2196f3] to-[#1976d2] overflow-hidden transform transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'}
      `}
    >

      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Talkvera - AI-Powered Customer Service Platform</title>
        <meta
          name="description"
          content="Revolutionize your customer service with Talkvera AI chatbot. Handle customer queries efficiently with real-time monitoring and analytics."
        />
        <meta
          name="keywords"
          content="AI chatbot, customer service, automation, analytics, SaaS"
        />
        <meta property="og:title" content="Talkvera - AI-Powered Customer Service Platform" />
        <meta property="og:description" content="Automate your customer support with Talkvera AI chatbot platform. Get real-time analytics and boost customer experience." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talkvera.com" />
      </Helmet>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Revolutionize Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-300">
                  Customer Service
                </span>
                with Talkvera
              </h1>
              <p className="mt-6 text-xl text-blue-100 leading-relaxed">
                AI-powered chatbot platform to handle customer queries efficiently,
                with real-time monitoring and analytics that transform how you connect with customers.
              </p>

              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-[250px] h-[250px]"
              />

              <div className="mt-1 flex flex-col sm:flex-row gap-4">
                <button className="group bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center justify-center">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CHAT DEMO */}
          <div className="mt-16 lg:mt-0 lg:col-span-6 relative" style={{ top: '-1rem'}}>
            <div className="relative bg-white rounded-lg shadow-2xl overflow-visible max-w-sm mx-auto">
              {/* Header */}
              <div className="p-4 flex items-center bg-gradient-to-r from-[#0d47a1] via-[#2196f3] to-[#1976d2] rounded-t-lg">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Talkvera AI Assistant</div>
                  <div className="text-sm text-blue-100">Online</div>
                </div>
              </div>

              {/* Chat messages */}
              <div ref={chatRef} className="h-96 bg-white p-4 space-y-3 overflow-y-auto">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex items-end transition-opacity duration-700 ${
                      visibleMessages.includes(idx) ? 'opacity-100' : 'opacity-0'
                    } ${msg.sender === 'customer' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                        <Bot className="w-4 h-4 text-blue-500" />
                      </div>
                    )}
                    <div
                      className={`px-3 py-2 rounded-lg max-w-xs whitespace-pre-line shadow-sm text-sm leading-snug ${
                        msg.sender === 'customer' ? 'text-white' : 'text-gray-800'
                      }`}
                      style={{
                        backgroundColor: msg.sender === 'customer' ? '#3b82f6' : '#f1f5f9',
                        fontSize: '0.8rem',
                      }}
                    >
                      <p>{msg.text}</p>
                      <div
                        className={`text-[0.65rem] mt-1 block ${
                          msg.sender === 'customer' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.time}
                      </div>
                    </div>
                    {msg.sender === 'customer' && (
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center ml-2 flex-shrink-0">
                        <User className="w-4 h-4 text-blue-500" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="bg-white border-t p-3 flex items-center space-x-3 rounded-b-lg">
                <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                  <div className="text-gray-500 text-sm">Type a message...</div>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#e3f2fd] rounded-lg shadow-lg p-3 animate-bounce">
              <div className="text-sm font-semibold text-green-600">94% Resolution Rate</div>
            </div>
            <div className="absolute -bottom-10 -left-4 bg-[#e3f2fd] rounded-lg shadow-lg p-3 animate-bounce">
              <div className="text-sm font-semibold text-blue-600">1.2s Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
