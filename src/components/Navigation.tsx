import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fungsi untuk scroll halus tanpa mengubah URL
  const handleScrollTo = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = ['Why Choose Talkvera', 'Features', 'How It Works', 'Calculate ROI', 'Contact'];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer transition-transform duration-300 hover:scale-110"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src={isScrolled ? '../../assets/logo/logo-talkvera-color.svg' : '../../assets/logo/logo-talkvera-white.svg'}
              alt="Talkvera Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-5 mr-5 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                  className={`px-3 py-2 text-base font-medium transition-colors duration-300
                    ${isScrolled ? 'text-gray-900 hover:underline' : 'text-white hover:underline'}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/get-started"
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform
                ${isScrolled
                  ? 'border border-black text-black hover:bg-black hover:text-white'
                  : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-transform duration-300 hover:scale-110 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                className="block w-full text-left px-3 py-2 text-gray-700 transition-transform duration-300 hover:scale-105 origin-left"
              >
                {item}
              </button>
            ))}
            <div className="border-t pt-3 mt-3 space-y-2">
              <Link 
                to="/get-started"
                className="block w-full text-center px-3 py-2 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-900 hover:text-white transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
