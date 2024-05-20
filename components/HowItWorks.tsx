// components/HowItWorks.js
import React from 'react';

const steps = [
  { title: 'Browse', description: 'Discover a variety of food options.', icon: '📜' },
  { title: 'Order', description: 'Place your order quickly and easily.', icon: '🛒' },
  { title: 'Track', description: 'Track your order in real-time.', icon: '🚚' },
  { title: 'Enjoy', description: 'Enjoy your delicious meal!', icon: '🍴' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl lg:text-5xl">
          How It Works
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-4 lg:gap-x-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-green-500 text-white text-3xl">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
