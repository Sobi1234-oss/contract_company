import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../style_new.css";

const AboutDetails = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const expertiseData = [
    { skill: "Electrical Engineering", percentage: 95, description: "Power distribution, lighting systems, renewable energy" },
    { skill: "Mechanical Engineering", percentage: 90, description: "HVAC, plumbing, industrial mechanical systems" },
    { skill: "Civil Engineering", percentage: 92, description: "Structural design, infrastructure development" },
    { skill: "Project Management", percentage: 88, description: "End-to-end project delivery, timeline optimization" },
    { skill: "Quality Assurance", percentage: 96, description: "Quality control protocols, compliance verification" },
    { skill: "Safety Standards", percentage: 98, description: "HSE compliance, risk assessment, safety training" }
  ];

  const achievementStats = [
    { number: "15+", label: "Years Experience", icon: "fa-calendar", description: "Serving Saudi Arabia" },
    { number: "500+", label: "Projects Completed", icon: "fa-check-circle", description: "Across multiple sectors" },
    { number: "50+", label: "Expert Engineers", icon: "fa-user-tie", description: "Technical professionals" },
    { number: "100%", label: "Client Satisfaction", icon: "fa-heart", description: "Exceeding expectations" }
  ];

  const services = [
    { icon: "fa-bolt", title: "Electrical Engineering", items: ["Power Distribution", "Lighting Systems", "Renewable Energy", "Smart Technologies"] },
    { icon: "fa-cogs", title: "Mechanical Systems", items: ["HVAC Installation", "Plumbing Systems", "Industrial Installations", "Maintenance"] },
    { icon: "fa-hard-hat", title: "Civil Construction", items: ["Structural Design", "Infrastructure", "Construction Management", "Quality Control"] }
  ];

  return (
    <>
      <section className="ftco-section py-5" id="about-section" style={{ backgroundColor: "#ffffff", position: "relative" }}>
        <div className="container">
          {/* MAIN ABOUT SECTION - Left Aligned Heading */}
          <div className="row mb-5" data-aos="fade-up" style={{ marginTop: "20px" }}>
            <div className="col-lg-8">
              <div className="border-start border-5 border-primary ps-4">
                <h6 className="text-body text-uppercase mb-2" style={{ letterSpacing: "1.5px", fontSize: "0.85rem", fontWeight: "600" }}>About Us</h6>
                <h1 className="display-5 mb-0 fw-bold" style={{ color: "#001f3f" }}>About Aber Al-Khayal</h1>
                <p className="text-muted mt-3" style={{ fontSize: "1rem", maxWidth: "600px" }}>
                  Trusted Engineering & Contracting Partner Providing Excellence Across All Projects in Saudi Arabia.
                </p>
              </div>
            </div>
          </div>

          {/* MAIN CONTENT WITH IMAGE - Image position moved higher */}
          <div className="row align-items-start mb-5"> {/* Changed from align-items-center to align-items-start */}
            
            {/* LEFT SIDE - Content */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="pe-lg-3">
                <div className="mb-4">
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#444", marginBottom: "1.2rem" }}>
                    <strong>Aber Al-Khayal General Contracting Company</strong> has established itself as a premier
                    name in Saudi Arabia's construction and engineering landscape. With over a decade of dedicated service, we
                    deliver exceptional quality across commercial, residential, industrial, and infrastructure
                    sectors.
                  </p>
                  
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#444", marginBottom: "1.2rem" }}>
                    Our multidisciplinary expertise spans <strong>Electrical Engineering</strong>, <strong>Mechanical Engineering</strong>, 
                    and <strong>Civil Engineering</strong>, providing complete turnkey solutions. We pride ourselves on 
                    excellence, safety, and client satisfaction, earning a reputation for reliability in the competitive 
                    Saudi market.
                  </p>

                  {/* ADDED NEW PARAGRAPH HERE */}
                  <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#444", marginBottom: "1.2rem" }}>
                    We combine <strong>technical innovation</strong> with <strong>local market knowledge</strong> to deliver projects 
                    that not only meet but exceed expectations. Our team of certified professionals ensures compliance with 
                    <strong> Saudi building codes</strong> and <strong>international standards</strong>, while maintaining cost-effectiveness 
                    and timely delivery for every client.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Image Positioned Higher (aligned with text start) */}
           <style jsx>{`
  .left-rounded-image {
    border-top-left-radius: 8px !important;
    border-bottom-left-radius: 8px !important;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }
`}</style>

<div className="col-lg-6">
  <div className="image-container" data-aos="fade-left" style={{ marginTop: "-20px" }}>
    <div className="image-frame">
      <img 
        src={process.env.PUBLIC_URL+"/images/about_us.png" }
        alt="Al-Khayal Engineering Services" 
        className="main-image img-fluid left-rounded-image" 
        style={{ 
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.15)",
          height: "390px",
          objectFit: "cover",
          width: "85%", 
          marginLeft: "auto", 
          display: "block"
        }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
        }}
      />
    </div>
  </div>
