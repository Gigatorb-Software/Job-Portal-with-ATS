import React, { useEffect } from "react";
import Navbar from "./Landing page/Navbar";
import CategoryCarousel from "./Landing page/CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./Landing page/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroSection from "./Landing page/HeroSection";
import Features from "./Landing page/Features";
import Logo from "./Landing page/Logo";
import { Photo } from "./Landing page/Photo";
import CallToAction from "./Landing page/CallToAction";
import TopCompany from "./Landing page/TopCompany";
import Flow from "./Landing page/Flow";
import Pricing from "./Landing page/Pricing";

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);
  return (
    <div>
      <Navbar />
<HeroSection/>      <Features />

      <Flow/>
      <TopCompany />

      <CategoryCarousel />
      <LatestJobs />
      <Pricing/>
      <Logo />
      <Photo />
      <CallToAction />

      <Footer />
    </div>
  );
};

export default Home;
