/// src/components/PageSections/contact.js
import React, { useEffect, useState } from "react";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { send } from "@emailjs/browser";

const SERVICE_ID = "service_zgpakd4";
const TEMPLATE_USER = "template_uuzoxq9";   // Auto reply to user
const TEMPLATE_ADMIN = "template_6hi7u0j"; // Your admin template ID
const PUBLIC_KEY = "467GkbkMgX0vaII31";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
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

    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus({
        loading: false,
        success: false,
        msg: "Please fill all fields.",
      });
      return;
    }

    setStatus({ loading: true, success: null, msg: "Sending..." });

    try {
      // 1️⃣ Auto-Reply Email to USER
      const userParams = {
        to_email: form.email,
        name: form.name,
        subject: form.subject,
        message: form.message,
      };

      await send(SERVICE_ID, TEMPLATE_USER, userParams, PUBLIC_KEY);

      // 2️⃣ Admin Email
      const adminParams = {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      };

      await send(SERVICE_ID, TEMPLATE_ADMIN, adminParams, PUBLIC_KEY);

      setStatus({
        loading: false,
        success: true,
        msg: "Message sent successfully!",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus({
        loading: false,
        success: false,
        msg: "Failed to send message. Try again later.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="contact section py-5"
      style={{ backgroundColor: "#f9f9f9" }}
    >
      <div className="container" data-aos="fade-up" data-aos-delay="100">

        {/* --- INFO CARDS --- */}
        <div className="row gy-4 mb-5">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="info-card text-center p-4 shadow-sm rounded-4 bg-white h-100">
              <i className="bi bi-geo-alt" style={{ fontSize: "2.5rem", color: "#FF6F00" }}></i>
              <h4 className="mt-3 mb-2">Address</h4>
              <p>
                ABER AL-KHAYAL - 101 Business Tower,
                <br />
                King Abdul Aziz Road, Aljubail 35513
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="info-card text-center p-4 shadow-sm rounded-4 bg-white h-100">
              <i className="bi bi-telephone" style={{ fontSize: "2.5rem", color: "#FF6F00" }}></i>
              <h4 className="mt-3 mb-2">Call Us</h4>
              <p>+0554625112</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="info-card text-center p-4 shadow-sm rounded-4 bg-white h-100">
              <i className="bi bi-envelope" style={{ fontSize: "2.5rem", color: "#FF6F00" }}></i>
              <h4 className="mt-3 mb-2">Email Us</h4>
              <p>aberalkhayal@gmail.com</p>
            </div>
          </div>
        </div>

        {/* --- MAP + FORM --- */}
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "12px" }}
              loading="lazy"
              title="Jubail Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.8276532603797!2d49.59822267470291!3d27.00518047673391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a2867b9f37cf%3A0xc77e3d6eac1e3c75!2sJubail%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1701542840000!5m2!1sen!2s"
            ></iframe>
          </div>

          {/* FORM */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="bg-white p-4 rounded-4 shadow-sm">
              <h3 className="mb-4 text-center" style={{ color: "#FF6F00" }}>
                Get in Touch
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control form-control-lg"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows="5"
                      className="form-control form-control-lg"
                      placeholder="Message"
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      disabled={status.loading}
                      style={{
                        backgroundColor: "#FF6F00",
                        color: "#fff",
                        borderRadius: "50px",
                        padding: "10px 40px",
                      }}
                    >
                      {status.loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>

                  {status.msg && (
                    <div className="col-12 mt-3 text-center">
                      <strong style={{ color: status.success ? "green" : "red" }}>
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
    </section>
  );
};

export default Contact;
