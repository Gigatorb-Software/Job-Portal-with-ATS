import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HeroSections from "./HeroSections";
import Features from "./ui/Features";
import Logo from "./ui/Logo";
import { Photo } from "./ui/Photo";
import CallToAction from "./ui/CallToAction";
import TopCompany from "./ui/TopCompany";
import Flow from "./ui/Flow";
import Pricing from "./Pricing";

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
      <HeroSections />
      <Features />

      <Flow/>
      <TopCompany />
      <HeroSection />

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
