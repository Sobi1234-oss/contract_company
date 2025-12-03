import React, { useRef } from 'react';
import Slider from '../components/PageSections/slider.js';
import About from '../components/PageSections/about.js';
import Facts from '../components/PageSections/facts.js';
import Features from '../components/PageSections/features.js';
import Appointment from '../components/PageSections/appointment.js';
import Team from '../components/PageSections/team.js';
import Testimonial from '../components/PageSections/testimonial.js';
import OurMission from '../components/PageSections/our_mission.js';   
import OurClients from '../components/PageSections/our_clients.js';
import HomeServices from '../components/PageSections/home_services.js';
import Projects from '../components/PageSections/projects';
import HSEQPolicy from '../components/PageSections/HSEQPolicy.js';
const Home = () => {
  const appointmentRef = useRef(null);

  const scrollToAppointment = () => {
    appointmentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Slider scrollToAppointment={scrollToAppointment} />

      <About />
     
      <OurMission />
      <HomeServices />
       <Facts />
      <Team />
      <OurClients />
      <Features />
      <HSEQPolicy />
      <Projects />
      <div ref={appointmentRef}>
        <Appointment />
      </div>

      <Testimonial />
    </>
  );
};

export default Home;
