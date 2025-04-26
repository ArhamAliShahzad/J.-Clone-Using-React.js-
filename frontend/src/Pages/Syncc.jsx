import React, { useState } from 'react';
import { FiShoppingBag, FiArrowRight, FiChevronRight } from 'react-icons/fi';

const Syncc = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-black min-w-full">
      <div className=" text-white min-h-screen font-sans overflow-hidden mt-[5%] mb-[5%] ml-[10%] mr-[10%]">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
          <div className="relative z-10 text-center px-4">
            <img
              src="/Syncc/1.webp"
              alt="Syncc Hero"
              className="mx-auto max-w-full h-auto object-contain"
            />
            <button className="mt-12 px-10 py-4 border-2 border-white/50 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-500 flex items-center gap-2 mx-auto group">
              EXPLORE 2025 COLLECTION
              <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>
        </section>

        {/* Tops Section 1 */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 relative group">
              <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 uppercase tracking-tighter">
                TOPS
              </h1>
              <img
                src="/Syncc/2.jpg"
                alt="Syncc Tops"
                className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]"
              />
              <button className="absolute bottom-8 left-8 px-6 py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                <FiShoppingBag />
                SHOP NOW
              </button>
            </div>

            <div className="lg:w-1/2">
              <video
                autoPlay
                muted
                loop
                src="/Syncc/3.mp4"
                className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>
        </section>

        {/* Grid Section 1 */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[4, 5, 6].map((num, index) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-xl"
                onMouseEnter={() => setHoveredItem(`grid1-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={`/Syncc/${num}.jpg`}
                  alt={`Syncc Product ${num}`}
                  className="w-full h-[500px] object-cover transform transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <button className="w-full py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center justify-center gap-2">
                    <FiShoppingBag />
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tops Section 2 */}
        <section className="py-20 px-4 max-w-7xl mx-auto bg-gradient-to-b from-black to-gray-900/50">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <video
                autoPlay
                muted
                loop
                src="/Syncc/7.mp4"
                className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-[1.01]"
              />
            </div>

            <div className="lg:w-1/2 order-1 lg:order-2 space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter">
                PREMIUM TOPS
              </h1>
              <div className="relative group">
                <img
                  src="/Syncc/8.jpg"
                  alt="Syncc Tops"
                  className="w-full h-auto rounded-xl shadow-xl"
                />
                <button className="absolute bottom-8 left-8 px-6 py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  <FiShoppingBag />
                  SHOP NOW
                </button>
              </div>
              <p className="text-gray-400 max-w-lg">
                Our 2025 collection features innovative fabrics and contemporary designs for unmatched style and comfort.
              </p>
            </div>
          </div>
        </section>

        {/* Grid Section 2 */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[9, 11, 12].map((num, index) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-xl"
                onMouseEnter={() => setHoveredItem(`grid2-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={`/Syncc/${num}.jpg`}
                  alt={`Syncc Product ${num}`}
                  className="w-full h-[500px] object-cover transform transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <button className="w-full py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center justify-center gap-2">
                    <FiShoppingBag />
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottoms Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-gray-900/20 to-black"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-16 uppercase tracking-tighter">
            BOTTOMS
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2 relative group">
              <img
                src="/Syncc/13.jpg"
                alt="Syncc Bottoms"
                className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-700 group-hover:scale-[1.02]"
              />
              <button className="absolute bottom-8 left-8 px-6 py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                <FiShoppingBag />
                SHOP NOW
              </button>
            </div>

            <div className="lg:w-1/2">
              <video
                autoPlay
                muted
                loop
                src="/Syncc/14.mp4"
                className="w-full h-auto rounded-xl shadow-2xl transform transition-all duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Bottom Image Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[14, 15].map((num, index) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-xl"
                onMouseEnter={() => setHoveredItem(`bottom1-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={`/Syncc/${num}.jpg`}
                  alt={`Syncc Product ${num}`}
                  className="w-full h-[500px] object-cover transform transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <button className="w-full py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center justify-center gap-2">
                    <FiShoppingBag />
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[16, 17].map((num, index) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-xl"
                onMouseEnter={() => setHoveredItem(`bottom2-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img
                  src={`/Syncc/${num}.jpg`}
                  alt={`Syncc Product ${num}`}
                  className="w-full h-[500px] object-cover transform transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <button className="w-full py-3 bg-black/70 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-black/90 hover:border-white/40 transition-all flex items-center justify-center gap-2">
                    <FiShoppingBag />
                    SHOP NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-28 px-4 bg-gradient-to-b from-black to-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">2025 COLLECTION</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Discover the future of fashion with our latest collection
            </p>
            <button className="px-12 py-5 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-500 flex items-center gap-3 mx-auto">
              <FiShoppingBag className="text-lg" />
              SHOP THE FULL COLLECTION
              <FiArrowRight className="text-lg" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Syncc;