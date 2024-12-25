import React from "react";

const FeatureCard = ({ imgSrc, title, description, link }) => {
  return (
    <li className="rounded-lg bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {link ? (
        <a href={link} className="group block h-full">
          <div className="flex flex-col items-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
              <img src={imgSrc} alt={title} className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-500">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
        </a>
      ) : (
        <div className="flex flex-col items-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
            <img src={imgSrc} alt={title} className="h-8 w-8" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      )}
    </li>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      imgSrc: "/Images/breakdown.png",
      title: "Diagnostics",
      description:
        "If your car needs a mobile diagnostic check done at your home or office, let AutoMechanica come to you.",
      link: "/pricing",
      },
    {
      imgSrc: "https://www.svgrepo.com/show/530442/port-detection.svg",
      title: "Dent & Paint",
      description:
        "Top Notch specializes in car dent repair and car painting services for a range of models.",
      link: "/pricing",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530444/availability.svg",
      title: "Oil / Lube / Filters",
      description:
        "Top Notch proudly serves the Lube, Oil & Filter change needs of customers' vehicle performance while extending the life of your vehicle..",
      link: "/pricing",
      },
    {
      imgSrc: "https://www.svgrepo.com/show/530440/machine-vision.svg",
      title: "Brakes",
      description:
        "The brake system consists of different parts that can be fixed individually. A detailed quote is given to you after we perform our systematic brake evaluation..",
      link: "/pricing",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530450/page-analysis.svg",
      title: "Suspension",
      description:
        "The suspension system of your vehicle protects you from bouncing up and down due to the bad road conditions and bumps in the road..",
      link: "/templates",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530453/mail-reception.svg",
      title: "Detailing",
      description:
        "Top Notch offers professional car detail services at an affordable price. Our interior cleaning, detailing, and restoration services can help you recapture that new car look and smell.",
      link: "/download",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 py-12">
      <div id="features" className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wide text-primary-500">
          Why Choose Us
        </p>
        <h3 className="mt-2 text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          We Offer Full Service Auto Repair & Maintenance
        </h3>
        <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imgSrc={feature.imgSrc}
              title={feature.title}
              description={feature.description}
              link={feature.link}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
