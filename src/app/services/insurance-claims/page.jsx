import React from 'react'
import Breadcrumb from '@/app/components/Breadcrumb';
const Page = () => {
    const breadcrumbItems = [
        { name: "Home", href: "#" },
        { name: "Page 1", href: "#" },
        // { name: "Page 2", href: "#" },
        { name: "Page 3", href: "#", isActive: true }, // Active page
      ];
  return (
    <div>
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
    </div>
  )
}

export default Page
