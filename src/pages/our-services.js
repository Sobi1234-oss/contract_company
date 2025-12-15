import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import Facts2 from '../components/PageSections/facts2.js';
import Appoi from '../components/PageSections/appointment-2.js';
import ServicesDetails from '../components/PageSections/services_details.js';
import Services from '../components/PageSections/services.js';
const OurServices = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.state && location.state.scrollToId){
      const element = document.getElementById(location.state.scrollToId);
      if(element){
        // Scroll to the section smoothly
        window.scrollTo({
          top: element.offsetTop - 100, // adjust for header/nav height
          behavior: 'smooth'
        });
      }
    }
  }, [location.state]);

  return (
    <>
      <PageHeader 
        name="Our Services" 
        link="Services" 
         bgImage={process.env.PUBLIC_URL + "/images/about_us.png"} 
      />

      {/* Services Overview Section */}
      <Services/>

      {/* Detailed Services Section */}
      <ServicesDetails />

      {/* Appointment Section */}
      <Facts2/>
    </>
  );
};

export default OurServices;
