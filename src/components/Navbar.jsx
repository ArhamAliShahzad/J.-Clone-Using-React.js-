import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import PropTypes from 'prop-types';

const Navbar = ({ onSearchClick = () => {}, onThemeToggle = () => {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation data
  const navData = {
    topLinks: [
      { path: '/signin', text: 'Sign In' },
      { path: '/tracking', text: 'Tracking Info' },
      { path: '/corporate', text: 'Corporate Inquiry' },
      { path: '/account', text: 'Create an Account' }
    ],
    mainLinks: [
      { path: '/new', text: 'New' },
      { path: '/Syncc', text: 'Syncc', className: 'tracking-widest' },
      { path: '/cast-crew', text: 'Cast & Crew', className: 'text-gold-500 font-light' },
      { path: '/featured', text: 'Featured Collection', className: 'text-red-600 font-bold' },
    ],
    categoryLinks: [
      { path: '/women', text: 'Women' },
      { path: '/men', text: 'Men' },
      { path: '/boys-girls', text: 'Boys & Girls' },
      { path: '/fragrances', text: 'Fragrances' },
      { path: '/makeup', text: 'Makeup' },
      { path: '/skincare', text: 'Skincare' },
      { text: 'New', className: 'text-red-600' }
    ]
  };

  return (
    <header className={`w-full sticky top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        {/* Top Links */}
        <div className="flex justify-between items-center text-xs text-gray-700 p-2 uppercase">
          <div className="flex flex-wrap gap-x-4">
            {navData.topLinks.map((link, index) => (
              <Link 
                key={`top-${index}`}
                to={link.path}
                className="hover:text-gray-900 transition-colors duration-200"
              >
                {link.text}
              </Link>
            ))}
          </div>
          
          <div className="flex items-center gap-x-4">
            <button 
              onClick={onThemeToggle}
              aria-label="Toggle theme"
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              {/* Theme toggle icon would go here */}
            </button>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col items-center py-0">
          {/* Primary Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 text-sm uppercase py-2">
            {navData.mainLinks.map((link, index) => (
              <Link
                key={`main-${index}`}
                to={link.path}
                className={`hover:text-gray-900 transition-colors ${link.className || ''}`}
              >
                {link.text}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="my-2">
            <Link to="/" aria-label="Home">
              <img 
                src="/J.-logo.webp" 
                alt="J. Logo" 
                className="h-14 w-auto" 
                width={56}
                height={56}
                loading="eager"
              />
            </Link>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-x-6 text-sm uppercase py-2">
            {navData.categoryLinks.map((link, index) => (
              link.path ? (
                <Link
                  key={`category-${index}`}
                  to={link.path}
                  className={`hover:text-gray-900 transition-colors ${link.className || ''}`}
                >
                  {link.text}
                </Link>
              ) : (
                <span key={`category-${index}`} className={link.className}>
                  {link.text}
                </span>
              )
            ))}
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="absolute right-5 top-5 flex gap-x-4 text-xl">
          <button 
            onClick={onSearchClick}
            aria-label="Search"
            className="p-1 hover:text-gray-700 transition-colors"
          >
            <FaSearch />
          </button>
          
          <Link 
            to="/cart" 
            className="relative p-1 hover:text-gray-700 transition-colors"
            aria-label={`Cart (${cartCount} items)`}
          >
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  onSearchClick: PropTypes.func,
  onThemeToggle: PropTypes.func

};

export default memo(Navbar);