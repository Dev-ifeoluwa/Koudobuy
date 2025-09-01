"use client";

import React from "react";

// Example top seller products (replace with real data or props)
const topSellers = [
  {
    id: 1,
    name: "Samsung Galaxy S24",
    image: "/top1.jpg",
    price: 299999,
    sold: 1200,
  },
  {
    id: 2,
    name: "LG Smart TV 55\"",
    image: "/top2.jpg",
    price: 350000,
    sold: 950,
  },
  {
    id: 3,
    name: "HP Pavilion Laptop",
    image: "/top3.jpg",
    price: 220000,
    sold: 800,
  },
  {
    id: 4,
    name: "Nike Air Max",
    image: "/top4.jpg",
    price: 45000,
    sold: 700,
  },
  {
    id: 5,
    name: "Binatone Blender",
    image: "/top5.jpg",
    price: 18000,
    sold: 650,
  },
  {
    id: 6,
    name: "Binatone Blender",
    image: "/top6.jpg",
    price: 18000,
    sold: 650,
  },
];

// Helper to format price as ₦12,345
const formatPrice = (n: number) =>
  "₦" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });

const BestPhone: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow p-4 mt-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-purple-700">
          Best Phone Deals
        </h2>
        <span className="text-gray-500 text-sm">Best Phone Deals</span>
      </div>
      {/* Product cards */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {topSellers.map((product) => (
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
                <span className="text-purple-700 font-bold">{formatPrice(product.price)}</span>
              </div>
              <div className="text-xs text-gray-500">Sold: {product.sold}</div>
              <button className="mt-2 w-full bg-purple-700 text-white py-1 rounded hover:bg-purple-800 transition-colors text-sm font-semibold">
                View Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestPhone;