"use client"
import React from 'react';

function Modal({ isOpen, onClose }:any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">App In Development</h2>
        <p className="mb-4">Our app is currently in development. Please check back later for updates. In the meantime, feel free to explore our website and learn more about us.</p>
        <button onClick={onClose} className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Close</button>
      </div>
    </div>
  );
}

export default Modal;
