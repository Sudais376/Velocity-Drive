import React, { useEffect } from "react";
import AOS from "aos";

const ContactForm = ({ closeContactForm }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-[800px] w-full mx-auto">
        {/* Close button */}
        <button
          onClick={closeContactForm}
          className="absolute top-2 right-4 text-lg font-bold text-red-500 hover:text-red-700"
        >
          &times;
        </button>

        <h2
          data-aos="fade-up"
          className="font-bold text-2xl md:text-4xl text-center pb-4 px-6"
        >
          We’d Love to Hear from You
        </h2>
        <p
          data-aos="fade-up"
          className="text-lg md:text-center px6"
        >
          Whether you have a question about our inventory, want to schedule a
          test drive, or need assistance with financing, our team is here to
          help. Fill out the form below, and we’ll respond promptly.
        </p>

        <form
          data-aos="fade-up"
          className="mt-4 bg-[#F2F2F2] p-6 rounded-md"
        >
          <h2 className="text-2xl md:text-3xl text-center py-4 font-bold text-[#333333]">
            Send a message or query
          </h2>
          <div className="mb-3">
            <label className="form-label text-lg text-[#333333]">
              Your Name
            </label>
            <input
              type="text"
              className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-lg text-[#333333]">
              Email address
            </label>
            <input
              type="email"
              className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-lg text-[#333333]">
              Your message
            </label>
            <textarea
              className="form-control focus:ring-4 focus:ring-[#FF4C4C] focus:ring-opacity-50 border border-yellow-500"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full font-bold bg-[#E63946] text-[#FFFFFF] hover:bg-[#BDC3C7] active:!bg-[#BDC3C7] active:!text-[#333333] hover:text-[#333333] px-6 py-2 rounded-md border border-white mb-4"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
