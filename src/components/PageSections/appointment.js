// src/components/PageSections/Appointment.js
import React, { useState } from "react";
import "../../style_new.css";
import { send } from "@emailjs/browser";

// EmailJS Config
const SERVICE_ID = "service_zgpakd4";
const TEMPLATE_USER = "template_uuzoxq9";     // Auto reply to user
const TEMPLATE_ADMIN = "template_6hi7u0j";   // Admin email template
const PUBLIC_KEY = "467GkbkMgX0vaII31";

const Appointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    msg: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.mobile || !form.service || !form.message) {
      setStatus({
        loading: false,
        success: false,
        msg: "Please fill all fields.",
      });
      return;
    }

    setStatus({ loading: true, success: null, msg: "Sending..." });

    try {
      // 1️⃣ Auto Email to USER
      const userParams = {
        to_email: form.email,
        name: form.name,
        service: form.service,
        mobile: form.mobile,
        message: form.message,
      };

      await send(SERVICE_ID, TEMPLATE_USER, userParams, PUBLIC_KEY);

      // 2️⃣ Email to ADMIN
      const adminParams = {
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        service: form.service,
        message: form.message,
      };

      await send(SERVICE_ID, TEMPLATE_ADMIN, adminParams, PUBLIC_KEY);

      setStatus({
        loading: false,
        success: true,
        msg: "Appointment request sent successfully!",
      });

      setForm({
        name: "",
        email: "",
        mobile: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        loading: false,
        success: false,
        msg: "Failed to send. Try again later.",
      });
    }
  };

  return (
    <>
      <div
        className="container-xxl py-5"
        style={{ background: "linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)" }}
      >
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Content */}
            <div className="col-lg-5 col-md-6">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <span className="badge bg-primary bg-opacity-10 text-primary mb-2 px-3 py-2 rounded-pill">
                  Get In Touch
                </span>
                <h1 className="display-6 fw-bold mb-0 text-dark">
                  Schedule Your <span className="text-primary">Project</span>
                </h1>
              </div>

              <p className="text-muted lead mb-4">
                As a leading contracting company, Aber Al-Khayal specializes in
                <strong> Civil, Electrical, and Mechanical Engineering</strong> services.
              </p>

              <div className="contact-info mt-4 p-4 bg-white rounded-4 shadow-sm">
                <h6 className="fw-bold text-dark mb-3">Quick Contact</h6>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-phone text-primary me-3"></i>
                  <span className="text-muted">+0554625112</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="fa fa-envelope text-primary me-3"></i>
                  <span className="text-muted">aberalkhayal@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-7 col-md-6">
              <div className="form-card bg-white rounded-4 shadow-lg p-4 p-md-5">
                <div className="text-center mb-4">
                  <div className="form-icon bg-primary bg-opacity-10 rounded-3 p-3 d-inline-flex mb-3">
                    <i className="fa fa-calendar-check fa-2x text-primary"></i>
                  </div>
                  <h4 className="fw-bold text-dark mb-2">Book Your Consultation</h4>
                  <p className="text-muted mb-0">
                    Fill the form and our experts will contact you within 24 hours
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          name="name"
                          type="text"
                          className="form-control border-0 shadow-sm"
                          placeholder="Your Name"
                          value={form.name}
                          onChange={handleChange}
                          style={{ backgroundColor: "#f8f9fa", height: "60px" }}
                        />
                        <label>Your Name</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          name="email"
                          type="email"
                          className="form-control border-0 shadow-sm"
                          placeholder="Your Email"
                          value={form.email}
                          onChange={handleChange}
                          style={{ backgroundColor: "#f8f9fa", height: "60px" }}
                        />
                        <label>Your Email</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <input
                          name="mobile"
                          type="text"
                          className="form-control border-0 shadow-sm"
                          placeholder="Your Mobile"
                          value={form.mobile}
                          onChange={handleChange}
                          style={{ backgroundColor: "#f8f9fa", height: "60px" }}
                        />
                        <label>Your Mobile</label>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-floating">
                        <select
                          name="service"
                          className="form-control border-0 shadow-sm"
                          value={form.service}
                          onChange={handleChange}
                          style={{ backgroundColor: "#f8f9fa", height: "60px" }}
                        >
                          <option value="">Select Service Type</option>
                          <option value="Civil Engineering">Civil Engineering</option>
                          <option value="Electrical Engineering">Electrical Engineering</option>
                          <option value="Mechanical Engineering">Mechanical Engineering</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                        <label>Service Type</label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          name="message"
                          className="form-control border-0 shadow-sm"
                          placeholder="Project Details"
                          value={form.message}
                          onChange={handleChange}
                          style={{
                            height: "120px",
                            backgroundColor: "#f8f9fa",
                            resize: "none",
                          }}
                        ></textarea>
                        <label>Project Details</label>
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-3 fw-bold rounded-pill border-0"
                        style={{
                          background: "linear-gradient(135deg, #007bff, #0056b3)",
                          fontSize: "1.1rem",
                        }}
                        disabled={status.loading}
                      >
                        {status.loading ? "Sending..." : "Schedule Appointment"}
                      </button>
                    </div>

                    {status.msg && (
                      <div className="col-12 text-center mt-3">
                        <strong
                          style={{ color: status.success ? "green" : "red" }}
                        >
                          {status.msg}
                        </strong>
                      </div>
                    )}
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
