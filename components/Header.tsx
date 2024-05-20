
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          Your Campus, Your Food, <span className="text-green-600">Delivered Fast</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 sm:text-2xl">
          Hungry? Craving your favorite meal? Doof has got you covered!
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block bg-green-500 text-white font-semibold py-3 px-6 rounded-md shadow hover:bg-green-600 transition duration-300"
          >
            Get the App
          </a>
        </div>
      </div>
    </header>
  );
}
