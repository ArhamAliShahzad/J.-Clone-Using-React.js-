import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const ReturnsExchanges = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-gray-50 py-4 px-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 max-w-7xl mx-auto">
          <li>
            <a
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
            >
              HOME
            </a>
          </li>
          <li>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
          </li>
          <li className="text-sm font-semibold text-gray-900" aria-current="page">
            Returns & Exchanges
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Side Navigation */}
          <aside className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">RETURNS & EXCHANGES</h2>
            <nav className="space-y-4">
              {[
                'Return and Exchange Policy',
                'How do I Apply For A Return?',
                'When Will My Return Be Processed?',
                'Do You Offer Refunds?',
                'Voucher Redemption Policy',
                'International Orders',
                'Customized and Make to Orders',
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                  className="block text-gray-600 hover:text-red-600 transition-colors duration-200 font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Content */}
          <div className="lg:col-span-3 bg-white p-8 rounded-lg shadow-sm">
            <section className="prose prose-red max-w-none">
              <h2 id="return-and-exchange-policy" className="text-2xl font-bold text-gray-900 mb-6">
                Return and Exchange Policy
              </h2>

              <p className="text-gray-600 mb-6">
                You have 03 days from the date of delivery to request a return or exchange if:
              </p>

              <ul className="list-disc space-y-4 pl-6 mb-8">
                {[
                  'The product is damaged, stained, defected, wrong or incomplete. The product/s must be unused in the original packaging with labels and protective stickers attached.',
                  'The product received does not match the size ordered.',
                  'In case you receive an opened or unsealed box or packaging, please inform us immediately to avoid any claims.',
                  'Provide all required information to our representative. If exchange conditions are met, we will schedule a pickup or direct you to the nearest outlet.',
                  'Exchanges during sales are ONLY applicable for incorrect products received.',
                  'For size exchanges, email us at eshop@junaidjamshed.com.',
                  'Color variations due to screen differences are not eligible for exchange.',
                  'Policies apply to orders within Pakistan.',
                  'Inner-wear products are non-returnable/exchangeable for hygiene reasons.',
                  'Fragrances, cosmetics, and jewelry are non-returnable.',
                ].map((item, index) => (
                  <li key={index} className="text-gray-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 p-6 rounded-lg mt-8">
                <p className="text-red-700 font-medium text-sm leading-6">
                  <span className="block font-bold mb-2">Please Note:</span>
                  In the event of receiving a damaged/defective product, please provide clear evidence (images/videos) within 03 days of delivery. This documentation is mandatory for us to investigate and resolve your concern promptly.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ReturnsExchanges;