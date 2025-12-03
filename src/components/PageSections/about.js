import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../style_new.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section
        className="about-section py-5"
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #ffffff 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "10%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(255,107,0,0.03) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            
            {/* TEXT SIDE - LEFT */}
            <div className="col-lg-6" data-aos="fade-right">
              <div className="content-wrapper pe-lg-4">

                {/* Section Badge - Keep original */}
                <div className="d-flex align-items-center mb-3">
                  <div className="section-line bg-orange me-3"></div>
                  <span className="text-orange text-uppercase fw-bold tracking-wide" style={{ letterSpacing: "2px", fontSize: "0.9rem" }}>
                    About Our Company
                  </span>
                </div>

                {/* Main Heading - Keep original */}
                <h2 className="fw-bold mb-4 display-5 text-dark">
                  Leading <span className="text-orange">Engineering</span> & Contracting Solutions
                </h2>

                {/* Updated Description */}
                <p className="text-dark mb-4 lead" style={{ lineHeight: "1.7", fontSize: "1.1rem" }}>
                  <strong>Aber Al-Khayal General Contracting Company</strong> is a premier name in Saudi Arabia, 
                  delivering exceptional engineering and contracting services across Electrical, Mechanical, 
                  and Civil Engineering sectors.
                </p>

                {/* Updated Features Grid */}
                <div className="row g-3 mb-4" data-aos="fade-up" data-aos-delay="200">
                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-orange feature-item">
                      <div className="feature-icon-wrapper bg-orange bg-opacity-10 rounded-2 p-2 me-3">
                        <i className="fas fa-bolt text-orange"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">Electrical Engineering</h6>
                        <small className="text-muted">Power & Systems</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-orange feature-item">
                      <div className="feature-icon-wrapper bg-orange bg-opacity-10 rounded-2 p-2 me-3">
                        <i className="fas fa-cogs text-orange"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">Mechanical Systems</h6>
                        <small className="text-muted">HVAC & Plumbing</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-orange feature-item">
                      <div className="feature-icon-wrapper bg-orange bg-opacity-10 rounded-2 p-2 me-3">
                        <i className="fas fa-hard-hat text-orange"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">Civil Construction</h6>
                        <small className="text-muted">Building & Infrastructure</small>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex align-items-center p-3 bg-white rounded-3 shadow-sm border-start border-4 border-orange feature-item">
                      <div className="feature-icon-wrapper bg-orange bg-opacity-10 rounded-2 p-2 me-3">
                        <i className="fas fa-shield-alt text-orange"></i>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1 text-dark">Safety Standards</h6>
                        <small className="text-muted">Quality Assurance</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updated Second Description */}
                <p className="text-muted mb-4" style={{ lineHeight: "1.6" }}>
                  With over 15 years of professional expertise, our dedicated team ensures precision 
                  engineering and timely project execution across residential, commercial, and industrial 
                  developments throughout Saudi Arabia.
                </p>

                {/* Updated Stats */}
                <div className="stats-container p-4 bg-white rounded-4 shadow-sm border border-orange border-2" 
                     data-aos="fade-up" data-aos-delay="300">
                  <div className="row text-center g-0">
                    <div className="col-4">
                      <div className="stat-item">
                        <div className="stat-number fw-bold text-orange display-6 mb-1">15+</div>
                        <div className="stat-label text-muted small">Years Experience</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-item">
                        <div className="stat-number fw-bold text-orange display-6 mb-1">500+</div>
                        <div className="stat-label text-muted small">Projects Completed</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-item">
                        <div className="stat-number fw-bold text-orange display-6 mb-1">50+</div>
                        <div className="stat-label text-muted small">Expert Team</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* IMAGE SIDE - RIGHT */}
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              <div className="image-wrapper position-relative">
                <div className="image-frame overflow-hidden rounded-4 shadow-lg">
                  <img
                    src={process.env.PUBLIC_URL + "/images/about-2.jpg"}
                    alt="Al-Khayal Engineering Services"
                    className="img-fluid main-image rounded-4"
                    style={{ height: "450px", objectFit: "cover" }}
                  />
                </div>

                {/* Floating Experience Badge - Updated to 15 years */}
                <div className="floating-badge position-absolute">
                  <div className="badge-content bg-white rounded-4 shadow-lg p-4 text-center">
                    <div className="icon-wrapper bg-orange rounded-3 p-3 mx-auto mb-3">
                      <i className="fa fa-award fa-2x text-white"></i>
                    </div>
                    <h4 className="fw-bold text-dark mb-1">15 Years</h4>
                    <p className="text-muted mb-0 small">Of Excellence</p>
                  </div>
                </div>

                {/* Small Floating Elements */}
                <div className="floating-element element-1 position-absolute bg-orange rounded-3 shadow">
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="floating-element element-2 position-absolute bg-orange rounded-3 shadow">
                  <i className="fa fa-star text-white"></i>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CUSTOM STYLES */}
        <style jsx>{`
          .about-section {
            font-family: 'Inter', sans-serif;
          }

          .section-line {
            width: 4px;
            height: 40px;
            border-radius: 2px;
          }

          .text-orange {
            color: #ff9900ff !important;
          }

          .bg-orange {
            background-color: #ff9900ff !important;
          }

          /* Feature Items */
          .feature-item {
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .feature-item:hover {
            background: rgba(255, 153, 0, 0.05) !important;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 153, 0, 0.15) !important;
          }

          .feature-icon-wrapper {
            transition: all 0.3s ease;
          }

          .feature-item:hover .feature-icon-wrapper {
            transform: scale(1.1);
            background: rgba(255, 153, 0, 0.15) !important;
          }

          /* Stats */
          .stats-container {
            transition: all 0.3s ease;cursor: pointer;
          }

          .stats-container:hover {
            box-shadow: 0 8px 25px rgba(255, 153, 0, 0.1) !important;
            transform: translateY(-2px);
          }

          .stat-item {
            transition: all 0.3s ease;
          }

          .stat-item:hover {
            transform: scale(1.05);
          }

          .stat-item:hover .stat-number {
            color: #001f3f !important;
          }

          /* Image */
          .image-wrapper {
            position: relative;
            border-radius: 20px;
            transition: transform 0.4s ease;
          }

          .image-frame {
            transition: all 0.4s ease;
            border: 8px solid white;
          }

          .image-frame:hover {
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2) !important;
            transform: translateY(-5px);
          }

          .main-image {
            transition: all 0.5s ease;
          }

          .image-frame:hover .main-image {
            transform: scale(1.03);
          }

          /* Floating Badge */
          .floating-badge {
            top: -20px;
            right: -20px;
            animation: float 3s ease-in-out infinite;
          }

          .badge-content {
            min-width: 140px;
          }

          .icon-wrapper {
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Floating Elements */
          .floating-element {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: float 2s ease-in-out infinite;
          }

          .element-1 {
            bottom: 30px;
            left: -15px;
            animation-delay: 0.5s;
          }

          .element-2 {
            top: 40%;
            right: 30px;
            animation-delay: 1s;
          }

          /* Animations */
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0); }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Apply subtle animations */
          .feature-item,
          .stats-container,
          .image-frame {
            animation: fadeInUp 0.6s ease-out;
          }

          .feature-item:nth-child(1) { animation-delay: 0.1s; }
          .feature-item:nth-child(2) { animation-delay: 0.2s; }
          .feature-item:nth-child(3) { animation-delay: 0.3s; }
          .feature-item:nth-child(4) { animation-delay: 0.4s; }

          .tracking-wide {
            letter-spacing: 2px;
          }

          /* Responsive */
          @media (max-width: 991px) {
            .main-image {
              height: 350px !important;
            }
          }

          @media (max-width: 768px) {
            .floating-badge {
              top: -10px;
              right: -10px;
            }
            
            .badge-content {
              min-width: 120px;
              padding: 15px !important;
            }
            
            .icon-wrapper {
              width: 50px;
              height: 50px;
            }
            
            .display-5 {
              font-size: 2rem;
            }
            
            .floating-element {
              display: none;
            }
            
            .main-image {
              height: 300px !important;
            }
          }

          @media (max-width: 576px) {
            .stats-container .row {
              flex-direction: column;
              gap: 1rem;
            }

            .stats-container .col-4 {
              width: 100%;
            }
            
            .main-image {
              height: 250px !important;
            }
          }
        `}</style>

      </section>
    </>
  );
};

export default About;