import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <Helmet>
        <title>Privacy Policy - Talkvera</title>
        <meta
          name="description"
          content="Privacy Policy for Talkvera. Learn how we collect, use, and protect your personal data."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-2">
          Effective date: <span className="font-medium">August 26, 2025</span>
        </p>
        <p className="text-gray-600 mb-10">
          This Privacy Policy explains how Talkvera (“we”, “us”, “our”)
          collects, uses, discloses, and safeguards information when you use our
          website and services (“Services”). By using Talkvera, you agree to the
          practices described here.
        </p>

        {/* Contents */}
        <div className="space-y-12">
          <section id="info-we-collect">
            <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Account & Contact Data:</span>{" "}
                name, email, company, role, billing details.
              </li>
              <li>
                <span className="font-medium">Content & Knowledge Data:</span>{" "}
                knowledge base entries, prompts, documents, FAQs, and related metadata you upload or connect.
              </li>
              <li>
                <span className="font-medium">Usage & Device Data:</span>{" "}
                pages viewed, feature usage, IP address, browser, device, timestamps, and diagnostics.
              </li>
              <li>
                <span className="font-medium">Support Data:</span>{" "}
                messages, attachments, and context shared with our support team.
              </li>
              <li>
                <span className="font-medium">Cookies & Similar Tech:</span>{" "}
                used for authentication, preferences, analytics, and performance.
              </li>
            </ul>
          </section>

          <section id="how-we-use">
            <h2 className="text-2xl font-semibold mb-3">2. How We Use Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide, maintain, and secure the Services.</li>
              <li>Personalize experiences and model behavior per your settings.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Monitor performance, perform analytics, and improve features.</li>
              <li>Communicate service updates, security alerts, and support.</li>
              <li>Comply with legal obligations and enforce our Terms.</li>
            </ul>
          </section>

          <section id="legal-bases">
            <h2 className="text-2xl font-semibold mb-3">3. Legal Bases (EEA/UK)</h2>
            <p>
              We rely on one or more of: performance of a contract, legitimate
              interests (e.g., securing and improving the Services), consent
              (where required), and compliance with legal obligations.
            </p>
          </section>

          <section id="sharing">
            <h2 className="text-2xl font-semibold mb-3">4. How We Share Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <span className="font-medium">Service Providers / Subprocessors:</span>{" "}
                infrastructure, analytics, support, and payment processors under appropriate agreements.
              </li>
              <li>
                <span className="font-medium">Business Transfers:</span>{" "}
                in connection with a merger, acquisition, or asset sale.
              </li>
              <li>
                <span className="font-medium">Legal Requirements:</span>{" "}
                to comply with law or protect rights, safety, and security.
              </li>
              <li>We do not sell personal information.</li>
            </ul>
          </section>

          <section id="retention">
            <h2 className="text-2xl font-semibold mb-3">5. Data Retention</h2>
            <p>
              We retain personal data for as long as needed to provide the
              Services, comply with legal obligations, resolve disputes, and
              enforce agreements. You may request deletion as described below.
            </p>
          </section>

          <section id="security">
            <h2 className="text-2xl font-semibold mb-3">6. Security</h2>
            <p>
              We apply administrative, technical, and organizational measures to
              protect data (e.g., encryption in transit, access controls). No
              method of transmission or storage is 100% secure; we work to
              continuously improve safeguards.
            </p>
          </section>

          <section id="transfers">
            <h2 className="text-2xl font-semibold mb-3">7. International Data Transfers</h2>
            <p>
              Your information may be processed in countries other than your
              own. Where applicable, we use appropriate safeguards (such as
              standard contractual clauses) to protect transferred data.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-semibold mb-3">8. Cookies & Preferences</h2>
            <p className="mb-2">
              We use essential, functional, and analytics cookies. You can
              manage preferences via your browser or (where available) our cookie
              banner. Disabling certain cookies may impact functionality.
            </p>
          </section>

          <section id="your-rights">
            <h2 className="text-2xl font-semibold mb-3">9. Your Rights</h2>
            <p className="mb-2">
              Depending on your location, you may have rights to access,
              correct, delete, restrict, or object to processing of your data,
              and to data portability. You can also withdraw consent where we
              rely on consent.
            </p>
            <p>
              Requests can be made via{" "}
              <a href="mailto:privacy@talkvera.com" className="text-[#134271] underline">
                privacy@talkvera.com
              </a>. We may verify your identity before responding.
            </p>
          </section>

          <section id="ccpa">
            <h2 className="text-2xl font-semibold mb-3">10. California Privacy (CCPA/CPRA)</h2>
            <p>
              California residents have specific rights regarding personal
              information. We do not sell or share personal information for
              cross-context behavioral advertising. You can submit requests
              using the contact details below.
            </p>
          </section>

          <section id="children">
            <h2 className="text-2xl font-semibold mb-3">11. Children’s Privacy</h2>
            <p>
              The Services are not directed to children under 13 (or as defined
              by local law). We do not knowingly collect data from children.
            </p>
          </section>

          <section id="third-parties">
            <h2 className="text-2xl font-semibold mb-3">12. Third-Party Links & AI Models</h2>
            <p className="mb-2">
              Our Services may link to third-party sites or integrate with AI
              model providers and other platforms. Their privacy practices are
              governed by their own policies. Review those policies before using
              third-party services.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-2xl font-semibold mb-3">13. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy. When we do, we will revise the
              “Effective date” above. Your continued use of the Services after
              changes indicates acceptance of the updated policy.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold mb-3">14. Contact Us</h2>
            <p>
              Questions or requests about privacy? Email{" "}
              <a href="mailto:privacy@talkvera.com" className="text-[#134271] underline">
                privacy@talkvera.com
              </a>{" "}
              or write to: Talkvera, Attn: Privacy, [Your Address].
            </p>
          </section>
        </div>

        {/* Back to home */}
        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-block px-8 py-4 bg-gradient-to-br from-[#367DBB] to-[#4BDBBC] text-white rounded-xl font-semibold hover:from-[#2d6aa0] hover:to-[#3cb19a] transform transition-all shadow-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};
