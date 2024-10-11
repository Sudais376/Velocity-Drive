import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import FeaturedCars from "../Components/FeaturedCars";
import MercedesCarousel from "../Components/MercedesCarousel";
import FerrariCarousel from "../Components/FerrariCarousel";
import PorcheCarousel from "../Components/PorcheCarousel";

const Inventory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Velocity Drive - Inventory</title>
      </Helmet>

      <section
        data-aos="fade-in"
        className="InventoryHero relative max-w-[1800px] mx-auto"
      >
        <div className="relative">
          {/* Overlay background */}
          <div className="absolute inset-0 z-20 bg-[#1B1F3B] opacity-50 h-full"></div>
          {/* Hero image */}
          <img
            className="h-[600px] object-cover w-full"
            src="/assets/InventoryHero.png"
            alt="Inventory Hero"
          />
          {/* Text content */}
          <div
            data-aos="fade-up"
            className="absolute top-[15%] w-full text-center z-30"
          >
            <h1
              data-aos="fade-up"
              className="text-white text-3xl md:text-5xl font-bold"
            >
              Explore Luxury and Performance
            </h1>
            <p
              data-aos="fade-up"
              className="text-white text-lg md:text-xl pt-4 max-w-[800px] mx-auto px-6"
            >
              Discover our curated collection of world-class vehicles,
              handpicked for their craftsmanship, innovation, and power.
            </p>
          </div>
        </div>
      </section>

        <MercedesCarousel />
        <FerrariCarousel />
        <PorcheCarousel />

      <FeaturedCars />
    </>
  );
};

export default Inventory;
