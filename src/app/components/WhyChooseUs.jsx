import React from 'react';

const WhyChooseUs = () => {
  const points = [
    { image: 'https://via.placeholder.com/100', label: 'Quality', tooltip: 'We provide the highest quality services.' },
    { image: 'https://via.placeholder.com/100', label: 'Customer Service', tooltip: '24/7 customer support available.' },
    { image: 'https://via.placeholder.com/100', label: 'Expert Team', tooltip: 'Our team consists of experts in the field.' },
    { image: 'https://via.placeholder.com/100', label: 'Affordable', tooltip: 'Competitive pricing with no hidden fees.' },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="flex justify-center gap-8">
        {points.map((point, index) => (
          <div className="relative group" key={index}>
            {/* Image */}
            <img src={point.image} alt={point.label} className="w-24 h-24 object-cover rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110" />
            
            {/* Tooltip */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-4 py-2 rounded-lg transition-opacity duration-300">
              {point.tooltip}
            </div>

            {/* Label */}
            <p className="mt-2 text-center font-semibold">{point.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
