import React from "react";

const BoysGirls = () => {
  // Image configuration
  const sections = {
    mainBanners: [
      {
        title: "KID GIRLS COLLECTION",
        image: '/boysgirls/1.jpg',
        fallback: 'https://images.unsplash.com/photo-1594911440190-7c1a774bfd0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&facepad=3',
        color: 'bg-pink-500 hover:bg-pink-900',
        position: 'left'
      },
      {
        title: "KID BOYS COLLECTION",
        image: '/boysgirls/2.jpg',
        fallback: 'https://images.unsplash.com/photo-1582481725274-d6c4b1fc1a9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&facepad=3',
        color: 'bg-blue-600 hover:bg-blue-700',
        position: 'right'
      }
    ],
    teenBanners: [
      {
        title: "TEEN BOYS",
        image: '/boysgirls/8.jpg',
        fallback: 'https://images.unsplash.com/photo-1527698266440-12104e498b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&facepad=3',
        color: 'bg-yellow-500 hover:bg-yellow-600',
        position: 'left'
      },
      {
        title: "TEEN GIRLS",
        image: '/boysgirls/9.jpg',
        fallback: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80&facepad=3',
        color: 'bg-red-600 hover:bg-red-700',
        position: 'right'
      }
    ],
    products: Array.from({length: 5}, (_, i) => ({
      id: i+3,
      price: 1299 + (i * 100),
      title: `Product ${i+3}`,
      image: `/boysgirls/${i+3}.jpg`,
      fallback: `https://source.unsplash.com/random/300x400/?kids,face,${i+1}`
    })),
    categories: [
      {
        name: "T-Shirts",
        image: "/boysgirls/T-Shirts.jpg",
        fallback: "https://source.unsplash.com/random/300x300/?kids,tshirt"
      },
      {
        name: "Jeans",
        image: "/boysgirls/Jeans.jpg",
        fallback: "https://source.unsplash.com/random/300x300/?kids,jeans"
      },
      {
        name: "Dresses",
        image: "/boysgirls/Dresses.jpg",
        fallback: "https://source.unsplash.com/random/300x300/?kids,dress"
      },
      {
        name: "Shoes",
        image: "/boysgirls/shose.jpg",
        fallback: "https://source.unsplash.com/random/300x300/?kids,shoes"
      },
      {
        name: "Accessories",
        image: "/boysgirls/Accessories.jpg",
        fallback: "https://source.unsplash.com/random/300x300/?kids,accessories"
      }
    ]
  };

  return (
    <div className="w-full text-left max-w-7xl mx-auto px-4">
      {/* Breadcrumb */}
      <nav className="text-sm py-4 bg-gray-50 rounded-lg mb-6">
        <ol className="flex items-center space-x-2 container mx-auto px-4">
          <li><a href="/" className="text-gray-600 hover:text-gray-900">HOME</a></li>
          <li>&gt;</li>
          <li className="font-semibold">BOYS & GIRLS</li>
        </ol>
      </nav>

      {/* Main Banners - Rounded Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {sections.mainBanners.map((banner, index) => (
          <div key={index} className="aspect-[3/4] group cursor-pointer">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img 
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                style={{ objectPosition: '50% 30%' }}
                onError={(e) => {
                  e.target.src = banner.fallback;
                  e.target.className = "w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90";
                }}
              />
            </div>
            <div className={`mt-4 flex ${banner.position === 'right' ? 'justify-end' : 'justify-start'}`}>
              {/* <button className={`${banner.color} text-white px-6 py-2 rounded-full font-bold shadow-md`}>
                {banner.title}
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Trending Products */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">TRENDING NOW</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {sections.products.map((product, index) => (
            <div key={index} className="aspect-square group cursor-pointer">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                  onError={(e) => {
                    e.target.src = product.fallback;
                    e.target.className = "w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90";
                  }}
                />
              </div>
              <div className="mt-2 text-center">
                <p className="font-bold text-gray-900">Rs. {product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teen Section - Rounded Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {sections.teenBanners.map((banner, index) => (
          <div key={index} className="aspect-[3/4] group cursor-pointer">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <img 
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                style={{ objectPosition: '50% 30%' }}
                onError={(e) => {
                  e.target.src = banner.fallback;
                  e.target.className = "w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-90";
                }}
              />
            </div>
            <div className={`mt-4 flex ${banner.position === 'right' ? 'justify-end' : 'justify-start'}`}>
              {/* <button className={`${banner.color} text-white px-6 py-2 rounded-full font-bold shadow-md`}>
                {banner.title}
              </button> */}
            </div>
          </div>
        ))}
      </div>

      {/* Category Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {sections.categories.map((category, index) => (
            <div key={index} className="aspect-square group cursor-pointer">
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                  onError={(e) => {
                    e.target.src = category.fallback;
                    e.target.className = "w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90";
                  }}
                />
              </div>
              <h3 className="mt-2 text-center font-medium">{category.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BoysGirls;