// Hero.tsx
// This is the dynamic hero section for your homepage, like Jumia's big banner.
// It shows slides with images, text, and buttons. It has animations and hover effects.
"use client";

import React, { useState, useEffect } from "react";

// Example slides for the hero banner
const slides = [
  {
    image: "/hero1.png", // Replace with your own images in public/
    title: "Mega Deals on Appliances!",
    subtitle: "Upgrade your home with the best prices.",
    button: "Shop Appliances",
    color: "from-orange-400 to-yellow-300",
  },
  {
    image: "/hero2.jpg",
    title: "Latest Phones & Tablets",
    subtitle: "Discover top brands and hot offers.",
    button: "Shop Phones",
    color: "from-blue-500 to-purple-400",
  },
  {
    image: "/hero3.jpg",
    title: "Beauty & Health Essentials",
    subtitle: "Look good, feel great with our deals!",
    button: "Shop Beauty",
    color: "from-pink-400 to-red-300",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Go to previous or next slide
  const goTo = (idx: number) => setCurrent(idx);

  const slide = slides[current];

  return (
    <section
      className={`relative h-64 sm:h-96 w-full flex items-center justify-center overflow-hidden bg-gradient-to-r ${slide.color} transition-all duration-700`}
    >
      {/* Slide image with fade-in animation */}
      <img
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-105 transition-transform duration-700"
        style={{ zIndex: 1 }}
      />
      {/* Overlay content */}
      <div className="relative z-10 text-center text-white drop-shadow-lg">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-2 animate-fade-in">
          {slide.title}
        </h1>
        <p className="text-lg sm:text-2xl mb-6 animate-fade-in delay-200">
          {slide.subtitle}
        </p>
        <button
          className="px-6 py-2 rounded-full bg-white/90 text-orange-600 font-bold text-lg shadow hover:bg-orange-500 hover:text-white transition-colors duration-300 animate-fade-in delay-400"
        >
          {slide.button}
        </button>
      </div>
      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
              idx === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

// Tailwind CSS custom animation (add to tailwind.config.js):
// animation: {
//   'fade-in': 'fadeIn 0.7s ease-in',
// },
// keyframes: {
//   fadeIn: {
//     '0%': { opacity: 0 },
//     '100%': { opacity: 1 },
//   },
// },
