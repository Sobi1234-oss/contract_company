import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import Team from '../components/PageSections/team.js'; // create this
import Appointment_2 from '../components/PageSections/appointment-2.js';
import Fact from '../components/PageSections/facts2.js';
const OurTeam = () => {
  const location = useLocation();

  useEffect(() => {
    if(location.state && location.state.scrollToId){
      const element = document.getElementById(location.state.scrollToId);
      if(element){
        window.scrollTo({
          top: element.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  }, [location.state]);

  return (
    <>
      <PageHeader 
        name="Our Team" 
        link="Team" 
        bgImage={process.env.PUBLIC_URL + "/images/page-title-bg.jpg"}
      />

      {/* Team Section */}
      <Team />
       <Fact/>
      {/* Appointment Section */}
      
    </>
  );
};

export default OurTeam;
