import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactHero from "../Components/ContactHero";
import ContactGMap from "../Components/ContactGMap"
import ContactD from "../Components/ContactD";

const Contact = () => {

    useEffect (() => {
      window.scrollTo (0, 0);
    }, []);

  return (
    <>
      <Helmet>
        <title>Velocity Drive - Contact Us</title>
      </Helmet>
      <ContactHero />
      <ContactGMap />
      <ContactD />
    </>
  );
};

export default Contact;
