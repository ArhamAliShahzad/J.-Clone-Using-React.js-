import React from 'react';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">Careers at J.</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Join the J. family and be a part of Pakistan’s leading fashion brand. Explore exciting opportunities in fashion design, retail, marketing, and more.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="border rounded-2xl p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{job.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{job.location}</p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const jobs = [
  {
    title: 'Fashion Designer',
    location: 'Karachi, Head Office',
    description: 'Create elegant and trendy apparel for our seasonal collections.'
  },
  {
    title: 'Retail Store Manager',
    location: 'Lahore, Emporium Mall',
    description: 'Manage store operations, customer service, and staff coordination.'
  },
  {
    title: 'Digital Marketing Executive',
    location: 'Remote / Karachi',
    description: 'Run campaigns and boost online sales through social media and SEO.'
  },
  {
    title: 'Customer Support Representative',
    location: 'Karachi, Call Center',
    description: 'Assist customers with orders, returns, and general queries.'
  },
  {
    title: 'Visual Merchandiser',
    location: 'Islamabad, Centaurus Mall',
    description: 'Design attractive displays and ensure brand consistency in-store.'
  },
  {
    title: 'Warehouse Assistant',
    location: 'Karachi, Warehouse Unit',
    description: 'Handle stock movement, packing, and logistics.'
  },
];

export default Careers;
