import React from 'react';
import { motion } from 'framer-motion';

const Featured = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageHover = {
    scale: 1.03,
    transition: { duration: 0.3 }
  };

  return (
    <div className="featured-collection bg-white">
      {/* Hero Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="hero-banner overflow-hidden"
      >
        <img
          src="/FeaturedCollection/1.jpg"
          alt="Featured Collection Banner"
          className="w-full h-auto object-cover"
        />
      </motion.div>

      {/* 2 Piece Collection */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2 PIECE</h3>
          <p className="text-lg text-gray-600">UNSTITCHED COLLECTION</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[2, 3].map((imgNum) => (
            <motion.div
              key={imgNum}
              whileHover={imageHover}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={`/FeaturedCollection/${imgNum}.jpg`}
                alt={`2 Piece Collection ${imgNum - 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 3 Piece Collection */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">3 PIECE</h3>
          <p className="text-lg text-gray-600">UNSTITCHED COLLECTION</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[4, 5, 6].map((imgNum) => (
            <motion.div
              key={imgNum}
              whileHover={imageHover}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={`/FeaturedCollection/${imgNum}.jpg`}
                alt={`3 Piece Collection ${imgNum - 3}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Chunri Ajrak Collection */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-content space-y-6">
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed">
              Embrace tradition with a twist – the Chunri Ajrak Collection, where rich heritage and vibrant artistry come together in every piece.
            </p>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
              VIEW MORE
            </button>
          </div>
          <div className="video-container rounded-xl overflow-hidden shadow-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/FeaturedCollection/7.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </motion.section>

      {/* Additional 2 Piece Collection */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2 PIECE</h3>
          <p className="text-lg text-gray-600">UNSTITCHED COLLECTION</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[8, 9].map((imgNum) => (
            <motion.div
              key={imgNum}
              whileHover={imageHover}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={`/FeaturedCollection/${imgNum}.jpg`}
                alt={`2 Piece Collection ${imgNum - 7}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Additional 3 Piece Collection */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">3 PIECE</h3>
          <p className="text-lg text-gray-600">UNSTITCHED COLLECTION</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[10, 11, 12].map((imgNum) => (
            <motion.div
              key={imgNum}
              whileHover={imageHover}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={`/FeaturedCollection/${imgNum}.jpg`}
                alt={`3 Piece Collection ${imgNum - 9}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Kurti Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto text-center mb-8">
          <p className="text-3xl font-bold text-gray-900">KURTI</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <img
            src="/FeaturedCollection/13.jpg"
            alt="Kurti Collection"
            className="w-full h-auto rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </motion.section>

      {/* Final Banner */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="last-banner py-16"
      >
        <img
          src="/FeaturedCollection/14.jpg"
          alt="Final Collection Banner"
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-12"
      >
        <button className="bg-black text-white px-10 py-4 text-2xl md:text-3xl font-medium  hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl">
          VIEW COLLECTION
        </button>
      </motion.div>
    </div>
  );
};

export default Featured;