"use client";
import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonialActive, setTestimonialActive] = useState(1);

  const testimonials = [
    {
      id: 1,
      text: `Pepe is like a unicorn in a field of horses, magically bridging the gap between design and coding. His designs sparkle brighter than a disco ball at a 70s party, hitting that sweet spot between trendy and 'wow, did he really just pull that off?'`,
      name: "Jhonny Mnemonic",
      role: "Chief Wizard of Nowhere Land",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      text: `Working with Pepe is like finding a needle in a haystack – except the needle comes to you, and it's golden. His design eye is sharper than my grandma's kitchen knives, and trust me, those can slice through anything.`,
      name: "Roberta Austina",
      role: "Grandmaster of Excuse Crafting",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      text: `Pepe is that rare blend of designer and developer who actually knows what 'deadline' means – a mythical creature in our industry. He whipped up landing pages faster than I could say Banana, with a flair that made me wonder if he moonlights as a magician.`,
      name: "Manolito Gafotas",
      role: "Professional Procrastinator & Part-Time Visionary",
      image:
        "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=2864&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialActive((prev) =>
        prev === testimonials.length ? 1 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-[#1a1a1f] relative overflow-hidden py-12">
      <div className="text-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-base font-semibold text-primary-500">
          Why Customers Say About Us
        </p>
        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          We Offer Full Service Auto Repair & Maintenance
        </h3>
      </div>

      <div className="relative max-w-5xl mx-auto mt-12 px-6 lg:px-12">
        <div className="bg-[#1a1a1f]/50 p-10 lg:p-20 rounded-3xl border border-white/10 backdrop-blur-lg shadow-2xl">
          {/* Testimonial Content */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${
                testimonialActive === testimonial.id ? "block" : "hidden"
              } text-gray-200 text-center italic`}
            >
              <p className="text-xl lg:text-2xl font-medium">{testimonial.text}</p>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-10 space-x-4">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setTestimonialActive(testimonial.id)}
                aria-label={`Select testimonial by ${testimonial.name}`}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 ${
                  testimonialActive === testimonial.id
                    ? "border-white scale-110"
                    : "border-transparent opacity-60 hover:opacity-100"
                } transition-transform duration-300`}
              >
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s picture`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Testimonial Details */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`mt-6 ${
                testimonialActive === testimonial.id ? "block" : "hidden"
              } text-center`}
            >
              <h4 className="text-white font-semibold text-lg">
                {testimonial.name}
              </h4>
              <p className="text-gray-400 text-sm">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
