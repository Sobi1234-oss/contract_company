import React, { useEffect, useState, useRef } from "react";
// Agar aap Bootstrap classes ka upyog kar rahe hain toh yeh file zaroori hogi
import "../../style_new.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";

const ServicesDetails = () => {
  const location = useLocation();
  const [activeSlides, setActiveSlides] = useState([0, 0, 0]);
  const slideIntervals = useRef([]);

  // Colors defined for consistency
  const ACCENT_ORANGE = "#ff9900"; 
  const PRIMARY_BLUE = "#001f3f"; 

  // Function to handle the robust scrolling to the section specified in the URL hash
  const scrollToSection = () => {
    if (location.hash) {
      const id = location.hash.substring(1); // URL hash se ID nikalna (e.g., '#civil' se 'civil')
      const element = document.getElementById(id);
      
      if (element) {
        // Element milne par smooth scroll
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Optional: Agar koi fixed header/navbar hai jo section ko chupa raha hai, toh is line ko uncomment karein:
        // const fixedHeaderHeight = 90; 
        // window.scrollBy(0, -fixedHeaderHeight); 
      }
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
    
    // Auto-slide initialization
    services.forEach((_, index) => {
      startAutoSlide(index);
    });

    // *** ROBUST SCROLL FIX: Set Timeout lagana bahut zaroori hai ***
    // Yeh browser ko thoda waqt deta hai poora page render karne ke liye, phir scroll kaam karta hai.
    const scrollTimer = setTimeout(() => {
        scrollToSection();
    }, 150); // 150ms delay for robustness

    // Cleanup interval timers
    return () => {
      clearTimeout(scrollTimer);
      slideIntervals.current.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [location.hash]); // Dependency on location.hash ensures scroll runs when navigating

  // --- Slider Helper Functions ---
  const startAutoSlide = (serviceIndex) => {
    const interval = setInterval(() => {
      setActiveSlides(prev => {
        const newSlides = [...prev];
        newSlides[serviceIndex] = (newSlides[serviceIndex] + 1) % 3; 
        return newSlides;
      });
    }, 4000); 
    slideIntervals.current[serviceIndex] = interval;
  };

  const goToSlide = (serviceIndex, slideIndex) => {
    if (slideIntervals.current[serviceIndex]) {
      clearInterval(slideIntervals.current[serviceIndex]);
    }
    setActiveSlides(prev => {
      const newSlides = [...prev];
      newSlides[serviceIndex] = slideIndex;
      return newSlides;
    });
    startAutoSlide(serviceIndex);
  };

  const nextSlide = (serviceIndex) => {
    if (slideIntervals.current[serviceIndex]) {
      clearInterval(slideIntervals.current[serviceIndex]);
    }
    setActiveSlides(prev => {
      const newSlides = [...prev];
      newSlides[serviceIndex] = (newSlides[serviceIndex] + 1) % 3;
      return newSlides;
    });
    startAutoSlide(serviceIndex);
  };

  const prevSlide = (serviceIndex) => {
    if (slideIntervals.current[serviceIndex]) {
      clearInterval(slideIntervals.current[serviceIndex]);
    }
    setActiveSlides(prev => {
      const newSlides = [...prev];
      newSlides[serviceIndex] = (newSlides[serviceIndex] - 1 + 3) % 3;
      return newSlides;
    });
    startAutoSlide(serviceIndex);
  };
  
  // --- Service Data ---
  const services = [
    {
      id: "civil", // Section ID
      title: "Civil Engineering & Construction",
      images: [
        process.env.PUBLIC_URL + "/images/services/civil_details.png",
        process.env.PUBLIC_URL + "/images/services/civil4.png",
        process.env.PUBLIC_URL + "/images/services/civil3.png"
      ],
      text: `At Aber Al-Khayal General Contracting Company, we specialize in delivering high-quality civil engineering and construction services. With extensive experience across Saudi Arabia, we provide comprehensive solutions for residential, commercial, and industrial projects, ensuring structural integrity, safety, and timely completion.`,
      ourServices: [
        "Surveying", "Earthwork", "Foundation", "Super Structure", 
        "Industrial Building", "Architectural Finish", "Pipe Rack", 
        "Warehouse", "Plant Road", "Building Maintenance & Renovation"
      ]
    },
    {
      id: "mechanical", // Section ID
      title: "Mechanical Engineering",
      images: [
        process.env.PUBLIC_URL + "/images/services/mechanic_details.png",
        process.env.PUBLIC_URL + "/images/services/mechanicnew.jpg",
        process.env.PUBLIC_URL + "/images/services/mechanic4.png"
      ],
      text: `Aber Al-Khayal's Mechanical Engineering division provides expert solutions in HVAC systems, plumbing, piping, machinery installation, and industrial maintenance. Our team ensures high-performance, durable, and energy-efficient mechanical systems, delivering full project support from design to maintenance.`,
      ourServices: [
        "HVAC System Installation & Maintenance", "Plumbing & Piping Solutions", 
        "Machinery Setup & Industrial Maintenance", "Chiller & Cooling Tower Installation", 
        "Fire Fighting System Installation", "Compressed Air Systems", 
        "Ductwork & Ventilation Systems", "Boiler Installation & Maintenance", 
        "Energy Management Systems", "Preventive Maintenance Programs"
      ]
    },
    {
      id: "electrical", // Section ID
      title: "Electrical Engineering",
      images: [
        process.env.PUBLIC_URL + "/images/services/electricnew.png",
        process.env.PUBLIC_URL + "/images/services/electric3.png",
        process.env.PUBLIC_URL + "/images/services/electric4.png"
      ],
      text: `Our Electrical Engineering services include full-spectrum solutions such as power distribution, lighting systems, automation, wiring, panel installation, and maintenance. We focus on safety, energy efficiency, and compliance while delivering smart and reliable electrical networks for all project types.`,
      ourServices: [
        "Power Distribution Systems", "Lighting Systems Installation", 
        "Electrical Panel & Switchboard Installation", "Wiring & Cable Management", 
        "Automation & Control Systems", "Electrical Maintenance Services", 
        "Energy Efficiency Solutions", "Smart Building Networks", 
        "UPS & Backup Power Systems", "Electrical Safety Audits"
      ]
    }
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">

        {/* Page Header */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2" style={{ letterSpacing: "1.5px", fontSize: "0.85rem", fontWeight: "600" }}>
                Our Services
              </h6>
              <h1 className="display-5 mb-0 fw-bold" style={{ color: PRIMARY_BLUE }}>
                Detailed Engineering Services
              </h1>
              <p className="text-muted mt-3" style={{ fontSize: "1rem", maxWidth: "600px" }}>
                Comprehensive Civil, Electrical, and Mechanical Engineering Solutions for Saudi Arabia's Growing Infrastructure
              </p>
            </div>
          </div>
        </div>

        {/* Services Sections */}
        {services.map((service, serviceIndex) => (
          <div
            key={service.id} 
            // *** CRITICAL: Har section mein yeh ID hona zaroori hai! ***
            id={service.id} 
            className="row align-items-center my-5 service-detail-section g-5" 
            data-aos="fade-up"
          >
            {/* Mobile Layout (d-block d-md-none) */}
            <div className="d-block d-md-none col-12">
              <div className="mb-4" data-aos="fade-up">
                <h2 className="text-dark fw-bold mb-3" style={{ color: ACCENT_ORANGE }}>
                  {service.title}
                </h2>
              </div>

              {/* Image Slider for Mobile */}
              <div 
                className="mb-4 position-relative"
                data-aos="zoom-in"
                data-aos-delay="200"
                style={{ marginBottom: "30px" }}
              >
                <div 
                  className="slider-container"
                  style={{ 
                    height: "300px",
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "20px", 
                    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  {service.images.map((img, imgIndex) => (
                    <div
                      key={imgIndex}
                      className={`slider-image ${activeSlides[serviceIndex] === imgIndex ? 'active' : ''}`}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        opacity: activeSlides[serviceIndex] === imgIndex ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                        borderRadius: "20px",
                        overflow: "hidden"
                      }}
                    >
                      <img
                        src={img}
                        alt={`${service.title} ${imgIndex + 1}`}
                        className="img-fluid"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: "20px" 
                        }}
                      />
                    </div>
                  ))}

                  {/* Navigation Buttons for Mobile */}
                  <div className="slider-nav-buttons" style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    display: "flex",
                    gap: "10px",
                    zIndex: 10
                  }}>
                    <button
                      onClick={() => prevSlide(serviceIndex)}
                      className="nav-btn"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 31, 63, 0.85)",
                        color: "white",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease"
                      }}
                      aria-label="Previous slide"
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    <button
                      onClick={() => nextSlide(serviceIndex)}
                      className="nav-btn"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "rgba(0, 31, 63, 0.85)",
                        color: "white",
                        border: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                        transition: "all 0.3s ease"
                      }}
                      aria-label="Next slide"
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>

                  {/* Slide Dots for Mobile */}
                  <div className="slide-dots" style={{
                    position: "absolute",
                    bottom: "25px",
                    right: "15px",
                    display: "flex",
                    gap: "10px",
                    zIndex: 10
                  }}>
                    {service.images.map((_, dotIndex) => (
                      <button
                        key={dotIndex}
                        onClick={() => goToSlide(serviceIndex, dotIndex)}
                        className={`slide-dot ${activeSlides[serviceIndex] === dotIndex ? 'active' : ''}`}
                        style={{
                          width: "14px",
                          height: "14px",
                          borderRadius: "50%",
                          border: "2px solid #fff",
                          padding: 0,
                          backgroundColor: activeSlides[serviceIndex] === dotIndex ? ACCENT_ORANGE : "rgba(255, 255, 255, 0.5)",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          boxShadow: "0 2px 5px rgba(0,0,0,0.3)"
                        }}
                        aria-label={`Go to slide ${dotIndex + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content for Mobile */}
              <div 
                data-aos="fade-up" 
                data-aos-delay="400"
                style={{ marginTop: "20px" }}
              >
                <p className="text-muted mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                  {service.text}
                </p>

                <div className="mb-4">
                  <h5 className="text-dark fw-bold mb-3">
                    <i className="fas fa-tools me-2" style={{ color: ACCENT_ORANGE }}></i>
                    Our Services
                  </h5>
                  <div className="row g-2">
                    {service.ourServices.map((item, i) => (
                      <div key={i} className="col-12 col-sm-6" data-aos="fade-up" data-aos-delay={i * 50}>
                        <div className="d-flex align-items-center p-2 bg-light rounded mb-2 service-item">
                          <i className="fas fa-check me-3" style={{ color: ACCENT_ORANGE }}></i>
                          <span className="text-dark">{item}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Layout (d-none d-md-flex) */}
            {service.id === "civil" || service.id === "electrical" ? (
              // Civil and Electrical: Text on Left, Image on Right
              <div className="d-none d-md-flex align-items-stretch col-12">
                
                {/* Content (Left) */}
                <div 
                  className="col-md-6" 
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  style={{ paddingRight: "20px" }}
                >
                  <h2 className="text-dark fw-bold mb-4" style={{ color: ACCENT_ORANGE }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-muted mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                    {service.text}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-dark fw-bold mb-3">
                      <i className="fas fa-tools me-2" style={{ color: ACCENT_ORANGE }}></i>
                      Our Services
                    </h5>
                    <div className="row g-2">
                      {service.ourServices.map((item, i) => (
                        <div key={i} className="col-md-6" data-aos="fade-up" data-aos-delay={i * 50}>
                          <div className="d-flex align-items-center p-2 bg-light rounded mb-2 service-item">
                            <i className="fas fa-check me-3" style={{ color: ACCENT_ORANGE }}></i>
                            <span className="text-dark">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Slider (Right) */}
                <div 
                  className="col-md-6 position-relative" 
                  data-aos="zoom-in" 
                  data-aos-delay="200"
                  style={{ paddingLeft: "20px" }}
                >
                  <div className="slider-container" style={{ 
                    height: "450px",
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
                  }}>
                    {service.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`slider-image ${activeSlides[serviceIndex] === imgIndex ? 'active' : ''}`}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: activeSlides[serviceIndex] === imgIndex ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          borderRadius: "20px",
                          overflow: "hidden"
                        }}
                      >
                        <img
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className="img-fluid"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "20px"
                          }}
                        />
                      </div>
                    ))}
                    {/* Navigation and Dots here */}
                    <div className="slider-nav-buttons" style={{
                      position: "absolute",
                      top: "50%",
                      left: "20px",
                      right: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      transform: "translateY(-50%)",
                      zIndex: 10
                    }}>
                      <button
                        onClick={() => prevSlide(serviceIndex)}
                        className="nav-btn"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(0, 31, 63, 0.85)",
                          color: "white",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          transition: "all 0.3s ease"
                        }}
                        aria-label="Previous slide"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      
                      <button
                        onClick={() => nextSlide(serviceIndex)}
                        className="nav-btn"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(0, 31, 63, 0.85)",
                          color: "white",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          transition: "all 0.3s ease"
                        }}
                        aria-label="Next slide"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>

                    <div className="slide-dots" style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "12px",
                      zIndex: 10
                    }}>
                      {service.images.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => goToSlide(serviceIndex, dotIndex)}
                          className={`slide-dot ${activeSlides[serviceIndex] === dotIndex ? 'active' : ''}`}
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                            padding: 0,
                            backgroundColor: activeSlides[serviceIndex] === dotIndex ? ACCENT_ORANGE : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.4)"
                          }}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Mechanical: Image on Left, Text on Right (Swapped columns)
              <div className="d-none d-md-flex align-items-stretch col-12">
                
                {/* Image Slider (Left) */}
                <div 
                  className="col-md-6 position-relative" 
                  data-aos="zoom-in" 
                  data-aos-delay="200"
                  style={{ paddingRight: "20px" }}
                >
                  <div className="slider-container" style={{ 
                    height: "450px",
                    overflow: "hidden",
                    position: "relative",
                    borderRadius: "20px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
                  }}>
                    {service.images.map((img, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`slider-image ${activeSlides[serviceIndex] === imgIndex ? 'active' : ''}`}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          opacity: activeSlides[serviceIndex] === imgIndex ? 1 : 0,
                          transition: "opacity 0.5s ease-in-out",
                          borderRadius: "20px",
                          overflow: "hidden"
                        }}
                      >
                        <img
                          src={img}
                          alt={`${service.title} ${imgIndex + 1}`}
                          className="img-fluid"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "20px"
                          }}
                        />
                      </div>
                    ))}
                    {/* Navigation and Dots here */}
                    <div className="slider-nav-buttons" style={{
                      position: "absolute",
                      top: "50%",
                      left: "20px",
                      right: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      transform: "translateY(-50%)",
                      zIndex: 10
                    }}>
                      <button
                        onClick={() => prevSlide(serviceIndex)}
                        className="nav-btn"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(0, 31, 63, 0.85)",
                          color: "white",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          transition: "all 0.3s ease"
                        }}
                        aria-label="Previous slide"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      
                      <button
                        onClick={() => nextSlide(serviceIndex)}
                        className="nav-btn"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                          backgroundColor: "rgba(0, 31, 63, 0.85)",
                          color: "white",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          fontSize: "1.5rem",
                          boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                          transition: "all 0.3s ease"
                        }}
                        aria-label="Next slide"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                    </div>

                    <div className="slide-dots" style={{
                      position: "absolute",
                      bottom: "25px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      display: "flex",
                      gap: "12px",
                      zIndex: 10
                    }}>
                      {service.images.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          onClick={() => goToSlide(serviceIndex, dotIndex)}
                          className={`slide-dot ${activeSlides[serviceIndex] === dotIndex ? 'active' : ''}`}
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                            padding: 0,
                            backgroundColor: activeSlides[serviceIndex] === dotIndex ? ACCENT_ORANGE : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            boxShadow: "0 3px 8px rgba(0,0,0,0.4)"
                          }}
                          aria-label={`Go to slide ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content (Right) */}
                <div 
                  className="col-md-6" 
                  data-aos="fade-up" 
                  data-aos-delay="400"
                  style={{ paddingLeft: "20px" }}
                >
                  <h2 className="text-dark fw-bold mb-4" style={{ color: ACCENT_ORANGE }}>
                    {service.title}
                  </h2>
                  
                  <p className="text-muted mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                    {service.text}
                  </p>

                  <div className="mb-4">
                    <h5 className="text-dark fw-bold mb-3">
                      <i className="fas fa-tools me-2" style={{ color: ACCENT_ORANGE }}></i>
                      Our Services
                    </h5>
                    <div className="row g-2">
                      {service.ourServices.map((item, i) => (
                        <div key={i} className="col-md-6" data-aos="fade-up" data-aos-delay={i * 50}>
                          <div className="d-flex align-items-center p-2 bg-light rounded mb-2 service-item">
                            <i className="fas fa-check me-3" style={{ color: ACCENT_ORANGE }}></i>
                            <span className="text-dark">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesDetails;