import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductOverview from "../components/ProductOverview";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductOverview />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;