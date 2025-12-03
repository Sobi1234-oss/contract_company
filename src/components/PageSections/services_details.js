import React, { useEffect } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // Reordered array: Civil, Mechanical, Electrical
  const services = [
    {
      id: "civil",
      title: "Civil Engineering & Construction",
      img: process.env.PUBLIC_URL +"/images/services/civil_details.png",
      text: `At Aber Al-Khayal General Contracting Company, we specialize in delivering high-quality civil engineering and construction services. With extensive experience across Saudi Arabia, we provide comprehensive solutions for residential, commercial, and industrial projects, ensuring structural integrity, safety, and timely completion.`,
      
      ourServices: [
        "Surveying",
        "Earthwork",
        "Foundation",
        "Super Structure",
        "Industrial Building",
        "Architectural Finish",
        "Pipe Rack",
        "Warehouse",
        "Plant Road",
        "Building Maintenance & Renovation"
      ]
    },
    {
      id: "mechanical",
      title: "Mechanical Engineering",
      img:process.env.PUBLIC_URL + "/images/services/mechanic_details.png",
      text: `Aber Al-Khayal's Mechanical Engineering division provides expert solutions in HVAC systems, plumbing, piping, machinery installation, and industrial maintenance. Our team ensures high-performance, durable, and energy-efficient mechanical systems, delivering full project support from design to maintenance.`,
      
      ourServices: [
        "HVAC System Installation & Maintenance",
        "Plumbing & Piping Solutions",
        "Machinery Setup & Industrial Maintenance",
        "Chiller & Cooling Tower Installation",
        "Fire Fighting System Installation",
        "Compressed Air Systems",
        "Ductwork & Ventilation Systems",
        "Boiler Installation & Maintenance",
        "Energy Management Systems",
        "Preventive Maintenance Programs"
      ]
    },
    {
      id: "electrical",
      title: "Electrical Engineering",
      img: process.env.PUBLIC_URL +"/images/services/electric_details.png",
      text: `Our Electrical Engineering services include full-spectrum solutions such as power distribution, lighting systems, automation, wiring, panel installation, and maintenance. We focus on safety, energy efficiency, and compliance while delivering smart and reliable electrical networks for all project types.`,
      
      ourServices: [
        "Power Distribution Systems",
        "Lighting Systems Installation",
        "Electrical Panel & Switchboard Installation",
        "Wiring & Cable Management",
        "Automation & Control Systems",
        "Electrical Maintenance Services",
        "Energy Efficiency Solutions",
        "Smart Building Networks",
        "UPS & Backup Power Systems",
        "Electrical Safety Audits"
      ]
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">

        {/* Page Header - LEFT ALIGNED */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2" style={{ letterSpacing: "1.5px", fontSize: "0.85rem", fontWeight: "600" }}>
                Our Services
              </h6>
              <h1 className="display-5 mb-0 fw-bold" style={{ color: "#001f3f" }}>
                Detailed Engineering Services
              </h1>
              <p className="text-muted mt-3" style={{ fontSize: "1rem", maxWidth: "600px" }}>
                Comprehensive Civil, Electrical, and Mechanical Engineering Solutions for Saudi Arabia's Growing Infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* Services Sections - New order: Civil, Mechanical, Electrical */}
        {services.map((service, index) => (
          <div
            key={index}
            id={service.id}
            className="row align-items-center my-5 service-detail-section"
            data-aos="fade-up"
          >
            {/* Civil (index 0): Content LEFT, Image RIGHT */}
            {service.id === "civil" ? (
              <>
                {/* Content on LEFT for Civil */}
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2 className="text-dark fw-bold mb-3" style={{ color: "#ff9900" }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-muted mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                    {service.text}
                  </p>

                  {/* Our Services Section */}
                  <div className="mb-4">
                    <h5 className="text-dark fw-bold mb-3">
                      <i className="fas fa-tools me-2" style={{ color: "#ff9900" }}></i>
                      Our Services
                    </h5>
                    <div className="row g-2">
                      {service.ourServices.map((item, i) => (
                        <div key={i} className="col-md-6" data-aos="fade-up" data-aos-delay={i * 50}>
                          <div className="d-flex align-items-center p-2 bg-light rounded mb-2 service-item">
                            <i className="fas fa-check me-3" style={{ color: "#ff9900" }}></i>
                            <span className="text-dark">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image on RIGHT for Civil */}
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  style={{ 
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid rounded"
                    style={{ 
                      width: "100%", 
                      height: "450px", 
                      objectFit: "cover",
                      marginTop: "20px"
                    }}
                  />
                </div>
              </>
            ) : 
            /* Mechanical (index 1): Image LEFT, Content RIGHT */
            service.id === "mechanical" ? (
              <>
                {/* Image on LEFT for Mechanical */}
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  style={{ 
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid rounded"
                    style={{ 
                      width: "100%", 
                      height: "450px", 
                      objectFit: "cover",
                      marginTop: "20px"
                    }}
                  />
                </div>

                {/* Content on RIGHT for Mechanical */}
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2 className="text-dark fw-bold mb-3" style={{ color: "#ff9900" }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-muted mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                    {service.text}
                  </p>

                  {/* Our Services Section */}
                  <div className="mb-4">
                    <h5 className="text-dark fw-bold mb-3">
                      <i className="fas fa-tools me-2" style={{ color: "#ff9900" }}></i>
                      Our Services
                    </h5>
                    <div className="row g-2">
                      {service.ourServices.map((item, i) => (
                        <div key={i} className="col-md-6" data-aos="fade-up" data-aos-delay={i * 50}>
                          <div className="d-flex align-items-center p-2 bg-light rounded mb-2 service-item">
                            <i className="fas fa-check me-3" style={{ color: "#ff9900" }}></i>
                            <span className="text-dark">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : 
            /* Electrical (index 2): Content LEFT, Image RIGHT */
            (
              <>
                {/* Content on LEFT for Electrical */}
                <div
                  className="col-md-6"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h2 className="text-dark fw-bold mb-3" style={{ color: "#ff9900" }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-muted mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                    {service.text}
                  </p>

                  {/* Our Services Section */}
                  <div className="mb-4">
                    <h5 className="text-dark fw-bold mb-3">
                      <i className="fas fa-tools me-2" style={{ color: "#ff9900" }}></i>
                      Our Services
                    </h5>
                    <div className="row g-2">
                      {service.ourServices.map((item, i) => (
                        <div key={i} className="col-md-6" data-aos="fade-up" data-aos-delay={i * 50}>
                          <div className="d-flex align-items-center p-2 bg-light rounded mb-2 service-item">
                            <i className="fas fa-check me-3" style={{ color: "#ff9900" }}></i>
                            <span className="text-dark">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image on RIGHT for Electrical */}
                <div
                  className="col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  style={{ 
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center"
                  }}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="img-fluid rounded"
                    style={{ 
                      width: "100%", 
                      height: "450px", 
                      objectFit: "cover",
                      marginTop: "20px"
                    }}
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .service-detail-section {
          padding: 50px 0;
        }
        
        .service-item {
          transition: all 0.3s ease;
          border-left: 3px solid #ff9900;
        }
        
        .service-item:hover {
          transform: translateX(5px);
          background-color: rgba(255, 153, 0, 0.05);
        }
        
        @media (max-width: 768px) {
          .service-detail-section {
            padding: 30px 0;
          }
          
          .display-5 {
            font-size: 2rem;
          }
          
          img {
            height: 350px !important;
            margin-top: 30px !important;
          }
          
          /* On mobile, content always comes first, then image */
          .col-md-6:first-child {
            order: 2;
          }
          
          .col-md-6:last-child {
            order: 1;
          }
        }
        
        @media (max-width: 576px) {
          .col-md-6 {
            width: 100%;
          }
          
          .service-item span {
            font-size: 0.9rem;
          }
          
          .display-5 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesDetails;