import React, { useEffect, useState } from "react";
import "../../style_new.css";

const Slider = ({ scrollToAppointment }) => {
  const [activeSlide, setActiveSlide] = useState(0);

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
    // Initialize Bootstrap carousel
    const initializeCarousel = () => {
      const carouselElement = document.getElementById('hero-carousel');
      
      if (carouselElement && window.bootstrap) {
        const carousel = new window.bootstrap.Carousel(carouselElement, {
          interval: 5000,
          ride: 'carousel'
        });
        
        // Listen for slide events
        carouselElement.addEventListener('slide.bs.carousel', (e) => {
          setActiveSlide(e.to);
        });

        // Start the carousel
        carousel.cycle();
      }
    };

    // Wait for Bootstrap to load
    if (typeof window !== 'undefined' && window.bootstrap) {
      initializeCarousel();
    } else {
      // If Bootstrap not loaded yet, wait for it
      const checkBootstrap = setInterval(() => {
        if (typeof window !== 'undefined' && window.bootstrap) {
          initializeCarousel();
          clearInterval(checkBootstrap);
        }
      }, 100);
    }

    return () => {
      // Cleanup
      const carouselElement = document.getElementById('hero-carousel');
      if (carouselElement) {
        carouselElement.removeEventListener('slide.bs.carousel', () => {});
      }
    };
  }, []);

  const currentContent = slideContents[activeSlide];

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section dark-background">
        {/* TEXT CONTENT */}
        <div className="info d-flex align-items-center">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="col-lg-8 text-center">
                <h2 className="hero-title">
                  {currentContent.title} <br />
                  <span>{currentContent.subtitle}</span>
                </h2>

                {/* ORANGE LINE BELOW TITLE */}
                <div className="hero-line"></div>

                <p className="hero-text">
                  {currentContent.description}
                </p>

                {/* Show button only for first slide */}
                {currentContent.showButton && (
                  <button className="btn-get-started" onClick={scrollToAppointment}>
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
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={process.env.PUBLIC_URL + "/images/hero/hero-carousel-1.png"}
                className="d-block w-100"
                alt="Engineering Solutions"
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero-carousel-6.jpg"}
                className="d-block w-100"
                alt="Electrical Engineering"
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero-carousel/hero-carousel-4.jpg"}
                className="d-block w-100"
                alt="Mechanical Engineering"
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero-carousel-5.jpg"}
                className="d-block w-100"
                alt="Civil Engineering"
              />
            </div>
            <div className="carousel-item">
              <img
                src={process.env.PUBLIC_URL +"/images/hero/hero-carousel-7.jpg"}
                className="d-block w-100"
                alt="Quality Construction"
              />
            </div>
          </div>

          {/* PREV BUTTON */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          {/* NEXT BUTTON */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* SIMPLE FADE ANIMATION */}
        <style jsx>{`
          .hero-title, .hero-text, .btn-get-started {
            animation: fadeIn 0.8s ease-in-out;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        
      </section>
    </>
  );
};

export default Slider;