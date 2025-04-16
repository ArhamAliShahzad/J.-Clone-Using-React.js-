import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const MenCollection = () => {
  const { addToCart } = useCart();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Helper function for local images with error handling
  const getImage = (num) => {
    try {
      return `/Men/${num}.jpg`;
    } catch {
      return `https://via.placeholder.com/${getPlaceholderSize(num)}?text=J.${num}`;
    }
  };

  const getPlaceholderSize = (num) => {
    if ([1, 2, 23].includes(num)) return "800x500";
    if ([3, 4, 5, 16, 17].includes(num)) return "800x400";
    return "300x400"; // Default for products
  };

  // Enhanced product data for Men's collection
  const productCategories = [
    {
      title: "Aromatics",
      items: [6, 7, 8, 9, 10].map(num => ({
        id: num,
        name: `Premium Perfume ${num}`,
        description: `Luxury fragrance with long-lasting scent - Variant ${num}`,
        price: 4999 + (num * 200),
        originalPrice: 5999 + (num * 200),
        image: getImage(num),
        sizes: ['50ml', '100ml'], // Perfume sizes
        colors: ['Amber', 'Blue', 'Black', 'White'],
        category: "perfume",
        rating: Math.min(5, (4.3 + Math.random()).toFixed(1))
      }))
    },
    {
      title: "Men's Traditional",
      items: [11, 12, 13, 14, 15].map(num => ({
        id: num,
        name: `Traditional Wear ${num}`,
        description: `Authentic traditional clothing - Style ${num}`,
        price: 2999 + (num * 200),
        originalPrice: 3499 + (num * 200),
        image: getImage(num),
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['White', 'Black', 'Blue', 'Brown'],
        category: "traditional",
        rating: Math.min(5, (4.2 + Math.random()).toFixed(1))
      }))
    },
    {
      title: "CAPS",
      items: [18, 19, 20, 21, 22].map(num => ({
        id: num,
        name: `Designer Cap ${num}`,
        description: `Stylish headwear for men - Design ${num}`,
        price: 1499 + (num * 100),
        originalPrice: 1999 + (num * 100),
        image: getImage(num),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Black', 'White', 'Blue', 'Gray'],
        category: "caps",
        rating: Math.min(5, (4.1 + Math.random()).toFixed(1))
      }))
    }
  ];

  const banners = [
    { id: 1, title: "New Arrivals", subtitle: "Discover Our Latest Collection", image: getImage(1), cta: "Shop Now" },
    { id: 2, title: "Summer Essentials", subtitle: "Light & Breathable Fabrics", image: getImage(2), cta: "Explore" },
    { id: 3, title: "UNSTITCHED", image: getImage(3), buttonText: "UNSTITCHED" },
    { id: 4, title: "FOOTWARE", image: getImage(4), buttonText: "FOOTWARE" },
    { id: 5, title: "CAPS", image: getImage(5), buttonText: "CAPS" },
    { id: 16, title: "SWEATERS", image: getImage(16), buttonText: "SWEATERS" },
    { id: 17, title: "WEDDING", image: getImage(17), buttonText: "WEDDING" },
    { id: 23, title: "Complete Your Wardrobe", subtitle: "With Our Exclusive Collection", image: getImage(23), cta: "View All" }
  ];

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
    toast.info(`Size ${size} selected`);
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    if (!selectedSize && product.sizes.length > 1) {
      toast.warning("Please select a size");
      return;
    }

    const cartItem = {
      ...product,
      selectedSize: selectedSize || product.sizes[0]
    };

    addToCart(cartItem);
    toast.success(`${product.name} added to cart`);
  };

  const openQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="w-full text-left max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <nav className="text-sm py-4 px-6 bg-gray-50">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="text-gray-600 hover:text-gray-900">HOME</a></li>
          <li>&gt;</li>
          <li className="font-semibold text-gray-900">MEN'S COLLECTION</li>
        </ol>
      </nav>

      {/* Main Banner Section - 2 images */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {banners.slice(0, 2).map(banner => (
          <div key={banner.id} className="relative h-96 overflow-hidden rounded-xl shadow-lg group">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={(e) => e.target.src = `https://via.placeholder.com/800x500?text=J.${banner.id}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
              <h2 className="text-3xl font-bold text-white mb-2">{banner.title}</h2>
              <p className="text-white mb-4">{banner.subtitle}</p>
              <button className="self-start bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-colors">
                {banner.cta}
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Three Button Section - 3 images */}
      <section className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.slice(2, 5).map(banner => (
            <div key={banner.id} className="relative group overflow-hidden rounded-xl shadow-md">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-80 object-cover object-top transition-all duration-500 group-hover:opacity-90"
                onError={(e) => e.target.src = `https://via.placeholder.com/800x400?text=J.${banner.id}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Aromatics Section - 5 products */}
      <section className="px-6 py-12">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{productCategories[0].title}</h2>
        </header>
        <hr className="border-gray-200 my-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {productCategories[0].items.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              hoveredItem={hoveredItem}
              selectedSizes={selectedSizes}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onSizeSelect={handleSizeSelect}
              onAddToCart={handleAddToCart}
              onQuickView={openQuickView}
            />
          ))}
        </div>
      </section>

      {/* Men's Traditional Section - 5 products */}
      <section className="px-6 py-12">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{productCategories[1].title}</h2>
        </header>
        <hr className="border-gray-200 my-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {productCategories[1].items.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              hoveredItem={hoveredItem}
              selectedSizes={selectedSizes}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onSizeSelect={handleSizeSelect}
              onAddToCart={handleAddToCart}
              onQuickView={openQuickView}
            />
          ))}
        </div>
      </section>

      {/* Two Button Section - 2 images */}
      <section className="px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.slice(5, 7).map(banner => (
            <div key={banner.id} className="relative group overflow-hidden rounded-xl shadow-md">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-80 object-cover object-top transition-all duration-500 group-hover:opacity-90"
                onError={(e) => e.target.src = `https://via.placeholder.com/800x400?text=J.${banner.id}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-center">
                <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all">
                  {banner.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Caps Section - 5 products */}
      <section className="px-6 py-12">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{productCategories[2].title}</h2>
        </header>
        <hr className="border-gray-200 my-6" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {productCategories[2].items.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              hoveredItem={hoveredItem}
              selectedSizes={selectedSizes}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onSizeSelect={handleSizeSelect}
              onAddToCart={handleAddToCart}
              onQuickView={openQuickView}
            />
          ))}
        </div>
      </section>

      {/* Final Banner */}
      <section className="px-6 pb-12">
        <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
          <img
            src={banners[7].image}
            alt={banners[7].title}
            className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
            onError={(e) => e.target.src = `https://via.placeholder.com/1200x500?text=J.${banners[7].id}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20 flex flex-col items-center justify-center text-center p-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{banners[7].title}</h2>
            <p className="text-white mb-6 max-w-2xl">{banners[7].subtitle}</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-black hover:text-white transition-colors duration-300 border-2 border-white hover:border-black">
              {banners[7].cta}
            </button>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          selectedSizes={selectedSizes}
          onSizeSelect={handleSizeSelect}
          onAddToCart={handleAddToCart}
          onClose={closeQuickView}
        />
      )}
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, hoveredItem, selectedSizes, onMouseEnter, onMouseLeave, onSizeSelect, onAddToCart, onQuickView }) => {
  const isPerfume = product.category === "perfume";
  
  return (
    <article
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative h-80 overflow-hidden rounded-xl shadow-sm">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          onError={(e) => e.target.src = `https://via.placeholder.com/300x400?text=J.${product.id}`}
        />

        {/* Sale Badge */}
        {product.originalPrice && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </div>
        )}

        {/* Rating */}
        <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold flex items-center">
          ⭐ {product.rating}
        </div>

        {/* Quick View Button */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 left-3 bg-white/90 text-black px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
        >
          Quick View
        </button>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
        <div className="flex justify-center items-center gap-2 mt-1">
          <p className="text-gray-900 font-bold">Rs. {product.price.toLocaleString()}</p>
          {product.originalPrice && (
            <p className="text-gray-400 text-sm line-through">Rs. {product.originalPrice.toLocaleString()}</p>
          )}
        </div>
      </div>

      {/* Size Buttons */}
      <div className="flex justify-center gap-2 mt-3">
        {product.sizes.map(size => {
          const isPerfumeSize = isPerfume && ['50ml', '100ml'].includes(size);
          return (
            <button
              key={size}
              onClick={() => onSizeSelect(product.id, size)}
              className={`
                ${isPerfumeSize ? 'w-16 h-8 px-3' : 'w-8 h-8 px-0'} 
                rounded-full border text-xs flex items-center justify-center transition-colors 
                ${selectedSizes[product.id] === size
                  ? 'bg-black text-white border-black'
                  : 'border-gray-300 hover:bg-gray-100'
                }
                ${isPerfumeSize ? 'font-medium' : ''}
              `}
            >
              {size}
            </button>
          );
        })}
      </div>

      {/* Add to Bag Button */}
      {hoveredItem === product.id && (
        <button
          onClick={() => onAddToCart(product)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 border-2 border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 shadow-lg"
        >
          Add to Bag
        </button>
      )}
    </article>
  );
};

// Quick View Modal Component
const QuickViewModal = ({ product, selectedSizes, onSizeSelect, onAddToCart, onClose }) => {
  const isPerfume = product.category === "perfume";
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100"
          >
            ✕
          </button>

          <div className="grid md:grid-cols-2 gap-8 p-6">
            <div className="h-96 overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => e.target.src = 'https://via.placeholder.com/500x600?text=Product+Image'}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              {product.description && (
                <p className="text-gray-600 mb-4">{product.description}</p>
              )}

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-bold text-gray-900">
                  Rs. {product.price?.toLocaleString() || '---'}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {product.sizes && (
                <div className="mb-6">
                  <h3 className="font-medium mb-2">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => {
                      const isPerfumeSize = isPerfume && ['50ml', '100ml'].includes(size);
                      return (
                        <button
                          key={size}
                          onClick={() => {
                            onSizeSelect(product.id, size);
                            toast.success(`Size ${size} selected`);
                          }}
                          className={`
                            ${isPerfumeSize ? 'px-6 py-3' : 'px-4 py-2'}
                            border rounded-full transition-colors
                            ${selectedSizes[product.id] === size
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:bg-gray-100'
                            }
                            ${isPerfumeSize ? 'font-medium' : ''}
                          `}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenCollection;