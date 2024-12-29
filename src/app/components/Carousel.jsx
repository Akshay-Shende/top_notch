import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
const Carousel = () => {
  const images = [
    {
      src: "/Images/corousel1.webp",
      title: "Professional Auto Repair <br />& Maintenance",
      buttonText: "Contact Us",
    },
    {
      src: "/Images/corousel2.webp",
      title: "Performance Without <br /> Compromise",
      buttonText: "Contact Us",
    },
    {
      src: "/Images/corousel3.webp",
      title: "Luxury Car Care <br /> Delivered",
      buttonText: "Contact Us",
    },
  ];

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".custom-nav-btn-next",
          prevEl: ".custom-nav-btn-prev",
        }}
        modules={[Pagination, Navigation, Autoplay]}
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
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              {/* Text and Button */}
              <div
  className="absolute inset-0 flex flex-col justify-center items-start text-start text-white p-8 lg:ms-24 sm:ms-13 lg:-mt-44"
>
  <h1
    className="text-5xl font-bold mb-4 text-start leading-normal"
    data-aos="fade-up"
    data-aos-duration="1000"
    dangerouslySetInnerHTML={{ __html: image.title }} // Use the correct `image` object
  ></h1>
  <button
    className="bg-white text-black px-6 py-2 shadow-lg hover:bg-gray-300 mt-2 justify-start"
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

      {/* Custom Navigation Buttons */}
      <div className="custom-nav-btn-prev custom-nav-btn left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"></div>
      <div className="custom-nav-btn-next custom-nav-btn right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"></div>

      {/* Custom Styles for Pagination Bullets */}
      <style jsx global>{`
  /* Increase size and make bullets rectangular */
  .swiper-pagination-bullet {
    width: 20px; /* Adjust width for rectangle */
    height: 10px; /* Adjust height for rectangle */
    background-color: #ffffff; /* White color for the bullets */
    border-radius: 5px; /* Slight rounding for a smooth rectangle */
    opacity: 0.7;
    transition: all 0.3s ease; /* Smooth transition */
  }

  .swiper-pagination-bullet-active {
    width: 30px; /* Slightly larger active bullet */
    background-color: #ffffff; /* Keep active bullet white */
    opacity: 1;
  }
`}</style>

    </div>
  );
};

export default Carousel;
