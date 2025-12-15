import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const OurClients = () => {

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const ACCENT_ORANGE = "#ff7f00";
  const PRIMARY_BLUE = "#0A387E";
  const LIGHT_BG = "linear-gradient(135deg, #f0f4f9 0%, #ffffff 100%)";

  const clients = [
    { img: process.env.PUBLIC_URL + "/images/clients/client1.png", delay: 100 },
    { img: process.env.PUBLIC_URL + "/images/clients/client2.png", delay: 150 },
    { img: process.env.PUBLIC_URL + "/images/clients/client3.png", delay: 200 },
    { img: process.env.PUBLIC_URL + "/images/clients/client4.png", delay: 250 },
    { img: process.env.PUBLIC_URL + "/images/clients/client5.png", delay: 300 },
    { img: process.env.PUBLIC_URL + "/images/clients/client6.png", delay: 350 },
    { img: process.env.PUBLIC_URL + "/images/clients/client7.png", delay: 400 },
    { img: process.env.PUBLIC_URL + "/images/clients/client8.png", delay: 450 },
  ];

  return (
    <>
      {/* CLIENTS SECTION ONLY */}
      <section
        id="clients"
        className="clients section"
        style={{
          background: LIGHT_BG,
          paddingTop: "100px",
          paddingBottom: "100px",
          width: "87%",
          display: "flex",
          justifyContent: "center",marginLeft: "auto",  marginRight: "auto" ,marginTop:"30px"
        }}
      >

        {/* CENTERED 90% WIDTH CONTAINER */}
        <div
          className="container"
          style={{
            width: "100%",
            margin: "0 auto",
          }}
        >
          {/* HEADING */}
          <div className="row mb-5" data-aos="fade-up">
            <div className="col-lg-8">
              <div
                style={{
                  borderLeft: `6px solid ${ACCENT_ORANGE}`,
                  paddingLeft: "20px",
                }}
              >
                <span
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    color: ACCENT_ORANGE,
                    padding: "6px 16px",
                    borderRadius: "30px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    border: `1px solid ${ACCENT_ORANGE}`,
                    letterSpacing: "1px"
                  }}
                >
                  Our Trusted Clients
                </span>

                <h1
                  className="display-6 mb-0 fw-bold"
                  style={{
                    fontSize: "2.8rem",
                    color: PRIMARY_BLUE,
                    marginTop: "10px"
                  }}
                >
                  Trusted by <br />
                  <span style={{ color: ACCENT_ORANGE }}>
                    Leading Companies & Organizations
                  </span>
                </h1>

                <p
                  className="text-muted mt-3"
                  style={{ color: PRIMARY_BLUE, opacity: 0.8 }}
                >
                  Proud partners to top companies across Saudi Arabia, delivering
                  dependable engineering results.
                </p>
              </div>
            </div>
          </div>

          {/* CLIENT LOGOS */}
          <div className="row gy-4 justify-content-center">
            {clients.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-6 text-center"
                data-aos="zoom-in"
                data-aos-delay={item.delay}
              >
                <div className="client-logo-box mx-auto">
                  <img
                    src={item.img}
                    alt={`Client ${index + 1}`}
                    className="client-logo-box-img"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INLINE SECTION CSS */}
        <style>{`
          .client-logo-box {
            width: 220px;
            height: 220px;
            border-radius: 15px;
            padding: 20px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #fff;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: .4s;
            cursor: pointer;
          }

          .client-logo-box:hover {
            transform: translateY(-10px) scale(1.05);
            box-shadow: 0 15px 35px rgba(255,127,0,0.5);
          }

          .client-logo-box-img {
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
          }

          @media (max-width: 768px) {
            .client-logo-box {
              width: 160px;
              height: 160px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default OurClients;
