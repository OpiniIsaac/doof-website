"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Modal from './Modal'; // Adjust the import path as necessary

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-bold text-xl text-gray-800">Doof</span>
              </Link>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 transition duration-300">
              Home
            </Link>
            <Link href="/about" className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 transition duration-300">
              About
            </Link>
            <Link href="/contact" className="py-4 px-2 text-gray-700 font-semibold hover:text-green-500 transition duration-300">
              Contact
            </Link>
          </div>
          
          {/* Get App Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Get App
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-green-500">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-green-500">
            About
          </Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-green-500">
            Contact
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="block w-full text-center bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
          >
            Get App
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </nav>
  );
}
