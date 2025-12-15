import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; 

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const PRIMARY_BLUE = "#0A387E";
  const ACCENT_ORANGE = "#ff7f00";
  const LIGHT_BG = "linear-gradient(135deg, #f0f4f9 0%, #ffffff 100%)";

  const servicesData = [
    {
      title: "Civil Engineering",
      img: process.env.PUBLIC_URL + "/images/services/civilnew.jpg",
      text: "We specialize in structural works, concrete projects, foundations, site development, and large-scale civil contracting.",
      id: "civil",
      icon: "🏗️",
    },
    {
      title: "Electrical Engineering",
      img: process.env.PUBLIC_URL + "/images/services/electricnew.png",
      text: "Professional electrical installation, wiring, power distribution, maintenance and system upgrades for industries & buildings.",
      id: "electrical",
      icon: "⚡",
    },
    {
      title: "Mechanical Engineering",
      img: process.env.PUBLIC_URL + "/images/services/mechanicnew.jpg",
      text: "HVAC systems, plumbing, steel fabrication, piping solutions, and complete mechanical contracting.",
      id: "mechanical",
      icon: "🔧",
    },
  ];

  const handleReadMore = (id) => {
    navigate('/our-services', { state: { scrollToId: id } });
  };

  return (
    <div className="container-xxl py-5" style={{ background: LIGHT_BG }}>
      <div className="container">
        {/* Heading Section */}
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div
              style={{
                borderLeft: `6px solid ${ACCENT_ORANGE}`,
                paddingLeft: "20px",
              }}
            >
              <span
                style={{
                  background: `rgba(255, 255, 255, 0.9)`,
                  color: ACCENT_ORANGE,
                  padding: "6px 16px",
                  borderRadius: "30px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  border: `1px solid ${ACCENT_ORANGE}`,
                }}
              >
                OUR EXPERT SERVICES
              </span>

              <h1
                style={{
                  fontSize: "2.8rem",
                  fontWeight: "800",
                  marginTop: "10px",
                  lineHeight: "1.2",
                  color: PRIMARY_BLUE,
                  textShadow: "1px 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                Services and <br />
                <span style={{ color: ACCENT_ORANGE }}>Industries We Serve</span>
              </h1>
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                color: PRIMARY_BLUE,
                lineHeight: "1.7",
                fontWeight: "500",
                marginTop: "15px",
                paddingLeft: "20px",
                maxWidth: "90%",
              }}
            >
              From petrochemical plants to large commercial facilities, we deliver precision Civil, Electrical, and Mechanical solutions tailored to the stringent demands of modern industry.
            </p>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <p
              style={{
                fontSize: "1.1rem",
                color: "#555",
                lineHeight: "1.7",
              }}
            >
              Our multidisciplinary expertise ensures seamless execution and quality control across complex projects, guaranteeing operational efficiency and compliance with global safety standards. Partner with us for reliable, integrated engineering and contracting services.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="row g-4 justify-content-center">
          {servicesData.map((service, index) => (
            <div
              key={service.id} 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay={100 + index * 150}
            >
              <div 
                className="service-card" 
                style={{ 
                  cursor: "pointer",
                  borderRadius: "20px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.4s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 30px 60px rgba(255, 127, 0, 0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.08)";
                }}
              >
                {/* Image Container with Increased Height */}
                <div 
                  style={{ 
                    height: "300px", 
                    overflow: "hidden",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "100%",
                      background: `linear-gradient(0deg, rgba(10, 56, 126, 0.1) 0%, transparent 50%)`,
                      zIndex: 1,
                      borderRadius: "20px 20px 0 0",
                    }}
                  />
                  <img
                    src={service.img}
                    alt={service.title}
                    style={{ 
                      width: "100%", 
                      height: "100%", 
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                      borderRadius: "20px 20px 0 0",
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                
                {/* Content Section */}
                <div style={{ 
                  padding: "30px", 
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                }}>
                  {/* Icon Container */}
                  <div
                    style={{
                      width: "70px",
                      height: "70px",
                      background: `linear-gradient(135deg, ${ACCENT_ORANGE}, #cc6600)`,
                      borderRadius: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2.2rem",
                      color: "white",
                      marginTop: "-55px",
                      marginBottom: "20px",
                      boxShadow: "0 12px 30px rgba(255, 127, 0, 0.4)",
                      zIndex: 2,
                      position: "relative",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "rotate(5deg) scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "rotate(0) scale(1)";
                    }}
                  >
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.6rem",
                      fontWeight: "800",
                      marginBottom: "15px",
                      color: PRIMARY_BLUE,
                      position: "relative",
                      paddingBottom: "10px",
                    }}
                  >
                    {service.title}
                    <span 
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        width: "50px",
                        height: "3px",
                        background: ACCENT_ORANGE,
                        borderRadius: "2px",
                      }}
                    />
                  </h3>
                  
                  {/* Description */}
                  <p style={{ 
                    color: "#555", 
                    lineHeight: "1.6", 
                    minHeight: "80px",
                    flex: 1,
                    marginBottom: "20px",
                  }}>
                    {service.text}
                  </p>
                  
                  {/* Read More Button */}
                  <div style={{ marginTop: "auto" }}>
                    <button
                      onClick={() => handleReadMore(service.id)}
                      style={{
                        background: `linear-gradient(45deg, ${ACCENT_ORANGE}, #cc6600)`,
                        padding: "12px 32px",
                        borderRadius: "50px",
                        color: "white",
                        fontWeight: "700",
                        border: "none",
                        boxShadow: `0 10px 25px rgba(255, 127, 0, 0.3)`,
                        transition: "all 0.3s ease",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        width: "100%",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-3px)";
                        e.target.style.boxShadow = "0 15px 35px rgba(255, 127, 0, 0.4)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 10px 25px rgba(255, 127, 0, 0.3)";
                      }}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add some responsive styles */}
      <style jsx="true">{`
        @media (max-width: 1200px) {
          .service-card img {
            height: 280px !important;
          }
        }
        
        @media (max-width: 992px) {
          .service-card img {
            height: 260px !important;
          }
          
          h1 {
            font-size: 2.3rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .service-card img {
            height: 240px !important;
          }
          
          .service-card {
            max-width: 400px;
            margin: 0 auto;
          }
          
          h1 {
            font-size: 2rem !important;
          }
        }
        
        @media (max-width: 576px) {
          .service-card img {
            height: 220px !important;
          }
          
          .service-card div[style*="padding: 30px"] {
            padding: 20px !important;
          }
          
          h3 {
            font-size: 1.4rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;