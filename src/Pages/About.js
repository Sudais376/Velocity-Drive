import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutHero from "../Components/AboutHero";
import AboutD from "../Components/AboutD";

const About = () => {

  useEffect (() => {
    window.scrollTo ( 0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Velocity Drive - About Us</title>
      </Helmet>

      <AboutHero />
      <AboutD />


    </>
  );
};

export default About;
