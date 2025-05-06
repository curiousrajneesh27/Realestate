import React from "react";

const OurTeam = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      {/* Main Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">OUR TEAM</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Meet our dedicated real estate professionals ready to assist you.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Team Member 1 - John Smith */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <span className="text-4xl">JS</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">John Smith</h3>
          <p className="text-blue-600 font-medium mb-4">Lead Agent</p>
          <p className="text-gray-600">
            With over 10 years of experience, John specializes in residential properties and client satisfaction.
          </p>
        </div>

        {/* Team Member 2 - Emily Johnson */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <span className="text-4xl">EJ</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Emily Johnson</h3>
          <p className="text-blue-600 font-medium mb-4">Sales Manager</p>
          <p className="text-gray-600">
            Emily has a knack for negotiations and a passion for helping first-time homebuyers.
          </p>
        </div>

        {/* Team Member 3 - Michael Brown */}
        <div className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition">
          <div className="w-32 h-32 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
            <span className="text-4xl">MB</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Michael Brown</h3>
          <p className="text-blue-600 font-medium mb-4">Market Analyst</p>
          <p className="text-gray-600">
            Michael provides insights and data-driven strategies to maximize property investments for clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;