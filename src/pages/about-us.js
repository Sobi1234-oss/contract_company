import React from "react";
import PageHeader from "../components/PageHeader";

import About_details from "../components/PageSections/about_details.js";
const AboutUs = () => {
  return (
    <>
      <PageHeader
        name="About Us"
        link="About"
        bgImage="/images/page-title-bg.jpg"
      />

      {/* about section start */}

      {/* about section end */}

      {<About_details />}
      {/* team section start */}

      {/* team section end */}
    </>
  );
};

export default AboutUs;
