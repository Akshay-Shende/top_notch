import React from 'react';

const Breadcrumb = ({breadcrumbItems}) => {
  return (
    <div className="p-3 flex items-center flex-wrap">
      <ul className="flex items-center">
        {breadcrumbItems.map((item, index) => (
          <li className="inline-flex items-center" key={index}>
            <a
              href={item.href}
              className={`flex items-center text-white hover:text-blue-500 ${
                item.isActive ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {index === 0 && (
                <svg
                  className="w-5 h-5 fill-current mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                </svg>
              )}
              {item.name}
            </a>
            {index < breadcrumbItems.length - 1 && (
              <span className="mx-2 h-auto text-gray-400 font-medium">/</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;
