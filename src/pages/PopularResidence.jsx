import React from "react";

const PopularResidences = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 font-sans">
      {/* Main Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OUR POPULAR RESIDENCES</h1>
        <p className="text-lg text-gray-600">Some of our picked properties near your location.</p>
      </div>

      <div className="border-t border-gray-200 my-8"></div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-6 mb-12">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
          Rent
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition">
          Buy
        </button>
        <button className="px-6 py-2 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition">
          Sell
        </button>
      </div>

      {/* Property Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Property Card 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="p-6">
            <div className="text-blue-600 font-bold text-xl mb-2">$4,299 /month</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfortable Apartment</h3>
            <p className="text-gray-600 mb-4">229 Elm Street, Unit 3, Cambridge, MA 02139</p>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-700">3 Beds</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-700">2 Baths</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" checked disabled />
                <span className="text-gray-700">7×7 m³</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Card 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="p-6">
            <div className="text-blue-600 font-bold text-xl mb-2">$4,299 /month</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Comfortable Apartment</h3>
            <p className="text-gray-600 mb-4">229 Elm Street, Unit 3, Cambridge, MA 02139</p>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-700">3 Beds</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-700">2 Baths</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" checked disabled />
                <span className="text-gray-700">7×7 m³</span>
              </div>
            </div>
          </div>
        </div>

        {/* Property Card 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">Search...</span>
            </div>
            <div className="text-blue-600 font-bold text-xl mb-2">$4,299 /month</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Perfect Family Villa On Sale</h3>
            <p className="text-gray-600 mb-4">101 Country Club Road, Dedham, MA 02026</p>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-700">2 Beds</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-700">3 Baths</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" checked disabled />
                <span className="text-gray-700">7×7 m³</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularResidences;