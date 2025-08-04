import React, { useEffect, useRef, useState } from 'react';
import { BarChart3, TrendingUp, MessageSquare, Clock, Users, CheckCircle } from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const dashboardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (dashboardRef.current) {
      observer.observe(dashboardRef.current);
    }

    return () => {
      if (dashboardRef.current) observer.unobserve(dashboardRef.current);
    };
  }, []);

  return (
    <section id="dashboard-preview" className="bg-white py-24 pt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: 0 }}>
        <div
          className={`text-center mb-16 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Dashboard at Your Fingertips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visualize handled queries, response times, top FAQs, and chat analytics in real-time
          </p>
        </div>

        <div
          ref={dashboardRef}
          className={`relative transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'
          }`}
        >
          {/* Main Dashboard Container */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h3>
                <p className="text-gray-500">Real-time customer service insights</p>
              </div>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: MessageSquare, value: '2,847', label: 'Total Conversations', color: 'text-blue-500' },
                { icon: CheckCircle, value: '97.2%', label: 'Resolution Rate', color: 'text-green-500' },
                { icon: Clock, value: '0.8s', label: 'Avg Response Time', color: 'text-purple-500' },
                { icon: Users, value: '1,234', label: 'Active Users', color: 'text-yellow-500' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 transform transition-all duration-300 hover:scale-105 border border-gray-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Chart Area */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Chart 1 */}
              <div
                className={`bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Response Time Trends</h4>
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Mon', value: 85, color: 'bg-blue-500' },
                    { label: 'Tue', value: 92, color: 'bg-green-500' },
                    { label: 'Wed', value: 78, color: 'bg-yellow-500' },
                    { label: 'Thu', value: 96, color: 'bg-green-500' },
                    { label: 'Fri', value: 88, color: 'bg-blue-500' },
                  ].map((bar, index) => (
                    <div key={bar.label} className="flex items-center space-x-4">
                      <div className="w-8 text-gray-500 text-sm">{bar.label}</div>
                      <div className="flex-1 bg-gray-100 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full ${bar.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: `${bar.value}%`,
                            animationDelay: `${index * 200}ms`
                          }}
                        ></div>
                      </div>
                      <div className="w-12 text-gray-500 text-sm text-right">{bar.value}%</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Preview */}
              <div
                className={`bg-white rounded-xl p-6 border border-gray-200 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Live Chat Preview</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 text-sm">Live</span>
                  </div>
                </div>
                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {[
                    { type: 'ai', message: 'Hello! How can I help you today?' },
                    { type: 'user', message: 'What are your business hours?' },
                    { type: 'ai', message: 'We\'re open Monday-Friday 9AM-6PM EST. Is there anything specific you\'d like to know about our services?' },
                    { type: 'user', message: 'Do you offer enterprise plans?' },
                  ].map((chat, index) => (
                    <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs px-4 py-2 rounded-lg ${chat.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                        }`}>
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
