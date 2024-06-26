import { Heading } from "@chakra-ui/react";
import { React } from "react";
import ColorModeSwitcher from "../utils/ColorModeSwitcher";
import Navbar from "./Navbar";
import Hero from "../components/Hero";
import MiddleSection from "./MiddleSection";
import Features from "../components/Features";
import HomePage from "./HomePage";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HomePage />
    </div>
  );
};

export default LandingPage;
