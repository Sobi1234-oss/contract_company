import React, { useEffect, useState } from "react";

const ORANGE_PRIMARY = "#ff9a33";
const ORANGE_SHADOW = "rgba(255, 128, 0, 0.5)";
const DARK_BACKGROUND = "#f49a50ff";

const Slider = ({ scrollToAppointment }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const slideContents = [
    {
      title: "Welcome to Aber Al-Khayal General",
      subtitle: "Contracting Company",
      description: "We provide comprehensive engineering solutions across Electrical, Mechanical, and Civil disciplines. Our expert team ensures every project is executed with precision, efficiency, and adherence to international standards, delivering exceptional results for residential, commercial, and industrial clients.",
      buttonText: "Get Started",
      showButton: true
    },
    {
      title: "Electrical Engineering",
      subtitle: "Excellence",
      description: "We deliver cutting-edge electrical solutions including power distribution, lighting systems, and automation. Our engineers ensure compliance with the highest safety standards while optimizing energy efficiency for commercial, residential, and industrial projects.",
      showButton: false
    },
    {
      title: "Mechanical Engineering",
      subtitle: "Innovation",
      description: "Specializing in HVAC systems, plumbing, and mechanical installations, we provide innovative solutions that maximize performance and minimize operational costs. Our team integrates modern technology to ensure sustainable and energy-efficient mechanical systems.",
      showButton: false
    },
    {
      title: "Civil Engineering",
      subtitle: "Expertise",
      description: "From structural design to full construction management, our civil engineering team delivers durable and high-quality infrastructure solutions. We handle projects from initial planning to final completion, ensuring safety, compliance, and long-lasting results.",
      showButton: false
    },
    {
      title: "Quality & Safety",
      subtitle: "Guaranteed",
      description: "With over 15 years of experience, we maintain rigorous standards of quality and safety across all projects. Our commitment ensures client satisfaction, timely delivery, and sustainable practices, providing peace of mind on every construction project.",
      showButton: false
    }
  ];

  useEffect(() => {
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('hero-carousel');
      let carouselIntervalId = null;

      if (carouselElement && window.bootstrap) {
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: false,
          ride: false,
          pause: false,
        });

        const onSlide = (e) => setActiveSlide(e.to);
        carouselElement.addEventListener('slide.bs.carousel', onSlide);

        carouselIntervalId = setInterval(() => {
          try {
            carousel.next();
          } catch (err) {
            // Ignore errors
          }
        }, 5000);

        carouselElement._bootstrapCarousel = carousel;
        carouselElement._carouselIntervalId = carouselIntervalId;
      }
    };

    if (typeof window !== 'undefined' && window.bootstrap) {
      initializeCarousel();
    } else {
      const checkBootstrap = setInterval(() => {
        if (typeof window !== 'undefined' && window.bootstrap) {
          initializeCarousel();
          clearInterval(checkBootstrap);
        }
      }, 100);
      return () => clearInterval(checkBootstrap);
    }

    return () => {
      const carouselElement = document.getElementById('hero-carousel');
      if (carouselElement) {
        if (carouselElement._carouselIntervalId) {
          clearInterval(carouselElement._carouselIntervalId);
          carouselElement._carouselIntervalId = null;
        }

        if (carouselElement._bootstrapCarousel) {
          try {
            carouselElement._bootstrapCarousel.dispose();
          } catch (err) {
            // ignore
          }
          carouselElement._bootstrapCarousel = null;
        }
      }
    };
  }, []);

  const currentContent = slideContents[activeSlide];

  const buttonStyle = isHovered
    ? { 
        backgroundColor: '#e68a2e',
        color: "#ffffff",
        padding: isMobile ? "10px 24px" : "12px 30px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: isMobile ? "0.9rem" : "1rem",
        border: "2px solid #ffffff",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }
    : {
        backgroundColor: ORANGE_PRIMARY,
        color: "#ffffff",
        padding: isMobile ? "10px 24px" : "12px 30px",
        borderRadius: "50px",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: isMobile ? "0.9rem" : "1rem",
        border: "2px solid transparent",
        transition: "all 0.3s ease",
        cursor: "pointer",
      };

  return (
    <>
      <section id="hero" style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '85vh' : '100vh',
        minHeight: isMobile ? '500px' : '600px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DARK_BACKGROUND,
      }}>
        
        {/* TEXT CONTENT */}
        <div className="info d-flex align-items-center" style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'flex-start',
          paddingTop: isMobile ? '50px' : '70px',
          justifyContent: 'center',
        }}>
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-8 col-md-10 col-12 text-center">
                <h2 style={{
                  color: "#ffffff",
                  fontSize: isMobile ? "1.8rem" : "2.6rem",
                  fontWeight: 900,
                  lineHeight: isMobile ? "1.1" : "1.05",
                  marginBottom: isMobile ? "8px" : "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                  textShadow: "1px 3px 8px rgba(0,0,0,0.55)",
                  marginTop: isMobile ? "20px" : "40px",
                  padding: isMobile ? "0 15px" : "0",
                }}>
                  {currentContent.title} <br />
                  <span style={{
                    display: "block",
                    color: ORANGE_PRIMARY,
                    fontWeight: 900,
                    marginTop: isMobile ? "4px" : "6px",
                    fontSize: isMobile ? "1.5rem" : "inherit",
                  }}>{currentContent.subtitle}</span>
                </h2>

                {/* ORANGE LINE BELOW TITLE */}
                <div style={{
                  width: isMobile ? "50px" : "72px",
                  height: isMobile ? "4px" : "7px",
                  background: `linear-gradient(90deg, #ffffff 0%, ${ORANGE_PRIMARY} 100%)`,
                  margin: isMobile ? "10px auto 12px auto" : "14px auto 18px auto",
                  borderRadius: "6px",
                  boxShadow: `0 6px 18px ${ORANGE_SHADOW}`,
                }}></div>

                <p style={{
                  color: '#ffffff',
                  fontSize: isMobile ? "0.95rem" : "1.1rem",
                  marginBottom: isMobile ? "20px" : "30px",
                  textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
                  padding: isMobile ? "0 20px" : "0",
                  lineHeight: isMobile ? "1.5" : "1.6",
                }}>
                  {currentContent.description}
                </p>

                {/* Show button only for first slide */}
                {currentContent.showButton && (
                  <button
                    style={buttonStyle}
                    onClick={scrollToAppointment}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {currentContent.buttonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* BOOTSTRAP SLIDER */}
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={process.env.PUBLIC_URL + "/images/hero/hero-carousel-1.png"}
                className="d-block w-100"
                alt="Engineering Solutions"
                style={{
                  height: isMobile ? '85vh' : '100vh',
                  objectFit: 'cover',
                  objectPosition: isMobile ? 'center center' : 'center center',
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero2.png"}
                className="d-block w-100"
                alt="Electrical Engineering"
                style={{
                  height: isMobile ? '85vh' : '100vh',
                  objectFit: 'cover',
                  objectPosition: isMobile ? 'center center' : 'center center',
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero4.jpg"}
                className="d-block w-100"
                alt="Mechanical Engineering"
                style={{
                  height: isMobile ? '85vh' : '100vh',
                  objectFit: 'cover',
                  objectPosition: isMobile ? 'center center' : 'center center',
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero-carousel-5.png"}
                className="d-block w-100"
                alt="Civil Engineering"
                style={{
                  height: isMobile ? '85vh' : '100vh',
                  objectFit: 'cover',
                  objectPosition: isMobile ? 'center center' : 'center center',
                }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero7.png"}
                className="d-block w-100"
                alt="Quality Construction"
                style={{
                  height: isMobile ? '85vh' : '100vh',
                  objectFit: 'cover',
                  objectPosition: isMobile ? 'center center' : 'center center',
                }}
              />
            </div>
          </div>

          {/* Carousel Controls - Hide on mobile or make smaller */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="prev"
            style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              left: '10px',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '50%',
            }}
          >
            <span 
              className="carousel-control-prev-icon" 
              style={{
                width: isMobile ? '15px' : '20px',
                height: isMobile ? '15px' : '20px',
              }}
            ></span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
            style={{
              width: isMobile ? '40px' : '50px',
              height: isMobile ? '40px' : '50px',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '10px',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '50%',
            }}
          >
            <span 
              className="carousel-control-next-icon"
              style={{
                width: isMobile ? '15px' : '20px',
                height: isMobile ? '15px' : '20px',
              }}
            ></span>
          </button>
        </div>

        {/* OVERLAY */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(57, 52, 44, 0.46)',
          zIndex: 5,
        }}></div>
        
      </section>

      {/* Mobile-specific styles */}
      <style jsx="true">{`
        @media (max-width: 768px) {
          #hero .carousel-control-prev,
          #hero .carousel-control-next {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }
          
          #hero .carousel-control-prev-icon,
          #hero .carousel-control-next-icon {
            background-size: ${isMobile ? '15px 15px' : '20px 20px'};
          }
          
          .carousel-control-prev, .carousel-control-next {
            opacity: 0.7;
          }
          
          .carousel-control-prev:hover, .carousel-control-next:hover {
            opacity: 1;
          }
        }
        
        @media (max-width: 576px) {
          #hero h2 {
            font-size: 1.6rem !important;
            margin-top: 30px !important;
          }
          
          #hero h2 span {
            font-size: 1.3rem !important;
          }
          
          #hero p {
            font-size: 0.9rem !important;
            padding: 0 15px !important;
          }
        }
        
        @media (max-width: 400px) {
          #hero h2 {
            font-size: 1.4rem !important;
            margin-top: 20px !important;
          }
          
          #hero h2 span {
            font-size: 1.1rem !important;
          }
          
          #hero p {
            font-size: 0.85rem !important;
            padding: 0 10px !important;
          }
          
          #hero {
            height: 80vh !important;
            min-height: 450px !important;
          }
          
          .carousel-item img {
            height: 80vh !important;
          }
        }
      `}</style>
    </>
  );
};

export default Slider;