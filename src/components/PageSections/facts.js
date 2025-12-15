import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SECTION_BG = "./images/fact.png";

const FleetSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${SECTION_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 0",
        position: "relative",marginTop:"30px",
      }}
    >
      {/* Remove dark overlay — OR keep it if you want (tell me) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.15)",   // ← lighter overlay. Want darker? Say so.
          zIndex: 1,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">

          {/* GLASS BOX */}
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
              <h5
                style={{
                  color: "#c86b0eff",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  fontSize: "0.95rem",
                }}
              >
                ABER AL-KHAYAL • AL-JUBAIL
              </h5>

              <h1
                style={{
                  color: "#005db3ff",
                  fontWeight: 900,
                  fontSize: "2.2rem",
                  lineHeight: "1.3",
                  marginTop: "10px",
                }}
              >
                Trusted Partner for  
                <span style={{ color: "#ff9933" }}> Industrial & Construction Solutions</span>
              </h1>

              <p
                style={{
                  color: "#0a2338",
                  marginTop: "15px",
                  lineHeight: "1.7",
                  fontWeight: 500,
                }}
              >
                <strong>ABER AL-KHAYAL Contracting Company</strong>, based in  
                <strong> Al-Jubail, Saudi Arabia</strong>, delivers complete construction,
                electrical, mechanical, and industrial support services across the Kingdom.
              </p>

              <p
                style={{
                  color: "#0a2338",
                  marginTop: "10px",
                  lineHeight: "1.7",
                  fontWeight: 500,
                }}
              >
                With a growing fleet, skilled manpower, and a commitment to reliability — 
                we support industrial plants, construction projects, and maintenance
                operations throughout Saudi Arabia.
              </p>
            </div>
          </div>
        </div>

        {/* BOXES */}
        <div className="row mt-5 g-4">

          {/* Box 1 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up">
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h3 style={{ fontWeight: 800, color: "#0a192f", fontSize: "1.3rem" }}>
                Our Expertise
              </h3>
              <p style={{ color: "#444", marginTop: "10px", lineHeight: "1.6" }}>
                We specialize in civil works, electrical & mechanical installations,
                industrial maintenance, manpower supply, and turnkey contracting solutions.
              </p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h3 style={{ fontWeight: 800, color: "#0a192f", fontSize: "1.3rem" }}>
                Equipment & Fleet
              </h3>
              <p style={{ color: "#444", marginTop: "10px", lineHeight: "1.6" }}>
                Our fleet includes generators, compressors, welding tools, lifting
                equipment, vehicles, and specialized machinery — all maintained to
                industrial standards.
              </p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              <h3 style={{ fontWeight: 800, color: "#0a192f", fontSize: "1.3rem" }}>
                Reliable Support
              </h3>
              <p style={{ color: "#444", marginTop: "10px", lineHeight: "1.6" }}>
                We ensure fast mobilization, on-time delivery, certified manpower,
                and 24/7 technical support for industrial and construction projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FleetSection;
