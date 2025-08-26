import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export const TermsOfService: React.FC = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-12">
      <Helmet>
        <title>Terms of Service - Talkvera</title>
        <meta
          name="description"
          content="Read the Terms of Service for using Talkvera. Understand your rights, responsibilities, and our policies."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto text-gray-800">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">
          Welcome to Talkvera! These Terms of Service (“Terms”) govern your use
          of our website, platform, and services (“Services”). By accessing or
          using Talkvera, you agree to be bound by these Terms.
        </p>

        {/* Sections */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
            <p>
              You must be at least 18 years old, or the legal age of majority in
              your jurisdiction, to use Talkvera. By using our Services, you
              confirm that you meet this requirement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
            <p className="mb-2">
              You agree to use Talkvera solely for lawful purposes and in
              accordance with these Terms. You will not:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Misuse or interfere with the platform’s operation.</li>
              <li>Upload malicious code, spam, or harmful content.</li>
              <li>
                Violate any applicable laws, regulations, or third-party rights.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              3. Account & Security
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and all activities under your account. Notify
              us immediately if you suspect unauthorized use of your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              4. Subscription & Payment
            </h2>
            <p>
              Some Services may require a paid subscription. By subscribing, you
              agree to provide accurate payment information and authorize us to
              charge fees according to the selected plan. Payments are generally
              non-refundable unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              5. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and technology associated with Talkvera
              are owned by or licensed to us. You may not copy, modify,
              distribute, or reverse-engineer any part of the Services without
              prior written consent.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the
              Services at any time, with or without notice, for conduct that we
              believe violates these Terms or is harmful to Talkvera or others.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">7. Disclaimer</h2>
            <p>
              Talkvera is provided “as is” without warranties of any kind. We do
              not guarantee uninterrupted or error-free service, and we are not
              liable for damages arising from your use of the Services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Talkvera and its affiliates
              shall not be held liable for indirect, incidental, or consequential
              damages, including loss of data, profits, or business opportunities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. The updated version
              will be posted on this page, and your continued use of Talkvera
              constitutes acceptance of the revised Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
            <p>
              If you have questions about these Terms, please contact us at{" "}
              <a
                href="mailto:support@talkvera.com"
                className="text-[#134271] underline"
              >
                support@talkvera.com
              </a>
              .
            </p>
          </div>
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