</div>
            {/* Services Grid - Now placed below both columns */}
            <div className="col-12 mt-4">
              <div className="row g-3 mb-4">
                {services.map((service, index) => (
                  <div key={index} className="col-md-4" data-aos="fade-up" data-aos-delay={index * 100}>
                    <div className="p-3 border rounded-3 h-100" style={{ backgroundColor: "#f8fafc", borderColor: "rgba(255, 153, 51, 0.2) !important" }}>
                      <div className="text-center mb-2">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-2" style={{ width: "50px", height: "50px", backgroundColor: "rgba(255, 153, 51, 0.1)" }}>
                          <i className={`fas ${service.icon}`} style={{ color: "#ff9933", fontSize: "1.2rem" }}></i>
                        </div>
                        <h6 className="fw-bold mb-2" style={{ color: "#001f3f", fontSize: "0.95rem" }}>{service.title}</h6>
                      </div>
                      <ul className="list-unstyled mb-0" style={{ fontSize: "0.8rem" }}>
                        {service.items.map((item, i) => (
                          <li key={i} className="mb-1">
                            <i className="fas fa-check text-success me-1" style={{ fontSize: "0.7rem" }}></i>
                            <span style={{ color: "#666" }}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Section */}
              <div className="bg-white border rounded-3 p-3 shadow-sm mb-4" data-aos="fade-up">
                <div className="row g-0 text-center">
                  <div className="col-4 border-end">
                    <div className="p-3">
                      <h3 className="fw-bold mb-1" style={{ color: "#001f3f", fontSize: "1.8rem" }}>15+</h3>
                      <p className="mb-0" style={{ color: "#666", fontSize: "0.85rem", fontWeight: "600" }}>Years Experience</p>
                    </div>
                  </div>
                  <div className="col-4 border-end">
                    <div className="p-3">
                      <h3 className="fw-bold mb-1" style={{ color: "#001f3f", fontSize: "1.8rem" }}>500+</h3>
                      <p className="mb-0" style={{ color: "#666", fontSize: "0.85rem", fontWeight: "600" }}>Projects Completed</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="p-3">
                      <h3 className="fw-bold mb-1" style={{ color: "#001f3f", fontSize: "1.8rem" }}>50+</h3>
                      <p className="mb-0" style={{ color: "#666", fontSize: "0.85rem", fontWeight: "600" }}>Expert Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RELIABLE TEXT IN PARAGRAPH FORM */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-white border rounded-4 p-4 p-md-5 shadow-sm" data-aos="fade-up">
                <h3 className="h4 fw-bold mb-4" style={{ color: "#001f3f" }}>Comprehensive Engineering Solutions</h3>
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: "#001f3f", fontSize: "1rem" }}>
                        <i className="fas fa-shield-alt me-2" style={{ color: "#ff9933" }}></i>
                        Quality Assurance & Safety
                      </h5>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#444" }}>
                        We implement rigorous quality control and safety protocols complying with Saudi regulations and international
                        standards. Our HSE team ensures safe working environments through regular inspections and comprehensive
                        training programs.
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: "#001f3f", fontSize: "1rem" }}>
                        <i className="fas fa-bolt me-2" style={{ color: "#ff9933" }}></i>
                        Electrical Engineering Excellence
                      </h5>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#444" }}>
                        Specializing in power distribution, advanced lighting systems, renewable energy integration,
                        and smart building technologies. We ensure energy efficiency and system reliability through
                        meticulous design and precision installation.
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: "#001f3f", fontSize: "1rem" }}>
                        <i className="fas fa-cogs me-2" style={{ color: "#ff9933" }}></i>
                        Mechanical Systems Proficiency
                      </h5>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#444" }}>
                        From complex HVAC installations to precision plumbing systems and industrial mechanical setups,
                        our team delivers optimized solutions that enhance operational efficiency while reducing
                        environmental impact and maintenance costs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: "#001f3f", fontSize: "1rem" }}>
                        <i className="fas fa-hard-hat me-2" style={{ color: "#ff9933" }}></i>
                        Civil Engineering & Construction
                      </h5>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#444" }}>
                        Handling structural design, infrastructure development, and construction management with
                        precision engineering principles. We leverage advanced materials and methodologies to ensure
                        durability and longevity of all structures.
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: "#001f3f", fontSize: "1rem" }}>
                        <i className="fas fa-users me-2" style={{ color: "#ff9933" }}></i>
                        Client-Centric Approach
                      </h5>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#444" }}>
                        We collaborate closely with clients from concept to completion. Transparent communication and
                        regular updates ensure we build long-term partnerships rather than just providing services.
                        Our project managers ensure alignment with client expectations at every stage.
                      </p>
                    </div>
                    
                    <div className="mb-4">
                      <h5 className="fw-bold mb-3" style={{ color: "#001f3f", fontSize: "1rem" }}>
                        <i className="fas fa-leaf me-2" style={{ color: "#ff9933" }}></i>
                        Sustainability Commitment
                      </h5>
                      <p style={{ fontSize: "0.9rem", lineHeight: "1.7", color: "#444" }}>
                        Aligned with Saudi Arabia's Vision 2030, we incorporate sustainable building practices,
                        energy-efficient designs, and environmentally responsible materials. Our projects contribute
                        to national development while minimizing ecological footprint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SKILLS & ACHIEVEMENTS SECTION - Left Aligned Heading */}
          <div className="container mt-6 pt-4">
            <div className="row mb-5" data-aos="fade-up">
              <div className="col-lg-8">
                <div className="border-start border-5 border-primary ps-4">
                  <h6 className="text-body text-uppercase mb-2" style={{ letterSpacing: "1.5px", fontSize: "0.85rem", fontWeight: "600" }}>Our Expertise</h6>
                  <h2 className="display-5 mb-0 fw-bold" style={{ color: "#001f3f" }}>Skills & Achievements</h2>
                  <p className="text-muted mt-3" style={{ fontSize: "1rem", maxWidth: "600px" }}>
                    Decades of experience and proven track record in delivering exceptional engineering solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              {/* Left - Skills */}
              <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                <div className="pe-lg-4">
                  <h3 className="h4 fw-bold mb-4" style={{ color: "#001f3f" }}>Our Engineering Expertise</h3>
                  <p className="text-muted mb-4" style={{ fontSize: "0.95rem" }}>
                    With decades of experience, our team has mastered various engineering disciplines, 
                    ensuring top-quality delivery across all project types.
                  </p>
                  
                  {expertiseData.map((item, index) => (
                    <div key={index} className="skill-item mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <span className="fw-semibold" style={{ color: "#001f3f", fontSize: "0.95rem" }}>{item.skill}</span>
                          <p className="small text-muted mb-0 mt-1" style={{ fontSize: "0.8rem" }}>{item.description}</p>
                        </div>
                        <span className="fw-bold" style={{ color: "#ff9933" }}>{item.percentage}%</span>
                      </div>
                      <div className="progress" style={{ height: "8px", borderRadius: "10px", backgroundColor: "#f0f0f0" }}>
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ 
                            width: `${item.percentage}%`, 
                            borderRadius: "10px",
                            background: "linear-gradient(90deg, #ff9933, #e68a00)"
                          }}
                          aria-valuenow={item.percentage} 
                          aria-valuemin="0" 
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Achievements */}
              <div className="col-lg-6" data-aos="fade-left">
                <div className="bg-white border rounded-4 p-4 shadow-lg h-100">
                  <h4 className="fw-bold mb-4" style={{ color: "#001f3f" }}>Our Achievements</h4>
                  <div className="row g-4 mb-4">
                    {achievementStats.map((stat, index) => (
                      <div key={index} className="col-6">
                        <div className="achievement-item p-3 border rounded-3 text-center h-100">
                          <div className="achievement-icon mb-3">
                            <div className="rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "60px", height: "60px", backgroundColor: "rgba(255, 153, 51, 0.1)" }}>
                              <i className={`fas ${stat.icon} fa-lg`} style={{ color: "#ff9933" }}></i>
                            </div>
                          </div>
                          <h3 className="fw-bold mb-1" style={{ color: "#001f3f", fontSize: "1.8rem" }}>{stat.number}</h3>
                          <p className="fw-semibold mb-1" style={{ color: "#001f3f", fontSize: "0.95rem" }}>{stat.label}</p>
                          <p className="small text-muted mb-0" style={{ fontSize: "0.8rem" }}>{stat.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Progress Circle */}
                  <div className="text-center pt-3 border-top">
                    <div className="progress-circle mx-auto mb-3">
                      <div className="circle-bg">
                        <div className="circle-progress">
                          <span className="progress-text">98%</span>
                        </div>
                      </div>
                    </div>
                    <h6 className="fw-bold mb-1" style={{ color: "#001f3f" }}>Project Success Rate</h6>
                    <p className="text-muted small mb-0" style={{ fontSize: "0.85rem" }}>Consistently delivering successful projects on time and within budget</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* VISION SECTION - Left Aligned Heading */}
          <div className="container mt-6 pt-4">
            <div className="row mb-4" data-aos="fade-up">
              <div className="col-lg-8">
                <div className="border-start border-5 border-primary ps-4">
                  <h6 className="text-body text-uppercase mb-2" style={{ letterSpacing: "1.5px", fontSize: "0.85rem", fontWeight: "600" }}>Our Vision</h6>
                  <h2 className="display-5 mb-0 fw-bold" style={{ color: "#001f3f" }}>Future Outlook & Commitment</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="bg-white border rounded-4 p-4 p-md-5 shadow-sm" data-aos="fade-up">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="h4 fw-bold mb-3" style={{ color: "#001f3f" }}>Building Saudi Arabia's Future</h3>
                      <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#444", marginBottom: "1.5rem" }}>
                        <strong>Our Vision:</strong> To be Saudi Arabia's leading engineering and contracting company, recognized for
                        excellence, innovation, and reliability while actively contributing to the Kingdom's infrastructure
                        development and economic growth.
                      </p>
                      <p style={{ fontSize: "0.95rem", lineHeight: "1.7", color: "#444" }}>
                        We are committed to investing in the latest construction technologies, BIM methodologies, and
                        advanced engineering practices. This enables optimized designs, early issue detection, and
                        cost-effective solutions that benefit our clients and support Saudi Arabia's Vision 2030 goals.
                      </p>
                    </div>
                    <div className="col-md-4 text-center">
                      <div className="p-4">
                        <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: "100px", height: "100px", backgroundColor: "rgba(255, 153, 51, 0.1)" }}>
                          <i className="fas fa-bullseye fa-3x" style={{ color: "#ff9933" }}></i>
                        </div>
                        <h5 className="fw-bold mb-2" style={{ color: "#001f3f" }}>Vision 2030</h5>
                        <p className="small text-muted mb-0" style={{ fontSize: "0.85rem" }}>Aligned with Saudi Arabia's national development goals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOM STYLES */}
        <style jsx>{`
          #about-section {
            background-color: #ffffff;
            position: relative;
          }
          
          .mt-6 {
            margin-top: 4rem !important;
          }
          
          .image-container {
            position: relative;
          }
          
          .image-frame {
            border-radius: 15px;
            overflow: hidden;
          }
          
          .main-image {
            transition: transform 0.5s ease;
          }
          
          .image-frame:hover .main-image {
            transform: scale(1.03);
          }
          
          .skill-item {
            padding: 1rem;
            border-radius: 10px;
            transition: all 0.3s ease;
          }
          
          .skill-item:hover {
            background-color: #f8fafc;
            transform: translateY(-2px);
          }
          
          .achievement-item {
            transition: all 0.3s ease;
          }
          
          .achievement-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
          }
          
          .progress-circle {
            width: 100px;
            height: 100px;
          }
          
          .circle-bg {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: #f0f0f0;
            position: relative;
          }
          
          .circle-progress {
            width: 80%;
            height: 80%;
            border-radius: 50%;
            background: linear-gradient(135deg, #ff9933, #e68a00);
            position: absolute;
            top: 10%;
            left: 10%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .progress-text {
            color: white;
            font-weight: bold;
            font-size: 1.2rem;
          }
          
          @media (max-width: 991px) {
            .main-image {
              height: 350px !important;
            }
            
            .display-5 {
              font-size: 2.2rem;
            }
            
            .image-container {
              margin-top: 0 !important;
            }
          }
          
          @media (max-width: 768px) {
            .main-image {
              height: 300px !important;
            }
            
            .display-5 {
              font-size: 1.8rem;
            }
            
            .mt-6 {
              margin-top: 3rem !important;
            }
          }
          
          @media (max-width: 576px) {
            .main-image {
              height: 250px !important;
            }
            
            .border-start {
              border-left: 3px solid #0d6efd !important;
              padding-left: 1rem !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default AboutDetails;