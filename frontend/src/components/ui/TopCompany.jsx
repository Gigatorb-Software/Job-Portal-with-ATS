import React from "react";
import image from "../../assets/google.webp";
import logo from "../../assets/google-logo.webp"; // Assuming you have a logo image
import infosys from "../../assets/infosys.png";
import infosyspic from "../../assets/infosyspic.webp";
import wipro from "../../assets/wipro.jpg";
import wiprologo from "../../assets/wiprologo.png";

const TopCompany = () => {
  // Data for each card
  const cardData = [
    {
      imageSrc: image,
      logoSrc: logo,
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.enterprise technology acquisitions of 2021 so far, in reverse chronological ",
    },
    {
      imageSrc: infosyspic,
      logoSrc: infosys,
      title: "Another noteworthy acquisition",
      description:
        "Companies with positive, vibrant cultures attract the best talent to their teams and produce better products and services since their employees are more motivated to give 100% daily.",
    },
    {
      imageSrc: wipro,
      logoSrc: wiprologo,
      title: "Tech acquisition insights",
      description:
        "With so many different types of companies with distinct sets of values and mission statements, brainstorming the right kind of organization culture for your business can be challenging.",
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-screen-xl md:py-8  mx-auto">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-[#E88073]">Top companies </span> which work with
          us
        </h1>
        <h6 className="leading-10 text-center text-md">
          Seamlessly blending functionality with elegance for an unparalleled
          user experience.
        </h6>
      </div>
      <div className="grid gap-8 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="relative">
              <img
                className="rounded-t-lg w-full h-64"
                src={card.imageSrc}
                alt="Company"
              />
              <div className="absolute top-4 right-4 w-16 h-16 bg-gray-100 border border-gray-300 rounded-full flex items-center justify-center">
                <img
                  className="w-12 h-12 object-contain"
                  src={card.logoSrc}
                  alt="Logo"
                />
              </div>
            </div>
            <div className="px-6 py-4">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-light text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
              <div className="  space-x-40">
              <a
                href="#"
                className="inline-flex tracking-wide  uppercase items-center px-4 py-3 text-sm font-bold text-center hover:text-white hover:bg-[#254E58] rounded-lg bg-white text-[#254E58]   border focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
View Job
                {/* <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg> */}
              </a>
              <a
                href="#"
                className="inline-flex tracking-wide uppercase items-center px-4 py-3 text-sm font-medium text-center text-white bg-[#E88073] rounded-lg hover:bg-white hover:text-[#E88073]  hover:border-[#E88073] hover:border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
           </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompany;
