import React from "react";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Company: ["About Us", "FAQ"],
};

const companyLinks = [
  { name: "About Us", href: "/about-us" },
  { name: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/talk.vera/",
    label: "Instagram",
  },
  {
    icon: Phone,
    href: "https://api.whatsapp.com/send/?phone=6285171182228&text&type=phone_number&app_absent=0",
    label: "Whatsapp",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <img
                src="../../assets/logo/logo-just-name.svg"
                alt="Talkvera Logo"
                className="h-10"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empower your business with AI-driven customer support. Faster
              responses, happier customers, and lower operational costs.
            </p>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Let’s Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>talkvera.agent@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span>+62 (857) 4332-5523</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 lg:mb-0">
            © 2025 Talkvera. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link
              to="/terms-of-service"
              className="underline hover:text-gray-200 transition-colors duration-200"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="underline hover:text-gray-200 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
