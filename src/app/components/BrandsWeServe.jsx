import React from "react";

const BrandsWeServe = () => {
  const images = [
    { src: "/Images/Audi.png", alt: "Audi logo" },
    { src: "/Images/Honda.png", alt: "Honda logo" },
    { src: "/Images/Hyundai.png", alt: "Hyundai logo" },
    { src: "/Images/Mercedes.png", alt: "Mercedes logo" },
    { src: "/Images/Nissan_Old.png", alt: "Nissan logo" },
    { src: "/Images/Skoda_New.png", alt: "Skoda logo" },
  ];

  return (
    <section className="py-14 bg-gray-200">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <p className="text-base font-semibold text-primary-500">
          Brands We Serve
        </p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-800 md:text-4xl">
          We Offer Full-Service Auto Repair & Maintenance
        </h3>
      </div>

      {/* Grid Section */}
      <div className="grid gap-8 mt-12 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 px-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-24 h-24 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsWeServe;
