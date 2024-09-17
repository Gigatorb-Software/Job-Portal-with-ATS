import React from "react";
import BgVideo from "../assets/Images/BgVideo.mp4";
import { Button } from "./ui/button";
import  { useState } from 'react'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
      dispatch(setSearchedQuery(query));
      navigate("/browse");
  }

  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video
            src={BgVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          {/* <h1 className="text-5xl font-bold leading-tight mb-4">
            Find Your Dream Company with
            <span className="text-6xl font-bold text-white">
              {" "}
              Job<span className="text-[#F83002]">Portal</span>
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover and apply for jobs effortlessly with our intuitive and
            user-friendly platform.
          </p>
          <Button className="bg-[#88bdbc] text-black hover:text-white">
            Get Started
          </Button> */}
     <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#112d32] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold leading-12'>Search, Apply & <br/>  Get Your  <span className="text-[#E88073]">Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[70%] bg-white shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full  text-black'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#E88073]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>

        </div>

        {/* Additional Sections */}
      </div>
   
     
  
     
   
    </>
  );
};

export default HeroSection;
