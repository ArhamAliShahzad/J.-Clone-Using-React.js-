import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaPinterest, 
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: <FaFacebookF />, color: "hover:text-blue-600", url: "#" },
    { icon: <FaTwitter />, color: "hover:text-blue-400", url: "#" },
    { icon: <FaYoutube />, color: "hover:text-red-500", url: "#" },
    { icon: <FaInstagram />, color: "hover:text-pink-500", url: "#" },
    { icon: <FaPinterest />, color: "hover:text-red-600", url: "#" },
    { icon: <FaLinkedinIn />, color: "hover:text-blue-700", url: "#" }
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-white text-gray-700 pt-10 px-5">
      <ToastContainer />
      
      {/* Newsletter Section */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="bg-[#232323] text-white py-12 px-6 rounded-lg mb-10 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">BE THE FIRST TO KNOW</h3>
        <p className="max-w-xl mx-auto text-gray-300">
          New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row justify-center max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="p-3 border text-gray-900 border-gray-300 rounded sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-yellow-400 flex-grow"
            required
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="bg-black text-white px-6 py-3 mt-2 sm:mt-0 sm:rounded-l-none rounded hover:bg-gray-800 transition-colors"
          >
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </motion.button>
        </form>
      </motion.div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Need Help */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ delay: 0.1 }}
        >
          <h3 className="font-semibold text-lg mb-4">NEED HELP?</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 text-gray-500" />
              <div>
                <p className="font-medium">+92 21 111 112 111</p>
                <p className="text-sm text-gray-500">(Mon-Sat: 9:30am-7:30pm | Sun: 11am-5pm)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-gray-500" />
              <p className="font-medium">eshop@junaidjamshed.com</p>
            </div>
          </div>
        </motion.div>

        {/* Catalogue */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold text-lg mb-4">CATALOGUE</h3>
          <ul className="space-y-3">
            {['Men', 'Women', 'Kids', 'Fragrances'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  to={`/${item.toLowerCase()}`} 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Customer Service */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-semibold text-lg mb-4">CUSTOMER SERVICE</h3>
          <ul className="space-y-3">
            {[
              'Contact Us',
              'Delivery & Orders',
              'Returns & Exchanges',
              'Terms & Conditions',
              'Privacy Policy',
              'Track My Order',
              'Payment Guide'
            ].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  to={`/${item.toLowerCase().replace(/ & | /g, '-')}`} 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Company */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-semibold text-lg mb-4">COMPANY</h3>
          <ul className="space-y-3">
            {['About Us', 'Careers', 'Store Addresses'].map((item) => (
              <motion.li 
                key={item}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Follow Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={footerVariants}
          transition={{ delay: 0.5 }}
        >
          <h3 className="font-semibold text-lg mb-4">FOLLOW US</h3>
          <div className="flex flex-wrap gap-4 text-xl">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-gray-100 ${social.color} transition-colors`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          {/* <div className="mt-6">
            <h4 className="font-medium mb-2">DOWNLOAD OUR APP</h4>
            <div className="flex gap-2">
              <motion.img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-10 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img
                src="/google-play-badge.png"
                alt="Get it on Google Play"
                className="h-10 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          </div> */}
        </motion.div>
      </div>

      {/* Bottom Line */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-500 mt-12 border-t pt-6 pb-4"
      >
        <p>&copy; {new Date().getFullYear()} Junaid Jamshed. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:underline">Terms of Service</Link>
          <Link to="/signin" className="hover:underline">SignIn</Link>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;