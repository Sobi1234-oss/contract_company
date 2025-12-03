import React, { useEffect } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const OurMission = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <>
      {/* MISSION & VISION SECTION */}
      <section
        id="mission-vision"
        className="mission-vision section"
        style={{
          padding: "60px 0",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          position: "relative",
        }}
      >

        {/* BACKGROUND ELEMENTS */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255,140,0,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(255,165,0,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>

          {/* Section Title - Compact */}
          <div className="section-title text-center mb-4" data-aos="fade-up">
            <span className="badge bg-orange bg-opacity-20 text-orange fs-6 fw-normal mb-2 px-3 py-1 rounded-pill">
              Our Purpose
            </span>
            <h2 className="h1 fw-bold mb-2 text-white">
              Mission & <span className="text-orange">Vision</span>
            </h2>
            <p className="text-light opacity-75 mb-0" style={{ maxWidth: "500px", margin: "0 auto", fontSize: "0.95rem" }}>
              Building excellence through innovation and integrity
            </p>
          </div>

          <div className="row g-4">

            {/* Mission - Compact */}
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="mission-card h-100 position-relative">
                
                {/* ORANGE ACCENT */}
                <div className="position-absolute top-0 start-0 w-3 h-100 bg-orange rounded-start"></div>
                
                {/* CONTENT */}
                <div className="card-content ps-4 py-3">
                  
                  {/* HEADER */}
                  <div className="d-flex align-items-center mb-3">
                    <div className="icon-wrapper bg-orange bg-opacity-10 rounded-2 p-2 me-3">
                      <i className="fa fa-bullseye fa-lg text-orange"></i>
                    </div>
                    <h3 className="h4 fw-bold text-white mb-0">Our Mission</h3>
                  </div>

                  {/* CONTENT - More Compact */}
                  <p className="text-light opacity-85 mb-3" style={{ lineHeight: "1.6", fontSize: "0.9rem" }}>
                    To deliver innovative engineering solutions with precision, safety, and uncompromised 
                    quality—empowering progress and exceeding client expectations.
                  </p>

                  {/* COMPACT FEATURES */}
                  <div className="features-list">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-check text-orange me-2" style={{ fontSize: "0.8rem" }}></i>
                      <span className="text-light opacity-85" style={{ fontSize: "0.85rem" }}>Precision Engineering</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-check text-orange me-2" style={{ fontSize: "0.8rem" }}></i>
                      <span className="text-light opacity-85" style={{ fontSize: "0.85rem" }}>Safety First</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check text-orange me-2" style={{ fontSize: "0.8rem" }}></i>
                      <span className="text-light opacity-85" style={{ fontSize: "0.85rem" }}>Client Focus</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Vision - Compact */}
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="150">
              <div className="vision-card h-100 position-relative">
                
                {/* ORANGE ACCENT */}
                <div className="position-absolute top-0 end-0 w-3 h-100 bg-orange rounded-end"></div>
                
                {/* CONTENT */}
                <div className="card-content pe-4 py-3">
                  
                  {/* HEADER */}
                  <div className="d-flex align-items-center mb-3 justify-content-end">
                    <h3 className="h4 fw-bold text-white mb-0 me-3">Our Vision</h3>
                    <div className="icon-wrapper bg-orange bg-opacity-10 rounded-2 p-2">
                      <i className="fa fa-eye fa-lg text-orange"></i>
                    </div>
                  </div>

                  {/* CONTENT - More Compact */}
                  <p className="text-light opacity-85 mb-3 text-end" style={{ lineHeight: "1.6", fontSize: "0.9rem" }}>
                    To become a global leader in engineering excellence—recognized for reliability, 
                    innovation, and sustainable development.
                  </p>

                  {/* COMPACT FEATURES */}
                  <div className="features-list text-end">
                    <div className="d-flex align-items-center mb-2 justify-content-end">
                      <span className="text-light opacity-85 me-2" style={{ fontSize: "0.85rem" }}>Global Leadership</span>
                      <i className="fa fa-check text-orange" style={{ fontSize: "0.8rem" }}></i>
                    </div>
                    <div className="d-flex align-items-center mb-2 justify-content-end">
                      <span className="text-light opacity-85 me-2" style={{ fontSize: "0.85rem" }}>Sustainability</span>
                      <i className="fa fa-check text-orange" style={{ fontSize: "0.8rem" }}></i>
                    </div>
                    <div className="d-flex align-items-center justify-content-end">
                      <span className="text-light opacity-85 me-2" style={{ fontSize: "0.85rem" }}>Innovation</span>
                      <i className="fa fa-check text-orange" style={{ fontSize: "0.8rem" }}></i>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* COMPACT CTA */}
          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="200">
            <button className="btn btn-orange btn-sm px-4 py-2 rounded-pill fw-bold">
             Take the First Step Toward Excellence
            </button>
          </div>

        </div>

        {/* STYLES */}
        <style jsx>{`
          .mission-card,
          .vision-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 165, 0, 0.15);
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            min-height: 180px;cursor: pointer;
          }

          .mission-card:hover,
          .vision-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(255, 140, 0, 0.15);
            border-color: rgba(255, 165, 0, 0.3);
          }

          .icon-wrapper {
            transition: all 0.3s ease;
          }

          .mission-card:hover .icon-wrapper,
          .vision-card:hover .icon-wrapper {
            transform: scale(1.05);
          }

          .bg-orange {
            background-color: #ff6b00 !important;
          }

          .text-orange {
            color: #ff6b00 !important;
          }

          .btn-orange {
            background: linear-gradient(45deg, #ff6b00, #ff8c00);
            border: none;
            color: white;
            transition: all 0.3s ease;
            font-size: 0.9rem;
          }

          .btn-orange:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 255, 255, 1);
          }

          .w-3 {
            width: 3px !important;
          }

          @media (max-width: 768px) {
            .section {
              padding: 40px 0 !important;
            }
            
            .mission-card,
            .vision-card {
              margin-bottom: 20px;
              min-height: 160px;
            }
            
            .card-content {
              padding-left: 20px !important;
              padding-right: 20px !important;
            }
            
            .h1 {
              font-size: 1.8rem;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default OurMission;