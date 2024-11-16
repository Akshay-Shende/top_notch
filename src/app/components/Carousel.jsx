import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Carousel = () => {
  const images = [
    {
      src: '/Images/corousel1.jpg',
      title: 'Performance without compromise',
      buttonText: 'Learn More',
    },
    {
      src: '/Images/corousel2.jpg',
      title: 'Engineered for Excellence',
      buttonText: 'Discover Now',
    },
    {
      src: '/Images/corousel3.jpg',
      title: 'Innovation at its Peak',
      buttonText: 'Explore More',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations on index change
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Image */}
      <div
        key={currentIndex} // Ensures re-render on image change
        className="absolute inset-0"
        data-aos="fade-right" // AOS animation
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <img
          src={images[currentIndex].src}
          alt={`Carousel image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text and Button */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        <h1
          key={currentIndex} // Key ensures re-render for each new index
          className="text-4xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {images[currentIndex].title}
        </h1>
        <button
          key={`button-${currentIndex}`} // Unique key for re-render
          className="bg-black bg-opacity-50 text-white px-6 py-2 rounded-full"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          {images[currentIndex].buttonText}
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
