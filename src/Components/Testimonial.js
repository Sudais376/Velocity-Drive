import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
    
      return (
        <>
          <section data-aos ="fade-up" className="py-12 mt-12 max-w-[1800px] mx-auto">

        <div data-aos ="fade-up" className="max-w-[800px] mx-auto pb-12">
          <h2 data-aos ="fade-up" className="text-center font-bold text-[#1B1F3B] text-3xl pb-4">Behind Every Wheel is a Happy Customer</h2>
          <p data-aos ="fade-up" className="md:text-center text-lg text-[#333333] px-6">At Velocity Drive, customer satisfaction is our top priority. We pride ourselves on providing an exceptional car-buying experience from start to finish. But don’t take our word for it—hear directly from the customers who’ve found their perfect vehicle with us. From luxury sedans to high-performance sports cars, these testimonials reflect the trust and satisfaction we aim to deliver every day.</p>
        </div>

        <div data-aos="fade-up" id="Testimonial" className="carousel slide">
          <div className="carousel-inner">
            
            {/* First carousel item with 3 reviews */}
            <div className="carousel-item active">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rs bg-[#F2F2F2] w-[500px] max-h-[300px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Sarah L</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  From start to finish, the service at Velocity Drive was top-notch. The staff took the time to understand exactly what I was looking for, and the buying process was smooth and stress-free. I love my new BMW M4!
                  </p>
                </div>
                <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Olivia R</span>{" "}
                    <span>– ⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  I couldn’t be happier with my new Audi RS Q8! The sales staff was incredibly helpful and never pushy. They answered all my questions and made the entire purchase process simple and enjoyable. I highly recommend Velocity Drive to anyone in the market for a luxury car.
                  </p>
                </div>
              </div>
            </div>

            {/* Second carousel item */}
            <div className="carousel-item">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Jessica M</span>{" "}
                    <span>– ⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  I had an amazing experience at Velocity Drive! They made trading in my old car and upgrading to a Porsche 911 Turbo S seamless. I felt confident every step of the way thanks to their expert advice and outstanding customer service.
                  </p>
                </div>
                <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Daniel P</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  I’ve been to many dealerships, but none compare to the exceptional experience I had at Velocity Drive. They had a fantastic selection of vehicles, and I found the perfect Tesla Model S. The sales team was knowledgeable and never pressured me into making a decision.
                  </p>
                </div>
              </div>
            </div>
          <div className="carousel-item">
            <div className="flex flex-wrap justify-center gap-6">
            <div className="rs bg-[#F2F2F2] w-[500px] p-6">
                  <h3 className="text-center">
                    <span className="font-bold text-xl text-[#1B1F3B]">Michael K</span>{" "}
                    <span>– ⭐⭐⭐⭐⭐</span>
                  </h3>
                  <p className="pt-4 text-center text-[#333333]">
                  It was my first time buying a luxury vehicle, and the team at Velocity Drive made it an unforgettable experience. Their patience and attention to detail made me feel comfortable throughout the process, and now I’m driving away in my dream car, the Range Rover SVAutobiography.
                  </p>
                </div>
            </div>

          </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#Testimonial"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#Testimonial"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
        </>
      );
    };
    

export default Testimonial
