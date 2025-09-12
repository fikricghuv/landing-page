import React, { useEffect, useRef, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Talkvera?",
    answer: "Talkvera is an AI-powered customer service platform that automates, speeds up, and personalizes support to improve customer experience and reduce operational costs.",
  },
  {
    question: "How does the AI assistant work?",
    answer: "Our AI assistant uses machine learning models and natural language processing to understand customer queries, provide accurate responses, and escalate to human agents when needed.",
  },
  {
    question: "Is my data safe with Talkvera?",
    answer: "Yes. We implement industry best practices for data security, including encryption at rest and in transit, strict access controls, and regular security audits. We also respect user privacy and adhere to relevant regulations.",
  },
  {
    question: "Can I customize the chatbot to match my brand?",
    answer: "Absolutely. Talkvera allows customization of tone, appearance, and conversational flows so that the chatbot aligns with your branding and customer service style.",
  },
  {
    question: "What kind of analytics do you provide?",
    answer: "We provide real-time dashboards, detailed reports on response times, resolution rates, customer satisfaction, and insights to help you make data-driven decisions.",
  },
  {
    question: "How do I get started?",
    answer: "You can start by signing up for a free trial or scheduling a demo. Our team will guide you through onboarding, setup, and integration so you can go live quickly.",
  },
];

export const FAQPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.1 }
    );
    if (pageRef.current) observer.observe(pageRef.current);
    return () => {
      if (pageRef.current) observer.unobserve(pageRef.current);
    };
  }, []);

  return (
    <section
      ref={pageRef}
      className={`relative py-24 px-6 lg:px-12 bg-gradient-to-br from-[#134271] to-[#5B1F39] text-white transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold sm:text-5xl text-center mb-8">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              {faq.question}
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed whitespace-pre-line">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
