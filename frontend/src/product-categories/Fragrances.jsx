import React, { useState } from 'react';

const FragrancesPage = () => {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(36);
  const [sortBy, setSortBy] = useState('BEST SELLING');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFragranceType, setSelectedFragranceType] = useState('All');
  const [selectedSize, setSelectedSize] = useState('All');

  // Complete product data with image paths
  const fragrances = [
    { id: 1, name: "MARJAAN", price: 2800, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/1.png" },
    { id: 2, name: "WASIM AKRAM 502", price: 5900, category: "Men", type: "Perfume", size: "50ml", image: "/Fragrances/2.png" },
    { id: 3, name: "WASIM AKRAM 502 FOR HER", price: 6100, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/3.png" },
    { id: 4, name: "KHUMAR", price: 4300, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/4.png" },
    { id: 5, name: "EDGE", price: 5800, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/5.png" },
    { id: 6, name: "UROOSA", price: 3000, category: "Women", type: "Perfume", size: "50ml", image: "/Fragrances/6.png" },
    { id: 7, name: "ZARAR GOLD", price: 4400, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/7.png" },
    { id: 8, name: "ESSENCE", price: 5000, category: "Unisex", type: "Perfume", size: "100ml", image: "/Fragrances/8.png" },
    { id: 9, name: "WASIM AKRAM 414", price: 5300, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/9.png" },
    { id: 10, name: "OUD-AL-JUNAID", price: 4400, category: "Men", type: "Attar", size: "30ml", image: "/Fragrances/10.png" },
    { id: 11, name: "INTENSO", price: 5000, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/11.png" },
    { id: 12, name: "BLOOM", price: 4900, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/12.png" },
    { id: 13, name: "J. POUR FEMME", price: 5000, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/13.png" },
    { id: 14, name: "XPOSE", price: 6300, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/14.png" },
    { id: 15, name: "MIKA", price: 3000, category: "Women", type: "Perfume", size: "50ml", image: "/Fragrances/15.png" },
    { id: 16, name: "J.EXCLUSIVE", price: 4300, category: "Unisex", type: "Perfume", size: "100ml", image: "/Fragrances/16.png" },
    { id: 17, name: "WHITE MUSK", price: 4500, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/17.png" },
    { id: 18, name: "ADDICTED", price: 5700, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/18.png" },
    { id: 19, name: "RHYTHM POUR HOMME", price: 5000, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/19.png" },
    { id: 20, name: "VOCAL", price: 7000, category: "Unisex", type: "Perfume", size: "100ml", image: "/Fragrances/20.png" },
    { id: 21, name: "JANAN GOLD POUR HOMME", price: 700, category: "Men", type: "Body Spray", size: "200ml", image: "/Fragrances/21.png" },
    { id: 22, name: "ESCENT OF APPEAL", price: 5000, category: "Women", type: "Gift Set", size: "100ml", image: "/Fragrances/22.png" },
    { id: 23, name: "J.EXCLUSIVE INTENSE", price: 4500, category: "Unisex", type: "Perfume", size: "100ml", image: "/Fragrances/23.png" },
    { id: 24, name: "AZBAH", price: 2800, category: "Women", type: "Perfume", size: "50ml", image: "/Fragrances/24.png" },
    { id: 25, name: "SHAHEER", price: 4400, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/25.png" },
    { id: 26, name: "SPARK", price: 5000, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/26.png" },
    { id: 27, name: "TAREEKH", price: 4100, category: "Men", type: "Attar", size: "30ml", image: "/Fragrances/27.png" },
    { id: 28, name: "UROOSA NOIR", price: 3000, category: "Women", type: "Perfume", size: "50ml", image: "/Fragrances/28.png" },
    { id: 29, name: "WHITE MUSK POUR HOMME", price: 700, category: "Men", type: "Body Spray", size: "200ml", image: "/Fragrances/29.png" },
    { id: 30, name: "TOPAZ", price: 1300, category: "Women", type: "Perfume", size: "50ml", image: "/Fragrances/30.png" },
    { id: 31, name: "OUDH QADIM", price: 5000, category: "Men", type: "Attar", size: "30ml", image: "/Fragrances/31.png" },
    { id: 32, name: "KOMAL", price: 4400, category: "Women", type: "Perfume", size: "100ml", image: "/Fragrances/32.png" },
    { id: 33, name: "MUSK-E-SHAHEER", price: 2800, category: "Men", type: "Attar", size: "30ml", image: "/Fragrances/33.png" },
    { id: 34, name: "EMERALD", price: 1300, category: "Women", type: "Perfume", size: "50ml", image: "/Fragrances/34.png" },
    { id: 35, name: "MAN BY J.", price: 5000, category: "Men", type: "Perfume", size: "100ml", image: "/Fragrances/35.png" },
    { id: 36, name: "JANAN SPORT", price: 700, category: "Men", type: "Body Spray", size: "200ml", image: "/Fragrances/36.png" }
  ];

  // Filter and sort products
  const filteredProducts = fragrances
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .filter(product => selectedFragranceType === 'All' || product.type === selectedFragranceType)
    .filter(product => selectedSize === 'All' || product.size === selectedSize)
    .sort((a, b) => {
      switch(sortBy) {
        case 'PRICE: LOW TO HIGH': return a.price - b.price;
        case 'PRICE: HIGH TO LOW': return b.price - a.price;
        case 'NEWEST': return b.id - a.id;
        default: return a.id - b.id; // Default/Best Selling
      }
    });

  // Pagination logic
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8">
      {/* Shopping Options Section */}
      <div className="mb-8 border-b pb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">SHOPPING OPTIONS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-2">CATEGORY</h2>
            <div className="flex flex-wrap gap-2">
              {["All", "Men", "Women", "Unisex"].map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedCategory === category 
                      ? 'bg-black text-white' 
                      : 'border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Fragrance Category Filter */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-2">FRAGRANCE CATEGORY</h2>
            <div className="flex flex-wrap gap-2">
              {["All", "Perfume", "Body Spray", "Attar", "Gift Set"].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedFragranceType === type 
                      ? 'bg-black text-white' 
                      : 'border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setSelectedFragranceType(type);
                    setCurrentPage(1);
                  }}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Size Filter */}
          <div>
            <h2 className="font-semibold text-gray-700 mb-2">SIZE</h2>
            <div className="flex flex-wrap gap-2">
              {["All", "30ml", "50ml", "100ml", "200ml"].map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    selectedSize === size 
                      ? 'bg-black text-white' 
                      : 'border border-gray-300 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setSelectedSize(size);
                    setCurrentPage(1);
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <p className="text-sm text-gray-600 mb-2 md:mb-0">
          ITEMS {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, totalItems)} OF {totalItems}
        </p>
        
        <div className="flex items-center">
          <span className="text-sm text-gray-600 mr-2">SORT BY</span>
          <select 
            className="border border-gray-300 rounded px-3 py-1 text-sm"
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>BEST SELLING</option>
            <option>PRICE: LOW TO HIGH</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>NEWEST</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-100 mb-3 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/placeholder.png";
                  }}
                />
              </div>
              <h3 className="font-medium text-gray-800 text-center mb-1 text-sm md:text-base line-clamp-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-center mb-3 text-sm md:text-base">
                PKR {product.price.toLocaleString()}.00
              </p>
              <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm md:text-base">
                ADD TO BAG
              </button>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500">No products found matching your filters</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentPage === page ? 'bg-black text-white' : 'bg-white border border-gray-300 text-gray-700'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
          </div>
          
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">SHOW</span>
            <select 
              className="border border-gray-300 rounded px-3 py-1 text-sm"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
            >
              <option value={12}>12 PER PAGE</option>
              <option value={24}>24 PER PAGE</option>
              <option value={36}>36 PER PAGE</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default FragrancesPage;