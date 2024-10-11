import React, { useEffect } from "react";
import AOS from "aos";

const AboutD = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up" className="max-w-[1800px] mx-auto content-center">
        <div data-aos="fade-up" className="max-w-[800px] mx-auto py-12">
          <h2
            data-aos="fade-up"
            className="text-center font-bold text-2xl md:text-4xl pb-4"
          >
            Who We Are
          </h2>
          <p data-aos="fade-up" className="md:text-center px-6 text-lg">
            Velocity Drive has been serving the automotive needs of our
            community since 1995. Our mission is to provide high-quality
            vehicles, exceptional customer service, and a seamless car-buying
            experience. Whether you’re purchasing a new or pre-owned vehicle, or
            you’re in need of maintenance, we’re here to ensure your
            satisfaction every step of the way.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="max-w-[1800px] mx-auto content-centert"
      >
        <div data-aos="fade-up" className="max-w-[800px] mx-auto pb-12">
          <h4
            data-aos="fade-up"
            className="font-bold text-2xl md:text-3xl text-center py-4"
          >
            Our Mission
          </h4>
          <p data-aos="fade-up" className="lg:text-center text-lg px-6">
            We strive to deliver a car buying experience that is easy,
            transparent, and tailored to your needs. Our team is dedicated to
            helping you find the perfect car, backed by a commitment to quality
            and customer service.
          </p>

          <h4
            data-aos="fade-up"
            className="font-bold text-2xl md:text-3xl text-center py-4"
          >
            Our Vision
          </h4>
          <p data-aos="fade-up" className="lg:text-center text-lg px-6">
            As we continue to grow, we envision expanding our services to meet
            the ever-evolving needs of our customers, ensuring that we remain a
            trusted partner for all your automotive needs.
          </p>

          <h4
            data-aos="fade-up"
            className="font-bold text-2xl md:text-3xl text-center py-4"
          >
            Our Values
          </h4>

          <p data-aos="fade-up" className="font-bold text-xl text-center">
            Integrity:
          </p>
          <p data-aos="fade-up" className="lg:text-center text-lg px-6 py-2">
            We believe in transparent and honest communication with our
            customers.
          </p>
          <p data-aos="fade-up" className="font-bold text-xl text-center">
            Quality:
          </p>
          <p data-aos="fade-up" className="text-center text-lg px-6 py-2">
            From the cars we sell to the services we provide, we hold ourselves
            to the highest standards.
          </p>
          <p data-aos="fade-up" className="font-bold text-xl text-center">
            Customer Focus:
          </p>
          <p data-aos="fade-up" className="lg:text-center text-lg px-6 py-2">
            Your satisfaction is our top priority, and we are here to make your
            experience seamless.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="max-w-[1800px] mx-auto content-center">
        <div data-aos="fade-up" className="max-w-[800px] mx-auto py-12">
          <h2
            data-aos="fade-up"
            className="text-center font-bold text-2xl md:text-4xl pb-4"
          >
            Why Choose Velocity Drive?
          </h2>
          <p data-aos="fade-up" className="md:text-center px-6 text-lg">
            We understand that purchasing a car is a significant investment,
            which is why we go the extra mile to make your experience as smooth
            and rewarding as possible.
          </p>
        </div>
      </div>

      <div data-aos="fade-up" id="AboutTestimonial" className="carousel slide pb-12">
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
            data-bs-target="#AboutTestimonial"
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
            data-bs-target="#AboutTestimonial"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-black opacity-1"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </>
  );
};

export default AboutD;
