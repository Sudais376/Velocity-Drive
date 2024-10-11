import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <section className="py-12 bg-[#1B1F3B] max-w-[1800px] mx-auto">
        <div
          data-aos=""
          className="flex flex-col lg:flex-row justify-around items-center gap-2"
        >
          <div>
            <div className="flex items-center gap-2">
              <Link to="/">
                <img src="/assets/Brand.png" width={60} alt="Logo" />
              </Link>
              <Link to="/">
                <span className="text-white hover:!text-[#E63946] font-bold text-2xl">
                  Velocity Drive
                </span>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <ul className="text-white flex flex-wrap justify-center items-center gap-8 lg:gap-4 xl:gap-8 pr-6 py-4">
                <Link
                  to="/"
                  className="text-lg text-white hover:!text-[#E63946]"
                >
                  Home
                </Link>
                <Link
                  to="/inventory"
                  className="text-lg text-white hover:!text-[#E63946]"
                >
                  Inventory
                </Link>
                <Link
                  to="/about"
                  className="text-lg text-white hover:!text-[#E63946]"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-lg text-white hover:!text-[#E63946]"
                >
                  Contact us
                </Link>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <p className="text-white">
                <span className="text-lg font-bold">Contact:</span>{" "}
                <span>(555) 123-4567</span>
              </p>
              <p className="text-white">
                <span className="text-lg font-bold">Email:</span>
                <span> randomuser@example.com</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
