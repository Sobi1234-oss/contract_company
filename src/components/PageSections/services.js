import React, { useEffect } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = ({ onReadMore }) => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const servicesData = [
    { 
      title: "Civil Engineering", 
      img: "./images/services/civil.jpg", 
      text: "Structural works, concrete construction, foundations, and complete building development with quality and accuracy.", 
      id: "civil",
      icon: "🏗️"
    },
    { 
      title: "Electrical Engineering", 
      img: "./images/services/electric.jpg", 
      text: "Electrical installation, wiring, maintenance, system upgrades, and long-term reliable electrical solutions for all environments.", 
      id: "electrical",
      icon: "⚡"
    },
    { 
      title: "Mechanical Engineering", 
      img: "./images/services/electic.jpg", 
      text: "HVAC installation, plumbing, piping systems, and complete mechanical maintenance for all project sizes and specialized requirements.", 
      id: "mechanical",
      icon: "🔧"
    }
  ];

  return (
    <>
      <div className="container-xxl py-5" style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}>
        <div className="container">
          {/* Section Header */}
          <div className="row g-5 align-items-end mb-5">
            <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
              <div className="border-start border-5 border-primary ps-4">
                <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2 rounded-pill">
                  Our Services
                </span>
                <h1 className="display-5 fw-bold mb-0 text-dark">
                  Professional <span className="text-primary">Contracting</span> Services
                </h1>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="100">
              <p className="text-muted lead mb-0">
                Comprehensive engineering solutions tailored to meet your project requirements 
                with excellence and precision.
              </p>
            </div>
          </div>

          {/* Services Cards */}
          <div className="row g-4 justify-content-center">
            {servicesData.map((service, i) => (
              <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${100 + i * 200}`}>
                <div className="service-card h-100 rounded-4 position-relative overflow-hidden">
                  
                  {/* Image with Overlay */}
                  <div className="service-image-wrapper position-relative overflow-hidden">
                    <img
                      className="img-fluid service-image"
                      src={service.img}
                      alt={service.title}
                    />
                    <div className="image-overlay"></div>
                    
                    {/* Service Icon */}
                    <div className="service-icon position-absolute top-0 end-0 m-4">
                      <div className="icon-wrapper bg-white rounded-3 shadow-lg p-3">
                        <span className="icon-emoji" style={{ fontSize: "1.5rem" }}>
                          {service.icon}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="service-content position-relative p-4 d-flex flex-column">
                    <h5 className="fw-bold text-dark mb-3">{service.title}</h5>
                    <p className="text-muted flex-grow-1 mb-4" style={{ lineHeight: "1.6" }}>
                      {service.text}
                    </p>
                    
                    {/* Read More Button */}
                    <div className="service-footer mt-auto">
                      <button
                        className="btn btn-primary btn-hover px-4 py-2 fw-semibold rounded-pill"
                        onClick={() => onReadMore(service.id)}
                      >
                        Read More 
                        <i className="fa fa-arrow-right ms-2 transition-all"></i>
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="hover-border"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
           
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .service-card {
            background: #ffffff;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.08);
            border: 1px solid rgba(0, 0, 0, 0.05);
            transition: all 0.4s ease;
            position: relative;cursor: pointer;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          }

          .service-image-wrapper {
            height: 220px;
            overflow: hidden;
          }

          .service-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.5s ease;
          }

          .service-card:hover .service-image {
            transform: scale(1.1);
          }

          .image-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
            transition: all 0.4s ease;
          }

          .service-card:hover .image-overlay {
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
          }

          .service-icon {
            z-index: 2;
          }

          .icon-wrapper {
            transition: all 0.3s ease;
          }

          .service-card:hover .icon-wrapper {
            transform: scale(1.1) rotate(5deg);
            background: linear-gradient(45deg, #007bff, #0056b3) !important;
          }

          .service-card:hover .icon-emoji {
            filter: brightness(0) invert(1);
          }

          .service-content {
            min-height: 250px;
          }

          .btn-hover {
            transition: all 0.3s ease;
            background: linear-gradient(45deg, #007bff, #0056b3);
            border: none;
          }

          .btn-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 123, 255, 0.3);
          }

          .btn-hover .transition-all {
            transition: all 0.3s ease;
          }

          .btn-hover:hover .transition-all {
            transform: translateX(3px);
          }

          .hover-border {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid transparent;
            border-radius: 4px;
            transition: all 0.4s ease;
            pointer-events: none;
          }

          .service-card:hover .hover-border {
            border-color: rgba(0, 123, 255, 0.2);
          }

          @media (max-width: 768px) {
            .service-image-wrapper {
              height: 200px;
            }
            
            .service-content {
              min-height: auto;
              padding: 1.5rem !important;
            }
            
            .display-5 {
              font-size: 2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Services;