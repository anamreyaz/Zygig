import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RefundPolicyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const policySections = [
    {
      title: 'Eligibility for Refunds',
      content:
        'To be eligible for a refund, your request must be made within 14 days of purchase. The product or service must not have been used extensively or modified in any way.',
    },
    {
      title: 'Conditions for Refunds',
      content:
        'Refunds are applicable only if the product or service fails to meet the agreed specifications. Custom or personalized items are non-refundable unless defective or damaged.',
    },
    {
      title: 'How to Request a Refund',
      content:
        'To request a refund, please contact our support team at support@zygig.com. Provide your order ID, reason for the refund, and any supporting evidence for faster processing.',
    },
    {
      title: 'Processing Refunds',
      content:
        'Once your refund request is approved, we will initiate the refund to your original payment method within 7-10 business days. You will receive an email confirmation once the process is complete.',
    },
    {
      title: 'Non-Refundable Items',
      content:
        'Certain items, such as digital downloads, gift cards, or promotional offers, are non-refundable. Please review the product details before making a purchase.',
    },
    {
      title: 'Changes to this Policy',
      content:
        'We reserve the right to update or modify this refund policy at any time. Any changes will be reflected on this page, and we encourage you to review it regularly.',
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-[#09090B] to-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="min-h-screen px-6 md:px-20 lg:px-40 py-20">
        {/* Header */}
        <header className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold mb-4">Refund Policy</h1>
          <p className="text-lg text-gray-400">
            At Zygig, we value your satisfaction and are committed to addressing your concerns. Please read our refund policy carefully.
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-12">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 hover:brightness-110 duration-500"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-gray-300 text-lg">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;
