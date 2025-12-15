import React from "react";

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

  // Shared inline styles
  const containerStyle = {
    width: "90%",
    margin: "0 auto",
  };

  const sectionStyle = {
    background: "linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)",
    fontFamily: "'Inter', sans-serif",
    padding: "80px 0",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
  };

  const headerTitleStyle = {
    fontSize: "3rem",
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: "1rem",
    textTransform: "uppercase"
  };

  const taglineStyle = {
    fontSize: "1.2rem",
    maxWidth: "75%",
    color: "#6c757d"
  };

  const featureBoxStyle = {
    background: "#ffffff",
    borderRadius: "1rem",
    boxShadow: "0 12px 40px rgba(0,123,255,0.08)",
    padding: "2rem",
    textAlign: "center",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s ease",
    marginBottom: "2rem"
  };

  const featureIconStyle = {
    width: "80px",
    height: "80px",
    background: "linear-gradient(45deg, #007bff, #ff7f00)",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    position: "relative",
    zIndex: 1,
    transition: "all 0.3s ease"
  };

  const featureTitleStyle = {
    fontWeight: 700,
    marginBottom: "1rem",
    fontSize: "1.25rem"
  };

  const featureDescStyle = {
    color: "#6c757d",
    lineHeight: 1.6,
    fontSize: "1rem"
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <h6
  style={{
    display: "inline-block", // ensures the width wraps the text
    background: "rgba(255,255,255,0.9)",
    color: "orange",
    padding: "6px 16px",
    borderRadius: "30px",
    fontWeight: 700,
    textTransform: "uppercase",
    border: "1px solid orange",
    letterSpacing: "1px",
    marginBottom: "1rem", // spacing below the badge
  }}
>
  Our Features
</h6>

          
          {/* Heading split into two lines with blue & orange */}
          <h1 style={headerTitleStyle}>
            <span style={{ color: "#03468eff" }}>Excellence & Innovation</span><br />
            <span style={{ color: "#ff7f00" }}>by Aber Al-Khayal</span>
          </h1>

          <p style={taglineStyle}>
            We provide reliable, high-quality engineering solutions backed by expertise, innovation, and a commitment to excellence. Our mission is to deliver precision, safety, and sustainability in every project we undertake.
          </p>
        </div>

        {/* Features Grid */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
          {featuresData.map((feature, index) => (
            <div key={index} style={{ flex: "0 0 30%", minWidth: "260px", transition: "all 0.3s ease" }}>
              <div
                style={featureBoxStyle}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-12px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
              >
                <div style={featureIconStyle}>
                  <i className={`fas ${feature.icon} fa-2x`} style={{ color: "#fff" }}></i>
                </div>
                <h4 style={featureTitleStyle}>{feature.title}</h4>
                <p style={featureDescStyle}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
