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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Auto-slide ke kanan
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  // Animasi scroll viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
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

  const handleNext = () => {
    setDirection('right');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    setDirection('left');
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className={`py-24 bg-white transform transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of businesses that trust Talkvera for their customer service needs
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className={`bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden border border-gray-200 transition-all duration-500 transform
              ${
                isTransitioning
                  ? direction === 'right'
                    ? 'opacity-0 -translate-x-8'
                    : 'opacity-0 translate-x-8'
                  : 'opacity-100 translate-x-0'
              }
            `}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-blue-200">
              <Quote className="h-12 w-12" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0 text-center sm:text-left">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {testimonials[currentIndex].company.charAt(0)}
                </div>
                <div className="sm:text-left text-center">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonials[currentIndex].company} • {testimonials[currentIndex].industry}
                  </div>
                </div>
              </div>
            </div>

            {/* Background Pattern */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20"></div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-600"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsTransitioning(false);
                    }, 400);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-gray-600 hover:text-blue-600"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
