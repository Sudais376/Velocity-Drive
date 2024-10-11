import React, { useEffect } from 'react'
import AOS from 'aos';

const AboutHero = () => {

    useEffect (() => {
      AOS.init ({duration: 1000});
    }, []);

  return (
    <>
    <div className='relative w-full h-[600px] max-w-[1800px] mx-auto'>
        <img data-aos ="fade-in" className='w-full h-[600px] object-cover z-10' src="/assets/AboutHero.png" alt="" />
        <div className='absolute inset-0 opacity-50 z-20 bg-[#1B1F3B] h-full'></div>

        <div data-aos ="fade-up" className='absolute top-[15%] w-full text-center bg-[rgba(81,79,79,0.41)] z-30'>
            <h2 data-aos ="fade-up" className='font-bold text-white text-2xl md:text-4xl text-center max-w-[800px] mx-auto pb-6'>Your Trusted Partner for Cars and Services</h2>
            <p data-aos ="fade-up" className='text-white text-lg text-start md:!text-center max-w-[800px] mx-auto px-6'>At Velocity Drive, we believe that buying a car is more than just a transaction – it’s a commitment to excellence. With a focus on customer satisfaction, we are proud to provide the finest selection of vehicles and top-tier services to meet your every need.</p>
        </div>

    </div>
    </>
  )
}

export default AboutHero
