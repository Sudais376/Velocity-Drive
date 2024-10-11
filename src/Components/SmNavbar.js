import React from "react";
import { Link } from "react-router-dom";

const SmNavbar = ({closeSmNavbar}) => {
  return (
    <>
      <nav className="w-full bg-[#1B1F3B] pt-4">
        <div className="flex justify-between items-center px-6">
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            <Link to="/">
              <img src="/assets/Brand.png" width={48} alt="" />
            </Link>
            <Link to="/">
              <span className="text-white font-bold sm:text-2xl">
                Velocity Drive
              </span>
            </Link>
          </div>
          <div>
            <img onClick={closeSmNavbar} className="invert" src="/assets/CloseToggler.png" alt="" />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-2 px-6 py-2">
            <Link to="/" className="text-lg text-white hover:!text-[#E63946]">
              Home
            <hr className="text-white" />
            </Link>
            <Link
              to="/inventory"
              className="text-lg text-white hover:!text-[#E63946]"
            >
              Inventory
              <hr className="text-white" />
            </Link>
            <Link
              to="/services"
              className="text-lg text-white hover:!text-[#E63946]"
            >
              Services
              <hr className="text-white" />
            </Link>
            <Link
              to="/about"
              className="text-lg text-white hover:!text-[#E63946]"
            >
              About Us
              <hr className="text-white" />
            </Link>
            <Link
              to="/contact"
              className="text-lg text-white hover:!text-[#E63946]"
            >
              Contact us
              <hr className="text-white" />
            </Link>
            <button
              className="text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md"
            >
              Book a test Drive
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SmNavbar;