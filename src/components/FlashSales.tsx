"use client";

import React, { useEffect, useState } from "react";

// Example product data (replace with real data or props)
const products = [
  {
    id: 1,
    name: "Blender Pro 5000",
    image: "/flash1.jpg",
    price: 19999,
    oldPrice: 24999,
  },
  {
    id: 2,
    name: "Smartphone X12",
    image: "/flash2.jpg",
    price: 89999,
    oldPrice: 109999,
  },
  {
    id: 3,
    name: "Air Fryer Max",
    image: "/flash3.jpg",
    price: 29999,
    oldPrice: 39999,
  },
  {
    id: 4,
    name: "Wireless Earbuds",
    image: "/flash4.jpg",
    price: 7999,
    oldPrice: 12999,
  },
  {
    id: 5,
    name: "Electric Kettle",
    image: "/flash5.jpg",
    price: 5999,
    oldPrice: 8999,
  },
  {
    id: 6,
    name: "Gaming Laptop",
    image: "/flash6.jpg",
    price: 249999,
    oldPrice: 50800
  },
];

// Helper to format price as ₦12,345
const formatPrice = (n: number) =>
  "₦" + n.toLocaleString("en-NG", { maximumFractionDigits: 0 });

// Countdown timer logic (ends in 3 hours from now)
function useCountdown(hours = 3) {
  const [time, setTime] = useState(hours * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");
  const m = Math.floor((time % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const s = (time % 60).toString().padStart(2, "0");

  return `${h}:${m}:${s}`;
}

const FlashSales: React.FC = () => {
  const countdown = useCountdown();

  return (
    <section className="bg-white rounded-lg shadow p-4 mt-8">
      {/* Section header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-orange-600">
          Flash Sales
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-sm">Ends in</span>
          <span className="bg-black text-white px-2 py-1 rounded font-mono text-sm">
            {countdown}
          </span>
        </div>
      </div>
      {/* Product cards */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {products.map((product) => (
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
              <div className="flex items-center gap-2">
                <span className="text-orange-600 font-bold">{formatPrice(product.price)}</span>
                <span className="text-gray-400 line-through text-xs">{formatPrice(product.oldPrice)}</span>
              </div>
              <button className="mt-2 w-full bg-orange-500 text-white py-1 rounded hover:bg-orange-600 transition-colors text-sm font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FlashSales;