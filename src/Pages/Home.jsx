import React, { useEffect } from "react";
import { FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.5
      }
    }
  };

  const zoomVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { 
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const handleShopNow = (category, route = null) => {
    if (route) {
      navigate(route);
    } else {
      toast.success(`Browsing ${category} collection`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <ToastContainer position="bottom-right" />

      {/* Enhanced Main Banner with Gradient Overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-screen max-h-[800px] overflow-hidden relative"
      >
        <motion.img
          src="/Homepageimage/1.webp"
          alt="Main Banner"
          className="w-full h-full object-cover object-top"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1]
          }}
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 flex items-center justify-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.5, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-center px-4"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#000",
                color: "#fff"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center mx-auto text-lg shadow-lg hover:shadow-xl transition-all"
              onClick={() => handleShopNow("New Arrivals", "/new")}
            >
              Shop Now <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Second Section */}
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-8"
          >
            {/* Left Side - Enhanced Card */}
            <motion.div 
              variants={zoomVariants}
              whileHover="hover"
              className="relative w-full md:w-[58%] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src="/Homepageimage/section2i1.jpg"
                alt="Stitched Collection"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end p-8">
                <p className="text-xl text-white font-medium">Stitched Collection</p>
                <motion.button
                  whileHover={{ 
                    x: 5,
                    scale: 1.05
                  }}
                  className="text-white font-bold text-xl flex items-center w-fit mt-3 group"
                  onClick={() => handleShopNow("Stitched")}
                >
                  Shop Now 
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Enhanced Grid */}
            <div className="flex flex-col w-full md:w-[38%] gap-8">
              {[
                { img: "section2i2.jpg", title: "Kurti Collection" },
                { img: "section2i3.jpg", title: "Unstitched Fabrics" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`/Homepageimage/${item.img}`}
                    alt={item.title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <p className="text-lg text-white font-medium">{item.title}</p>
                    <motion.button
                      whileHover={{ 
                        x: 5,
                        scale: 1.05
                      }}
                      className="text-white font-bold text-lg flex items-center w-fit mt-2 group"
                      onClick={() => handleShopNow(item.title.split(' ')[0])}
                    >
                      Shop Now 
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Third Section */}
      <motion.section 
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="flex flex-col w-full md:w-[38%] gap-8 order-2 md:order-1">
            {[
              { img: "section3i1.jpg", title: "Designer Kurtis" },
              { img: "section3i2.jpg", title: "Premium Unstitched" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className="relative aspect-square rounded-3xl overflow-hidden shadow-lg"
              >
                <img
                  src={`/Homepageimage/${item.img}`}
                  alt={item.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <p className="text-lg text-white font-medium">{item.title}</p>
                  <motion.button
                    whileHover={{ 
                      x: 5,
                      scale: 1.05
                    }}
                    className="text-white font-bold text-lg flex items-center w-fit mt-2 group"
                    onClick={() => handleShopNow(item.title.split(' ')[0])}
                  >
                    Shop Now 
                    <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Enhanced Main Card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="relative w-full md:w-[58%] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl order-1 md:order-2"
          >
            <img
              src="/Homepageimage/section3i3.jpg"
              alt="Luxury Stitched Collection"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex flex-col justify-end p-8">
              <p className="text-xl text-white font-medium">Luxury Stitched</p>
              <motion.button
                whileHover={{ 
                  x: 5,
                  scale: 1.05
                }}
                className="text-white font-bold text-xl flex items-center w-fit mt-3 group"
                onClick={() => handleShopNow("Luxury Stitched")}
              >
                Shop Now 
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Banner Sections */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-[#fff8ee]"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/Homepageimage/firstbannersection.webp"
              alt="Special Offer"
              className="w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src="/Homepageimage/secondbannersection.webp"
              alt="New Collection"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Boys & Girls Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h5 className="text-lg font-medium text-gray-600 uppercase tracking-widest mb-4">
              New Arrivals
            </h5>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              Boys & Girls Collection
            </h3>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Large Image */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/Homepageimage/section4i1.jpg"
                alt="Boys Collection"
                className="w-full h-[600px] object-cover object-top"
              />
            </motion.div>

            {/* Grid with Text */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                {[2, 3, 4].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: num * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative rounded-2xl overflow-hidden shadow-lg aspect-[2/3]"
                  >
                    <img
                      src={`/Homepageimage/section4i${num}.jpg`}
                      alt={num === 2 ? "Girl" : num === 3 ? "Girl" : "Boy"}
                      className="w-full h-full object-cover object-top"
                    />
                    <button 
                      className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg hover:bg-black hover:text-white transition-colors"
                      onClick={() => handleShopNow("Kids")}
                    >
                      <FiShoppingBag />
                    </button>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <p className="text-xl font-bold text-gray-900 mb-2">NEW COLLECTION</p>
                <p className="text-lg text-gray-600 mb-4">DRESS BRIGHT AND LIVELY</p>
                <p className="text-xl font-bold text-gray-900 mb-6">
                  WITH J. YOUNGSTERS COLLECTION
                </p>
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#000",
                    color: "#fff"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-black text-black rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                  onClick={() => handleShopNow("Kids Collection")}
                >
                  Explore Collection
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;