import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div data-aos ="fade-in" className="relative max-w-[1800px] mx-auto">
        {/* Overlay div */}
        <div className="absolute inset-0 z-40 bg-[#1B1F3B] opacity-50 px-6 h-full"></div>
        <div className="overflow-hidden">
          {/* Carousel */}
          <div
            id="carouselExample"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item !h-[600px]">
                <img
                  src="/assets/HBugatti.png"
                  className="d-block w-100 object-cover h-full"
                  alt="Bugatti"
                />
              </div>
              <div className="carousel-item active !h-[600px]">
                <img
                  src="/assets/HMercedes.png"
                  className="d-block w-100 object-cover h-full"
                  alt="Mercedes"
                />
              </div>
              <div className="carousel-item !h-[600px]">
                <img
                  src="/assets/HFerrari.png"
                  className="d-block w-100 object-cover h-full"
                  alt="Ferrari"
                />
              </div>
            </div>
            {/* Previous and Next Buttons */}
            <button
              className="carousel-control-prev z-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next z-50"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
