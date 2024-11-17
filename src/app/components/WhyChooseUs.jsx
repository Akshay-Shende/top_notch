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
      title: "Powered by ChatGPT",
      description:
        "The cutting-edge language model that makes interactions a breeze. With its user-friendly interface, effortlessly tap into the world of AI-generated text.",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530442/port-detection.svg",
      title: "Easy to use",
      description:
        "Simply input your subject, click the generate button, and the result will appear in seconds just like magic.",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530444/availability.svg",
      title: "Custom settings",
      description:
        "We offer advanced customization. You can freely combine options like roles, languages, publish, tones, lengths, and formats.",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530440/machine-vision.svg",
      title: "Free trial",
      description:
        "We offer a free trial service without login. We provide many payment options including pay-as-you-go and subscription.",
      link: "/pricing",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530450/page-analysis.svg",
      title: "90+ templates",
      description:
        "We offer many templates covering areas such as writing, education, lifestyle and creativity to inspire your potential.",
      link: "/templates",
    },
    {
      imgSrc: "https://www.svgrepo.com/show/530453/mail-reception.svg",
      title: "Use Anywhere",
      description:
        "Our product is compatible with multiple platforms including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.",
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
