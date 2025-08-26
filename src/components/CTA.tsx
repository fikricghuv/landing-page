import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

// 👉 Import lottie animation JSON
import supportAnimation from '../../public/assets/ConnectWithUs.json';
import replyAnimation from '../../public/assets/ManAndRobot.json';
import costAnimation from '../../public/assets/Money.json';
import integrationAnimation from '../../public/assets/Integration.json';

export const CTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const benefits = [
  { 
    text: "24/7 Always-On Support", 
    animation: supportAnimation, 
    size: { w: 200, h: 200 } 
  },

  { 
    text: "Seamless Integrations", 
    animation: integrationAnimation, 
    size: { w: 180, h: 200 } 
  },
  { 
    text: "Reduce Support Costs", 
    animation: costAnimation, 
    size: { w: 190, h: 200 } 
  },
  { 
    text: "Instant Replies", 
    animation: replyAnimation, 
    size: { w: 220, h: 200 } 
  },
];


  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative py-24 scroll-mt-12 bg-gradient-to-br from-[#134271] to-[#5B1F39] transition-all duration-1000 transform ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
    >
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Talkvera - Revolutionize Your Customer Service</title>
        <meta
          name="description"
          content="Explore Talkvera's key features: AI-powered dashboards, real-time monitoring, prompt customization, knowledge base management, user feedback analytics, and insightful reporting."
        />
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
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 delay-100 transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-95"
          }`}
        >
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight relative">
            Ready to Transform Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#367DBB] to-[#4BDBBC] animate-gradient-move">
              Customer Service?
            </span>
          </h2>

          <p className="text-xl text-white mb-12 leading-relaxed max-w-2xl mx-auto">
            Be among the first businesses to revolutionize customer experience
            with AI-powered automation.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 mb-12">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.text}
                className="flex flex-col items-center text-white p-6 "
                
              >
                <Lottie
                  animationData={benefit.animation}
                  loop
                  autoplay
                  className={`mb-4 drop-shadow-lg`}
                  style={{
                    width: `${benefit.size.w}px`,
                    height: `${benefit.size.h}px`,
                  }}
                />

                <span className="text-lg font-semibold text-center">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-300 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            <Link
              to="/get-started"
              className="group relative px-10 py-5 rounded-2xl text-xl font-semibold flex items-center justify-center
                        text-white transition-all duration-300 border border-transparent
                        bg-gradient-to-br from-[#367DBB] to-[#4BDBBC] 
                        hover:from-[#2d6aa0] hover:to-[#3cb19a] shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Try Talkvera Free
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Footer */}
          <div
            className={`mt-12 text-white text-sm transition-all duration-1000 delay-400 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
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
