import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from 'aos';
import Hero from "../Components/Hero";
import FeaturedCars from "../Components/FeaturedCars";
import Testimonial from "../Components/Testimonial";

const Home = () => {

  useEffect (() => {
    AOS.init ({duration : 1000});
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Velocity Drive - Home</title>
      </Helmet>
      <Hero />
      <FeaturedCars />

      <section data-aos ="fade-up" className="About py-12 bg-[#F2F2F2]">
        <div data-aos ="fade-up" className="max-w-[800px] mx-auto content-center">
          <h2 data-aos ="fade-up" className="font-bold text-center text-2xl md:text-3xl pb-8 text-[#1B1F3B]">Driven by Excellence</h2>
          <p data-aos ="fade-up" className="text-lg lg:text-center pb-6 text-[#333333] px-6">
            At <span className="font-bold">Velocity Drive</span>, we believe that the car you drive is more
            than just a mode of transportation—it’s a reflection of your
            lifestyle and aspirations. With a passion for automobiles and a
            commitment to excellence, we bring you a carefully curated
            collection of vehicles that blend performance, luxury, and
            cutting-edge technology.
          </p>
          <p data-aos ="fade-up" className="text-lg lg:text-center pb-6 text-[#333333] px-6">
            Our team of automotive experts is dedicated to helping you find the
            perfect car that meets your needs and desires. Whether you’re
            looking for the thrill of a high-performance sports car, the comfort
            and refinement of a luxury sedan, or the innovation of an electric
            vehicle, we have something to suit every taste.
          </p>
          <p data-aos ="fade-up" className="text-lg lg:text-center pb-6 text-[#333333] px-6">
            We pride ourselves on providing a seamless and personalized
            experience from the moment you step into our showroom or browse our
            collection online. With an unwavering focus on customer
            satisfaction, we offer expert advice, competitive financing options,
            and a comprehensive after-sales service to ensure you enjoy your car
            ownership journey to the fullest.
          </p>
          <p data-aos ="fade-up" duration ="200" className="text-lg lg:text-center pb-6 text-[#333333] px-6">
            At <span className="font-bold">Velocity Drive</span>, it’s not just about cars—it’s about
            delivering a superior driving experience
          </p>
        </div>
      </section>

      <Testimonial />
    </>
  );
};

export default Home;
