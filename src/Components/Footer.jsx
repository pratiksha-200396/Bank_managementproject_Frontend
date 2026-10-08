import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white mt-5" style={{backgroundColor: "#0756A4"}}
    >

      {/* Main Footer */}
      <div className="container py-5">

        <div className="row">

          {/* SBI Information */}
          <div className="col-md-4 mb-4">

            <img
              src="https://logolook.net/wp-content/uploads/2022/04/SBI-Logo.png"
              alt="State Bank of India"
              style={{
                width: "170px",
                backgroundColor: "white",
                padding: "8px 15px",
                borderRadius: "5px"
              }}
              className="mb-3"
            />

            <p className="mt-2 mb-0">
              Secure, trusted and convenient banking services
              at your fingertips. Manage your accounts,
              deposits, withdrawals and transactions easily.
            </p>

          </div>


          {/* Quick Links */}
          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-4">
              Quick Links
            </h5>

            <ul className="list-unstyled">

              <li className="mb-3">
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/create-account"
                  className="text-white text-decoration-none"
                >
                  Create Account
                </Link>
              </li>

              <li className="mb-3">
                <Link
                  to="/login"
                  className="text-white text-decoration-none"
                >
                  Customer Login
                </Link>
              </li>

              <li>
                <Link
                  to="/admin-login"
                  className="text-white text-decoration-none"
                >
                  Admin Login
                </Link>
              </li>

            </ul>

          </div>


          {/* Contact */}
          <div className="col-md-4 mb-4">

            <h5 className="fw-bold mb-4">
              Contact Us
            </h5>

            <p className="mb-3">
              📍 Pune, Maharashtra
            </p>

            <p className="mb-3">
              📞 +91 98765 43210
            </p>

            <p className="mb-3">
              ✉️ support@sbi.com
            </p>

            <p className="mb-0">
              🕒 Mon - Sat: 9:00 AM - 6:00 PM
            </p>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}
      <div
        style={{
          backgroundColor: "#064B8F"
        }}
      >

        <div className="container py-3">

          <div className="row align-items-center">

            <div className="col-md-6 text-center text-md-start">

              <small>
                © 2026 State Bank of India. All Rights Reserved.
              </small>

            </div>

            <div className="col-md-6 text-center text-md-end mt-2 mt-md-0">

              <small>
                Secure • Trusted • Reliable Banking
              </small>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;