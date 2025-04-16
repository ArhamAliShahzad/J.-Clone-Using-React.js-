import React from 'react';
import { FiChevronRight, FiInfo, FiGlobe, FiXCircle, FiCreditCard, FiTruck, FiEdit } from 'react-icons/fi';

const DeliveryOrders = () => {
  const sections = [
    {
      title: "Delivery Time",
      icon: <FiTruck className="mr-2" />,
      content: (
        <>
          <ul className="space-y-3">
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              The estimated average delivery time (after dispatch) across Pakistan is 2-4 working days for major cities. Remote areas may take longer.
            </li>
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              Please ensure availability on the provided contact number for delivery coordination.
            </li>
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              Delivery times are subject to article availability and order confirmation.
            </li>
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              During sales, processing and delivery times may extend beyond normal durations.
            </li>
          </ul>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <FiInfo className="inline-block mr-2 text-yellow-600" />
            <strong>Note:</strong> For safety, we recommend deliveries to your personal address. J. is not liable for orders delivered to self-pickup points.
          </div>
        </>
      )
    },
    {
      title: "International Delivery",
      icon: <FiGlobe className="mr-2" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            International orders typically dispatch within 5-7 working days post-confirmation.
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            Delivery times vary by destination country and local customs processes.
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            No refunds for cancellations once order is "in process".
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            Customers bear all shipment and custom charges for refused deliveries.
          </li>
        </ul>
      )
    },
    {
      title: "Cancellation Policy",
      icon: <FiXCircle className="mr-2" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            Prepaid order cancellations within 6 hours result in store credit refunds.
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            No cancellations/refunds once order status is "in process".
          </li>
        </ul>
      )
    },
    {
      title: "Payment Through Cards",
      icon: <FiCreditCard className="mr-2" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            We may require payment verification for security purposes (contact via call/email).
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            J. reserves right to cancel orders with declined payments.
          </li>
        </ul>
      )
    },
    {
      title: "Delivery Charges",
      icon: <FiTruck className="mr-2" />,
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            Flat Rs.149 shipping charge for Pakistan deliveries.
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            International charges vary by destination (visible at checkout).
          </li>
          <li className="flex items-start">
            <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
            Customers responsible for international taxes/duties.
          </li>
        </ul>
      )
    },
    {
      title: "Track Your Order",
      icon: <FiEdit className="mr-2" />,
      content: (
        <>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              Track via number provided in dispatch email/SMS.
            </li>
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              Contact eshop@junaidjamshed.com for tracking issues.
            </li>
            <li className="flex items-start">
              <FiChevronRight className="flex-shrink-0 mt-1 mr-2 text-blue-600" />
              Third-party logistics used for all deliveries.
            </li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-3 flex items-center">
              <FiEdit className="mr-2" />
              Order Amendments
            </h4>
            <p className="text-gray-700">
              Revise orders by contacting Customer Service at<br />
              <a href="tel:021111112111" className="text-blue-600 hover:underline">
                021 111 112 111
              </a> (9am-10pm PKT Mon-Sat) or<br />
              <a href="mailto:eshop@junaidjamshed.com" className="text-blue-600 hover:underline">
                eshop@junaidjamshed.com
              </a>
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm py-4 px-6 bg-gray-50">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-600 hover:text-gray-900">HOME</a></li>
          <li>&gt;</li>
          <li className="font-semibold text-gray-900">Delivery & Orders</li>
        </ol>
      </nav>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              {section.icon}
              {section.title}
            </h2>
            {section.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryOrders;