import React from "react";
import BgVideo from "../../assets/Images/BgVideo.mp4";
import { Button } from "../ui/button";
import { useState } from "react";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

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
        
          <div className="flex flex-col gap-5 my-10">
            <span className=" mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#112d32] font-medium">
              No. 1 Job Hunt Website
            </span>
            <h1 className="text-5xl font-bold leading-14">
              Search, Apply & Get Your <br />
              <span
                style={{
                  color: "#E88073",
                  display: "inline-block",
                  marginLeft: 6,
                  lineHeight: 1.2,
                }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Dream Career",
                      "Desired Company",
                      " Perfect Job Match",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              aspernatur temporibus nihil tempora dolor!
            </p>
            <div className="flex w-[70%] bg-white shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
              <input
                type="text"
                placeholder="Find your dream jobs"
                onChange={(e) => setQuery(e.target.value)}
                className="outline-none border-none w-full  text-black"
              />
              <Button
                onClick={searchJobHandler}
                className="rounded-r-full bg-[#E88073]"
              >
                <Search className="h-5 w-5" />
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
