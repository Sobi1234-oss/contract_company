import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FULL_WIDTH_IMAGE_URL = "./images/electric.png";
const PARALLAX_BG_IMAGE = "./images/electric.png";

const MissionContentParallax = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="mission-vision-parallax"
      style={{
        backgroundImage: `url(${PARALLAX_BG_IMAGE})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "30px 0",
        minHeight: "220px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(10, 25, 47, 0.57)",
          zIndex: 1,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, minHeight: "220px" }}>
        {/* HEADER SECTION */}
        <div className="row mb-4">
          <div className="col-lg-10 text-start" data-aos="fade-down">
            <span
              style={{
                padding: "7px 24px",
                borderRadius: "30px",
                background: "white",
                color: "#ff7f00",
                fontWeight: 700,
                fontSize: "0.6rem",
                border: "1px solid #ff7f00",
                letterSpacing: "2px",
              }}
            >
              ENGINEERING • CONSTRUCTION • EPC
            </span>

            <h1
              style={{
                fontFamily: 'Raleway, sans-serif',
                fontSize: "2.4rem",
                fontWeight: "900",
                color: "white",
                marginTop: "20px",
                lineHeight: "1.5",
                textTransform: "uppercase",
                textShadow: "1px 3px 6px rgba(0,0,0,0.6)",
              }}
            >
              Transforming Ideas Into  
              <span style={{ color: "#ff7f00" }}> Engineering Reality</span>
            </h1>

            <p
              style={{
                color: "#dddddd",
                maxWidth: "780px",
                fontSize: "1.15rem",
                lineHeight: "1.75",
                marginTop: "10px",
              }}
            >
              Delivering cutting-edge Civil, Mechanical, Electrical and EPC
              solutions with uncompromised commitment to safety,
              quality, engineering excellence, and sustainable development
              across the Kingdom of Saudi Arabia.
            </p>
          </div>
        </div>

        {/* GRID - Fixed to show mission/vision on mobile */}
        <div className="row g-4 align-items-start">
          {/* LEFT CONTENT - Mission & Vision */}
          <div className="col-lg-7 col-md-12">
            {/* Mission */}
            <div data-aos="fade-right" data-aos-delay="200">
              <div
                style={{
                  background: "white",
                  padding: "28px",
                  borderRadius: "14px",
                  boxShadow: "0 4px 25px rgba(0, 0, 0, 0.22)",
                  marginBottom: "22px",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      background: "#ff7f00",
                      padding: "14px",
                      borderRadius: "50%",
                      marginRight: "18px",
                    }}
                  >
                    <i className="fa fa-bullseye text-white"></i>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.55rem",
                      fontWeight: "800",
                      margin: 0,
                    }}
                  >
                    Our Mission
                  </h2>
                </div>

                <p
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    lineHeight: "1.8",
                  }}
                >
                  To deliver world-class engineering & construction solutions 
                  that drive industrial growth and national infrastructure
                  development. We are committed to innovation, safety,
                  reliability, and creating long-lasting value for our clients
                  through precision engineering and sustainable practices.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div data-aos="fade-right" data-aos-delay="300">
              <div
                style={{
                  background: "white",
                  padding: "28px",
                  borderRadius: "14px",
                  boxShadow: "0 4px 25px rgba(0,0,0,0.25)",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    style={{
                      background: "#ff7f00",
                      padding: "14px",
                      borderRadius: "50%",
                      marginRight: "18px",
                    }}
                  >
                    <i className="fa fa-eye text-white"></i>
                  </div>
                  <h2
                    style={{
                      fontSize: "1.55rem",
                      fontWeight: "800",
                      margin: 0,
                    }}
                  >
                    Our Vision
                  </h2>
                </div>

                <p
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    lineHeight: "1.8",
                  }}
                >
                  To become a globally recognized leader in Engineering,
                  Construction, and EPC services—delivering future-ready
                  infrastructure and industrial excellence that contributes to
                  the vision of a modern and sustainable Saudi Arabia.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT STATIC IMAGE - Hidden on mobile */}
          <div className="col-lg-5 d-none d-lg-block" data-aos="zoom-in" data-aos-delay="350">
            {/* You can add an image or content here that only shows on desktop */}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="text-center mt-5" data-aos="fade-up">
          <a
            href="#contact-form"
            style={{
              display: "inline-block",
              background: "#ff7f00",
              padding: "15px 45px",
              borderRadius: "50px",
              color: "white",
              fontWeight: "900",
              textDecoration: "none",
              fontSize: "1.1rem",
              letterSpacing: "1px",
            }}
          >
            Request Engineering Consultation →
          </a>
        </div>

        {/* Responsive Styles */}
        <style jsx="true">{`
          @media (max-width: 1200px) {
            h1 {
              font-size: 2rem !important;
            }
            
            p {
              font-size: 1rem !important;
            }
          }

          @media (max-width: 992px) {
            #mission-vision-parallax {
              padding: 25px 0 !important;
              min-height: auto !important;
            }
            
            h1 {
              font-size: 1.8rem !important;
              line-height: 1.3 !important;
              margin-top: 15px !important;
            }
            
            p {
              font-size: 0.95rem !important;
              line-height: 1.6 !important;
            }
            
            .mission-vision-box {
              padding: 20px !important;
            }
            
            h2 {
              font-size: 1.4rem !important;
            }
          }

          @media (max-width: 768px) {
            #mission-vision-parallax {
              padding: 20px 0 !important;
            }
            
            .container {
              padding-left: 15px !important;
              padding-right: 15px !important;
            }
            
            h1 {
              font-size: 1.6rem !important;
              margin-top: 12px !important;
              text-transform: none !important;
              letter-spacing: normal !important;
            }
            
            span[style*="padding: 7px 24px"] {
              padding: 6px 15px !important;
              font-size: 0.55rem !important;
              letter-spacing: 1px !important;
            }
            
            p {
              font-size: 0.9rem !important;
              line-height: 1.5 !important;
              margin-top: 8px !important;
            }
            
            /* Mission & Vision Boxes - Show them properly on mobile */
            .col-lg-7.col-md-12 {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            
            .mission-vision-box {
              padding: 18px !important;
              margin-bottom: 15px !important;
              border-radius: 12px !important;
            }
            
            .d-flex.align-items-center.mb-3 {
              margin-bottom: 12px !important;
            }
            
            h2 {
              font-size: 1.3rem !important;
            }
            
            .mission-vision-box p {
              font-size: 0.9rem !important;
              line-height: 1.6 !important;
            }
            
            /* CTA Button */
            .text-center.mt-5 a {
              padding: 12px 30px !important;
              font-size: 1rem !important;
              display: inline-block;
              width: 90%;
              max-width: 300px;
            }
          }

          @media (max-width: 576px) {
            h1 {
              font-size: 1.4rem !important;
              margin-top: 10px !important;
            }
            
            span[style*="padding: 7px 24px"] {
              padding: 5px 12px !important;
              font-size: 0.5rem !important;
            }
            
            p {
              font-size: 0.85rem !important;
              line-height: 1.4 !important;
            }
            
            /* Mission & Vision Boxes */
            .mission-vision-box {
              padding: 15px !important;
              margin-bottom: 12px !important;
            }
            
            .d-flex.align-items-center.mb-3 {
              flex-direction: column;
              align-items: flex-start !important;
              margin-bottom: 10px !important;
            }
            
            div[style*="background: #ff7f00"] {
              margin-bottom: 10px !important;
              margin-right: 0 !important;
              padding: 12px !important;
            }
            
            h2 {
              font-size: 1.2rem !important;
            }
            
            .mission-vision-box p {
              font-size: 0.85rem !important;
              line-height: 1.5 !important;
            }
            
            /* CTA Button */
            .text-center.mt-5 {
              margin-top: 20px !important;
            }
            
            .text-center.mt-5 a {
              padding: 10px 25px !important;
              font-size: 0.9rem !important;
            }
          }

          @media (max-width: 400px) {
            h1 {
              font-size: 1.2rem !important;
            }
            
            p {
              font-size: 0.8rem !important;
              line-height: 1.3 !important;
            }
            
            .mission-vision-box {
              padding: 12px !important;
            }
            
            h2 {
              font-size: 1.1rem !important;
            }
            
            .mission-vision-box p {
              font-size: 0.8rem !important;
              line-height: 1.4 !important;
            }
            
            .text-center.mt-5 a {
              padding: 8px 20px !important;
              font-size: 0.85rem !important;
              letter-spacing: 0.5px !important;
            }
          }

          /* Ensure mission/vision boxes are always visible */
          .row.g-4.align-items-start {
            display: flex !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default MissionContentParallax;