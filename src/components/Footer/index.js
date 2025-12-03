import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style_new.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      setSuccessMsg("Please enter a valid email.");
      setTimeout(() => setSuccessMsg(""), 3000);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setSuccessMsg("Thank you! You have subscribed successfully.");

      setTimeout(() => setSuccessMsg(""), 3500); // Hide message after 3.5s
    }, 1500);
  };

  return (
    <>
      <div
        className="container-fluid bg-dark footer mt-5 pt-4 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ fontSize: "14px" }}
      >
        <div className="container py-4">
          <div className="row g-4">

            {/* Company Info */}
            <div className="col-lg-3 col-md-6">
              <h1 className="text-white mb-3" style={{ fontSize: "20px" }}>
                <i className="fa fa-building text-primary me-2"></i>
                Aber Al-Khayal General Contracting Company
              </h1>

              <p style={{ lineHeight: "1.4" }}>
                We provide high-quality engineering and contracting solutions in
                Electrical, Mechanical, and Civil sectors across Saudi Arabia.
              </p>

              <div className="d-flex pt-2">
                <a className="btn btn-square btn-outline-primary me-1" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-outline-primary me-1" href="#">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-square btn-outline-primary me-0" href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-2" style={{ fontSize: "16px" }}>
                Address
              </h4>
              <p className="footer-contact-item mb-2" style={{ lineHeight: "1.4" }}>
                <i className="fa fa-map-marker-alt me-2"></i>
                101 Business Tower, King Abdul Aziz Road, Aljubail 35513
              </p>

              <h4 className="text-light mb-2" style={{ fontSize: "16px" }}>
                Company Representative
              </h4>
              <p className="footer-contact-item mb-2" style={{ lineHeight: "1.4" }}>
                <i className="fa fa-user me-2"></i>
                Naveed Ashraf — Business Development Executive
              </p>

              <h4 className="text-light mb-2" style={{ fontSize: "16px" }}>
                Phone
              </h4>
              <p className="footer-contact-item mb-2" style={{ lineHeight: "1.4" }}>
                <i className="fa fa-phone-alt me-2"></i>
                +0554625112
              </p>

              <h4 className="text-light mb-2" style={{ fontSize: "16px" }}>
                Email
              </h4>
              <p className="footer-contact-item mb-0" style={{ lineHeight: "1.4" }}>
                <i className="fa fa-envelope me-2"></i>
                aberalkhayal@gmail.com
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-3" style={{ fontSize: "18px" }}>
                Quick Links
              </h4>

              <Link to="/" className="btn btn-link">Home</Link>
              <Link to="/about-us" className="btn btn-link">About Us</Link>
              <Link to="/our-services" className="btn btn-link">Our Services</Link>
              <Link to="/our-team" className="btn btn-link">Our Team</Link>
              <Link to="/clients-page" className="btn btn-link">Our Clients</Link>
              <Link to="/contact-page" className="btn btn-link">Contact</Link>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-3" style={{ fontSize: "18px" }}>
                Newsletter
              </h4>
              <p style={{ lineHeight: "1.4" }}>
                Subscribe to receive company updates and project news.
              </p>

              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "350px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-2 ps-3 pe-5"
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ fontSize: "14px" }}
                />

                <button
                  type="button"
                  onClick={handleSubscribe}
                  className="btn btn-primary py-1 position-absolute top-0 end-0 mt-1 me-2"
                  style={{ fontSize: "13px" }}
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Subscribe"}
                </button>
              </div>

              {/* Success Message */}
              {successMsg && (
                <div
                  className="alert alert-success mt-2 py-2"
                  style={{
                    fontSize: "13px",
                    animation: "fadeIn 0.4s",
                    background: "#0f5132",
                    color: "#d1e7dd",
                    border: "1px solid #badbcc",
                  }}
                >
                  {successMsg}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="container-fluid copyright py-2">
          <div className="container text-center">
            © {new Date().getFullYear()} Aber Al-Khayal General Contracting Company — All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
