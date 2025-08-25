import React from "react";
import { Link } from "react-router-dom";

export const WatchDemoPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#134271] to-[#5B1F39] px-6 py-12">
      <div className="max-w-3xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Watch Talkvera in Action
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Discover how Talkvera can automate your customer interactions, provide real-time analytics, and boost engagement. Watch our demo video below.
        </p>

        {/* Video embed */}
        <div className="relative w-full h-0 pb-[56.25%] mb-10">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl border-0"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Talkvera Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Call to action */}
        <Link
          to="/get-started"
          className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:from-green-500 hover:to-blue-600 transition transform hover:scale-105"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
};
