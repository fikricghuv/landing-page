import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';

export const ROISimulation: React.FC = () => {
    const [ticketVolume, setTicketVolume] = useState<number>(1500); 
    const [teamSize, setTeamSize] = useState<number>(7); 
    const [resolutionTime, setResolutionTime] = useState<number>(10); 
    const [salary, setSalary] = useState<number>(60000000); 
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    // ===================== Formula kalkulasi =====================

    // 1) Biaya tim (per bulan)
    const costPerAgentPerMonth = salary / 12; 
    const currentCost = teamSize * costPerAgentPerMonth; 

    // 2) Asumsi proporsi tiket yang bisa dihandle AI
    const automationRate = 0.80; 
    const ticketsAutomated = ticketVolume * automationRate;

    // 3) Estimasi token & biaya token
    //    - avgTokensPerTicket: rata-rata token per tiket (contoh: 10.000 token)
    //    - tokenPricePer1K: harga per 1.000 token (DALAM RUPIAH). Isi sesuai kontrak/harga aktual.
    const avgTokensPerTicket = 10000;          // tokens / tiket
    const tokenPricePer1K = 0;                 // Rp per 1.000 token (ISI sesuai harga)
    const monthlyTokens = ticketsAutomated * avgTokensPerTicket;
    const monthlyTokenCost = (monthlyTokens / 1000) * tokenPricePer1K;

    // 4) Biaya maintenance bulanan & biaya implementasi awal (sekali bayar)
    const monthlyMaintenance = 0;              // Rp / bulan (ISI bila ada)
    const implementationCost = 50_000_000;     // Rp (sekali bayar)

    // 5) Penghematan kotor dari sisi gaji agent (per bulan)
    const grossMonthlySavings = currentCost * automationRate;

    // 6) Penghematan bersih setelah biaya AI (per bulan)
    const netMonthlySavings = Math.max(
    0,
    grossMonthlySavings - monthlyTokenCost - monthlyMaintenance
    );

    // 7) Waktu resolusi baru (AI 1 menit, manusia = input; minimal 1 menit)
    const AI_RESOLUTION_MIN = 1;
    const humanResolution = Math.max(resolutionTime, AI_RESOLUTION_MIN);
    const newResolutionTime =
    automationRate * AI_RESOLUTION_MIN + (1 - automationRate) * humanResolution;

    // 8) Payback period (bulan) = biaya implementasi / penghematan bersih bulanan
    //    Jika netMonthlySavings <= 0, set 0 agar tidak error saat animasi .toFixed()
    const paybackPeriod = netMonthlySavings > 0 ? implementationCost / netMonthlySavings : 0;

    // =================== END Formula kalkulasi ====================


    const [animatedValues, setAnimatedValues] = useState({
        savings: 0,
        reduction: 0,
        newTime: 0,
        payback: 0
    });

    useEffect(() => {
        if (isVisible) {
            const duration = 1200; // ms
            const startTime = performance.now();

            const animate = (now: number) => {
                const progress = Math.min((now - startTime) / duration, 1);

                setAnimatedValues({
                    savings: Math.floor(progress * netMonthlySavings),
                    reduction: Math.floor(progress * (automationRate * 100)),
                    newTime: parseFloat((progress * newResolutionTime).toFixed(1)),
                    payback: parseFloat((progress * paybackPeriod).toFixed(1))
                });

                if (progress < 1) requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        }
    }, [isVisible, netMonthlySavings, automationRate, newResolutionTime, paybackPeriod]);

    return (
        <section
            id="calculate-roi"
            ref={sectionRef}
            className={`relative min-h-[800px] lg:min-h-screen py-24 flex flex-col justify-center bg-gradient-to-br from-[#ebf5ffff] to-[#f9e6e6ff] scroll-mt-12 transition-all duration-1000 transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
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

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
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
                    className={`bg-white shadow-lg rounded-2xl p-8 lg:p-6 transition-all duration-1000 transform ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                >
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Inputs */}
                        <div className={`transition-all duration-1000 delay-100 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                        }`}>
                            
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Current Situation</h3>
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Monthly Ticket Volume
                                    </label>
                                    <input
                                        type="number"
                                        className="input-field w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        placeholder="e.g., 1500"
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
                                        className="input-field w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        placeholder="e.g., 7"
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
                                        className="input-field w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        placeholder="e.g., 10"
                                        value={resolutionTime}
                                        onChange={(e) => setResolutionTime(Number(e.target.value))}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Average Agent Salary (Rp/year)
                                    </label>
                                    <input
                                        type="number"
                                        className="input-field w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        placeholder="e.g., 60.000.000"
                                        value={salary}
                                        onChange={(e) => setSalary(Number(e.target.value))}
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        {new Intl.NumberFormat("id-ID").format(salary)} / tahun
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right: Results */}
                        <div className={`transition-all duration-1000 delay-200 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                            }`}>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Projected Savings</h3>
                            <div className="space-y-6">

                                <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                    <div className="text-2xl font-bold text-blue-600 mb-2">
                                        {new Intl.NumberFormat("id-ID", {
                                        style: "currency",
                                        currency: "IDR",
                                        maximumFractionDigits: 0, 
                                        }).format(animatedValues.savings)}
                                    </div>
                                    <div className="text-sm text-gray-600">Annual Cost Savings</div>
                                </div>

                                <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                    <div className="text-2xl font-bold text-blue-600 mb-2">
                                        {animatedValues.newTime.toFixed(1)} mins
                                    </div>
                                    <div className="text-sm text-gray-600">New Avg Resolution Time</div>
                                </div>

                                <div className="bg-blue-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                    <div className="text-2xl font-bold text-blue-600 mb-2">
                                        {animatedValues.payback.toFixed(1)} months
                                    </div>
                                    <div className="text-sm text-gray-600">Payback Period</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <p className="mt-8 text-xs text-gray-500">
                        *Disclaimer: The figures above are average estimates based on industry benchmarks (Gartner, Zendesk, Freshdesk).
                        Actual results may vary depending on location, business scale, and support complexity.
                    </p>
                </div>
            </div>
        </section>
    );
};
