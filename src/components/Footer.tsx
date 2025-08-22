import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
// import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  'Product': ['API Documentation'],
  'Company': ['About Us', 'Blog'],
  // 'Support': ['Help Center', 'Contact', 'Community'],
  // 'Legal': ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-2">
              <h3 className="text-3xl mb-4">
                <span className="font-normal text-white">Talk</span>
                <span className="font-bold text-white">VERA</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Empower your business with AI-driven customer support. Faster responses, happier customers, and lower operational costs.
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <p className="text-white leading-relaxed mb-6">
                Let’s Connect
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center">
            <p className="text-white leading-relaxed mb-6">
              Contact us
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>support@talkvera.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+62 (821) 222-333</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>            

          {/* Links Sections */}
          {/* <div className="lg:col-span-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-white font-semibold mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}
        </div>

        {/* Newsletter Signup */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:flex-1">
              <h4 className="text-white font-semibold mb-2">Stay updated</h4>
              <p className="text-gray-400 mb-4 lg:mb-0">
                Join the waitlist to get early access & product updates.
              </p>
            </div>
            <div className="lg:ml-8">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-lg flex-1 border border-gray-700 focus:outline-none focus:border-blue-500 transition-colors duration-300"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-r-lg hover:bg-blue-700 transition-all duration-300 font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-1 lg:mb-0">
            © 2025 Talkvera. All rights reserved.
          </div>
          {/* <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ for customer success</span>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All systems operational</span>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};