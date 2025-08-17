import React, { useEffect, useRef, useState } from 'react';
import {
  BarChart3,
  Activity,
  Edit3,
  Database,
  MessageCircle,
  WrapText
} from 'lucide-react';
import { Helmet } from 'react-helmet';

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Overview",
    description: "Get instant visibility into your chatbot’s performance—track response time, top questions, and overall effectiveness."
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description: "Stay in control by watching live conversations and system usage as they happen."
  },
  {
    icon: Edit3,
    title: "Prompt Editor",
    description: "Shape your chatbot’s personality—tone, style, and expertise—so it speaks in your brand’s voice."
  },
  {
    icon: Database,
    title: "Knowledge Base Management",
    description: "Empower your chatbot with the right knowledge by easily uploading and organizing company resources."
  },
  {
    icon: MessageCircle,
    title: "User Feedback & Analytics",
    description: "Measure user satisfaction, understand their needs, and uncover opportunities to improve engagement."
  },
  {
    icon: WrapText,
    title: "Reporting & Insights",
    description: "Turn chatbot interaction data into actionable insights that boost performance and user experience."
  }
];

export const Features: React.FC = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          } else {
            // Jika keluar viewport, hilangkan dari visibleCards
            setVisibleCards((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      cardRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-gray-50" style={{ backgroundColor: '#e3f2fd' }}>
      {/* ✅ SEO Helmet */}
      <Helmet>
        <title>Talkvera - Revolutionize Your Customer Service</title>
        <meta
          name="description"
          content="Explore Talkvera's key features: AI-powered dashboards, real-time monitoring, prompt customization, knowledge base management, user feedback analytics, and insightful reporting."
        />
        <meta
          name="keywords"
          content="Talkvera features, AI chatbot features, customer service automation tools, knowledge base management, real-time analytics, reporting"
        />
        <meta property="og:title" content="Talkvera - AI Customer Service Features" />
        <meta property="og:description" content="Discover Talkvera's essential features that help businesses automate and optimize customer support with AI technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://talkvera.com/features" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to deliver exceptional customer service with AI-powered automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className={`
                group bg-white rounded-2xl p-8 shadow-lg
                ${visibleCards.includes(index)
                              ? 'opacity-100 translate-y-0 transition-[opacity,transform] duration-700 ease-out'
                              : 'opacity-0 translate-y-10 transition-[opacity,transform] duration-700 ease-out'
                            }
                hover:shadow-2xl hover:-translate-y-2
              `}
              style={{ transitionDelay: visibleCards.includes(index) ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#0d47a1] via-[#2196f3] to-[#1976d2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#0d47a1] via-[#2196f3] to-[#1976d2] transition-all duration-300 rounded-full"></div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};
