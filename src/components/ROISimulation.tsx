import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

export const ROISimulation: React.FC = () => {
    const [ticketVolume, setTicketVolume] = useState<number>(5000);
    const [teamSize, setTeamSize] = useState<number>(8);
    const [resolutionTime, setResolutionTime] = useState<number>(15);
    const [salary, setSalary] = useState<number>(45000);
    const [isVisible, setIsVisible] = useState(false);

    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // Formula kalkulasi (contoh asumsi)
    const costPerAgent = salary;
    const currentCost = teamSize * costPerAgent;
    const automationRate = 0.7; // 70% otomatisasi
    const savings = currentCost * automationRate;
    const newResolutionTime = resolutionTime * 0.5; // 50% lebih cepat
    const paybackPeriod = (currentCost * 0.3) / (savings / 12); // bulan

    return (
        <section
            id="calculate-roi"
            ref={sectionRef}
            className={`py-24 bg-gray-50 scroll-mt-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            style={{ backgroundColor: '#e3f2fd' }}
        >
            {/* ✅ SEO Helmet */}
            <Helmet>
                <title>Talkvera - Key Features for AI Customer Service Automation</title>
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
            {/* Decorative Background */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Calculate Your ROI
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        See how much you could save with <span className="font-semibold text-primary">Talkvera</span>'s AI automation.
                    </p>
                </div>

                {/* Card */}
                <div
                    className={`bg-white shadow-lg rounded-2xl p-8 lg:p-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                        }`}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className={`transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                            }`}>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Current Situation</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Monthly Ticket Volume
                                    </label>
                                    <input
                                        type="number"
                                        className="input-field w-full border rounded-lg p-3 focus:ring focus:ring-primary/30"
                                        placeholder="e.g., 5000"
                                        value={ticketVolume}
                                        onChange={(e) => setTicketVolume(Number(e.target.value))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Support Team Size
                                    </label>
                                    <input
                                        type="number"
                                        className="input-field w-full border rounded-lg p-3 focus:ring focus:ring-primary/30"
                                        placeholder="e.g., 8"
                                        value={teamSize}
                                        onChange={(e) => setTeamSize(Number(e.target.value))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Average Resolution Time (minutes)
                                    </label>
                                    <input
                                        type="number"
                                        className="input-field w-full border rounded-lg p-3 focus:ring focus:ring-primary/30"
                                        placeholder="e.g., 15"
                                        value={resolutionTime}
                                        onChange={(e) => setResolutionTime(Number(e.target.value))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Average Agent Salary ($/year)
                                    </label>
                                    <input
                                        type="number"
                                        className="input-field w-full border rounded-lg p-3 focus:ring focus:ring-primary/30"
                                        placeholder="e.g., 45000"
                                        value={salary}
                                        onChange={(e) => setSalary(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Projected Savings</h3>
                            <div className="space-y-6">
                                <div className="bg-green-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        ${savings.toLocaleString()}
                                    </div>
                                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">
                                        {(automationRate * 100).toFixed(0)}%
                                    </div>
                                    <div className="text-sm text-gray-600">Ticket Volume Reduction</div>
                                </div>
                                <div className="bg-yellow-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                                        {newResolutionTime.toFixed(1)} mins
                                    </div>
                                    <div className="text-sm text-gray-600">New Avg Resolution Time</div>
                                </div>
                                <div className="bg-purple-50 p-6 rounded-lg shadow-sm hover:shadow-md transition">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">
                                        {paybackPeriod.toFixed(1)} months
                                    </div>
                                    <div className="text-sm text-gray-600">Payback Period</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
