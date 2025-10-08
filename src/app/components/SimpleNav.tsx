'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">SockShop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              All Socks
            </Link>
            <Link href="/categories/athletic" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Athletic
            </Link>
            <Link href="/categories/dress" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Dress
            </Link>
            <Link href="/categories/casual" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Casual
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {state.itemCount}
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/products" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                All Socks
              </Link>
              <Link href="/categories/athletic" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Athletic
              </Link>
              <Link href="/categories/dress" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Dress
              </Link>
              <Link href="/categories/casual" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Casual
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}