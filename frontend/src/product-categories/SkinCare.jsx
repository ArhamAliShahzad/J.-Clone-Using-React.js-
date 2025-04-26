import React, { useState } from 'react';
import { FiShoppingBag, FiHeart, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'HAIR MIST - J. POUR FEMME',
    price: 1800.00,
    originalPrice: 2200.00,
    image: '/SkinCare/1.webp',
    images: ['/SkinCare/1.webp', '/SkinCare/1.webp'], // Using same image as placeholder
    category: 'Hair Care',
    rating: 4.5,
    reviews: 128,
    description: 'Luxurious hair mist with floral notes for all-day freshness',
    ingredients: 'Rose water, Vitamin E, Natural extracts',
    isNew: true,
    isBestSeller: false
  },
  {
    id: 2,
    name: 'HAIR MIST - UROOSA',
    price: 1800.00,
    originalPrice: 2000.00,
    image: '/SkinCare/2.webp',
    images: ['/SkinCare/2.webp', '/SkinCare/2.webp'],
    category: 'Hair Care',
    rating: 4.2,
    reviews: 95,
    description: 'Refreshing hair mist with fruity notes',
    ingredients: 'Aloe vera, Fruit extracts, Vitamin B5',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 3,
    name: 'HAIR MIST - WASIM AKRAM 502 FOR HER',
    price: 1800.00,
    image: '/SkinCare/3.webp',
    images: ['/SkinCare/3.webp', '/SkinCare/3.webp'],
    category: 'Hair Care',
    rating: 4.7,
    reviews: 215,
    description: 'Elegant fragrance mist for sophisticated women',
    ingredients: 'Jasmine extract, Sandalwood oil',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 4,
    name: 'LA LUMIERE RADIANCE TONER',
    price: 4800.00,
    originalPrice: 5500.00,
    image: '/SkinCare/4.webp',
    images: ['/SkinCare/4.webp', '/SkinCare/4.webp'],
    category: 'Skin Care',
    rating: 4.8,
    reviews: 342,
    description: 'Illuminating toner for radiant complexion',
    ingredients: 'Hyaluronic acid, Niacinamide, Licorice root',
    isNew: true,
    isBestSeller: true
  },
  {
    id: 5,
    name: 'LA PERFECTION HYDRATING SERUM',
    price: 3500.00,
    image: '/SkinCare/5.webp',
    images: ['/SkinCare/5.webp', '/SkinCare/5.webp'],
    category: 'Skin Care',
    rating: 4.6,
    reviews: 278,
    description: 'Deep hydration serum for plump, youthful skin',
    ingredients: 'Ceramides, Squalane, Peptides',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 6,
    name: 'LA REGENERATION BEAUTY CREAM',
    price: 4500.00,
    originalPrice: 5000.00,
    image: '/SkinCare/6.webp',
    images: ['/SkinCare/6.webp', '/SkinCare/6.webp'],
    category: 'Skin Care',
    rating: 4.9,
    reviews: 412,
    description: 'Anti-aging cream for cellular renewal',
    ingredients: 'Retinol, Vitamin C, Collagen',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 7,
    name: 'LA SEDUCTION ANTI AGING SERUM',
    price: 3500.00,
    image: '/SkinCare/7.webp',
    images: ['/SkinCare/7.webp', '/SkinCare/7.webp'],
    category: 'Skin Care',
    rating: 4.4,
    reviews: 187,
    description: 'Powerful serum to combat signs of aging',
    ingredients: 'Bakuchiol, Hyaluronic acid, Green tea extract',
    isNew: true,
    isBestSeller: false
  },
  {
    id: 8,
    name: 'INTENSE CARE FOOT CREAM',
    price: 2300.00,
    originalPrice: 2800.00,
    image: '/SkinCare/8.webp',
    images: ['/SkinCare/8.webp', '/SkinCare/8.webp'],
    category: 'Foot Care',
    rating: 4.3,
    reviews: 156,
    description: 'Intensive moisturizer for soft, smooth feet',
    ingredients: 'Urea, Shea butter, Tea tree oil',
    isNew: false,
    isBestSeller: false
  },
  {
    id: 9,
    name: 'WILD SPIRIT - PERFUME HAND CREAM',
    price: 1200.00,
    image: '/SkinCare/9.webp',
    images: ['/SkinCare/9.webp', '/SkinCare/9.webp'],
    category: 'Hand Care',
    rating: 4.1,
    reviews: 89,
    description: 'Fragranced hand cream with long-lasting scent',
    ingredients: 'Jojoba oil, Vitamin E, Fragrance oils',
    isNew: true,
    isBestSeller: false
  },
  {
    id: 10,
    name: 'TROPICAL BLISS - PERFUME HAND CREAM',
    price: 1200.00,
    originalPrice: 1500.00,
    image: '/SkinCare/10.webp',
    images: ['/SkinCare/10.webp', '/SkinCare/10.webp'],
    category: 'Hand Care',
    rating: 4.5,
    reviews: 134,
    description: 'Exotic scented hand cream for daily pampering',
    ingredients: 'Coconut oil, Mango butter, Tropical fragrance',
    isNew: false,
    isBestSeller: true
  }
];

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 2
    }).format(price);
  };

  const renderRatingStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCartClick = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <motion.div
      className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
        {product.isNew && (
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        )}
        {product.isBestSeller && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            BESTSELLER
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        className={`absolute top-3 right-3 p-2 rounded-full z-10 transition-all duration-300 ${isWishlist ? 'text-rose-500 scale-110' : 'text-gray-400 hover:text-rose-500'}`}
        onClick={(e) => {
          e.stopPropagation();
          setIsWishlist(!isWishlist);
        }}
      >
        <FiHeart className={`w-5 h-5 ${isWishlist ? 'fill-current' : ''}`} />
      </button>

      {/* Product Image Gallery */}
      <div className="relative h-80 overflow-hidden group cursor-pointer" onClick={() => setQuickViewOpen(true)}>
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={product.images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Image Navigation Arrows */}
        {product.images.length > 1 && isHovered && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300 z-10"
              onClick={prevImage}
            >
              <FiChevronLeft className="text-gray-800" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-md hover:bg-opacity-100 transition-all duration-300 z-10"
              onClick={nextImage}
            >
              <FiChevronRight className="text-gray-800" />
            </button>
          </>
        )}

        {/* Quick View Button */}
        <button
          className={`absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center space-x-2`}
          onClick={(e) => {
            e.stopPropagation();
            setQuickViewOpen(true);
          }}
        >
          <FiZoomIn className="w-4 h-4" />
          <span>QUICK VIEW</span>
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {product.category}
          </span>
          <div className="flex items-center">
            {renderRatingStars(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14 leading-tight">
          {product.name}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <p className="text-xl font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">
              {formatPrice(product.originalPrice)}
            </p>
          )}
        </div>

        <motion.button
          className="w-full flex items-center justify-center py-3 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 relative overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleAddToCartClick}
        >
          <span className="relative z-10 flex items-center">
            <FiShoppingBag className="mr-2" />
            ADD TO BAG
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-rose-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setQuickViewOpen(false)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={product.images[currentImageIndex]}
                        alt={product.name}
                        className="w-full h-full object-contain"
                      />
                      {product.images.length > 1 && (
                        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                          {product.images.map((_, index) => (
                            <button
                              key={index}
                              className={`w-3 h-3 rounded-full ${currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-300'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentImageIndex(index);
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                    <div className="flex items-center mb-4">
                      {renderRatingStars(product.rating)}
                      <span className="text-gray-500 ml-2 text-sm">({product.reviews} reviews)</span>
                    </div>

                    <div className="mb-6">
                      {product.originalPrice ? (
                        <div className="flex items-center space-x-4">
                          <p className="text-2xl font-bold text-gray-900">
                            {formatPrice(product.price)}
                          </p>
                          <p className="text-lg text-gray-500 line-through">
                            {formatPrice(product.originalPrice)}
                          </p>
                          <p className="text-sm bg-rose-100 text-rose-800 px-2 py-1 rounded">
                            Save {formatPrice(product.originalPrice - product.price)}
                          </p>
                        </div>
                      ) : (
                        <p className="text-2xl font-bold text-gray-900">
                          {formatPrice(product.price)}
                        </p>
                      )}
                    </div>

                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-2">Key Ingredients:</h4>
                      <p className="text-gray-600">{product.ingredients}</p>
                    </div>

                    <button
                      className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToCart(product);
                        setQuickViewOpen(false);
                      }}
                    >
                      <FiShoppingBag className="mr-2" />
                      ADD TO BAG
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const SkinCare = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [showCartNotification, setShowCartNotification] = useState(false);

  const categories = ['All', ...new Set(products.map(product => product.category))];

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(product => product.category === activeCategory);

  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setShowCartNotification(true);
    setTimeout(() => setShowCartNotification(false), 3000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cart Notification */}
      <AnimatePresence>
        {showCartNotification && (
          <motion.div
            className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span>Item added to cart!</span>
            <span className="ml-2 font-bold">{cartItems.length}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxurious Skin Care Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover premium skincare products crafted with natural ingredients for radiant, healthy-looking skin
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <motion.button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${activeCategory === category ? 'bg-gray-900 text-white' : 'bg-white text-gray-800 hover:bg-gray-100 shadow-sm'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkinCare;