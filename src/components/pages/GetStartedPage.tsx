// src/pages/GetStartedPage.tsx
import React from "react";
import { User, Mail, MessageCircle } from "lucide-react";

export const GetStartedPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#134271] to-[#5B1F39] px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Kickstart Your AI Customer Support
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12">
          Ready to streamline your customer interactions and save time? Fill out the form below, and our team will help you get set up—fast and hassle-free.
        </p>

        {/* Form Card */}
        <form className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 border border-white/20">
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
            <input
              type="email"
              placeholder="Work Email"
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Message / Needs */}
          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 text-white/70" />
            <textarea
              placeholder="Tell us about your goals or challenges..."
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl px-12 pt-4 pb-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-xl text-lg font-semibold hover:from-green-500 hover:to-blue-500 shadow-lg transition transform hover:scale-105">
            Get Started Now
          </button>
        </form>

        {/* Extra Info */}
        <p className="mt-6 text-sm text-white/70">
          No credit card required. Quick setup. Instant impact.
        </p>
      </div>
    </section>
  );
};
