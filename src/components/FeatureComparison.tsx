import React, { useEffect, useRef, useState } from "react";
import {
  DollarSign, Zap, Clock, BarChart3,
  Link, Users, Smile, Check, X, Minus
} from "lucide-react";

const features = [
  { icon: DollarSign, title: "Cut Operational Costs" },
  { icon: Zap, title: "Lightning-Fast Replies" },
  { icon: Clock, title: "Always-On Support" },
  { icon: BarChart3, title: "Actionable Analytics" },
  { icon: Link, title: "Seamless Integration" },
  { icon: Users, title: "Scale Without Limits" },
  { icon: Smile, title: "Human-Like Conversations" },
];

const comparisonData = {
  talkvera: ["✔","✔","✔","✔","✔","✔","✔"],
  others:   ["✔","✔","✔","✘","✘","✔","✘"],
  manual:   ["✘","✘","✘","✔","✘","✘","✔"]
};

export const ComparisonSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const renderIcon = (val: string) => {
    if (val === "✔") return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (val === "✘") return <X className="w-5 h-5 text-red-500 mx-auto" />;
    return <Minus className="w-5 h-5 text-gray-400 mx-auto" />;
  };

  return (
    <section
      id="why-choose-talkvera"
      className="relative min-h-screen py-16 flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl w-full mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Why Choose Talkvera?</h2>
          <p className="text-lg text-gray-600">
            See how Talkvera outperforms traditional chatbots and manual support.
          </p>
        </div>

        {/* Wrapper dengan border section */}
        <div
          ref={sectionRef}
          className={`w-full overflow-x-auto border border-gray-200 rounded-2xl shadow-lg bg-white transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <table className="w-full border-collapse rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Features</th>
                <th className="py-4 px-6 text-center bg-gradient-to-r from-[#134271] to-[#5B1F39] text-white font-bold">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                    <span className="text-xl">Talkvera</span>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                      Best Value
                    </span>
                  </div>
                </th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700 bg-gray-100 border-r border-gray-200">
                  Other Chatbots
                </th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700 bg-gray-100">
                  Manual (Admin)
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 flex items-center gap-3 text-gray-800 font-medium">
                    <feat.icon className="w-5 h-5 text-blue-600" />
                    {feat.title}
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">
                    {renderIcon(comparisonData.talkvera[i])}
                  </td>
                  <td className="py-4 px-6 text-center border-r border-gray-200">
                    {renderIcon(comparisonData.others[i])}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {renderIcon(comparisonData.manual[i] || "✘")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Reinforcement microcopy */}
          <div className="p-6 text-center text-gray-600 text-sm md:text-base">
            With <span className="font-semibold text-blue-600">Talkvera</span>, you get the
            speed of automation, the depth of analytics, and the human-like touch that
            traditional chatbots and manual support can’t match.
          </div>
        </div>
      </div>
    </section>
  );
};
