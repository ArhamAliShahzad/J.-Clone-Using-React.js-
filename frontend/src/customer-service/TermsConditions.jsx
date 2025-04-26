import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const TermsConditions = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="text-sm py-4 px-6 bg-gray-50">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-600 hover:text-gray-900">HOME</a></li>
          <li>&gt;</li>
          <li className="font-semibold text-gray-900">Terms & Conditions</li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="w-full mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-3xl font-light mb-4 text-gray-900 mt-4">Terms & Conditions</h1>
          {/* Introduction */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to Junaid Jamshed. By accessing our website, you agree to these terms and conditions. Please read them carefully.
          </p>

          {/* Terms Sections */}
          <div className="space-y-10">
            {/* Terms of Use */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Terms of Use</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing the website at http://www.junaidjamshed.com/, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Use License</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Junaid Jamshed (Pvt.) Ltd's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license, you may not:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
                <li>Attempt to decompile or reverse engineer any software contained on Junaid Jamshed Pvt Ltd's website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated by Junaid Jamshed Pvt ltd at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials on Junaid Jamshed Pvt Ltd's website are provided on an 'as is' basis. Junaid Jamshed Pvt Ltd makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Further, Junaid Jamshed Pvt Ltd does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Limitations</h2>
              <p className="text-gray-600 leading-relaxed">
                In no event shall Junaid Jamshed Pvt Ltd be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Junaid Jamshed Pvt Ltd's website, even if Junaid Jamshed Pvt Ltd or a Junaid Jamshed Pvt Ltd authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            {/* Accuracy of materials */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Accuracy of Materials</h2>
              <p className="text-gray-600 leading-relaxed">
                The materials appearing on Junaid Jamshed Pvt Ltd's website could include technical, typographical, or photographic errors. Junaid Jamshed Pvt Ltd does not warrant that any of the materials on its website are 100% accurate, complete or current. Junaid Jamshed Pvt Ltd may make changes to the materials contained on its website at any time without notice. However, Junaid Jamshed Pvt Ltd does not make any commitment to update the materials.
              </p>
            </section>

            {/* Product & Service Descriptions */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Product & Service Descriptions</h2>
              <p className="text-gray-600 leading-relaxed">
                Whilst we try to display the colors of our products accurately on the Website, the actual colors you see will depend on your screen and we cannot guarantee that your screen's display of any color will accurately reflect the color of the product on delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                All items are subject to availability. We will inform you as soon as possible if the product(s) or service(s) you have ordered are not available and we may offer an alternative product(s) or service(s) of equal or higher quality and value otherwise the order had to be canceled.
              </p>
            </section>

            {/* Acceptance of your Order */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Acceptance of your Order</h2>
              <p className="text-gray-600 leading-relaxed">
                Please note that completion of the online checkout process does not constitute our acceptance of your order. Our acceptance of your order will take place only when we dispatch the product(s) or commencement of the services that you ordered from us.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                By completing and submitting the electronic order form (or proceeding through the 'checkout process') you are making an offer to purchase goods which, if accepted by us, will result in a binding contract. Neither submitting an electronic order form nor completing the checkout process constitutes our acceptance of your order.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                If you supplied us with your email address when entering your payment details (or if you have a registered account with us), we will notify you by email as soon as possible to confirm that we have received your order.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                All products that you order through the Website will remain the property of J. until we have received payment in full from you for those products.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                If we cannot supply you with the product or service you ordered, we will not process your order. We will inform you via email or call, if you have already paid for the product or service, refund you via store credit/voucher in full as soon as reasonably possible.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                To provide greater convenience and flexibility, refunds will generally be issued in the form of a voucher, which can be used toward future purchases on our website. However, in special cases that may require additional support, we encourage customers to reach out to our customer service team. Our team will review each case individually and make every effort to provide the best possible solution.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Any online payments received by J. are in PKR, therefore, in case of refunds the amount will be reversed/refunded in PKR.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                J. Junaid Jamshed reserved the right to cancel your order in the case of but not limited to; unavailability of product, incorrectly listed price, or any other information.
              </p>
            </section>

            {/* Delivery of your Order */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Delivery of your Order</h2>
              <p className="text-gray-600 leading-relaxed">
                J. products are sold on a delivery duty unpaid basis. The recipient may have to pay import duty or a formal customs entry fee prior to or on delivery. Additional taxes, fees or levies may apply according to local legislation and customers are required to check these details before placing an order for international delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We will deliver to the home or office address indicated by you when you place an order. We cannot deliver to PO boxes. All deliveries must be signed for upon receipt. We will try at least twice to deliver your order at the address indicated by you.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We reserve the right to cancel your purchase in the event nobody is available to sign for receipt. You bear the risk for the products once delivery is completed.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Where possible, we try to deliver in one go. We reserve the right to split the delivery of your order, for instance (but not limited to) if part of your order is delayed or unavailable. In the event that we split your order, we will notify you of our intention to do so by sending you an e-mail to the e-mail address provided by you at the time of purchase. You will not be charged for any additional delivery costs.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                We can entertain any changes to order provided if the order isn't dispatched yet. We will not be able to accept any order change requests once the order is dispatched (neither any refund or exchange will be possible in case of delivery outside Pakistan.)
              </p>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Links</h2>
              <p className="text-gray-600 leading-relaxed">
                We may have placed links on this Website to other websites which we think you may want to visit. We do not vet these websites and do not have any control over their contents. Except where required by applicable law, J. cannot accept any liability in respect of the use of these websites.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Modifications</h2>
              <p className="text-gray-600 leading-relaxed">
                Junaid Jamshed Pvt Ltd may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-xl font-medium text-gray-900 mb-4 pb-2 border-b border-gray-100">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Pakistan and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
              </p>
            </section>

            {/* Complaints Process */}
            <section className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-medium text-gray-900 mb-4">Complaints Process</h2>
              <p className="text-gray-600 mb-6">
                We hope that you're pleased with any purchase you've made or the service you've received from J. and that you'll never have reason to complain - but if there's something you're not happy with, we'd like to put matters right, so please contact us straight away:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <a href="mailto:eshop@junaidjamshed.com" className="text-blue-600 hover:underline">
                      eshop@junaidjamshed.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Telephone</h3>
                    <a href="tel:021111112111" className="text-blue-600 hover:underline">
                      021 111 112 111
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      (9am - 10pm, Monday - Saturday)
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon className="h-5 w-5" />
        </button>
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