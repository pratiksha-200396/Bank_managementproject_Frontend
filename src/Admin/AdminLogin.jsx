
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin() {

  const {register,handleSubmit,formState: { errors }} = useForm();

  let navigate = useNavigate();
  let onSubmit = (data) => {
    if (
      data.email === "admin@gmail.com" && data.password === "admin@123") {
      alert("Admin Login Successful");
      navigate("/admin-dashboard");
    } 
    else {
      alert("Invalid Admin Email or Password");
    }
  };

  return (
    <div className="bg-light min-vh-100">

      <div className="container-fluid">
        <div className="row min-vh-100">

          {/* ================= LEFT SIDE ================= */}

          <div className="col-md-4 col-lg-3 bg-white border-end p-4">

            <div className="d-flex flex-column h-100">

              {/* Welcome */}

              <div className="mb-5">

                <h2 className="fw-bold text-dark">
                  Welcome Back!
                </h2>

                <p className="text-muted">
                  Manage customers and banking
                  operations easily from your admin panel.
                </p>

              </div>


              {/* Features */}

              <div>

                <div className="d-flex align-items-center mb-4">

                  <div className="bg-primary-subtle rounded-3 p-2 me-3">
                    👤
                  </div>

                  <div>
                    <h6 className="fw-semibold mb-0">
                      Customer Management
                    </h6>

                    <small className="text-muted">
                      Manage customer accounts
                    </small>
                  </div>

                </div>


                <div className="d-flex align-items-center mb-4">

                  <div className="bg-success-subtle rounded-3 p-2 me-3">
                    💳
                  </div>

                  <div>
                    <h6 className="fw-semibold mb-0">
                      Account Management
                    </h6>

                    <small className="text-muted">
                      Monitor accounts
                    </small>
                  </div>

                </div>


                <div className="d-flex align-items-center">

                  <div className="bg-warning-subtle rounded-3 p-2 me-3">
                    📊
                  </div>

                  <div>
                    <h6 className="fw-semibold mb-0">
                      Banking Overview
                    </h6>

                    <small className="text-muted">
                      View banking information
                    </small>
                  </div>

                </div>

              </div>


              {/* Bottom */}

              <div className="mt-auto">

                <hr />

                <small className="text-muted">
                  🔒 Secure Admin Banking Portal
                </small>

              </div>

            </div>

          </div>


          {/* ================= RIGHT SIDE ================= */}

          <div className="col-md-8 col-lg-9 d-flex align-items-center justify-content-center p-4">

            <div className="w-100" style={{ maxWidth: "450px" }}>

              <div className="card border-0 shadow rounded-4">

                <div className="card-body p-4 p-md-5">


                  {/* Header */}

                  <div className="text-center mb-4">

                    <div
                      className="bg-primary-subtle text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "65px",
                        height: "65px",
                        fontSize: "28px"
                      }}
                    >
                      🔐
                    </div>

                    <h3 className="fw-bold mb-1">
                      Admin Login
                    </h3>

                    <p className="text-muted mb-0">
                      Login to access admin dashboard
                    </p>

                  </div>


                  <form onSubmit={handleSubmit(onSubmit)}>


                    {/* Email */}

                    <div className="mb-3">

                      <label className="form-label fw-semibold">
                        Email Address
                      </label>

                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Enter admin email"
                        {...register("email", {
                          required: "Email is required"
                        })}
                      />

                      {errors.email && (
                        <small className="text-danger">
                          {errors.email.message}
                        </small>
                      )}

                    </div>


                    {/* Password */}

                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter password"
                        {...register("password", {
                          required: "Password is required"
                        })}
                      />

                      {errors.password && (
                        <small className="text-danger">
                          {errors.password.message}
                        </small>
                      )}

                    </div>


                    {/* Login Button */}

                    <div className="d-grid">

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg rounded-3"
                      >
                        🔐 Login as Admin
                      </button>

                    </div>


                    {/* Customer Login */}

                    <div className="text-center mt-4">

                      <span className="text-muted">
                        Are you a customer?{" "}
                      </span>

                      <Link
                        to="/login"
                        className="text-primary fw-semibold text-decoration-none"
                      >
                        Customer Login
                      </Link>

                    </div>

                  </form>

                </div>

              </div>


              {/* Security text */}

              <p className="text-center text-muted small mt-3">
                🔒 Your admin access is protected
              </p>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default AdminLogin;

