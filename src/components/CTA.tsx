import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

export const CTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative py-24 scroll-mt-12 bg-gradient-to-br from-[#134271] to-[#5B1F39] transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
      }`}
    >
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Talkvera - Revolutionize Your Customer Service</title>
        <meta name="description" content="Explore Talkvera's key features: AI-powered dashboards, real-time monitoring, prompt customization, knowledge base management, user feedback analytics, and insightful reporting." />
        <meta name="keywords" content="Talkvera features, AI chatbot features, customer service automation tools, knowledge base management, real-time analytics, reporting" />
        <meta property="og:title" content="Talkvera - AI Customer Service Features" />
        <meta property="og:description" content="Discover Talkvera's essential features that help businesses automate and optimize customer support with AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talkvera.com/features" />
      </Helmet>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full blur-xl animate-float"
            style={{
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-100 transform ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-95'
        }`}>
          {/* Heading with shimmer */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight relative">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-white to-green-300 animate-gradient-move">
              Customer Service?
            </span>
          </h2>
          
          <p className="text-xl text-white mb-12 leading-relaxed max-w-2xl mx-auto">
            Be among the first businesses to revolutionize customer experience with AI-powered automation.
          </p>

          {/* Benefits with stagger animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              '24/7 Instant Replies',
              'Human-like Conversations',
              'Reduce Support Costs'
            ].map((benefit, i) => (
              <div
                key={benefit}
                className={`flex items-center justify-center space-x-2 text-white transition-all duration-700 transform ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${i * 200 + 300}ms` }}
              >
                <CheckCircle className="h-5 w-5 text-green-400 animate-pulse" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons with pulse */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-300 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            {/* <button className="group bg-green-500 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center">
              Try Talkvera Free
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button> */}

            <button
              className="relative group px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 
                        transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-white"
            >
              <span
                className="absolute inset-0 rounded-xl p-[2px] 
                          bg-gradient-to-r from-[#45C54B] to-[#BCDD43]"
                style={{
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />
              <span className="relative z-10 flex items-center">
                Try Talkvera Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center">
              <Play className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              Book a Demo
            </button>
          </div>

          {/* Footer Info */}
          <div className={`mt-12 text-white text-sm transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}>
            <p>Built with enterprise-grade security & 99.9% uptime SLA</p>
          </div>
        </div>
      </div>

      {/* Extra animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s ease infinite;
        }
      `}</style>
    </section>
  );
};
