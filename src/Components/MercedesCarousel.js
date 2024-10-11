import React, { useState } from "react";
import Mm1Details from "./Mm1Details";
import Mm2Details from "./Mm2Details";
import Mm3Details from "./Mm3Details";
import Mm4Details from "./Mm4Details";

const MercedesCarousel = () => {
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
            Luxury Reimagined: Rolls-Royce Collection
          </h2>
          <p data-aos ="fade-up" className="md:text-center text-lg text-[#333333] px-6">
            Experience the epitome of luxury and craftsmanship with our
            exclusive Rolls-Royce collection.
          </p>
        </div>

        {/* Carousel Structure */}
        <div
          data-aos="fade-up"
          id="Mercedes"
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
                    src="/assets/RollsPanthom.png"
                    alt="Rolls-Royce Phantom"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                    Rolls-Royce Phantom
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("Mm1")}
                  >
                    View Details
                  </button>
                </div>
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/RollsGhost.png"
                    alt="Rolls-Royce Ghost"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                    Rolls-Royce Ghost
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("Mm2")}
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
                    src="/assets/RollsWraith.png"
                    alt="Rolls-Royce Wraith"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                    Rolls-Royce Wraith
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("Mm3")}
                  >
                    View Details
                  </button>
                </div>
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/RollsCullinan.png"
                    alt="Rolls-Royce Cullinan"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                    Rolls-Royce Cullinan
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("Mm4")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#Mercedes" data-bs-slide="prev" style={{ background: 'none', border: 'none' }}>
  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '30px', height: '30px', backgroundColor: 'black', borderRadius: '50%' }}></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#Mercedes" data-bs-slide="next" style={{ background: 'none', border: 'none' }}>
  <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '30px', height: '30px', backgroundColor: 'black', borderRadius: '50%' }}></span>
  <span className="visually-hidden">Next</span>
</button>

        </div>

        {/* Popup Detail Components */}
        {activeDetail === "Mm1" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm1Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "Mm2" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm2Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "Mm3" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm3Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "Mm4" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm4Details onClose={hideDetail} />
          </div>
        )}
      </section>
    </>
  );
};

export default MercedesCarousel;
