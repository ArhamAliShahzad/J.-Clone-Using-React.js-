import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

const WomenCollection = () => {
  const { addToCart } = useCart();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedVolumes, setSelectedVolumes] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Helper function for local images with error handling
  const getImage = (num) => {
    try {
      return `/Women/${num}.jpg`;
    } catch {
      return `https://via.placeholder.com/${getPlaceholderSize(num)}?text=J.${num}`;
    }
  };

  const getPlaceholderSize = (num) => {
    if ([1, 2, 23].includes(num)) return "800x500";
    if ([3, 4, 5, 16, 17].includes(num)) return "800x400";
    return "300x400"; // Default for products
  };

  // Enhanced product data
  const productCategories = [
    {
      title: "TRENDY KURTIS",
      subtitle: "Latest Designer Collection",
      items: [6, 7, 8, 9, 10].map(num => ({
        id: num,
        name: `Designer Kurti ${num}`,
        description: `Premium quality embroidered kurti with matching dupatta - Design ${num}`,
        price: 2499 + (num * 100),
        originalPrice: 2999 + (num * 100),
        image: getImage(num),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Red', 'Blue', 'Green', 'Pink'],
        category: "kurtis",
        rating: Math.min(5, (4 + Math.random()).toFixed(1))
      }))
    },
    {
      title: "ACCESSORIES",
      subtitle: "Complete Your Look",
      items: [11, 12, 13, 14, 15].map(num => ({
        id: num,
        name: `Fashion Accessory ${num}`,
        description: `Elegant accessory to complement your outfit - Style ${num}`,
        price: 999 + (num * 50),
        originalPrice: 1299 + (num * 50),
        image: getImage(num),
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Gold', 'Silver', 'Black'],
        category: "accessories",
        rating: Math.min(5, (4.2 + Math.random()).toFixed(1))
      }))
    },
    {
      title: "FRAGRANCE",
      subtitle: "Luxury Scents",
      items: [18, 19, 20, 21, 22].map(num => ({
        id: num,
        name: `Luxury Perfume ${num}`,
        description: `Long-lasting premium fragrance - Scent ${num}`,
        price: 3499 + (num * 100),
        originalPrice: 3999 + (num * 100),
        image: getImage(num),
        sizes: ['50ml', '100ml'],
        colors: ['Clear', 'Amber'],
        category: "fragrance",
        rating: Math.min(5, (4.5 + Math.random()).toFixed(1))
      }))
    }
  ];

  const banners = [
    { id: 1, title: "New Arrivals", subtitle: "Discover Our Latest Collection", image: getImage(1), cta: "Shop Now" },
    { id: 2, title: "Summer Special", subtitle: "Light & Comfortable Fabrics", image: getImage(2), cta: "Explore" },
    { id: 3, title: "Unstitched Collection", image: getImage(3) },
    { id: 4, title: "Premium Lawn", image: getImage(4) },
    { id: 5, title: "Designer Prints", image: getImage(5) },
    { id: 16, title: "Silk Scarves", image: getImage(16) },
    { id: 17, title: "Embroidered Shawls", image: getImage(17) },
    { id: 23, title: "Complete Your Look", subtitle: "With Our Exclusive Collection", image: getImage(23), cta: "View All" }
  ];

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({
      ...prev,
      [productId]: size
    }));
    toast.info(`Size ${size} selected`);
  };

  const handleVolumeSelect = (productId, volume) => {
    setSelectedVolumes(prev => ({
      ...prev,
      [productId]: volume
    }));
    toast.info(`${volume} selected`);
  };

  const handleAddToCart = (product) => {
    const selectedSize = selectedSizes[product.id];
    const selectedVolume = selectedVolumes[product.id];

    if (product.category === "fragrance" && !selectedVolume) {
      toast.warning("Please select a volume");
      return;
    }

    if (!selectedSize && product.sizes.length > 1 && product.sizes[0] !== 'One Size' && product.category !== "fragrance") {
      toast.warning("Please select a size");
      return;
    }

    const cartItem = {
      ...product,
      selectedSize: selectedSize || product.sizes[0],
      selectedVolume: selectedVolume || null
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
          <li className="font-semibold text-gray-900">WOMEN COLLECTION</li>
        </ol>
      </nav>

      {/* Main Banner Section */}
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

      {/* Unstitched Section */}
      <section className="px-6 py-8">
        <header className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">UNSTITCHED COLLECTION</h2>
          <p className="text-gray-600">Premium fabrics for custom tailoring</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {banners.slice(2, 5).map(banner => (
            <article key={banner.id} className="relative group overflow-hidden rounded-xl shadow-md">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                onError={(e) => e.target.src = `https://via.placeholder.com/800x400?text=J.${banner.id}`}
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-white/90 text-black px-6 py-2 rounded-full font-medium backdrop-blur-sm hover:bg-black hover:text-white transition-all"
                  onClick={() => openQuickView({
                    id: banner.id,
                    name: banner.title,
                    image: banner.image
                  })}
                >
                  Quick View
                </button>
              </div>
              <h3 className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 text-center font-medium text-gray-900 backdrop-blur-sm">
                {banner.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Product Sections */}
      {productCategories.map((category, index) => (
        <section key={index} className={`px-6 py-12 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.subtitle}</p>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {category.items.map(product => (
              <article
                key={product.id}
                className="relative group transition-all duration-300 hover:shadow-lg rounded-xl overflow-hidden"
                onMouseEnter={() => setHoveredItem(product.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="relative h-80 overflow-hidden rounded-xl">
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
                  <div className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded-full text-xs font-semibold flex items-center backdrop-blur-sm">
                    ⭐ {product.rating}
                  </div>

                  {/* Quick View Button */}
                  <button
                    onClick={() => openQuickView(product)}
                    className="absolute top-3 left-3 bg-white/90 text-black px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
                  >
                    Quick View
                  </button>

                  {/* Color Options */}
                  <div className="absolute bottom-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {product.colors.map(color => (
                      <span
                        key={color}
                        className="w-4 h-4 rounded-full border border-white shadow-sm"
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="mt-4 px-2 pb-3">
                  <h3 className="font-medium text-gray-900 line-clamp-1">{product.name}</h3>
                  <div className="flex justify-center items-center gap-2 mt-1">
                    <p className="text-gray-900 font-bold">Rs. {product.price.toLocaleString()}</p>
                    {product.originalPrice && (
                      <p className="text-gray-400 text-sm line-through">Rs. {product.originalPrice.toLocaleString()}</p>
                    )}
                  </div>
                </div>

                {/* Size/Volume Buttons */}
                <div className="px-2 pb-3">
                  {product.category === "fragrance" ? (
                    <div className="flex justify-center gap-2">
                      {product.sizes.map(volume => (
                        <button
                          key={volume}
                          onClick={() => handleVolumeSelect(product.id, volume)}
                          className={`px-3 py-1 rounded-full border text-xs flex items-center justify-center transition-all ${
                            selectedVolumes[product.id] === volume
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {volume}
                        </button>
                      ))}
                    </div>
                  ) : product.category === "accessories" ? (
                    <div className="flex justify-center gap-1">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`w-8 h-8 rounded-full border-2 text-xs flex items-center justify-center transition-all ${
                            selectedSizes[product.id] === size
                              ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white border-transparent shadow-md'
                              : 'border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50'
                          }`}
                          style={{
                            transform: selectedSizes[product.id] === size ? 'scale(1.1)' : 'scale(1)',
                            fontWeight: selectedSizes[product.id] === size ? 'bold' : 'normal'
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex justify-center gap-1">
                      {product.sizes.map(size => (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(product.id, size)}
                          className={`w-8 h-8 rounded-full border text-xs flex items-center justify-center transition-colors ${
                            selectedSizes[product.id] === size
                              ? 'bg-black text-white border-black'
                              : 'border-gray-300 hover:bg-gray-100'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Add to Bag Button */}
                {hoveredItem === product.id && (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 border-2 border-black text-black px-6 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 shadow-lg backdrop-blur-sm"
                  >
                    Add to Bag
                  </button>
                )}
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Scarves Section */}
      <section className="px-6 py-12 border-t border-gray-200">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">DESIGNER SCARVES</h2>
          <p className="text-gray-600">Elegant accessories for every occasion</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {banners.slice(5, 7).map(banner => (
            <article key={banner.id} className="relative group overflow-hidden rounded-xl shadow-md">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                onError={(e) => e.target.src = `https://via.placeholder.com/800x400?text=J.${banner.id}`}
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                  className="bg-white/90 text-black px-6 py-2 rounded-full font-medium backdrop-blur-sm hover:bg-black hover:text-white transition-all"
                  onClick={() => openQuickView({
                    id: banner.id,
                    name: banner.title,
                    image: banner.image
                  })}
                >
                  Quick View
                </button>
              </div>
              <h3 className="absolute bottom-0 left-0 right-0 bg-white/80 py-3 text-center font-medium text-gray-900 backdrop-blur-sm">
                {banner.title}
              </h3>
            </article>
          ))}
        </div>
      </section>

      {/* Final Banner */}
      <section className="px-6 pb-12">
        <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-lg group">
          <img
            src={banners[7].image}
            alt={banners[7].title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeQuickView}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-100 transition-colors"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-6">
                <div className="h-96 overflow-hidden rounded-lg">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => e.target.src = 'https://via.placeholder.com/500x600?text=Product+Image'}
                  />
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-2">{quickViewProduct.name}</h2>
                  {quickViewProduct.description && (
                    <p className="text-gray-600 mb-4">{quickViewProduct.description}</p>
                  )}

                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-2xl font-bold text-gray-900">
                      Rs. {quickViewProduct.price?.toLocaleString() || '---'}
                    </span>
                    {quickViewProduct.originalPrice && (
                      <span className="text-gray-400 line-through">
                        Rs. {quickViewProduct.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {/* Color Options */}
                  {quickViewProduct.colors && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">Colors</h3>
                      <div className="flex gap-2">
                        {quickViewProduct.colors.map(color => (
                          <span
                            key={color}
                            className="w-8 h-8 rounded-full border border-gray-200 shadow-sm"
                            style={{ backgroundColor: color.toLowerCase() }}
                            title={color}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Size/Volume Selection */}
                  {quickViewProduct.sizes && (
                    <div className="mb-6">
                      <h3 className="font-medium mb-2">
                        {quickViewProduct.category === "fragrance" ? "Volume" : "Size"}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {quickViewProduct.sizes.map(size => (
                          <button
                            key={size}
                            onClick={() => {
                              if (quickViewProduct.category === "fragrance") {
                                handleVolumeSelect(quickViewProduct.id, size);
                              } else {
                                handleSizeSelect(quickViewProduct.id, size);
                              }
                              toast.success(`${quickViewProduct.category === "fragrance" ? "Volume" : "Size"} ${size} selected`);
                            }}
                            className={`px-4 py-2 border rounded-full transition-all ${
                              (quickViewProduct.category === "fragrance"
                                ? selectedVolumes[quickViewProduct.id] === size
                                : selectedSizes[quickViewProduct.id] === size)
                                ? 'bg-black text-white border-black'
                                : 'border-gray-300 hover:bg-gray-100'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      handleAddToCart(quickViewProduct);
                      closeQuickView();
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
      )}
    </div>
  );
};

export default WomenCollection;