import React from 'react';
import PageHeader from '../components/PageHeader';
import Contact from '../components/PageSections/contact.js';

const ContactPage = () => {
return (
	  <>
      <PageHeader 
  name="Contact Us" 
  link="Contact" 
   bgImage={process.env.PUBLIC_URL + "/images/page-title-bg.jpg"}
/>
      <Contact />
      
    </>
);
};

export default ContactPage;
