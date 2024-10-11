import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmNavbar from "./SmNavbar";
import ContactForm from "./ContactForm"; // Import the ContactForm component

const Navbar = () => {
  const [showSmNavbar, setShowSmNavbar] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // State for ContactForm

  const toggleSmNavbar = () => {
    setShowSmNavbar((prevState) => !prevState);
  };

  const toggleContactForm = () => {
    setShowContactForm((prevState) => !prevState); // Toggle ContactForm visibility
  };

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-[#1B1F3B] py-4 px-6 lg:px-20 max-w-[1800px] mx-auto ${showSmNavbar ? 'hidden' : 'block'}`}>
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            <Link to="/">
              <img src="/assets/Brand.png" width={36} alt="" />
            </Link>
            <Link to="/">
              <span className=" text-white font-bold sm:text-2xl">
                Velocity Drive
              </span>
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex justify-center items-center gap-6">
              <Link to="/" className="text-lg text-white hover:!text-[#E63946]">
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
              <button
                className="text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6 py-2 rounded-md"
                onClick={toggleContactForm} // Toggle ContactForm on click
              >
                Book a test Drive
              </button>
            </ul>
            <div>
              <img
                onClick={toggleSmNavbar}
                className="invert lg:hidden"
                src="/assets/MenuToggler.png"
                width={48}
                alt=""
              />
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`overflow-hidden ${
          showSmNavbar ? "translate-x-0" : "translate-x-0"
        } transform transition-transform duration-500 ease-in-out`}
      >
        {showSmNavbar && <SmNavbar closeSmNavbar={toggleSmNavbar} />}
      </div>

      {/* Conditionally render ContactForm */}
      {showContactForm && <ContactForm closeContactForm={toggleContactForm} />}
    </>
  );
};

export default Navbar;
