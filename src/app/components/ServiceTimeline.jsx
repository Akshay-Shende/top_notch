import React from "react";

const ServiceTimeline = () => {
  const steps = [
    {
      left: "Share Requirement",
      right: "Let us know what’s bothering your car",
    },
    {
      left: "Receive Upfront Quote",
      right: "Transparent pricing catering to your specific needs",
    },
    {
      left: "Schedule Appointment",
      right:
        "Avail free pick up and drop facility or Doorstep car service",
    },
    {
      left: "Personal Attention",
      right: "Dedicated engineers working exclusively on your car",
    },
    {
      left: "Live Tracking & Updates",
      right: "Track your car service visually in real time",
    },
    {
      left: "Pay Post Service",
      right:
        "Pay online, through card or cash, post service completion.",
    },
  ];

  return (
    <div className="py-16 px-8 bg-gray-50">
        <h1 className=" text-center text-4xl mb-7">How Top Notch Works?</h1>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute top-0 left-1/2 w-1 bg-yellow-500 h-full transform -translate-x-1/2"></div>

          {/* Timeline steps */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 lg:mb-24"
            >
              {/* Left content */}
              <div className="lg:w-1/2 text-right pr-8">
                <h3 className="text-xl font-bold text-gray-800">
                  {step.left}
                </h3>
                <p className="text-base text-gray-600">
                  {index + 1}. {step.right}
                </p>
              </div>

              {/* Connector */}
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>

              {/* Right content */}
              <div className="lg:w-1/2 text-left pl-8">
                <p className="text-base text-gray-600">
                  {step.right}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTimeline;
