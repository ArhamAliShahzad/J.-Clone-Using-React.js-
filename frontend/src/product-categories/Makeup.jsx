import React from 'react';

const Makeup = () => {
  const collections = [
    { id: 1, ext: 'jpeg', alt: "Luxury makeup palette", title: "Luxury Palettes", price: "$85+" },
    { id: 2, ext: 'png', alt: "Professional brushes", title: "Brush Collection", price: "$120+" },
    { id: 3, ext: 'png', alt: "Lipstick collection", title: "Lipstick Range", price: "$28+" },
    { id: 4, ext: 'png', alt: "Skincare bundle", title: "Skincare Essentials", price: "$65+" }
  ];

  return (
    <div className="bg-white">
      <nav className="text-sm py-4 px-6 bg-gray-50">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-600 hover:text-gray-900">HOME</a></li>
          <li>&gt;</li>
          <li className="font-semibold text-gray-900">Makeup</li>
        </ol>
      </nav>

      {/* Cinematic Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Makeup/cosmetic_video_web.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/10 flex items-center">
          <div className="max-w-2xl px-8 ml-4 md:ml-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Elevate Your <span className="italic">Beauty</span> Routine
            </h1>
            <p className="text-xl text-white/90 mb-10 font-light max-w-lg">
              Discover our premium makeup collections crafted for every look and occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-medium py-3 px-8 transition-all duration-300 flex items-center justify-center">
                EXPLORE COLLECTIONS <span className="ml-2 text-xl">→</span>
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white/90 hover:border-white hover:text-white font-light py-3 px-8 transition-all duration-300">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Luxury Collections Section */}
      <section className="py-28 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Carefully curated makeup essentials for professionals and enthusiasts alike
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100">
                <img
                  src={`/Makeup/${collection.id}.${collection.ext}`}
                  alt={collection.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-10">
                <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-white/80 font-light">{collection.price}</span>
                  <h3 className="text-3xl font-bold text-white mb-6">{collection.title}</h3>
                </div>
                <button className="self-start bg-transparent border-2 border-white text-white hover:bg-white hover:text-black py-3 px-8 font-medium transition-all duration-500 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0">
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Elegant CTA Section */}
      <section className="py-28 px-4 text-center bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience <span className="italic">Luxury</span> Beauty
            </h2>
            <p className="text-gray-700 text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our community of beauty enthusiasts and discover products that inspire confidence
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-medium py-4 px-10 transition-all duration-300 flex items-center">
              SHOP COLLECTION <span className="ml-2 text-xl">→</span>
            </button>
            <button className="bg-black text-white hover:bg-transparent hover:text-black border-2 border-black font-medium py-4 px-10 transition-all duration-300">
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="bg-black text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h4 className="font-bold text-lg mb-6">MAKEUP</h4>
            <p className="text-gray-400">Premium beauty products for the modern woman</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">SHOP</h4>
            <ul className="space-y-3 text-gray-400">
              {['New Arrivals', 'Best Sellers', 'Gift Sets', 'Limited Editions'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">ABOUT</h4>
            <ul className="space-y-3 text-gray-400">
              {['Our Story', 'Sustainability', 'Press'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-6">CONTACT</h4>
            <ul className="space-y-3 text-gray-400">
              {['Customer Service', 'Wholesale', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} MAKEUP. All rights reserved.
        </div> */}
      </footer>
    </div>
  );
};

export default Makeup;