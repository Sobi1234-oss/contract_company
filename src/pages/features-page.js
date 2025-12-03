import React from 'react';
import PageHeader from '../components/PageHeader';
import Features from '../components/PageSections/features.js';
import Testimonial from '../components/PageSections/testimonial.js';
import Clients from '../components/PageSections/our_clients.js';;
const FeaturesPage = () => {
return (
	  <>
      <PageHeader 
  name="Our Clients" 
  link="clients" 
  bgImage="/images/page-title-bg.jpg" 
/>

      {/* features section start */}
        <Clients/>
      {/* features section end */}


      {/* testimonial section start */}
        <Testimonial />
      {/* testimonial section end */}
    </>
);
};

export default FeaturesPage;
