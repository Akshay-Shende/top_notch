import React from "react";

const BrandsWeServe = () => {
  const Images = [
    { src: "/Images/Audi.png", alt: "Audi logo" },
    { src: "/Images/Honda.png", alt: "Honda logo" },
    { src: "/Images/Hyundai.png", alt: "Hyundai logo" },
    { src: "/Images/Mercedes.png", alt: "Mercedes logo" },
    { src: "/Images/Nissan_Old.png", alt: "Nissan logo" },
    { src: "/Images/Skoda_New.png", alt: "Skoda logo" },
  ];

  return (
    <section className="py-base container py-14 bg-gray-200">
      <div className="grid gap-8 grid-cols-2 md:gap-y-16 md:grid-cols-6">
        {Images.map((image, index) => (
          <span
            key={index}
            className="w-full flex items-center justify-center"
          >
            <span className="sr-only">{image.alt}</span>
            <div aria-hidden="true">
              <img src={image.src} alt={image.alt} />
            </div>
          </span>
        ))}
      </div>
    </section>
  );
};

export default BrandsWeServe;
