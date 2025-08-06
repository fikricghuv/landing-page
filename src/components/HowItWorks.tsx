import React, { useEffect, useRef, useState } from 'react';
import { Database, Settings, TrendingUp, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const steps = [
  {
    icon: Database,
    title: "Connect your data and knowledge base",
    description: "Seamlessly integrate your existing documentation, FAQs, and others"
  },
  {
    icon: Settings,
    title: "Customize your AI agent with prompts and settings",
    description: "Fine-tune your AI's personality, responses, and behavior to match your brand"
  },
  {
    icon: TrendingUp,
    title: "Monitor, analyze, and improve your customer interactions",
    description: "Track performance metrics and optimize your customer service"
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
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden">
      <Helmet>
        <title>Talkvera - Revolutionize Your Customer Service</title>
        <meta name="description" content="Explore Talkvera's key features: AI-powered dashboards, real-time monitoring, prompt customization, knowledge base management, user feedback analytics, and insightful reporting." />
      </Helmet>

      {/* Decorative Floating Background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with <span className="font-semibold text-blue-600">Talkvera</span> in three simple steps
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0d47a1] via-[#2196f3] to-[#1976d2] animate-[gradientMove_4s_linear_infinite] transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                ref={(el) => (stepRefs.current[index] = el)}
                data-index={index}
                className={`relative group transition-all duration-1000 transform 
                  ${visibleSteps.includes(index)
                    ? index % 2 === 0
                      ? 'opacity-100 translate-x-0 scale-100 blur-0'
                      : 'opacity-100 -translate-x-0 scale-100 blur-0'
                    : index % 2 === 0
                      ? 'opacity-0 -translate-x-10 scale-95 blur-sm'
                      : 'opacity-0 translate-x-10 scale-95 blur-sm'
                  }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(33,150,243,0.4)] transition-all duration-300 transform hover:-translate-y-2 border-gray-200 hover:border-blue-200 border border-gray-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#0d47a1] via-[#2196f3] to-[#1976d2] text-white rounded-full text-xl font-bold mb-6 shadow-lg">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-blue-100">
                    <step.icon className="h-10 w-10 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
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

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#0d47a1] via-[#2196f3] to-[#1976d2] text-white px-10 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
};
