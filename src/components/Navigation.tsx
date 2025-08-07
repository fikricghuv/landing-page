import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  const menuItems = ['Features', 'How It Works', 'Calculate ROI', 'Contact'];

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
              src={isScrolled ? '/assets/logo/logo-talkvera-black.svg' : '/assets/logo/logo-talkvera-white.svg'}
              alt="Talkvera Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleScrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                  className={`px-3 py-2 text-m font-medium transition-transform duration-300 hover:scale-110
                    ${isScrolled ? 'text-gray-900' : 'text-white'}
                  `}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className={`px-4 py-2 text-sm font-medium transition-transform duration-300 hover:scale-110
                ${isScrolled ? 'text-gray-700' : 'text-white'}
              `}
            >
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
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
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleScrollTo(item.toLowerCase().replace(/\s+/g, '-'))}
                className="block w-full text-left px-3 py-2 text-gray-700 transition-transform duration-300 hover:scale-105"
              >
                {item}
              </button>
            ))}
            <div className="border-t pt-3 mt-3">
              <button className="block w-full text-left px-3 py-2 text-gray-700 transition-transform duration-300 hover:scale-105">
                Sign In
              </button>
              <button className="block w-full text-left px-3 py-2 text-gray-700 transition-transform duration-300 hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
