// src/pages/Feedback.jsx
import React, { useState } from "react";
import { FaRegSmile, FaPaperPlane } from "react-icons/fa";
import "animate.css";

const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="container mt-5 animate__animated animate__fadeInUp">
      <div className="text-center mb-4">
        <FaRegSmile size={60} className="text-success mb-3" />
        <h2 className="fw-bold text-success">We Value Your Feedback</h2>
        <p className="text-muted">Help us improve your experience with us.</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 p-4 bg-light">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Let us know your thoughts..."
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-success btn-lg">
                  <FaPaperPlane className="me-2" />
                  Submit Feedback
                </button>
              </div>
            </form>

            {submitted && (
              <div className="alert alert-success mt-4 text-center animate__animated animate__fadeIn">
                Thank you for your feedback! 💚
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
