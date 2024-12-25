import React, { useEffect } from 'react';
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

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  const handleSlideChange = (swiper) => {
    // This can be used if you need to handle slide change actions
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
                  {image.title}
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
