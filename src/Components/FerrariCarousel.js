import React, { useState } from "react";
import Mm1Details from "./F1Details";
import Mm2Details from "./F2Details";
import Mm3Details from "./F3Details";
import Mm4Details from "./F4Details";

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
          The Spirit of Italian Excellence: Ferrari Collection
          </h2>
          <p data-aos ="fade-up" className="md:text-center text-lg text-[#333333] px-6">
          From the racetrack to the open road, Ferrari embodies the perfect fusion of passion, power, and Italian craftsmanship. Every model in our Ferrari collection is a testament to cutting-edge engineering, breathtaking speed, and timeless design. Experience the thrill of driving a Ferrari, where luxury meets performance at the highest level.
          </p>
        </div>

        {/* Carousel Structure */}
        <div
          data-aos="fade-up"
          id="Ferrari"
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
                    src="/assets/FRoma.png"
                    alt="Ferrari Roma"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Ferrari Roma
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("F1")}
                  >
                    View Details
                  </button>
                </div>
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/FF8.png"
                    alt="Ferrari F8 Tributo"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Ferrari F8 Tributo
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("F2")}
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
                    src="/assets/FPorto.png"
                    alt="Ferrari Portofino"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Ferrari Portofino
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("F3")}
                  >
                    View Details
                  </button>
                </div>
                <div className="inventoryimg border-gray-300 hover:shadow-xl">
                  <img
                    className="fimg w-full rounded-md Rimg"
                    src="/assets/F448.png"
                    alt="Ferrari 488 Pista"
                  />
                  <h4 className="font-bold text-lg text-[#1B1F3B] p-2 text-center">
                  Ferrari 488 Pista
                  </h4>
                  <button
                    className="text-white font-bold bg-[#E63946] px-6 py-2 rounded-md w-full"
                    onClick={() => showDetail("F4")}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#Ferrari" data-bs-slide="prev" style={{ background: 'none', border: 'none' }}>
  <span className="carousel-control-prev-icon" aria-hidden="true" style={{ width: '30px', height: '30px', backgroundColor: 'black', borderRadius: '50%' }}></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#Ferrari" data-bs-slide="next" style={{ background: 'none', border: 'none' }}>
  <span className="carousel-control-next-icon" aria-hidden="true" style={{ width: '30px', height: '30px', backgroundColor: 'black', borderRadius: '50%' }}></span>
  <span className="visually-hidden">Next</span>
</button>

        </div>

        {/* Popup Detail Components */}
        {activeDetail === "F1" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm1Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "F2" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm2Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "F3" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm3Details onClose={hideDetail} />
          </div>
        )}
        {activeDetail === "F4" && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Mm4Details onClose={hideDetail} />
          </div>
        )}
      </section>
    </>
  );
};

export default FerrariCarousel;
