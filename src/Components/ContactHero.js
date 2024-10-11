import React, { useEffect } from 'react'
import AOS from 'aos';

const ContactHero = () => {

    useEffect (() => {
        AOS.init ({duration : 1000});
    }, []);

  return (
   <>
   <div className='relative w-full h-[600px] max-w-[1800px] mx-auto'>
        <img data-aos ="fade-in" className='w-full h-[600px] object-cover z-10' src="/assets/ContactHero.png" alt="" />
        <div className='absolute inset-0 opacity-50 z-20 bg-[#1B1F3B] h-full'></div>

        <div data-aos ="fade-up" className='absolute top-[15%] w-full text-center bg-[rgba(81,79,79,0.41)] z-30'>
            <h2 data-aos ="fade-up" className='font-bold text-white text-2xl md:text-4xl text-center max-w-[800px] mx-auto pb-6'>Get in Touch with Us Today</h2>
            <p data-aos ="fade-up" className='text-white text-lg text-start md:!text-center max-w-[800px] mx-auto px-6'>We’re here to assist you with all your car-buying, financing, and servicing needs. Reach out to us with any questions or to schedule an appointment, and a member of our team will get back to you as soon as possible. Your satisfaction is our priority.</p>
        </div>

    </div>
   </>
  )
}

export default ContactHero
