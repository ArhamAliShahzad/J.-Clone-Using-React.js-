import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiMail, FiPhone, FiMapPin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // In a real app, you would call your backend API here
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      // if (!response.ok) throw new Error('Submission failed');

      setSubmitSuccess(true);
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form field variants
  const inputVariants = {
    normal: "w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-colors duration-300 py-2",
    error: "w-full border-b border-red-500 focus:outline-none focus:border-red-500 placeholder-gray-400 transition-colors duration-300 py-2"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center my-8 text-gray-800">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
        our team is ready to assist you.
      </p>

      {submitSuccess && (
        <div className="mx-auto max-w-2xl mb-8 p-4 bg-green-100 border border-green-400 text-green-700 rounded flex items-center">
          <FiCheckCircle className="mr-2" />
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitError && (
        <div className="mx-auto max-w-2xl mb-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded flex items-center">
          <FiAlertCircle className="mr-2" />
          {submitError}
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Contact Information Section */}
        <div className="md:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

          <div className="space-y-8">
            {/* Online Store */}
            <div className="bg-white p-6 rounded-lg shadow-xs">
              <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <FiMail className="mr-2 text-blue-500" />
                FOR ONLINE STORE
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">BY EMAIL</p>
                  <a
                    href="mailto:eshop@junaidjamshed.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    <FiMail className="mr-1" size={14} />
                    eshop@junaidjamshed.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">BY TELEPHONE</p>
                  <div className="flex items-center">
                    <FiPhone className="mr-1 text-gray-700" size={14} />
                    <span className="text-gray-700">021 111 112 111</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-5">(9am - 10pm, Monday - Saturday, Sunday 11am - 08pm)</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">BY MAIL</p>
                  <div className="flex">
                    <FiMapPin className="mr-1 text-gray-700 mt-1" size={14} />
                    <div>
                      <p className="text-gray-700">J. Junaid Jamshed Pvt Ltd</p>
                      <p className="text-gray-700">Head office, 40 Sector 19, Korangi Industrial Area</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outlet Inquiries */}
            <div className="bg-white p-6 rounded-lg shadow-xs">
              <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <FiPhone className="mr-2 text-blue-500" />
                FOR OUTLETS INQUIRIES
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">BY EMAIL</p>
                  <a
                    href="mailto:feedback@junaidjamshed.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    <FiMail className="mr-1" size={14} />
                    feedback@junaidjamshed.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">BY TELEPHONE</p>
                  <div className="flex items-center">
                    <FiPhone className="mr-1 text-gray-700" size={14} />
                    <span className="text-gray-700">021 111 112 111</span>
                  </div>
                  <p className="text-xs text-gray-500 ml-5">(9am - 6pm, Monday - Saturday)</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">IN-STORE LOCATIONS</p>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center">
                    <FiMapPin className="mr-1" size={14} />
                    For complete store details, click here
                  </button>
                </div>
              </div>
            </div>

            {/* Corporate */}
            <div className="bg-white p-6 rounded-lg shadow-xs">
              <h4 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <FiMail className="mr-2 text-blue-500" />
                FOR CORPORATE ORDERS
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">BY EMAIL</p>
                  <a
                    href="mailto:corporate@junaidjamshed.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    <FiMail className="mr-1" size={14} />
                    corporate@junaidjamshed.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Your name"
                className={errors.name ? inputVariants.error : inputVariants.normal}
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <FiAlertCircle className="mr-1" size={14} />
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                type="email"
                placeholder="you@example.com"
                className={errors.email ? inputVariants.error : inputVariants.normal}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <FiAlertCircle className="mr-1" size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                {...register('phone', {
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: 'Please enter a valid 11-digit phone number'
                  }
                })}
                type="tel"
                placeholder="03XX-XXXXXXX"
                className={errors.phone ? inputVariants.error : inputVariants.normal}
              />
              {errors.phone && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <FiAlertCircle className="mr-1" size={14} />
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <select
                {...register('subject')}
                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 py-2 bg-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea
                {...register('message', {
                  required: 'Message is required',
                  minLength: {
                    value: 20,
                    message: 'Message must be at least 20 characters'
                  }
                })}
                rows="5"
                placeholder="Write your message here..."
                className={`${errors.message ? inputVariants.error : inputVariants.normal} resize-none`}
              />
              {errors.message && (
                <p className="text-sm text-red-500 mt-1 flex items-center">
                  <FiAlertCircle className="mr-1" size={14} />
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                {...register('newsletter', { required: false })}
                type="checkbox"
                id="newsletter"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                Subscribe to our newsletter
              </label>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-950 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'SEND MESSAGE'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;