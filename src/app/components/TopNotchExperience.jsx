import React, { useState } from "react";

const Tab = ({ isActive, onClick, title }) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 text-lg font-semibold border-b-2 ${
      isActive
        ? "border-primary-500 text-primary-500"
        : "border-transparent text-gray-500 hover:text-gray-700"
    }`}
  >
    {title}
  </button>
);

const TabContent = ({ isVisible, children }) => (
  <div
    className={`mt-6 transition-opacity duration-300 ${
      isVisible ? "opacity-100" : "opacity-0 hidden"
    }`}
  >
    {children}
  </div>
);

const TopNotchExperience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Services Offered",
      content: (
        <ul className="space-y-2 text-gray-700">
          <li>✅ Periodic car servicing</li>
          <li>✅ Car mechanical and electrical repairs</li>
          <li>✅ Car denting painting services</li>
          <li>✅ Car wash and detailing</li>
          <li>✅ Car tyre & battery care</li>
          <li>✅ Cashless insurance repairs</li>
        </ul>
      ),
    },
    {
      title: "Payment Options",
      content: (
        <>
          <p className="text-gray-700">
            Choose from multiple payment methods for your convenience:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Online Payment via secured payment link</li>
            <li>✅ Bank Transfer</li>
            <li>✅ E-Wallets: PayTm, Google Pay, etc.</li>
            <li>✅ Cash on Delivery</li>
          </ul>
        </>
      ),
    },
    {
      title: "Latest Tools",
      content: (
        <>
          <p className="text-gray-700">
            State-of-the-art workshops equipped with:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Hydraulic ramps</li>
            <li>✅ 3D wheel alignment machines</li>
            <li>✅ OBD2 diagnostic scanners</li>
            <li>✅ Temperature-controlled paint booths</li>
          </ul>
        </>
      ),
    },
    {
      title: "Customer Convenience",
      content: (
        <>
          <p className="text-gray-700">
            We value your time with services like:
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✅ Free pickup and drop</li>
            <li>✅ Doorstep car repair services</li>
            <li>✅ Fast service delivery</li>
          </ul>
        </>
      ),
    },
    {
      title: "Transparency & Quality",
      content: (
        <>
          <p className="text-gray-700">
            Transparent processes with live updates to rebuild your trust.
          </p>
          <p className="mt-4 text-gray-700">
            Genuine spare parts, skilled technicians, and an assured service
            warranty for the best experience.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-primary-500 uppercase tracking-wide">
          TopNotch Experience
        </p>
        <h3 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Full-Service Auto Repair & Maintenance
        </h3>
        <p className="mt-4 text-lg text-gray-600">
          Delivering unmatched quality and convenience for your car care needs.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            />
          ))}
        </div>

        {/* Tab Content */}
        {tabs.map((tab, index) => (
          <TabContent key={index} isVisible={activeTab === index}>
            {tab.content}
          </TabContent>
        ))}
      </div>
    </section>
  );
};

export default TopNotchExperience;
