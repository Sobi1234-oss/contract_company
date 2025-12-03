import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const navigate = useNavigate();

  const servicesData = [
    { title: "Civil Engineering", img: "./images/services/civil.jpg", text: "Structural works, concrete construction, foundations, and complete building development.", id: "civil" },
    { title: "Electrical Engineering", img: "./images/services/electric.jpg", text: "Electrical installation, wiring, maintenance, system upgrades, and reliable solutions.", id: "electrical" },
    { title: "Mechanical Engineering", img: "./images/services/mechanic.jpg", text: "HVAC, plumbing, piping, and complete mechanical maintenance for all project sizes.", id: "mechanical" }
  ];

  const handleReadMore = (id) => {
    navigate("/our-services", { state: { scrollToId: id } });
  }

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Services</h6>
              <h1 className="display-6 mb-0">Professional Contracting Services</h1>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {servicesData.map((service, i) => (
            <div key={i} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${100 + i * 200}`}>
              <div className="service-item bg-light overflow-hidden h-100 shadow-sm rounded">
                <img
                  className="img-fluid"
                  src={service.img}
                  alt={service.title}
                  style={{ transition: "transform 0.5s" }}
                  onMouseOver={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
                />

                <div className="service-text position-relative text-center p-4 d-flex flex-column" style={{ minHeight: "270px" }}>
                  <h5 className="mb-3">{service.title}</h5>
                  <p className="flex-grow-1">{service.text}</p>
                  <button
                    className="btn btn-outline-primary mt-auto px-4 py-2 fw-semibold"
                    style={{ fontSize: "12px", cursor: "pointer" }}
                    onClick={() => handleReadMore(service.id)}
                  >
                    READ MORE <i className="fa fa-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
