import React, { useRef, useState, useEffect, useCallback } from "react";
import { FiChevronLeft, FiChevronRight, FiHeart, FiShoppingCart, FiZoomIn } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [favorites, setFavorites] = useState(new Set());
  const [quickView, setQuickView] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const scrollInterval = useRef(null);

  // Product data with names, descriptions, and prices
  const products = {
    1: {
      name: "Summer Collection Banner",
      description: "Discover our latest summer fashion trends",
      price: null
    },
    2: {
      name: "Premium Unstitched Fabric",
      description: "3-piece premium lawn fabric for custom tailoring",
      price: 5999
    },
    3: {
      name: "Cotton Kameez Shalwar",
      description: "Pure cotton ready-to-wear kameez shalwar suit",
      price: 3499
    },
    4: {
      name: "Embroidered Stitched Suit",
      description: "Ready-made embroidered formal suit with dupatta",
      price: 4999
    },
    5: {
      name: "Designer Kurta",
      description: "Handcrafted designer kurta with intricate detailing",
      price: 3999
    },
    6: {
      name: "Summer Lawn Collection",
      description: "Breathable summer lawn suits in vibrant prints",
      price: 4599
    },
    7: {
      name: "Formal Evening Wear",
      description: "Elegant formal wear for special occasions",
      price: 6999
    },
    8: {
      name: "Casual Daily Wear",
      description: "Comfortable daily wear suits with matching dupatta",
      price: 2999
    },
    9: {
      name: "Bridal Collection",
      description: "Exquisite bridal wear with heavy embroidery",
      price: 15999
    },
    10: {
      name: "Festival Special",
      description: "Traditional outfits perfect for Eid celebrations",
      price: 5499
    },
    11: {
      name: "Office Wear Collection",
      description: "Sophisticated formal wear for professional women",
      price: 4999
    },
    12: {
      name: "Party Wear Collection",
      description: "Stylish party wear with modern cuts",
      price: 6499
    },
    13: {
      name: "Winter Collection",
      description: "Warm winter outfits with premium fabrics",
      price: 5999
    },
    14: {
      name: "Designer Shawls",
      description: "Hand-embroidered premium shawls",
      price: 3499
    },
    15: {
      name: "Kids Collection",
      description: "Adorable outfits for young girls",
      price: 2499
    },
    16: {
      name: "Modest Wear",
      description: "Contemporary modest fashion collection",
      price: 3999
    },
    17: {
      name: "Luxury Pret",
      description: "High-end ready-to-wear collection",
      price: 8999
    },
    18: {
      name: "Casual Kurtis",
      description: "Comfortable kurtis for everyday wear",
      price: 1999
    },
    19: {
      name: "Designer Dupattas",
      description: "Handcrafted designer dupattas",
      price: 1499
    },
    20: {
      name: "Formal Abayas",
      description: "Elegant abayas for formal occasions",
      price: 4999
    },
    21: {
      name: "Traditional Khaddar",
      description: "Authentic khaddar winter collection",
      price: 4499
    },
    22: {
      name: "Designer Accessories",
      description: "Matching accessories for complete look",
      price: 999
    }
  };

  const items = Array.from({ length: 12 }, (_, i) => i + 6);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add to cart functionality
  const addToCart = (productId) => {
    const product = products[productId];
    if (!product || !product.price) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          id: productId,
          name: product.name,
          price: product.price,
          quantity: 1
        }];
      }
    });

    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  // Enhanced smooth scroll with momentum and edge detection
  const scroll = useCallback((direction) => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const itemWidth = 256;
    let newScrollLeft;

    if (direction === 'left') {
      newScrollLeft = Math.max(0, scrollLeft - itemWidth);
      setActiveIndex(prev => Math.max(0, prev - 1));
    } else {
      newScrollLeft = Math.min(scrollWidth - clientWidth, scrollLeft + itemWidth);
      setActiveIndex(prev => Math.min(items.length - 1, prev + 1));
    }

    scrollRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  }, [items.length]);

  // Auto scroll with momentum, pause on hover, and configurable speed
  useEffect(() => {
    if (isPaused) {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
        scrollInterval.current = null;
      }
      return;
    }

    scrollInterval.current = setInterval(() => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

      scrollRef.current.scrollTo({
        left: isAtEnd ? 0 : scrollLeft + 300,
        behavior: 'smooth'
      });

      setActiveIndex(prev => isAtEnd ? 0 : prev + 1);
    }, 3000);

    return () => {
      if (scrollInterval.current) {
        clearInterval(scrollInterval.current);
      }
    };
  }, [isPaused]);

  // Keyboard navigation with debounce
  useEffect(() => {
    let timeoutId = null;

    const handleKeyDown = (e) => {
      if (timeoutId) return;

      if (e.key === 'ArrowLeft') {
        scroll('left');
        timeoutId = setTimeout(() => { timeoutId = null; }, 300);
      } else if (e.key === 'ArrowRight') {
        scroll('right');
        timeoutId = setTimeout(() => { timeoutId = null; }, 300);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [scroll]);

  // Scroll to active index with boundary checks
  useEffect(() => {
    if (!scrollRef.current) return;

    const itemWidth = 256;
    const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
    const targetScroll = Math.min(activeIndex * itemWidth, maxScroll);

    scrollRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [activeIndex]);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  // Image card animation variants with enhanced effects
  const imageVariants = {
    hover: {
      scale: 1.05,
      opacity: 0.9,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    rest: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  // Quick view modal
  const QuickViewModal = ({ itemId, onClose }) => {
    const product = products[itemId];
    if (!product) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Close quick view"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 h-full">
            <div className="relative h-96 md:h-full">
              <img
                src={`/New-Arrivals/${itemId}.jpg`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 overflow-y-auto">
              <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
              {product.price && <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>}
              <p className="text-gray-700 mb-6">{product.description}</p>
              <div className="flex space-x-4 mb-6">
                <button
                  className={`flex items-center justify-center p-2 rounded-full ${favorites.has(itemId) ? 'text-red-500' : 'text-gray-400'} hover:bg-gray-100 transition-colors`}
                  onClick={() => toggleFavorite(itemId)}
                  aria-label={favorites.has(itemId) ? "Remove from favorites" : "Add to favorites"}
                >
                  <FiHeart className="w-5 h-5" fill={favorites.has(itemId) ? "currentColor" : "none"} />
                </button>
                <button
                  className="flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center"
                  onClick={() => {
                    addToCart(itemId);
                  }}
                >
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <h4 className="font-semibold mb-2">Details</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Material: {product.name.includes('Cashmere') ? '100% Cashmere' :
                    product.name.includes('Leather') ? 'Genuine Leather' :
                      product.name.includes('Silk') ? '100% Silk' :
                        product.name.includes('Linen') ? '100% Linen' :
                          '100% Cotton'}</li>
                  <li>Care: {product.name.includes('Cashmere') ? 'Dry clean only' :
                    product.name.includes('Silk') ? 'Hand wash cold' :
                      'Machine wash cold'}</li>
                  <li>Fit: {product.name.includes('Slim') ? 'Slim fit' : 'Regular fit'}</li>
                  <li>Shipping: Free on orders over $50</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb Navigation */}
      <nav className="py-4 px-6 bg-gray-50 border-b border-gray-200">
        <ol className="flex items-center space-x-2 max-w-7xl mx-auto">
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              HOME
            </a>
          </li>
          <li className="text-gray-400">/</li>
          <li className="font-semibold text-gray-900">New Arrivals</li>
        </ol>
      </nav>

      {/* Main Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
          className="relative cursor-pointer"
        >
          <img
            src="/New-Arrivals/1.jpg"
            alt={products[1].name}
            className="w-full h-auto rounded-lg shadow-md object-cover object-top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 rounded-lg" />
        </motion.div>
      </div>

      {/* Image Grid Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Two Column Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[2, 3].map((num) => (
            <motion.div
              key={num}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={imageVariants}
              className="relative cursor-pointer group"
            >
              <img
                src={`/New-Arrivals/${num}.jpg`}
                alt={products[num]?.name || `New Arrival ${num}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className={`p-2 rounded-full bg-white hover:bg-gray-100 transition-colors ${favorites.has(num) ? 'text-red-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(num);
                  }}
                  aria-label={favorites.has(num) ? "Remove from favorites" : "Add to favorites"}
                >
                  <FiHeart className="w-4 h-4" fill={favorites.has(num) ? "currentColor" : "none"} />
                </button>
                <button
                  className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickView(num);
                  }}
                  aria-label="Quick view"
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <p className="text-white font-medium">{products[num]?.name || 'Product Name'}</p>
                {products[num]?.price && <p className="text-white text-sm">${products[num].price.toFixed(2)}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[4, 5].map((num) => (
            <motion.div
              key={num}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={imageVariants}
              className="relative cursor-pointer group"
            >
              <img
                src={`/New-Arrivals/${num}.jpg`}
                alt={products[num]?.name || `New Arrival ${num}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className={`p-2 rounded-full bg-white hover:bg-gray-100 transition-colors ${favorites.has(num) ? 'text-red-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(num);
                  }}
                  aria-label={favorites.has(num) ? "Remove from favorites" : "Add to favorites"}
                >
                  <FiHeart className="w-4 h-4" fill={favorites.has(num) ? "currentColor" : "none"} />
                </button>
                <button
                  className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickView(num);
                  }}
                  aria-label="Quick view"
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <p className="text-white font-medium">{products[num]?.name || 'Product Name'}</p>
                {products[num]?.price && <p className="text-white text-sm">${products[num].price.toFixed(2)}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Horizontal Scroll Section */}
        <div className="py-4 relative group">
          <div className="flex justify-between items-center mb-4 px-2">
            <h2 className="text-2xl font-bold text-gray-800">Featured Collection</h2>
            <div className="flex space-x-2">
              <motion.button
                onClick={() => scroll('left')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Scroll left"
              >
                <FiChevronLeft className="w-5 h-5 text-gray-800" />
              </motion.button>
              <motion.button
                onClick={() => scroll('right')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                aria-label="Scroll right"
              >
                <FiChevronRight className="w-5 h-5 text-gray-800" />
              </motion.button>
            </div>
          </div>

          {/* Scroll Indicators */}
          <div className="flex justify-center space-x-2 mb-4">
            {items.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-1 rounded-full ${index === activeIndex ? 'bg-gray-800 w-6' : 'bg-gray-300'} transition-all duration-200`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>

          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence>
              {items.map((num) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0.9 }}
                  whileHover={{
                    scale: 1.05,
                    opacity: 1
                  }}
                  className="relative flex-shrink-0 w-64 h-64 snap-start cursor-pointer group"
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setIsHovering(num)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <img
                    src={`/New-Arrivals/${isHovering === num ? `${num}-hover` : num}.jpg`}
                    alt={products[num]?.name || `New Arrival ${num}`}
                    className="w-full h-full object-cover object-top rounded-lg shadow-md transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />

                  {/* Product Info Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg"
                  >
                    <p className="text-white font-medium">{products[num]?.name || 'Product Name'}</p>
                    {products[num]?.price && <p className="text-white text-sm">${products[num].price.toFixed(2)}</p>}
                  </motion.div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className={`p-2 rounded-full ${favorites.has(num) ? 'bg-red-500 text-white' : 'bg-white text-gray-700'} hover:bg-opacity-90 transition-colors`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(num);
                      }}
                      aria-label={favorites.has(num) ? "Remove from favorites" : "Add to favorites"}
                    >
                      <FiHeart className="w-4 h-4" fill={favorites.has(num) ? "white" : "none"} />
                    </button>
                    <button
                      className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setQuickView(num);
                      }}
                      aria-label="Quick view"
                    >
                      <FiZoomIn className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[18, 19, 20].map((num) => (
            <motion.div
              key={num}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={imageVariants}
              className="relative cursor-pointer group"
            >
              <img
                src={`/New-Arrivals/${num}.jpg`}
                alt={products[num]?.name || `New Arrival ${num}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className={`p-2 rounded-full bg-white hover:bg-gray-100 transition-colors ${favorites.has(num) ? 'text-red-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(num);
                  }}
                  aria-label={favorites.has(num) ? "Remove from favorites" : "Add to favorites"}
                >
                  <FiHeart className="w-4 h-4" fill={favorites.has(num) ? "currentColor" : "none"} />
                </button>
                <button
                  className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickView(num);
                  }}
                  aria-label="Quick view"
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <p className="text-white font-medium">{products[num]?.name || 'Product Name'}</p>
                {products[num]?.price && <p className="text-white text-sm">${products[num].price.toFixed(2)}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Two Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
          {[21, 22].map((num) => (
            <motion.div
              key={num}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={imageVariants}
              className="relative cursor-pointer group"
            >
              <img
                src={`/New-Arrivals/${num}.jpg`}
                alt={products[num]?.name || `New Arrival ${num}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg" />
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className={`p-2 rounded-full bg-white hover:bg-gray-100 transition-colors ${favorites.has(num) ? 'text-red-500' : 'text-gray-700'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(num);
                  }}
                  aria-label={favorites.has(num) ? "Remove from favorites" : "Add to favorites"}
                >
                  <FiHeart className="w-4 h-4" fill={favorites.has(num) ? "currentColor" : "none"} />
                </button>
                <button
                  className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors text-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setQuickView(num);
                  }}
                  aria-label="Quick view"
                >
                  <FiZoomIn className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg">
                <p className="text-white font-medium">{products[num]?.name || 'Product Name'}</p>
                {products[num]?.price && <p className="text-white text-sm">${products[num].price.toFixed(2)}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickView && (
          <QuickViewModal
            itemId={quickView}
            onClose={() => setQuickView(null)}
          />
        )}
      </AnimatePresence>

      {/* Cart Notification */}
      <AnimatePresence>
        {showCartNotification && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center"
          >
            <FiShoppingCart className="mr-2" />
            {cart.reduce((total, item) => total + item.quantity, 0)} items (Total: ${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)})
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global styles */}
      <style jsx global>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        img {
          transition: opacity 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default NewArrivals;