import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/aboutus/banner";
import AboutSection from "../components/about/AboutSection";
import TeamSection from "../components/about/TeamSection";



const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Header Section */}
      <Header />
      
      {/* Hero Section */}
      <Banner />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutPage;
