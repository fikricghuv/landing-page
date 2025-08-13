import React, { useEffect, useRef, useState } from "react";
import {
  DollarSign, Zap, Clock, BarChart3,
  Link, Users, Smile, Check, X, Minus
} from "lucide-react";

const features = [
  { icon: DollarSign, title: "Reducing Cost" },
  { icon: Zap, title: "Fast Response" },
  { icon: Clock, title: "Ready 24 Hours" },
  { icon: BarChart3, title: "Data Analytic" },
  { icon: Link, title: "Easy Integration" },
  { icon: Users, title: "Handling Many Customers" },
  { icon: Smile, title: "Personal Touch" },
];

const comparisonData = {
  talkvera: ["✔","✔","✔","✔","✔","✔","✔"],
  others:   ["✔","✔","✔","✘","✘","✔","✘"],
  manual:   ["✘","✘","✘","✔","✘","✘","✘"]
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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Feature Comparison</h2>
          <p className="text-lg text-gray-600">
            See how Talkvera stacks up against other chatbots and manual service
          </p>
        </div>

        {/* Wrapper dengan border section */}
        <div
          ref={sectionRef}
          className={`overflow-x-auto border border-gray-200 rounded-2xl shadow-lg bg-white transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <table className="w-full border-collapse rounded-2xl overflow-hidden">
            <thead>
              <tr>
                <th className="text-left py-4 px-6 font-semibold text-gray-700">Features</th>
                <th className="py-4 px-6 text-center bg-gradient-to-br from-[#0d47a1] via-[#2196f3] to-[#1976d2] text-white font-bold">
                  Talkvera
                </th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700 bg-gray-100 border-r border-gray-200">Other Chatbots</th>
                <th className="py-4 px-6 text-center font-semibold text-gray-700 bg-gray-100">Manual (Admin)</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 flex items-center gap-3 text-gray-800 font-medium">
                    <feat.icon className="w-5 h-5 text-blue-600" />
                    {feat.title}
                  </td>
                  <td className="py-4 px-6 text-center bg-blue-50">{renderIcon(comparisonData.talkvera[i])}</td>
                  <td className="py-4 px-6 text-center border-r border-gray-200">{renderIcon(comparisonData.others[i])}</td>
                  <td className="py-4 px-6 text-center ">{renderIcon(comparisonData.manual[i] || "✘")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
