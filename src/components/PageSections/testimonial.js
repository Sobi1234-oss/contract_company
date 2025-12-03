import React, { useEffect } from "react";
import Swiper, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../style_new.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonialsData = [
  {
    img: "/images/testimonials/testimonials-1.jpg",
    name: "Eng. Omar Al-Hassan",
    position: "Project Director – Infrastructure Development",
    text: "Aber Al-Khayal delivered our civil and infrastructure works with exceptional precision. Their engineering expertise and commitment to deadlines made them a reliable partner for our large-scale development project.",
  },
  {
    img: "/images/testimonials/testimonials-2.jpg",
    name: "Sarah Williams",
    position: "Facilities Manager – Commercial Buildings",
    text: "Their mechanical engineering team handled our HVAC and plumbing installations flawlessly. The quality of work and attention to detail exceeded our expectations.",
  },
  {
    img: "/images/testimonials/testimonials-3.jpg",
    name: "Ahmed Kareem",
    position: "Operations Manager – Industrial Sector",
    text: "The electrical engineering solutions provided by Aber Al-Khayal were highly efficient, safe, and reliable. Their team ensured smooth execution from design to implementation.",
  },
  {
    img: "/images/testimonials/testimonials-4.jpg",
    name: "Michael Anderson",
    position: "Independent Consultant – Construction",
    text: "Exceptional workmanship across all engineering disciplines. Their coordination, communication, and technical delivery make them one of the most dependable contractors in the region.",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });

    new Swiper(".testimonial-swiper", {
      modules: [Autoplay, Pagination],
      loop: true,
      speed: 600,
      autoplay: { delay: 5000 },
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 1 },
        1200: { slidesPerView: 2, spaceBetween: 30 },
      },
    });
  }, []);

  return (
    <section
      id="testimonials"
      className="testimonials section py-5"
      style={{ backgroundColor: "#E6E6E6" }} // light silver
    >
      <div className="container section-title text-center" data-aos="fade-up">
        <h2 style={{ fontSize: "28px" }}>Testimonials</h2>
        <p style={{ fontSize: "16px" }}>
          What our clients say about our engineering excellence
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper testimonial-swiper">
          <div className="swiper-wrapper">
            {testimonialsData.map((item, index) => (
              <div className="swiper-slide" key={index}>
                <div className="testimonial-wrap py-3">
                  <div className="testimonial-item p-4 text-center">
                    <img
                      src={item.img}
                      className="testimonial-img mb-3"
                      alt={item.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "50%",
                        margin: "0 auto",
                      }}
                    />
                    <h3 style={{ fontSize: "20px", marginBottom: "5px" }}>{item.name}</h3>
                    <h4 style={{ fontSize: "16px", fontWeight: "400", marginBottom: "10px" }}>{item.position}</h4>
                    <div className="stars mb-2" style={{ fontSize: "16px", color: "#FFA500" }}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <p style={{ fontSize: "15px", lineHeight: "1.5" }}>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>{item.text}</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="swiper-pagination mt-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
