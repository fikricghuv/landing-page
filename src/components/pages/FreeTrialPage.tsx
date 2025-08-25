import React, { useState } from "react";
import { User, Mail, Briefcase } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";

export const FreeTrialPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const { error } = await supabase.from("dt_request_demo").insert([
        {
          full_name: name,
          work_email: email,
          company_name: company,
          type_submit: "free-trial", 
        },
      ]);

      if (error) throw error;

      setSuccess("Your free trial request has been submitted!");
      setName("");
      setEmail("");
      setCompany("");
    } catch (err: any) {
      setError(err.message || "❌ Failed to submit form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#134271] to-[#5B1F39] px-6 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Unlock Your Free Trial
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-12">
          Discover how Talkvera can transform your customer support. Start your
          free trial today—no credit card required.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 border border-white/20"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
            <input
              type="email"
              placeholder="Work Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Company */}
          <div className="relative">
            <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70" />
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="w-full bg-white/20 text-white placeholder-white/70 border border-white/30 rounded-xl px-12 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-br from-[#367DBB] to-[#4BDBBC] text-white py-3 rounded-xl text-lg font-semibold hover:from-[#2d6aa0] hover:to-[#3cb19a] shadow-lg transition transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "Start My Free Trial"}
          </button>

          {success && <p className="text-green-400 mt-2">{success}</p>}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>

        <p className="mt-6 text-sm text-white/70">
          No credit card needed. Cancel anytime. Immediate access to all
          features.
        </p>
      </div>
    </section>
  );
};
