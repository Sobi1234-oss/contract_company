import React from "react";
import '../../style_new.css';

const Appointment_2 = () => {
  return (
    <>
      {/* appointment-2 section start */}
      <div className="container-xxl py-5" style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden"
      }}>
        {/* Background Elements */}
        <div style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          borderRadius: "50%",
        }}></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row g-5 align-items-center">
            
            {/* Left Content */}
            <div className="col-lg-5 col-md-6" data-aos="fade-right" data-aos-delay="100">
              <div className="border-start border-5 border-warning ps-4 mb-5">
                <span className="badge bg-warning bg-opacity-20 text-warning mb-2 px-3 py-2 rounded-pill">
                  <i className="fa fa-rocket me-2"></i>Get Started
                </span>
                <h1 className="display-5 fw-bold mb-0 text-white">
                  Start Your <span className="text-warning">Project</span> Today
                </h1>
              </div>
              
              <div className="content-wrapper">
                <p className="text-light mb-4 lead opacity-90">
                  Transform your vision into reality with Aber Al-Khayal's expert engineering solutions in 
                  <strong className="text-warning"> Civil, Electrical, and Mechanical Engineering</strong>.
                </p>
                
                <div className="features-list">
                  <div className="feature-item d-flex align-items-center mb-3 p-3 bg-white bg-opacity-10 rounded-3">
                    <div className="feature-icon bg-warning rounded-2 p-2 me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <span className="text-dark fw-medium">Expert Engineering Consultation</span>
                  </div>
                  
                  <div className="feature-item d-flex align-items-center mb-3 p-3 bg-white bg-opacity-10 rounded-3">
                    <div className="feature-icon bg-warning rounded-2 p-2 me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <span className="text-dark fw-medium">On-site Project Assessment</span>
                  </div>
                  
                  <div className="feature-item d-flex align-items-center p-3 bg-white bg-opacity-10 rounded-3">
                    <div className="feature-icon bg-warning rounded-2 p-2 me-3">
                      <i className="fa fa-check text-white"></i>
                    </div>
                    <span className="text-dark fw-medium">Customized Service Solutions</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="row mt-4 text-center">
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="text-warning fw-bold mb-1">25+</h3>
                      <small className="text-light opacity-80">Years Experience</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="text-warning fw-bold mb-1">500+</h3>
                      <small className="text-light opacity-80">Projects Done</small>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="text-warning fw-bold mb-1">50+</h3>
                      <small className="text-light opacity-80">Expert Engineers</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-7 col-md-6" data-aos="fade-left" data-aos-delay="200">
              <div className="form-card bg-white rounded-4 shadow-lg p-4 p-md-5 position-relative">
                {/* Form Header */}
                <div className="text-center mb-4">
                  <div className="form-icon bg-warning bg-opacity-10 rounded-3 p-3 d-inline-flex align-items-center justify-content-center mb-3">
                    <i className="fa fa-calendar-check fa-2x text-warning"></i>
                  </div>
                  <h4 className="fw-bold text-dark mb-2">Book Your Consultation</h4>
                  <p className="text-muted mb-0">Get a free project assessment within 24 hours</p>
                </div>

                <form>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label text-dark fw-medium mb-2">
                          <i className="fa fa-user text-warning me-2"></i>Your Name
                        </label>
                        <input
                          type="text"
                          className="form-control border-2 border-light rounded-3 py-3 px-4"
                          id="name"
                          placeholder="Enter your full name"
                          style={{ 
                            backgroundColor: '#f8f9fa',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label text-dark fw-medium mb-2">
                          <i className="fa fa-envelope text-warning me-2"></i>Your Email
                        </label>
                        <input
                          type="email"
                          className="form-control border-2 border-light rounded-3 py-3 px-4"
                          id="email"
                          placeholder="Enter your email"
                          style={{ 
                            backgroundColor: '#f8f9fa',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="mobile" className="form-label text-dark fw-medium mb-2">
                          <i className="fa fa-phone text-warning me-2"></i>Your Mobile
                        </label>
                        <input
                          type="text"
                          className="form-control border-2 border-light rounded-3 py-3 px-4"
                          id="mobile"
                          placeholder="+966 XXX XXX XXX"
                          style={{ 
                            backgroundColor: '#f8f9fa',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <div className="form-group">
                        <label htmlFor="service" className="form-label text-dark fw-medium mb-2">
                          <i className="fa fa-cogs text-warning me-2"></i>Service Type
                        </label>
                        <select 
                          className="form-control border-2 border-light rounded-3 py-3 px-4" 
                          id="service"
                          style={{ 
                            backgroundColor: '#f8f9fa',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <option value="">Choose Service Type</option>
                          <option value="civil">🏗️ Civil Engineering</option>
                          <option value="electrical">⚡ Electrical Engineering</option>
                          <option value="mechanical">🔧 Mechanical Engineering</option>
                          <option value="consultation">💼 General Consultation</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="message" className="form-label text-dark fw-medium mb-2">
                          <i className="fa fa-comment text-warning me-2"></i>Project Details
                        </label>
                        <textarea
                          className="form-control border-2 border-light rounded-3 px-4"
                          placeholder="Describe your project requirements..."
                          id="message"
                          rows="4"
                          style={{
                            backgroundColor: '#f8f9fa',
                            resize: 'none',
                            transition: 'all 0.3s ease',
                            paddingTop: '1rem',
                            paddingBottom: '1rem'
                          }}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12 mt-4">
                      <button 
                        className="btn btn-warning w-100 py-3 fw-bold rounded-3 border-0 text-dark"
                        type="submit"
                        style={{
                          background: 'linear-gradient(135deg, #ffc107, #ff8c00)',
                          fontSize: '1.1rem',
                          transition: 'all 0.4s ease',
                          boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)'
                        }}
                      >
                        <i className="fa fa-paper-plane me-2"></i>
                        Schedule Free Consultation
                      </button>
                    </div>

                    <div className="col-12 text-center">
                      <small className="text-muted">
                        <i className="fa fa-lock me-1"></i>
                        Your information is 100% secure and confidential
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          .form-card {
            border: none;
            transition: all 0.4s ease;
            backdrop-filter: blur(10px);
          }

          .form-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15) !important;
          }

          .form-control {
            border-color: #e9ecef !important;
            font-size: 1rem;
          }

          .form-control:focus {
            box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.2) !important;
            border-color: #ffc107 !important;
            background: #ffffff !important;
            transform: translateY(-2px);
          }

          .feature-item {
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
          }

          .feature-item:hover {
            transform: translateX(8px);
            background: rgba(255, 255, 255, 0.2) !important;
          }

          .feature-icon {
            transition: all 0.3s ease;
          }

          .feature-item:hover .feature-icon {
            transform: scale(1.1) rotate(5deg);
          }

          .form-icon {
            transition: all 0.4s ease;
          }

          .form-card:hover .form-icon {
            transform: scale(1.1) rotate(10deg);
            background: linear-gradient(135deg, #ffc107, #ff8c00) !important;
          }

          .form-card:hover .form-icon i {
            color: white !important;
          }

          .stat-item {
            transition: all 0.3s ease;
          }

          .stat-item:hover {
            transform: scale(1.05);
          }

          .btn:hover {
            transform: translateY(-3px) !important;
            box-shadow: 0 10px 30px rgba(255, 193, 7, 0.4) !important;
          }

          @media (max-width: 768px) {
            .form-card {
              padding: 2rem !important;
              margin-top: 2rem;
            }
            
            .display-5 {
              font-size: 2.2rem;
            }
          }

          /* Floating animation for background elements */
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }

          .container-xxl::before {
            content: '';
            position: absolute;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
            top: 20%;
            left: 10%;
          }
        `}</style>
      </div>
      {/* appointment section end */}
    </>
  );
};

export default Appointment_2;