// components/WhyUniEats.js
import React from 'react';

export default function Why() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl lg:text-5xl">
          Why Doof?
        </h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Convenient */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="text-6xl mb-4">🏡</div>
            <h3 className="text-xl font-semibold text-gray-800">Convenient</h3>
            <p className="mt-4 text-gray-600">
              Order from the comfort of your hostel room or during a study session at the library.
            </p>
          </div>
          {/* Fast Delivery */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
            <p className="mt-4 text-gray-600">
              Get your food delivered quickly, so you can focus on what matters most.
            </p>
          </div>
          {/* Wide Variety */}
         
          {/* Student-Friendly Prices */}
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <div className="text-6xl mb-4">💸</div>
            <h3 className="text-xl font-semibold text-gray-800">Student-Friendly Prices</h3>
            <p className="mt-4 text-gray-600">
              Enjoy special discounts and deals tailored just for students.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
}
