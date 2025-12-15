import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SECTION_BG = "./images/hseq.png"; // replace with your HSEQ background

const HSEQPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const boxesData = [
    {
      title: "Health",
      color: "#28a745",
      icon: "fa-heartbeat",
      content: "Aber Al-Khayal ensures a healthy work environment by providing regular medical checks, health programs, and promoting wellness initiatives to keep employees safe and fit."
    },
    {
      title: "Safety",
      color: "#dc3545",
      icon: "fa-shield-alt",
      content: "We identify and mitigate risks across all operations, implement safe procedures, provide continuous safety training, and conduct audits to maintain zero-accident workplaces."
    },
    {
      title: "Quality",
      color: "#007bff",
      icon: "fa-award",
      content: "Delivering high-quality engineering solutions is our priority. Our quality systems, rigorous checks, and continuous improvement ensure every project meets international standards."
    }
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${SECTION_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        padding: "80px 0",marginTop:"30px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.15)",
          zIndex: 1,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-start">

          {/* Glass Box - Left */}
          <div className="col-lg-6 mb-4" data-aos="fade-right">
            <div
              style={{
                background: "rgba(255,255,255,0.38)",
                backdropFilter: "blur(12px)",
                borderRadius: "14px",
                padding: "30px",
                border: "1px solid rgba(255,255,255,0.45)",
                boxShadow: "0 6px 25px rgba(0,0,0,0.25)",
              }}
            >
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1.2, marginBottom: "15px", color: "#0466ceff" }}>
                Aber Al-Khayal<br />
                <span style={{ color: "#d9832cff" }}>HSEQ Commitment</span><br />
                 <span style={{ color: "#272727ff",fontSize: "1.5rem" }}>Environment</span>
              </h2>
              <p style={{ color: "#0a2338", fontSize: "1rem", lineHeight: 1.6 }}>
                Aber Al-Khayal is committed to a 'Zero Harm, Zero Accidents' environmental policy. We focus on minimizing environmental impact, reducing energy consumption, managing waste responsibly, and ensuring sustainable practices in every project. Our goal is to protect natural resources while delivering world-class engineering solutions.
              </p>
            </div>
          </div>

        </div>

        {/* Three Boxes */}
        <div className="row mt-5 g-4">
          {boxesData.map((box, index) => (
            <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 150}>
              <div
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  textAlign: "left",
                }}
              >
                <div style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  background: box.color,
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                  marginBottom: "15px",
                }}>
                  <i className={`fas ${box.icon}`}></i>
                </div>
                <h3 style={{ fontWeight: 800, color: "#0a192f", fontSize: "1.3rem", marginBottom: "10px" }}>{box.title}</h3>
                <p style={{ color: "#444", fontSize: "0.95rem", lineHeight: 1.6 }}>{box.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HSEQPolicy;
