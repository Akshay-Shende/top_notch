"use client";
import React, { useState, useEffect } from "react";

const Testimonial = () => {
  const [testimonialActive, setTestimonialActive] = useState(1);

  const testimonials = [
    {
      id: 1,
      text: `Pepe is like a unicorn in a field of horses, magically bridging the gap between design and coding. His designs sparkle brighter than a disco ball at a 70s party, hitting that sweet spot between trendy and 'wow, did he really just pull that off?`,
      name: "Jhonny Mnemonic",
      role: "Chief Wizard of Nowhere Land",
      image:
        "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      text: `Working with Pepe is like finding a needle in a haystack – except the needle comes to you, and it's golden. His design eye is sharper than my grandma's kitchen knives, and trust me, those can slice through anything. Can't wait to conjure up more projects with him, maybe something involving flying pigs next time?`,
      name: "Roberta Austina",
      role: "Grandmaster of Excuse Crafting",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      text: `Pepe is that rare blend of designer and developer who actually knows what 'deadline' means – a mythical creature in our industry. He whipped up landing pages faster than I could say Banana, with a flair that made me wonder if he moonlights as a magician. If he asks for a rabbit, just give it to him, no questions asked.`,
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
    <section className="bg-[#1a1a1f] relative overflow-hidden">
      <div className="relative max-w-7xl lg:px-16 md:px-12 mx-auto py-12 px-8 h-svh flex flex-col justify-center items-center">
        <div className="lg:border lg:p-20 lg:rounded-[4rem] lg:bg-[#1a1a1f]/50 border-white/5 lg:backdrop-blur-xl lg:shadow-2xl 2xl:p-32">
          {/* Testimonial Content */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`pb-6 text-gray-200 font-medium mx-auto text-xl h-64 italic serif text-balance items-center text-center lg:text-4xl ${
                testimonialActive === testimonial.id ? "block" : "hidden"
              }`}
            >
              <p>
              <span className="text-white">{testimonial.text}</span>
              </p>
            </div>
          ))}

          {/* Buttons */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => setTestimonialActive(testimonial.id)}
              >
                <img
                  className={`inline-block w-12 h-12 rounded-xl object-cover transition-all duration-300 ${
                    testimonialActive === testimonial.id
                      ? "ring-2 ring-white transform scale-110"
                      : "opacity-50 hover:opacity-100"
                  }`}
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </button>
            ))}
          </div>

          {/* Testimonial Details */}
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`text-center py-6 ${
                testimonialActive === testimonial.id ? "block" : "hidden"
              }`}
            >
              <h2 className="text-white font-medium text-base">
                {testimonial.name}
              </h2>
              <a href="#" className="text-xs text-gray-400">
                {testimonial.role}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
