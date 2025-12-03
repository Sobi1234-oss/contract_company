import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import HomeServices from '../components/PageSections/home_services.js';
import Appointment_2 from '../components/PageSections/appointment-2.js';
import ServicesDetails from '../components/PageSections/services_details.js';

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
         bgImage={process.env.PUBLIC_URL + "/images/page-title-bg.jpg"} 
      />

      {/* Services Overview Section */}
      <HomeServices/>

      {/* Detailed Services Section */}
      <ServicesDetails />

      {/* Appointment Section */}
      
    </>
  );
};

export default OurServices;
