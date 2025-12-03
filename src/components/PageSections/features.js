import React from "react";
import "../../style_new.css";

const Features = () => {
  const featuresData = [
    {
      icon: "fa-tachometer-alt",
      title: "Precision Engineering",
      description: "Utilizing cutting-edge technology and precision engineering methods to deliver projects with exceptional accuracy and structural integrity."
    },
    {
      icon: "fa-shield-alt", 
      title: "Quality Assurance",
      description: "Rigorous quality control processes ensuring every project meets international standards and exceeds client expectations consistently."
    },
    {
      icon: "fa-clock",
      title: "Timely Delivery",
      description: "Efficient project management and skilled workforce ensuring on-time completion without compromising quality standards and specifications."
    },
    {
      icon: "fa-users",
      title: "Expert Team", 
      description: "Highly qualified engineers and technicians with extensive experience in civil, electrical, and mechanical engineering disciplines."
    },
    {
      icon: "fa-cogs",
      title: "Modern Technology",
      description: "State-of-the-art equipment and innovative construction techniques for superior project outcomes, efficiency, and sustainability."
    },
    {
      icon: "fa-handshake",
      title: "Client Partnership", 
      description: "Building lasting relationships through transparent communication, reliable service, and exceptional project delivery excellence."
    }
  ];

  return (
    <section className="features-section py-5" style={{
      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
      paddingTop: "80px",
      paddingBottom: "80px"
    }}>
      <div className="container">
        {/* Left Aligned Header - Like Clients Section */}
        <div className="row mb-5" data-aos="fade-up" style={{ marginTop: "30px" }}>
          <div className="col-lg-8">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Features</h6>
              <h1 className="display-6 mb-0 fw-bold">Excellence by Aber Al-Khayal</h1>
              <p className="text-muted mt-3">
               We provide reliable, high-quality engineering solutions backed by expertise, innovation, and a commitment to excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid - 3 per row */}
        <div className="row g-4 justify-content-center">
          {featuresData.map((feature, index) => (
            <div key={index} className="col-xl-4 col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-box h-100 p-4 rounded-4 shadow-sm border-0">
                <div className="feature-icon mb-3">
                  <div className="icon-wrapper bg-primary bg-opacity-10 rounded-3 p-3 d-inline-flex align-items-center justify-content-center">
                    <i className={`fas ${feature.icon} text-primary`} style={{ fontSize: "1.5rem" }}></i>
                  </div>
                </div>
                <h4 className="fw-bold text-dark mb-3">{feature.title}</h4>
                <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        .features-section {
          font-family: 'Inter', sans-serif;
        }

        /* Feature Boxes */
        .feature-box {
          background: #ffffff;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);cursor: pointer;
        }

        .feature-box:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1) !important;
          border-color: rgba(0, 123, 255, 0.2);
        }

        .icon-wrapper {
          transition: all 0.3s ease;
        }

        .feature-box:hover .icon-wrapper {
          background: linear-gradient(45deg, #007bff, #0056b3) !important;
          transform: scale(1.05);
        }

        .feature-box:hover .icon-wrapper i {
          color: white !important;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .feature-box {
            margin-bottom: 1.5rem;
          }
          
          .display-6 {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .features-section {
            padding: 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;