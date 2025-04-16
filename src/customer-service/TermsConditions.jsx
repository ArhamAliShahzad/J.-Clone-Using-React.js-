import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            <ChevronRightIcon className="h-3 w-3 mx-2" />
            <span className="text-gray-900 font-medium">Terms & Conditions</span>
          </div>
          <h1 className="text-3xl font-light text-gray-900 mt-4">Terms & Conditions</h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          {/* Introduction */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to Junaid Jamshed. By accessing our website, you agree to these terms and conditions. Please read them carefully.
          </p>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Example Section - Repeat for all sections */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Terms of Use</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing the website at http://www.junaidjamshed.com/, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on Junaid Jamshed's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="text-gray-600 leading-relaxed font-medium mb-2">Under this license you may not:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or "mirror" the materials</li>
              </ul>
            </section>

            {/* Add all other sections following the same pattern */}

            {/* Complaints Section */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Complaints Process</h2>
              <p className="text-gray-600 mb-4">
                We strive for complete customer satisfaction. If you have any concerns:
              </p>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-700">Email:</p>
                  <a href="mailto:eshop@junaidjamshed.com" className="text-blue-600 hover:underline">
                    eshop@junaidjamshed.com
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone:</p>
                  <a href="tel:021111112111" className="text-blue-600 hover:underline">
                    021 111 112 111
                  </a>
                  <p className="text-sm text-gray-500 mt-1">9am - 10pm, Monday - Saturday</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Junaid Jamshed (Pvt.) Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default TermsConditions;