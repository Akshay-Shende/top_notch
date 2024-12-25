import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Page = () => {
  const breadcrumbItems = [
    { name: "Home", href: "#" },
    { name: "Page 1", href: "#" },
    // { name: "Page 2", href: "#" },
    { name: "Page 3", href: "#", isActive: true }, // Active page
  ];
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto">
        {/* Header */}
        <div className="bg-custom-image bg-cover bg-center text-white py-24">
          <h2 className="text-4xl font-bold mb-2">
            About Top Notch Auto Care
          </h2>
          <p className="text-lg">
            Committed to providing exceptional automotive services with a
            dedication to quality, reliability, and customer satisfaction.
          </p>
          <Breadcrumb breadcrumbItems = {breadcrumbItems}/>
        </div>

        {/* Content Section
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Welcome to Top Notch Auto Care
          </h3>
          <p className="text-gray-600 text-lg mb-4">
            At TopNotch Autocare, we pride ourselves on being the most trusted car repair service provider in Dombivli. Founded in 2024, our mission is to deliver the highest quality auto repair services at affordable prices.
          </p>
          <p className="text-gray-600 text-lg mb-4">
            Our experienced team of certified mechanics specializes in a range of services, including engine diagnostics, auto electrical repair, paint correction, and collision repair.
          </p>
          <p className="text-gray-600 text-lg">
            We are committed to offering professional car repair services that ensure your vehicle’s performance and safety. Whether it’s routine car maintenance or more complex repairs, we are your one-stop shop for all your automotive needs.
          </p>
        </div> */}

        {/* --------------------------------------------------------------- */}

        {/* <section class="bg-gray-100">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div class="max-w-lg">
                <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  About Us
                </h2>
                <p class="mt-4 text-gray-600 text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  quis eros at lacus feugiat hendrerit sed ut tortor.
                  Suspendisse et magna quis elit efficitur consequat. Mauris
                  eleifend velit a pretium iaculis. Donec sagittis velit et
                  magna euismod, vel aliquet nulla malesuada. Nunc pharetra
                  massa lectus, a fermentum arcu volutpat vel.
                </p>
                <div class="mt-8">
                  <a
                    href="#"
                    class="text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Learn more about us
                    <span class="ml-2">&#8594;</span>
                  </a>
                </div>
              </div>
              <div class="mt-12 md:mt-0">
                <img
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                  alt="About Us Image"
                  class="object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* --------------------------------------------------------------- */}

        <div className="text-center p-8">

  <div className="flex flex-wrap items-center mt-10 text-left text-center">
    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
      <img
        src="https://picsum.photos/400/240"
        alt="engine diagnostics"
        className="inline-block rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
        Engine Diagnostics
      </h3>
      <p className="sm:text-lg mt-6">
        Our certified mechanics use state-of-the-art diagnostic tools to identify and resolve issues in your engine, ensuring peak performance and reliability.
      </p>
    </div>
  </div>

  <div className="flex flex-wrap items-center mt-10 text-left text-center">
    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
      <img
        src="https://picsum.photos/400/240"
        alt="auto electrical repair"
        className="inline-block rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
        Auto Electrical Repair
      </h3>
      <p className="sm:text-lg mt-6">
        From battery issues to electrical faults, our team ensures your vehicle’s electrical systems operate flawlessly, keeping you safe on the road.
      </p>
    </div>
  </div>


  <div className="flex flex-wrap items-center mt-10 text-left text-center">
    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
      <img
        src="https://picsum.photos/400/240"
        alt="paint correction"
        className="inline-block rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
        Paint Correction
      </h3>
      <p className="sm:text-lg mt-6">
        Restore your car’s original shine with our paint correction services. We eliminate scratches, swirls, and imperfections to make your vehicle look brand new.
      </p>
    </div>
  </div>

  <div className="flex flex-wrap items-center mt-10 text-left text-center">
    <div className="w-full md:w-3/5 lg:w-1/2 px-4">
      <img
        src="https://picsum.photos/400/240"
        alt="collision repair"
        className="inline-block rounded shadow-lg border border-merino-400"
      />
    </div>
    <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
      <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
        Collision Repair
      </h3>
      <p className="sm:text-lg mt-6">
        We handle all types of collision repair to restore your vehicle to its original condition. Our team ensures precision and quality in every job.
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default Page;
