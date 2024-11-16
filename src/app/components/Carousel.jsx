'use client';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    '/Images/corousel1.jpg',
    '/Images/corousel2.jpg',
    '/Images/corousel3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Image */}
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-4xl font-bold mb-4">Performance without compromise</h1>
        <button className="bg-black bg-opacity-50 text-white px-6 py-2 rounded-full">
          Learn More
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full"
      >
        &#8594;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
