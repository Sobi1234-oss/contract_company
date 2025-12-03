import React, { useEffect } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Facts = () => {
  useEffect(() => {
    // Preload images for faster display
    const images = [
      "./images/services/commitment.png",
      "./images/services/expertise.png",
      "./images/services/promise.png",
    ];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Initialize AOS with faster duration
    AOS.init({ duration: 700, once: true });
  }, []);

  const factsData = [
    {
      number: "01",
      title: "Our Commitment",
      description: "Delivering exceptional engineering solutions through innovation, precision, and quality.",
      image: "./images/services/commitment.png",
      icon: "🎯"
    },
    {
      number: "02",
      title: "Our Expertise",
      description: "25+ years of certified expertise in electrical, mechanical, and civil engineering.",
      image: "./images/services/expertise.png",
      icon: "⚡"
    },
    {
      number: "03",
      title: "Our Promise",
      description: "Highest standards of safety, sustainability, and reliability in every project.",
      image: "./images/services/promise.png",
      icon: "🤝"
    }
  ];

  return (
    <>
      {/* COMPACT MISSION SECTION */}
      <section 
        className="facts-section py-4"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background Elements */}
        <div
          style={{
            position: "absolute",
            top: "5%",
            right: "3%",
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            left: "3%",
            width: "120px",
            height: "120px",
            background: "radial-gradient(circle, rgba(255,107,0,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div className="container position-relative" style={{ zIndex: 2 }}>
          {/* Section Header - Compact */}
          <div className="text-center mb-4" data-aos="fade-up">
            <span className="badge bg-orange bg-opacity-20 text-orange fs-6 fw-normal mb-2 px-3 py-1 rounded-pill">
              Our Values
            </span>
            <h3 className="h2 fw-bold text-white mb-2">
              Building With <span className="text-orange">Purpose</span>
            </h3>
            <p className="text-light opacity-75 mb-0" style={{ maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
              Excellence in engineering and commitment to quality
            </p>
          </div>

          <div className="row g-3 justify-content-center">
            {factsData.map((fact, index) => (
              <div 
                key={index} 
                className="col-lg-4 col-md-6" 
                data-aos="fade-up" 
                data-aos-delay={`${index * 100}`}
              >
                <div className="fact-card h-100 position-relative rounded-3 overflow-hidden">
                  
                  {/* Image with Gradient Overlay */}
                  <div className="fact-image-wrapper position-relative">
                    <img
                      className="fact-img"
                      src={fact.image}
                      alt={fact.title}
                    />
                    <div className="image-gradient-overlay"></div>
                    
                    {/* Number Badge */}
                    <div className="number-badge position-absolute">
                      <div className="badge-content bg-orange text-white rounded-2 px-2 py-1 shadow-sm">
                        <span className="fw-bold fs-5">{fact.number}</span>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="fact-icon position-absolute">
                      <div className="icon-wrapper bg-white rounded-2 shadow p-2">
                        <span style={{ fontSize: "1.2rem" }}>{fact.icon}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content - Compact */}
                  <div className="fact-content p-3 position-relative">
                    <h5 className="text-white fw-bold mb-2">{fact.title}</h5>
                    <p className="text-light opacity-85 mb-0 small" style={{ lineHeight: "1.5" }}>
                      {fact.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Compact CTA */}
          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="300">
            <button className="btn btn-orange btn-sm px-4 py-2 rounded-pill fw-semibold">
               Together, shaping a better tomorrow.
            </button>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .facts-section {
            font-family: 'Inter', sans-serif;
          }

          .fact-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 107, 0, 0.15);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
            overflow: hidden;
            min-height: 320px;
          }

          .fact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 107, 0, 0.15);
            border-color: rgba(255, 107, 0, 0.3);
          }

          .fact-image-wrapper {
            height: 160px;
            overflow: hidden;
            position: relative;
          }

          .fact-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.4s ease;
          }

          .fact-card:hover .fact-img {
            transform: scale(1.08);
          }

          .image-gradient-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.7) 100%);
          }

          .number-badge {
            top: 12px;
            left: 12px;
            z-index: 3;
          }

          .badge-content {
            transition: all 0.2s ease;
          }

          .fact-card:hover .badge-content {
            transform: scale(1.05);
          }

          .fact-icon {
            bottom: -15px;
            right: 12px;
            z-index: 3;
          }

          .icon-wrapper {
            transition: all 0.2s ease;
          }

          .fact-card:hover .icon-wrapper {
            transform: scale(1.05);
            background: linear-gradient(45deg, #ff6b00, #ff8c00) !important;
          }

          .fact-card:hover .icon-wrapper span {
            filter: brightness(0) invert(1);
          }

          .fact-content {
            min-height: 120px;
            background: transparent;
          }

          .text-orange {
            color: #ff6b00 !important;
          }

          .bg-orange {
            background-color: #ff6b00 !important;
          }

          .btn-orange {
            background: linear-gradient(45deg, #ff6b00, #ff8c00);
            border: none;
            color: white;
            transition: all 0.2s ease;
            font-size: 0.85rem;
          }

          .btn-orange:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
          }

          @media (max-width: 768px) {
            .facts-section {
              padding: 2rem 0 !important;
            }
            
            .fact-image-wrapper {
              height: 140px;
            }
            
            .fact-card {
              min-height: 280px;
              margin-bottom: 1rem;
            }
            
            .fact-content {
              min-height: auto;
              padding: 1rem !important;
            }
            
            .h2 {
              font-size: 1.5rem;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default Facts;