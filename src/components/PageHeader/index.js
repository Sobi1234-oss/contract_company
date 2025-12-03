import React from "react";
import { Link } from "react-router-dom";
import "../../style_new.css";

const PageHeader = ({ name, link, bgImage }) => {
  return (
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
      style={{
        position: "relative",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "250px", // Minimum height for mobile
        display: "flex",
        alignItems: "center",
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
          backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        className="container text-center py-5"
        style={{ position: "relative", zIndex: 2 }}
      >
        <h1
          className="display-4 text-white animated slideInDown mb-4"
          style={{ fontSize: "2rem" }} // Responsive font
        >
          {name}
        </h1>

        <nav aria-label="breadcrumb" className="animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0 flex-wrap">
            <li className="breadcrumb-item">
              <Link className="text-white" to="/">
                Home
              </Link>
            </li>

            <li className="breadcrumb-item">
              <span className="text-white">Pages</span>
            </li>

            <li
              className="breadcrumb-item text-primary active"
              aria-current="page"
            >
              {link}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
