import React, { useEffect, useRef, useState } from "react";

export const AboutUs: React.FC = () => {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animasi masuk viewport
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
      <div className="max-w-5xl mx-auto space-y-16">
        {/* WHO WE ARE */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            Talkvera is an intelligent AI platform dedicated to revolutionizing how companies engage with their customers through automated, fast, and personalized customer service.
            We were founded with a vision that exceptional customer experience is not a luxury — it is an essential need in today’s digital era.
          </p>
        </div>

        {/* OUR VISION */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">OUR VISION</h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            To become Asia’s most trusted AI customer service hub, strengthening company–customer relationships through technology, empathy, and real-world data.
          </p>
        </div>

        {/* OUR MISSION */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">OUR MISSION</h2>
          <ul className="list-disc list-inside text-lg text-blue-100 space-y-2">
            <li>
              Delivering AI chat solutions that are responsive, accessible, and adaptive to user needs.
            </li>
            <li>
              Providing real-time insights and analytics to help businesses make proactive decisions.
            </li>
            <li>
              Driving continuous innovation in chatbot technology and digital interaction.
            </li>
            <li>
              Ensuring security, privacy, and a human-centered customer experience.
            </li>
          </ul>
        </div>

        {/* OUR VALUES */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">OUR VALUES</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Empathy",
                desc: "Understanding the needs and emotions behind every customer message.",
              },
              {
                title: "Transparency",
                desc: "Offering clarity on how AI works and how data is used.",
              },
              {
                title: "Innovation",
                desc: "Continuously exploring new ideas to make our solutions smarter and more effective.",
              },
              {
                title: "Reliability",
                desc: "Delivering consistent performance — an AI you can depend on anytime.",
              },
              {
                title: "User-centric",
                desc: "Designing every interaction with simplicity and delightful user experience in mind.",
              },
              {
                title: "Collaboration",
                desc: "Working hand in hand with businesses to co-create solutions that truly add value.",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY IT MATTERS */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">WHY IT MATTERS</h2>
          <p className="text-lg text-blue-100 leading-relaxed">
            In a world where customers expect answers instantly, Talkvera bridges the gap between high expectations and the reality of slow or confusing customer service.
            With intelligent AI, we reduce waiting time, minimize errors, and deliver consistent service — empowering businesses to focus on building relationships, not just handling complaints.      
          </p>
        </div>
      </div>
    </section>
  );
};
