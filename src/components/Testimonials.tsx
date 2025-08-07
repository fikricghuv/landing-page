import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Talkvera transformed our customer support efficiency by 60% in just 3 months!",
    author: "CEO, InsurePlus",
    rating: 5,
    company: "InsurePlus",
    industry: "Insurance"
  },
  {
    quote: "The real-time monitoring and AI analytics are a game changer for our support team.",
    author: "Head of Customer Experience, SafeLife Insurance",
    rating: 5,
    company: "SafeLife Insurance",
    industry: "Insurance"
  },
  {
    quote: "We love the multi-tenant feature – managing clients has never been easier.",
    author: "Founder, ServiceHub",
    rating: 5,
    company: "ServiceHub",
    industry: "Technology"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('animate-fade-in-right');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationClass('animate-fade-out-left');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setAnimationClass('animate-fade-in-right');
      }, 300); // Waktu transisi fade-out
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleNavigation = (direction: 'prev' | 'next' | number) => {
    setAnimationClass(direction === 'prev' ? 'animate-fade-out-right' : 'animate-fade-out-left');
    
    setTimeout(() => {
      if (direction === 'prev') {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setAnimationClass('animate-fade-in-left');
      } else if (direction === 'next') {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        setAnimationClass('animate-fade-in-right');
      } else {
        setCurrentIndex(direction);
        // Animate based on the direction of change
        if (direction > currentIndex) {
          setAnimationClass('animate-fade-in-right');
        } else {
          setAnimationClass('animate-fade-in-left');
        }
      }
    }, 300); // Waktu transisi fade-out
  };
  
  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`py-24 bg-gradient-to-b from-white to-slate-50 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses that trust Talkvera for their customer service needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Card */}
          <div
            key={currentIndex}
            className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200 relative overflow-hidden ${animationClass}`}
          >
            <div className="absolute top-4 left-4 text-blue-100">
              <Quote className="w-10 h-10" />
            </div>

            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].company.charAt(0)}
                </div>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-gray-800">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentIndex].company} • {testimonials[currentIndex].industry}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20"></div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button
              onClick={() => handleNavigation('prev')}
              className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110 text-gray-500 hover:text-blue-600"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300 w-2.5 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleNavigation('next')}
              className="p-3 bg-white border border-gray-200 rounded-full shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-110 text-gray-500 hover:text-blue-600"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};