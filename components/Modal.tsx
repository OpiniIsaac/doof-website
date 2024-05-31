"use client"
import React, { useState } from 'react';

function Modal({ isOpen, onClose }: any) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle the email submission logic, e.g., send it to your backend or an API
    console.log('Email submitted:', email);
    // Clear the input field and close the modal
    setEmail('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">App In Development</h2>
        <p className="mb-4">Our app is currently in development. Please check back later for updates. In the meantime, feel free to explore our website and learn more about us.</p>
        <form onSubmit={handleSubmit} className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Enter your email to get updates:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            placeholder="you@example.com"
          />
        <div className="flex item-center justify-center">
        <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Submit
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300">Close</button>
        </div>
        </form>
       
      </div>
    </div>
  );
}

export default Modal;
