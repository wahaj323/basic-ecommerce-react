import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://www.pcworld.com/wp-content/uploads/2024/08/razer-huntsman-v2-analog.jpg?quality=50&strip=all",
      title: "Premium Gaming Gear",
      text: "Experience ultimate performance"
    },
    {
      image: "https://www.clove.co.uk/cdn/shop/files/bfb5d38f28accfc804c9ea7088512f47_2048x.jpg?v=1712831172",
      title: "High Precision Tools",
      text: "Designed for professional gamers"
    },
    {
      image: "https://www.gigahertz.com.ph/cdn/shop/collections/razer-829746.jpg?v=1729559991",
      title: "",
      text: ""
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoSlide = setInterval(nextSlide, 5000);
    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-2xl">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-[600px] object-cover object-center brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
            <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 text-center text-white w-full px-4">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 animate-fade-in-up delay-100">
                {slide.text}
              </p>
              <button className="px-8 py-3 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 animate-fade-in-up delay-200">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all"
      >
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? 'bg-emerald-500 w-6' : 'bg-gray-300/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;