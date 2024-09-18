import React from 'react';
import Image from "../../assets/computer.webp";

const Flow = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-14">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl text-center">
              How do we <span className='text-[#E88073]'>create success</span>
            </h2>
            <p className="mx-auto mt-4 text-base leading-relaxed text-gray-600 text-center ">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
            </p>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 max-w-2xl mx-auto text-center lg:text-left">
       
            <ul className="relative max-w-md mx-auto mt-16 space-y-12 lg:mt-8">
              {[
                {
                  title: 'Create a free account',
                  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                  icon: (
                    <svg className="w-10 h-10  text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  ),
                },
                {
                  title: 'Build your website',
                  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                  icon: (
                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  ),
                },
                {
                  title: 'Release & launch',
                  description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
                  icon: (
                    <svg className="w-10 h-10 text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <li key={index} className="relative flex items-start">
                  <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-lg">
                    {item.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-semibold text-black">{item.title}</h3>
                    <p className="mt-4 text-base text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
              <div className="absolute -z-10 top-0 left-8 w-px border-l-4 border-dotted border-gray-300 h-4/6"></div>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 items-center lg:mt-0">
            <img src={Image} alt="Illustration" className="w-full h-auto md:mt-28 rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Flow;
