import React, { useEffect } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const teamMembers = [
    { name: "Sabir Ahmed", role: "Projects Director", img: "/images/team/team-5.jpg" },
    { name: "Mohammad Asif Erubal", role: "Admin Manager", img: "/images/team/team-2.png" },
    { name: "Muhammad Rizwan Khan", role: "HSE Manager", img: "/images/team/team-3.jpg" },
    { name: "Vinu Viswanathan", role: "HR Executive", img: "/images/team/team-4.jpg" },
  ];

  return (
    <>
      <div className="container-xxl py-5 team-section">
        <div className="container">

          {/* Header */}
          <div className="row g-5 align-items-end mb-5" data-aos="fade-up">
            <div className="col-lg-6">
              <div className="border-start border-5 border-primary ps-4">
                <h6 className="text-body text-uppercase mb-2" style={{ fontSize: "14px" }}>
                  Our Team
                </h6>
                <h1 className="display-6 mb-0" style={{ fontSize: "28px" }}>
                  Meet Our Expert Professionals
                </h1>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="mb-0" style={{ fontSize: "15px" }}>
                Meet the professionals leading Aber Al-Khayal General Contracting
                Company with excellence and dedication.
              </p>
            </div>
          </div>

          {/* CEO Card */}
          <div className="row justify-content-center mb-5" data-aos="zoom-in">
            <div className="col-lg-6 col-md-8">
              <div className="card shadow-sm border-0 text-center team-card">
                <div className="team-img-wrapper" style={{ height: "500px" }}>
                  <img
                    src="/images/team/ceo.jpg"
                    className="team-img"
                    alt="CEO"
                    style={{ height: "500px", objectFit: "cover", transition: "transform 0.5s" }}
                    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div className="p-4">
                  <h5 className="text-primary mb-1" style={{ fontSize: "17px" }}>CEO & Founder</h5>
                  <h4 className="fw-bold" style={{ fontSize: "20px" }}>Shahnawaz Hasan Khan</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Other Members */}
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100 + index * 150}
              >
                <div className="card shadow-sm border-0 text-center team-card">
                  <div className="team-img-wrapper">
                    <img
                      src={member.img}
                      className="team-img"
                      alt={member.role}
                      style={{ transition: "transform 0.5s" }}
                      onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div className="p-3">
                    <h6 className="text-primary mb-1" style={{ fontSize: "16px" }}>{member.role}</h6>
                    <h5 className="fw-bold" style={{ fontSize: "18px" }}>{member.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Mobile Responsive Tweaks */}
        

      </div>
    </>
  );
};

export default Team;
