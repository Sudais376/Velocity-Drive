import React, { useState } from "react";
import Mm1Details from "./P1details";
import Mm2Details from "./P2Details";
import Mm3Details from "./P3Details";
import Mm4Details from "./P4Details";

const FerrariCarousel = () => {
  const [activeDetail, setActiveDetail] = useState(null); // Manages which detail component is visible

  // Handler to show a detail component
  const showDetail = (detail) => {
    setActiveDetail(detail);
  };

  // Handler to hide the detail component
  const hideDetail = () => {
    setActiveDetail(null);
  };

  return (
    <>
      <section
        data-aos="fade-up"
        className="py-12 mt-12 max-w-[1800px] mx-auto"
      >
        <div data-aos="fade-up" className="max-w-[800px] mx-auto pb-12">
          <h2 className="text-center font-bold text-[#1B1F3B] text-3xl pb-4">
          Precision in Motion: Porsche Performance
          </h2>
          <p data-aos ="fade-up" className="md:text-center text-lg text-[#333333] px-6">
          With a legacy of innovation and iconic design, Porsche delivers an unmatched driving experience that combines agility, power, and precision. Whether you seek the adrenaline of a 911 Turbo or the future-forward technology of the all-electric Taycan, our Porsche collection offers the perfect balance between heritage and modern performance.
          </p>
        </div>

        {/* Carousel Structure */}
        <div
          data-aos="fade-up"
          id="Porsche"
          className="carousel slide px-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* First carousel item */}
            <div className="carousel-item active">
              <div className="flex flex-wrap justify-center gap-6">
                <div className=" inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/PPana.png"
                    alt="Porsche Panamera"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Porsche Panamera
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("P1")}
                  >
                    View Details
                  </button>
                </div>
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/P718.png"
                    alt="Porsche 718 Cayman"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Porsche 718 Cayman
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("P2")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Second carousel item */}
            <div className="carousel-item">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/PTaycan.png"
                    alt="Porsche Taycan"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Porsche Taycan
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("P3")}
                  >
                    View Details
                  </button>
                </div>
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/P911.png"
                    alt="Porsche 911 Turbo S"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Porsche 911 Turbo S
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("P4")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#Porsche" data-bs-slide="prev" style={{ background: 'none', border: 'none' }}>
  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '30px', height: '30px', backgroundColor: 'black', borderRadius: '50%' }}></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#Porsche" data-bs-slide="next" style={{ background: 'none', border: 'none' }}>
  <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '30px', height: '30px', backgroundColor: 'black', borderRadius: '50%' }}></span>
  <span className="visually-hidden">Next</span>
</button>

        </div>

        {/* Popup Detail Components */}
        {activeDetail === "P1" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm1Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "P2" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm2Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "P3" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm3Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "P4" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm4Details onClose={hideDetail} />
          </div>
        )}
      </section>
    </>
  );
};

export default FerrariCarousel;
