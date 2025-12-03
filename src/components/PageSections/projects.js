import React, { useEffect } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const projectsData = [
    {
      title: "Al-Khayal Tower Construction",
      text: "High-rise building with modern architecture, sustainable materials, and advanced structural integrity.",
      img: "./images/projects/construction-1.jpg",
      delay: 100,
      category: "Civil Engineering"
    },
    {
      title: "Riverfront Residential Complex",
      text: "Luxury residential project with integrated electrical and mechanical systems, optimized for comfort and safety.",
      img: "./images/projects/construction-2.jpg",
      delay: 200,
      category: "Multi-disciplinary"
    },
    {
      title: "Industrial Warehouse Renovation",
      text: "Complete mechanical and civil upgrades, including storage optimization and facility modernization.",
      img: "./images/projects/project-3.jpg",
      delay: 300,
      category: "Industrial"
    },
    {
      title: "Green Park Community Center",
      text: "Community project combining civil, electrical, and mechanical works with eco-friendly construction methods.",
      img: "./images/projects/project-4.jpg",
      delay: 400,
      category: "Commercial"
    }
  ];

  return (
    <section id="projects" className="projects section py-5" style={{ 
      background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)",
      paddingTop: "80px",
      paddingBottom: "80px"
    }}>
      <div className="container">
        {/* Left Aligned Heading - Like Features Section */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Projects</h6>
              <h1 className="display-6 mb-0 fw-bold">Current Projects in Progress</h1>
              <p className="text-muted mt-3">
                At <strong>Aber Al-Khayal General Contracting Company</strong>, we deliver high-quality projects 
                across Civil, Electrical, and Mechanical disciplines, ensuring efficiency, sustainability, and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {projectsData.map((project, i) => (
            <div key={i} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={project.delay}>
              <div className="project-card position-relative rounded-4 overflow-hidden shadow-sm">
                <div className="project-image-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="img-fluid project-img"
                  />
                  <div className="project-badge position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary bg-opacity-90 text-white px-3 py-2 rounded-pill">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="project-content p-4 bg-white">
                  <h5 className="project-title fw-bold text-dark mb-2">{project.title}</h5>
                  <p className="project-text text-muted mb-3">{project.text}</p>
                  
                  <div className="project-features">
                    <div className="d-flex align-items-center text-primary mb-2">
                      <i className="fa fa-hard-hat me-2 small"></i>
                      <small className="fw-medium">Civil Works</small>
                    </div>
                    <div className="d-flex align-items-center text-primary mb-2">
                      <i className="fa fa-bolt me-2 small"></i>
                      <small className="fw-medium">Electrical Systems</small>
                    </div>
                    <div className="d-flex align-items-center text-primary">
                      <i className="fa fa-cogs me-2 small"></i>
                      <small className="fw-medium">Mechanical Installations</small>
                    </div>
                  </div>
                  
                  <div className="project-progress mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small className="text-muted fw-medium">Project Progress</small>
                      <small className="text-primary fw-bold">65%</small>
                    </div>
                    <div className="progress" style={{ height: "6px", borderRadius: "10px" }}>
                      <div 
                        className="progress-bar bg-primary" 
                        role="progressbar" 
                        style={{ width: "65%" }}
                        aria-valuenow="65" 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="row mt-5" data-aos="fade-up" data-aos-delay="500">
          
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .project-card {
          cursor: pointer;
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);od 
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15) !important;
        }

        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          height: 250px;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.1);
        }

        .project-badge {
          z-index: 2;
        }

        .project-content {
          transition: all 0.3s ease;
        }

        .project-title {
          font-size: 1.3rem;
          line-height: 1.4;
        }

        .project-text {
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .project-features {
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1rem 0;
        }

        .progress-bar {
          transition: width 2s ease-in-out;
        }

        .btn-outline-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 123, 255, 0.2);
        }

        @media (max-width: 768px) {
          .project-image-wrapper {
            height: 200px;
          }
          
          .display-6 {
            font-size: 2rem;
          }
        }

        @media (max-width: 576px) {
          .project-card {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;