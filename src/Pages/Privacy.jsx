import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sections = [
    {
      title: 'Introduction',
      content:
        'Welcome to Zygig. Your privacy is of utmost importance to us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to protect it.',
    },
    {
      title: 'Information We Collect',
      content:
        'We may collect personal information such as your name, email address, and payment details when you use our services. Additionally, we may collect non-personal data like browser type, device information, and usage statistics to enhance your experience.',
    },
    {
      title: 'How We Use Your Information',
      content:
        'Your information helps us deliver, operate, and improve our services. We may use it to process transactions, send updates, personalize content, or comply with legal requirements.',
    },
    {
      title: 'Data Protection',
      content:
        'We implement state-of-the-art security measures to protect your data from unauthorized access, alteration, or disclosure. Your data is encrypted and securely stored in compliance with industry standards.',
    },
    {
      title: 'Third-Party Sharing',
      content:
        'We do not sell, trade, or rent your personal information. However, we may share data with trusted third parties to facilitate our services, such as payment gateways and analytics providers, under strict confidentiality agreements.',
    },
    {
      title: 'Your Rights',
      content:
        'You have the right to access, update, or delete your personal data. If you have any concerns about your privacy, feel free to contact us, and we will address your concerns promptly.',
    },
    {
      title: 'Updates to this Policy',
      content:
        'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly for updates.',
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
          <h1 className="text-5xl font-extrabold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-400">
            At Zygig, we value your trust and are committed to protecting your privacy.
            Learn more about how we handle your data responsibly.
          </p>
        </header>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
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

export default PrivacyPolicyPage;
