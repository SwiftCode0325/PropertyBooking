import React from 'react';
import { FaHome, FaKey, FaDollarSign } from 'react-icons/fa'; // Sample icons for flat rental

// Sample data
const values = [
  { name: 'Affordable Rates', description: 'Find flats that fit your budget with transparent pricing and no hidden costs.', icon: <FaDollarSign /> },
  { name: 'Prime Locations', description: 'Choose from a variety of locations with easy access to amenities and transportation.', icon: <FaHome /> },
  { name: 'Secure and Safe', description: 'Enjoy peace of mind with secure properties and reliable landlord services.', icon: <FaKey /> },
  // Add more values as needed
];

const Value = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-50 py-16 px-6 sm:py-20 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why Rent With Us?
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Explore the exceptional benefits that make our flats the perfect choice for you.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.name}
              className="relative bg-white p-8 rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Decorative Overlay */}
              <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r from-yellow-300 to-red-300' : 'bg-gradient-to-r from-green-300 to-blue-300'} opacity-30`} />
              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl text-blue-600 shadow-lg">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Value;
