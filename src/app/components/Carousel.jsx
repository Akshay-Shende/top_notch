import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  useEffect(() => {
    const currentTitle = images[currentIndex]?.title || '';

    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.substring(0, prev.length - 1));
        setTypingSpeed(50); // Faster speed when deleting
        if (displayText === '') {
          setIsDeleting(false);
          setCharIndex(0);
        }
      } else {
        setDisplayText((prev) => currentTitle.substring(0, prev.length + 1));
        setTypingSpeed(150); // Slower speed when typing
        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayText, isDeleting, currentIndex]);

  const handleSlideChange = (swiper) => {
    setCurrentIndex(swiper.realIndex);
    setIsDeleting(false);
    setCharIndex(0);
    setDisplayText('');
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        onSlideChange={handleSlideChange}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* Carousel Image */}
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              {/* Text and Button */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                <h1
                  className="text-4xl font-bold mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  {displayText}
                </h1>
                <button
                  className="bg-white text-black px-6 py-2 rounded-full shadow-lg"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  {image.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
