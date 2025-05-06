import React from 'react';

const StatsCard = ({ number, title, bgImage }) => {
  return (
    <div 
      className="text-center p-5 rounded-xl shadow-lg w-62 h-40 flex flex-col justify-center items-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">{number}</h2>
        <p className="text-sm text-white uppercase tracking-wider font-medium">{title}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  const luxuryImages = {
    main: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    happyCustomers: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
    construction: "https://plus.unsplash.com/premium_photo-1682377521753-58d1fd9fa5ce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D",
    premiumProduct: "https://images.unsplash.com/photo-1717167398817-121e3c283dbb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bHV4dXJ5JTIwdmlsbGF8ZW58MHx8MHx8fDA%3D"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Stats Cards + Text */}
        <div className="lg:w-2/3">
          {/* Top - Three Stats Cards with Luxury Backgrounds */}
          <div className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start">
            <StatsCard 
              number="10k+" 
              title="Happy Customers" 
              bgImage={luxuryImages.happyCustomers} 
            />
            <StatsCard 
              number="3k+" 
              title="Total Construction" 
              bgImage={luxuryImages.construction} 
            />
            <StatsCard 
              number="5k+" 
              title="Premium Product" 
              bgImage={luxuryImages.premiumProduct} 
            />
          </div>

          {/* Bottom - Text Content */}
          <div className="p-8 rounded-xl">
            <h1 className="text-7xl md:text-6xl gap-y-4 gap-x-3 font-bold text-Black-800 mb-6">
              WE ARE PASSIONATE WORKING WITH YOU
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Welcome to your one-stop destination for stunning properties. Explore our listings and discover the perfect home that fits your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Explore
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Contact
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Luxury Home Image */}
        <div className="lg:w-1/3">
          <div 
            className="w-full h-full rounded-xl shadow-lg overflow-hidden relative"
            style={{
              backgroundImage: `url(${luxuryImages.main})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '600px'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="relative z-10 p-6 h-full flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">LUXURY HOMES</h3>
              <p className="text-white">Premium living spaces with world-class amenities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;