import React from "react";
import { Link, Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css/animate.min.css";
import "../styles/Layout.css";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon

const Layout = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-success fw-bold fs-3" to="/">
            OrganicoMushroom
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="collapse navbar-collapse animate__animated animate__fadeInDown"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">Help</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/feedback">Feedback</Link>
              </li>
              <li className="nav-item">
                {/* ✅ Cart icon navigates to /cart */}
                <Link className="nav-link d-flex align-items-center" to="/cart">
                  <FaShoppingCart className="me-1" />
                  Cart
                </Link>
              </li>
            </ul>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search mushrooms..."
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Outlet renders the current page component */}
      <main className="container py-4">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
