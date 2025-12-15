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
      paddingTop: "100px",
      paddingBottom: "100px"
    }}>
      <div className="container">
        {/* Left Aligned Heading - Big and Attractive */}
        <div className="row mb-5" data-aos="fade-up">
          <div className="col-lg-8">
            <div style={{ borderLeft: "5px solid #ff9933", paddingLeft: "1.5rem" }}>
              <h6 style={{ textTransform: "uppercase", color: "#0a2338", fontWeight: 700, marginBottom: "0.5rem" }}>
                Our Projects
              </h6>
             <h1 style={{ 
  fontSize: "3.5rem", 
  fontWeight: 900, 
  lineHeight: 1.2,
  marginBottom: "1rem"
}}>
  <span style={{ color: "#0159b8ff" }}>Current Projects</span>{" "}
  <span style={{ color: "#ff9933" }}>in Progress</span>
</h1>

              <p style={{ 
                fontSize: "1.2rem", 
                color: "#555", 
                maxWidth: "650px",
                lineHeight: 1.6
              }}>
                At <strong>Aber Al-Khayal General Contracting Company</strong>, we deliver high-quality projects 
                across <span style={{ color: "#065fbeff" }}>Civil</span>, <span style={{ color: "#ff9933" }}>Electrical</span>, 
                and <span style={{ color: "#055bb8ff" }}>Mechanical</span> disciplines, ensuring efficiency, sustainability, and client satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* Project Cards */}
        <div className="row g-4 justify-content-center">
          {projectsData.map((project, i) => (
            <div key={i} className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay={project.delay}>
              <div style={{
                cursor: "pointer",
                transition: "all 0.4s ease",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                borderRadius: "15px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.1)"
              }}
                className="project-card"
              >
                <div style={{ position: "relative", overflow: "hidden", height: "280px" }} className="project-image-wrapper">
                  <img
                    src={project.img}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.4s ease"
                    }}
                    className="project-img"
                  />
                  <div style={{ position: "absolute", top: "1rem", left: "1rem", zIndex: 2 }}>
                    <span style={{
                      backgroundColor: "rgba(5, 84, 168, 0.85)",
                      color: "#fff",
                      padding: "0.4rem 0.8rem",
                      borderRadius: "50px",
                      fontSize: "0.85rem",
                      fontWeight: 600
                    }}>{project.category}</span>
                  </div>
                </div>
                <div style={{ padding: "1.5rem", backgroundColor: "#fff" }} className="project-content">
                  <h5 style={{ fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.5rem" }}>{project.title}</h5>
                  <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: 1.6 }}>{project.text}</p>
                  
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)", borderBottom: "1px solid rgba(0,0,0,0.1)", padding: "0.8rem 0", marginBottom: "0.5rem" }} className="project-features">
                    <div style={{ display: "flex", alignItems: "center", color: "#007bff", marginBottom: "0.3rem" }}>
                      <i className="fa fa-hard-hat me-2 small"></i>
                      <small>Civil Works</small>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", color: "#ff9933", marginBottom: "0.3rem" }}>
                      <i className="fa fa-bolt me-2 small"></i>
                      <small>Electrical Systems</small>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", color: "#007bff" }}>
                      <i className="fa fa-cogs me-2 small"></i>
                      <small>Mechanical Installations</small>
                    </div>
                  </div>

                  <div className="project-progress">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
                      <small style={{ color: "#888" }}>Project Progress</small>
                      <small style={{ color: "#007bff", fontWeight: 600 }}>65%</small>
                    </div>
                    <div style={{ height: "6px", borderRadius: "10px", backgroundColor: "#e9ecef" }}>
                      <div style={{ width: "65%", height: "100%", borderRadius: "10px", backgroundColor: "#007bff", transition: "width 2s ease-in-out" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
