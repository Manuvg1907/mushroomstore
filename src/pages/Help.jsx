// src/pages/Help.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaClock, FaHeadset } from "react-icons/fa";
import "animate.css";

const Help = () => {
  return (
    <div className="container mt-5 animate__animated animate__fadeInUp">
      <div className="text-center mb-5">
        <FaHeadset size={60} className="text-success mb-3" />
        <h2 className="fw-bold text-success">We're Here to Help!</h2>
        <p className="text-muted">Our support team is ready to assist you.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body text-center">
              <FaEnvelope size={40} className="text-success mb-3" />
              <h5 className="card-title fw-semibold">Email Support</h5>
              <p className="card-text">Reach out to us via email for detailed queries or help.</p>
              <p className="fw-bold text-dark">support@organicomushroom.com</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body text-center">
              <FaPhoneAlt size={40} className="text-success mb-3" />
              <h5 className="card-title fw-semibold">Call Us</h5>
              <p className="card-text">Talk to our friendly team during working hours.</p>
              <p className="fw-bold text-dark">+91 8217288641</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg border-0 h-100">
            <div className="card-body text-center">
              <FaClock size={40} className="text-success mb-3" />
              <h5 className="card-title fw-semibold">Working Hours</h5>
              <p className="card-text">We're available throughout the week.</p>
              <p className="fw-bold text-dark">Mon – Sat: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <p className="text-muted">
          Still need help? Don’t hesitate to <span className="text-success fw-bold">contact us anytime</span>.
        </p>
      </div>
    </div>
  );
};

export default Help;
