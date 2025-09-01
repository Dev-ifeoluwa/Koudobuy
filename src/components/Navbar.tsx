// Navbar.tsx
// This is the navigation bar for your store, like the one on Jumia.
// It helps users find categories and search for products easily.

import React from "react";

const categories = [
  "Appliances",
  "Phones & Tablets",
  "Health & Beauty",
  "Home & Office",
  "Electronics",
  "Fashion",
  "Supermarket",
  "Computing",
  "Baby Products",
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      {/* Top bar with logo and search */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-orange-500 tracking-tight">
          XelvioMart
        </div>
        {/* Search bar */}
        <div className="flex-1 mx-6 max-w-xl">
          <input
            type="text"
            placeholder="Search for products, brands and categories"
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* Account and Cart icons (placeholders) */}
        <div className="flex items-center gap-4">
          <button className="text-gray-700 hover:text-orange-500 font-medium">Account</button>
          <button className="text-gray-700 hover:text-orange-500 font-medium">Cart</button>
        </div>
      </div>
      {/* Category links */}
      <div className="bg-orange-50 border-t border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 flex gap-4 overflow-x-auto py-2">
          {categories.map((cat) => (
            <a
              key={cat}
              href="#"
              className="text-sm text-gray-700 hover:text-orange-500 whitespace-nowrap transition-colors"
            >
              {cat}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
