import React, { useEffect, useRef, useState } from 'react';
import { Database, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";

const steps = [
  {
    icon: Database,
    title: "Centralize Your Knowledge",
    description: "Seamlessly connect FAQs, docs, and resources so your chatbot always has the right answers."
  },
  {
    icon: Settings,
    title: "Personalize Your AI Agent",
    description: "Define your AI’s tone, style, and behavior to reflect your brand’s authentic voice and personality."
  },
  {
    icon: TrendingUp,
    title: "Optimize & Grow",
    description: "Track conversations, measure performance, and continuously improve your customer experience."
  }
];

export const HowItWorks: React.FC = () => {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          } else {
            // Hilangkan jika keluar viewport
            setVisibleSteps((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      stepRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="relative lg:h-screen min-h-[800px] py-24 bg-white relative overflow-hidden">
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>How Talkvera Works - Launch Your AI Chatbot in 3 Steps</title>
        <meta
          name="description"
          content="See how easy it is to launch Talkvera: connect your data, customize your AI chatbot, and start improving customer experience—all in minutes."
        />
        <meta
          name="keywords"
          content="how Talkvera works, AI chatbot setup, customer service automation, connect knowledge base, chatbot customization, chatbot analytics"
        />
        <meta property="og:title" content="Talkvera - AI Customer Service Features" />
        <meta property="og:description" content="Discover Talkvera's essential features that help businesses automate and optimize customer support with AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talkvera.com/howitworks" />
      </Helmet>
      {/* Decorative Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From setup to results—in just three steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#134271] to-[#5B1F39] transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={step.title} ref={(el) => (stepRefs.current[index] = el)} data-index={index} className={`relative group transition-all duration-700 transform ${visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-gray-200 hover:border-blue-200 border border-gray-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#134271] to-[#5B1F39] text-white rounded-full text-xl font-bold mb-6 shadow-lg">{index + 1}</div>
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-100">
                    <step.icon className="h-10 w-10 text-[#134271] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#5B1F39] transition-colors duration-300">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8">
                    <ArrowRight className="h-6 w-6 text-gray-400 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link
            to="/free-trial"
            className="bg-gradient-to-r from-[#134271] to-[#5B1F39] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-lg
                      transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Start Your Free Trial
          </Link>

        </div>

      </div>

    </section>
  );
};