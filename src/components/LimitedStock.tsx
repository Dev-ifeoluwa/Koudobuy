"use client";

import React from "react";

// Example limited stock products (replace with real data or props)
const limitedStock = [
  {
    id: 1,
    name: "Mini Air Conditioner",
    image: "/lim1.jpg",
    price: 45000,
    left: 3,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    image: "/lim2.jpg",
    price: 12000,
    left: 5,
  },
  {
    id: 3,
    name: "Electric Iron",
    image: "/lim3.jpg",
    price: 8000,
    left: 2,
  },
  {
    id: 4,
    name: "Smart Watch",
    image: "/lim4.jpg",
    price: 25000,
    left: 1,
  },
  {
    id: 5,
    name: "Portable Fan",
    image: "/lim5.jpg",
    price: 6000,
    left: 4,
  },
  {
    id: 6,
    name: "Portable Fan",
    image: "/lim6.jpg",
    price: 6000,
    left: 4,
  },
  {
    id: 7,
    name: "Portable Fan",
    image: "/lim7.jpg",
    price: 5000,
    left: 4,
  },
  {
    id: 8,
    name: "Portable Fan",
    image: "/lim8.jpg",
    price: 4000,
    left: 2,
  },
  {
    id: 9,
    name: "Portable Fan",
    image: "/lim9.jpg",
    price: 3000,
    left: 9,
  },
  {
    id: 10,
    name: "Portable Fan",
    image: "/lim10.jpg",
    price: 8000,
    left: 4,
  },
  {
    id: 11,
    name: "Portable Fan",
    image: "/lim11.jpg",
    price: 6000,
    left: 4,
  },
  {
    id: 12,
    name: "Portable Fan",
    image: "/lim12.jpg",
    price: 6000,
    left: 4,
  },

];

// Helper to format price as ₦12,345
const formatPrice = (n: number) =>
  "₦" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });

const LimitedStockDeals: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow p-4 mt-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600">
          Limited Stock Deals
        </h2>
        <span className="text-gray-500 text-sm">Hurry, almost gone!</span>
      </div>
      {/* Product cards */}
      {/* <div className="flex gap-4 overflow-x-auto pb-2"> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {limitedStock.map((product) => (
          <div
            key={product.id}
            className="min-w-[180px] bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-contain rounded-t-lg bg-white"
            />
            <div className="p-2">
              <div className="font-semibold text-sm mb-1 truncate">{product.name}</div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-red-600 font-bold">{formatPrice(product.price)}</span>
              </div>
              <div className="text-xs text-red-500 font-semibold">
                Only {product.left} left!
              </div>
              <button className="mt-2 w-full bg-red-600 text-white py-1 rounded hover:bg-red-700 transition-colors text-sm font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LimitedStockDeals;