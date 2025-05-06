import React from "react";

const RealEstatePartner = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Main Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
        YOUR TRUSTED PARTNER IN REAL ESTATE
      </h1>
      
      <p className="text-lg text-center mb-16 text-gray-600 max-w-3xl mx-auto">
        We offer comprehensive real estate services tailored to your needs. Whether you're looking to buy, sell, or rent, our expert team is here to guide you every step of the way. Experience a seamless journey with our dedicated support.
      </p>

      <div className="border-t border-gray-200 my-12"></div>

      {/* Services Sections */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Buying Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Buying Your Dream Home Made Easy</h2>
          <p className="text-gray-600 mb-6">
            Our buying services ensure you find the perfect property.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Learn More
            </button>
            <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Selling Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sell Your Property with Confidence</h2>
          <p className="text-gray-600">
            We provide strategic marketing to maximize your sale.
          </p>
        </div>

        {/* Renting Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Renting Made Simple and Hassle-Free</h2>
          <p className="text-gray-600">
            Our rental services connect you with ideal tenants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RealEstatePartner;