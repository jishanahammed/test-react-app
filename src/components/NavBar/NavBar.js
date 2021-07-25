import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import LocaleTimeAndDate from "../LocaleTimeAndDate/LocaleTimeAndDate";

const NavBar = () => {
  return (
    <div>
      {/* navbar */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/features">
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/aboutUs">
                  About Us
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <span class="d-flex justify-content-end">
              <LocaleTimeAndDate />
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
