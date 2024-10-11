import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import ContactForm from "./ContactForm";

const FeaturedCars = () => {
  const [showContactForm, setShowContactForm] = useState(false); // State for ContactForm



  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleContactForm = () => {
    setShowContactForm((prevState) => !prevState); // Toggle ContactForm visibility
  };

  return (
    <>
      <section data-aos="fade-up" className="py-12 px-6 max-w-[1800px] mx-auto">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-bold text-3xl md:text-5xl text-center text-[#333333] pb-4">
            Exclusive Models in the Spotlight
          </h2>
          <p
            data-aos="fade-up"
            className="md:text-center text-lg text-[#7B8894]"
          >
            Discover our handpicked selection of the finest cars, chosen for
            their unparalleled performance, cutting-edge design, and unmatched
            luxury. These vehicles represent the best of what we have to offer,
            combining innovative technology with sophisticated craftsmanship.
            Whether you're seeking power, style, or exclusivity, these models
            are guaranteed to turn heads and elevate your driving experience.
          </p>
        </div>
        <div>
          <h2 data-aos ="fade-up" className="text-3xl font-bold max-w-[800px] mx-auto text-center py-12">
            Featured Cars
          </h2>
        </div>
        <div data-aos="fade-up" className="flex flex-wrap justify-center gap-8">
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md-h[399px]"
              src="/assets/FTesla.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
              Tesla Model S Plaid
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
              The Tesla Model S Plaid delivers insane acceleration with its
              tri-motor setup, reaching 0-60 mph in under 2 seconds. This
              electric sedan boasts cutting-edge tech with full self-driving
              capabilities, an all-glass roof, and a range of over 390 miles on
              a single charge.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="imgd relative border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FBMV.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            BMW M4 Competition
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The BMW M4 Competition is a perfect blend of performance and luxury. Its 503-hp twin-turbo inline-six engine delivers thrilling speed and dynamic handling, while its aggressive design and M-exclusive features ensure a head-turning look.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FPorche.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Porsche 911 Turbo S
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Porsche 911 Turbo S is a masterpiece of automotive engineering. It features a 640-hp twin-turbo flat-six engine, all-wheel drive, and a timeless design. Capable of accelerating from 0-60 mph in just 2.6 seconds, this car is synonymous with speed, luxury, and legacy.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FMercedes.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Mercedes-Benz S-Class
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Mercedes-Benz S-Class stands as the epitome of opulence. This full-size luxury sedan offers a smooth ride, state-of-the-art infotainment, and an interior filled with premium materials and innovative features like massaging seats and a 3D sound system.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FAudi.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Audi RS Q8
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Audi RS Q8 combines sports car performance with the practicality of an SUV. Its 591-hp V8 engine delivers immense power, while the quattro all-wheel-drive system ensures agility. The RS Q8 also boasts a refined cabin with advanced tech and luxurious comfort.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FLambo.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Lamborghini Huracán EVO
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Lamborghini Huracán EVO offers a perfect mix of cutting-edge technology and roaring V10 power. This mid-engine supercar combines 630 hp with aggressive aerodynamics, delivering exhilarating performance on both the road and track. Its sleek design ensures you’ll make a statement wherever you go.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FFerrari.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Ferrari Roma
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Ferrari Roma is a sophisticated and modern take on Ferrari’s grand touring heritage. It combines a 612-hp twin-turbo V8 engine with elegant styling, offering a driving experience filled with grace and power. The minimalist interior design exudes timeless Italian craftsmanship.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FRover.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Range Rover SVAutobiography
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Range Rover SVAutobiography brings unparalleled luxury and performance to the SUV world. With a supercharged V8 engine and a lavishly appointed cabin, this vehicle provides an indulgent experience. From city streets to off-road adventures, the SVAutobiography handles it all in style.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 mt-4 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
          <div className="relative imgd border-gray-300 transition duration-300 ease-in-out hover:border-[#1B1F3B] hover:shadow-xl transform hover:-translate-y-2 py-2 rounded-md overflow-hidden">
            <img
              data-aos="fade-up"
              className="fimg w-[600px] rounded-md md:h-[267px]"
              src="/assets/FFord.png"
              alt=""
            />
            <h4 data-aos="fade-up" className="font-bold text-lg text-[#1B1F3B] p-2">
            Ford Mustang Mach-E GT
            </h4>
            <p data-aos="fade-up" className="text-[#7B8894] px-2 pb-12">
            The Ford Mustang Mach-E GT offers thrilling electric performance with its 480-hp dual-motor system. This all-electric SUV embodies the spirit of the classic Mustang while delivering zero-emissions driving, a range of up to 270 miles, and a modern, tech-forward interior.
            </p>
            <button
            data-aos ="fade-up"
            onClick={toggleContactForm} // Toggle ContactForm on click
                className="absolute left-0 bottom-2 text-white font-bold bg-[#E63946] hover:bg-[#BDC3C7] hover:!text-[#1B1F3B] px-6
            py-2 rounded-md w-full"
              >
                Book a test Drive
              </button>
          </div>
        </div>
      </section>

            {/* Conditionally render ContactForm */}
            {showContactForm && <ContactForm closeContactForm={toggleContactForm} />}
    </>
  );
};

export default FeaturedCars;
