import React from "react";

const OurClients = () => {
  const clients = [
    { img: process.env.PUBLIC_URL +"/images/clients/client-1.png", delay: 100 },
    { img: process.env.PUBLIC_URL +"/images/clients/client-2.png", delay: 150 },
    { img:process.env.PUBLIC_URL + "/images/clients/client-3.png", delay: 200 },
    { img: process.env.PUBLIC_URL +"/images/clients/client-4.png", delay: 250 },
    { img: process.env.PUBLIC_URL +"/images/clients/client-5.png", delay: 300 },
    { img: process.env.PUBLIC_URL +"/images/clients/client-6.png", delay: 350 },
    { img:process.env.PUBLIC_URL + "/images/clients/client-7.png", delay: 400 },
    { img: process.env.PUBLIC_URL +"/images/clients/client-8.png", delay: 450 },
  ];

  const whyChooseUs = [
    {
      icon: "⚡",
      title: "Electrical Excellence",
      description: "Complete electrical solutions with cutting-edge technology and safety standards"
    },
    {
      icon: "🔧",
      title: "Mechanical Mastery",
      description: "HVAC, plumbing, and mechanical systems with precision engineering"
    },
    {
      icon: "🏗️",
      title: "Civil Construction",
      description: "Structural works and building construction with quality assurance"
    },
    {
      icon: "⏱️",
      title: "On-Time Delivery",
      description: "Guaranteed project completion within agreed timelines"
    }
  ];

  return (
    <>
      <section id="clients" className="clients section" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
        <div className="container">
          {/* Left Aligned Header for Clients */}
          <div className="row mb-5" data-aos="fade-up" style={{ marginTop: "30px" }}>
            <div className="col-lg-8">
              <div className="border-start border-5 border-primary ps-4">
                <h6 className="text-body text-uppercase mb-2">Our Clients</h6>
                <h1 className="display-6 mb-0 fw-bold">Trusted by Leading Companies & Organizations</h1>
                <p className="text-muted mt-3">
                 Proud partners to top companies across Saudi Arabia, delivering dependable engineering results.
                </p>
              </div>
            </div>
          </div>

          <div className="row gy-4 justify-content-center">
            {clients.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-6 text-center"
                data-aos="zoom-in"
                data-aos-delay={item.delay}
              >
                <div className="client-logo-circle mx-auto">
                  <img
                    src={item.img}
                    alt={`Client ${index + 1}`}
                    className="client-logo-circle-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .client-logo-circle {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fff;
            border: 3px solid #180754ff;
            transition: transform 0.3s ease;cursor: pointer;
          }

          .client-logo-circle:hover {
            transform: scale(1.08);
          }

          .client-logo-circle-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}</style>
      </section>

      {/* WHY CHOOSE US SECTION - Reduced Height */}
      <section className="why-choose-section" style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        paddingTop: "50px",
        paddingBottom: "50px"
      }}>
        <div className="container">
          {/* Compact Header for Why Choose Us */}
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="badge bg-orange bg-opacity-20 text-orange fs-6 fw-normal mb-2 px-3 py-1 rounded-pill">
              Why Choose Us
            </span>
            <h3 className="h1 fw-bold text-white mb-2">
              Why <span className="text-orange">Aber Al-Khayal</span> Stands Out
            </h3>
            <p className="text-light opacity-75" style={{ maxWidth: "500px", margin: "0 auto", fontSize: "0.95rem" }}>
              Excellence in electrical, mechanical, and civil engineering with unmatched expertise.
            </p>
          </div>

          <div className="row g-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-card text-center p-3 rounded-3 h-100">
                  <div className="feature-icon-wrapper mx-auto mb-3">
                    <div className="icon-circle bg-orange rounded-circle d-flex align-items-center justify-content-center">
                      <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
                    </div>
                  </div>
                  <h5 className="text-white fw-bold mb-2" style={{ fontSize: "1rem" }}>{item.title}</h5>
                  <p className="text-light opacity-85 mb-0 small" style={{ lineHeight: "1.5" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Stats Section */}
          <div className="row mt-4" data-aos="fade-up" data-aos-delay="300">
            <div className="col-12">
              <div className="stats-box bg-dark bg-opacity-50 rounded-3 p-3 border border-orange border-opacity-25">
                <div className="row text-center">
                  <div className="col-md-3 col-6 mb-2">
                    <h4 className="fw-bold text-orange mb-1">15+</h4>
                    <p className="text-light mb-0 small">Years Experience</p>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <h4 className="fw-bold text-orange mb-1">500+</h4>
                    <p className="text-light mb-0 small">Projects Completed</p>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <h4 className="fw-bold text-orange mb-1">50+</h4>
                    <p className="text-light mb-0 small">Expert Engineers</p>
                  </div>
                  <div className="col-md-3 col-6 mb-2">
                    <h4 className="fw-bold text-orange mb-1">100%</h4>
                    <p className="text-light mb-0 small">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .feature-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 107, 0, 0.15);
            transition: all 0.3s ease;
            min-height: 180px;
          }

          .feature-card:hover {
            transform: translateY(-5px);
            border-color: rgba(255, 107, 0, 0.3);
            box-shadow: 0 10px 25px rgba(255, 107, 0, 0.1);
          }

          .icon-circle {
            width: 60px;
            height: 60px;
            transition: all 0.3s ease;
          }

          .feature-card:hover .icon-circle {
            transform: scale(1.08);
          }

          .bg-orange {
            background: linear-gradient(45deg, #ff6b00, #ff8c00) !important;
          }

          .text-orange {
            color: #ff6b00 !important;
          }

          .stats-box {
            transition: all 0.3s ease;
          }

          .stats-box:hover {
            border-color: rgba(255, 107, 0, 0.4) !important;
          }

          @media (max-width: 768px) {
            .why-choose-section {
              padding: 40px 0 !important;
            }
            
            .h1 {
              font-size: 1.8rem;
            }
            
            .icon-circle {
              width: 50px;
              height: 50px;
            }
            
            .feature-card {
              margin-bottom: 1rem;
              min-height: 160px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default OurClients;