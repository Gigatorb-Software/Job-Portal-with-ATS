import React from "react";

const Features = () => {
  return (
    <div className="max-w-screen-xl md:py-8  mx-auto">
            <h1 className='text-4xl font-bold text-center'><span className='text-[#E88073]'>Features </span> You will get </h1>
            <h6 className="leading-10 text-center text-lg">
        Seamlessly blending functionality with elegance for an unparalleled user
        experience.
      </h6>

      <div className="flex flex-col items-center flex-nowrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
        <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
          <div className="p-2 inline-block bg-indigo-200 rounded-lg">
            <svg
              className="text-indigo-500 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1={9} y1={9} x2="9.01" y2={9} />
              <line x1={15} y1={9} x2="15.01" y2={9} />
            </svg>
          </div>
          <div className="mt-4 font-extrabold text-2xl tracking-wide">
            Amazing People
          </div>
          <div className="text-lg">
            We guarantee that every designer you ever work with will be an
            awesome member for your team. We conduct personal interviews with
            every designer to ensure that we only get the best.
          </div>
        </div>
        <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
          <div className="p-2 inline-block bg-green-200 rounded-lg">
            <svg
              className="text-green-500 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1={12} y1={1} x2={12} y2={23} />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="mt-4 font-extrabold text-2xl tracking-wide">
            Best Rates
          </div>
          <div className="text-lg">
            Be assured that you will always get the best rates. We continuously
            monitor global freelance wage trends to ensure that no one is under
            or overpaid.
          </div>
        </div>
        <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
          <div className="p-2 inline-block bg-red-200 rounded-lg">
            <svg
              className="text-red-500 w-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1={12} y1={9} x2={12} y2={13} />
              <line x1={12} y1={17} x2="12.01" y2={17} />
            </svg>
          </div>
          <div className="mt-4 font-extrabold text-2xl tracking-wide">
            Abuse Protection
          </div>
          <div className="text-lg">
            Money is held by us in escrow subject to project completion. If
            there is any dispute, a customer service representative will
            manually review the case and take appropriate action.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
