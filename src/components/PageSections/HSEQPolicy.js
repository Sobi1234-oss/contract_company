import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../style_new.css";

const HSEQPolicy = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      className="hseq-section"
      style={{
        background: "#f8f9fa",
        padding: "60px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Heading */}
        <div className="row justify-content-center mb-4" data-aos="fade-up">
          <div className="col-md-8 text-center">

            {/* Icon */}
            <div
              className="heading-icon mb-3"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff9933, #c79332)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "22px",
                margin: "0 auto",
              }}
            >
              <i className="fas fa-shield-alt"></i>
            </div>

            {/* Title */}
            <h2
              className="section-title mb-2"
              style={{
                fontSize: "32px",
                fontWeight: "700",
                background: "linear-gradient(135deg,#ff9933,#042546)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HSEQ <span style={{ color: "#ff9933" }}>Policy</span>
            </h2>

            {/* Subtitle */}
            <p
              className="section-subtitle"
              style={{
                color: "#001f3f",
                fontSize: "16px",
                letterSpacing: "0.3px",
                marginTop: "5px",
              }}
            >
              Committed to Health, Safety, Environment, and Quality Excellence
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="row g-4 justify-content-center">

          {/* Health */}
          <div className="col-xl-6 col-lg-6 col-md-6" data-aos="fade-right">
            <div className="hseq-card health-card">
              <div className="hseq-header">
                <div className="hseq-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3>Health</h3>
              </div>
              <ul>
                <li>Provide a healthy work environment</li>
                <li>Implement health programs</li>
                <li>Conduct regular health checks</li>
                <li>Ensure compliance</li>
              </ul>
            </div>
          </div>

          {/* Safety */}
          <div className="col-xl-6 col-lg-6 col-md-6" data-aos="fade-left">
            <div className="hseq-card safety-card">
              <div className="hseq-header">
                <div className="hseq-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Safety</h3>
              </div>
              <ul>
                <li>Identify and mitigate risks</li>
                <li>Implement safe procedures</li>
                <li>Provide safety training</li>
                <li>Conduct audits</li>
              </ul>
            </div>
          </div>

          {/* Environment */}
          <div className="col-xl-6 col-lg-6 col-md-6" data-aos="fade-right">
            <div className="hseq-card environment-card">
              <div className="hseq-header">
                <div className="hseq-icon">
                  <i className="fas fa-leaf"></i>
                </div>
                <h3>Environment</h3>
              </div>
              <ul>
                <li>Minimize environmental footprint</li>
                <li>Implement waste management</li>
                <li>Reduce energy consumption</li>
                <li>Ensure compliance</li>
              </ul>
            </div>
          </div>

          {/* Quality */}
          <div className="col-xl-6 col-lg-6 col-md-6" data-aos="fade-left">
            <div className="hseq-card quality-card">
              <div className="hseq-header">
                <div className="hseq-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3>Quality</h3>
              </div>
              <ul>
                <li>Deliver high-quality services</li>
                <li>Implement quality systems</li>
                <li>Conduct audits</li>
                <li>Ensure compliance</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .hseq-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          border-top: 4px solid;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hseq-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .health-card {
          border-top-color: #28a745;
        }

        .safety-card {
          border-top-color: #dc3545;
        }

        .environment-card {
          border-top-color: #20c997;
        }

        .quality-card {
          border-top-color: #007bff;
        }

        .hseq-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .hseq-icon {
          width: 55px;
          height: 55px;
          background: #ff9933;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .hseq-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .hseq-card ul li {
          color: #666;
          font-size: 0.95rem;
          margin-bottom: 0.6rem;
          line-height: 1.5;
          position: relative;
        }

        .hseq-card ul li:before {
          content: "•";
          color: #ff9933;
          font-weight: bold;
          margin-right: 0.5rem;
        }

        @media (max-width: 768px) {
          .hseq-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HSEQPolicy;
