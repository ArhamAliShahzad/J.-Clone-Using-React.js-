import React, { useState } from "react";
import { motion } from "framer-motion";

const CorporateInquiry = () => {
  const [activeTab, setActiveTab] = useState(null);

  const buttonVariants = {
    hover: {
      backgroundColor: "#000",
      color: "#fff",
      transition: { duration: 0.3 }
    },
    active: {
      backgroundColor: "#000",
      color: "#fff"
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row shadow-xl rounded-xl overflow-hidden">
        {/* Left - Image Section */}
        <div className="w-full lg:w-2/3 h-64 lg:h-auto relative">
          <img
            src="/corporate.webp"
            alt="Corporate Gifting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center lg:hidden">
            <h2 className="text-white text-2xl font-bold">Corporate Inquiries</h2>
          </div>
        </div>

        {/* Right - Text & Buttons */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center text-center p-8 lg:p-12 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4 hidden lg:block">
              Corporate Inquiries
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Please select the type of inquiry you have below. We'll direct you to the appropriate form.
            </p>
          </motion.div>

          <div className="flex flex-col gap-4 w-full">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              animate={activeTab === 'corporate' ? "active" : ""}
              onClick={() => setActiveTab('corporate')}
              className="border-2 border-black px-6 py-3 text-black font-medium rounded-lg w-full relative overflow-hidden"
            >
              <span className="relative z-10">For Corporate & Gifting</span>
            </motion.button>

            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              animate={activeTab === 'distribution' ? "active" : ""}
              onClick={() => setActiveTab('distribution')}
              className="border-2 border-black px-6 py-3 text-black font-medium rounded-lg w-full relative overflow-hidden"
            >
              <span className="relative z-10">Distribution Business</span>
            </motion.button>
          </div>

          {/* Form Selection Content */}
          {activeTab && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 w-full text-left"
            >
              <h3 className="font-bold text-lg mb-4">
                {activeTab === 'corporate' ? 'Corporate Gifting Form' : 'Distribution Inquiry Form'}
              </h3>
              <p className="text-gray-600 mb-4">
                {activeTab === 'corporate' 
                  ? 'Please provide details about your corporate gifting needs.'
                  : 'Tell us about your distribution business requirements.'}
              </p>
              <button 
                className="text-sm text-blue-600 hover:underline"
                onClick={() => setActiveTab(null)}
              >
                ← Back to options
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CorporateInquiry;