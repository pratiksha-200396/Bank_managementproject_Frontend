import React from "react";
import { Link, useNavigate } from "react-router-dom";

function AdminProfile() {

  let navigate = useNavigate();

  let logout = () => {
    navigate("/admin-login");
  };

  return (

    <div
      className="min-vh-100"
      style={{
        background: "#f4f7fb"
      }}
    >

      <div className="container-fluid">

        <div className="row">


          {/* ================================================= */}
          {/* SIDEBAR */}
          {/* ================================================= */}

          <div
            className="col-md-2 p-0 shadow"
            style={{
              background: "#0b1f3a",
              minHeight: "100vh"
            }}
          >



            {/* MENU */}

            <div className="p-3">


              {/* Dashboard */}

              <Link
                to="/admin-dashboard"
                className="d-block text-decoration-none text-white-50 fw-semibold p-3 rounded-3 mb-2"
              >

                🏠 &nbsp; Dashboard

              </Link>


              {/* All Customers */}

              <Link
                to="/allcustomers"
                className="d-block text-decoration-none text-white-50 fw-semibold p-3 rounded-3 mb-2"
              >

                👥 &nbsp; All Customers

              </Link>


              {/* Profile */}

              <Link
                to="/admin-profile"
                className="d-block text-decoration-none text-white fw-semibold p-3 rounded-3 mb-2"
                style={{
                  background: "#1769aa"
                }}
              >

                👤 &nbsp; Profile

              </Link>


              {/* Logout */}

              <button
                onClick={logout}
                className="btn btn-link text-white-50 text-decoration-none fw-semibold p-3 w-100 text-start"
              >

                🚪 &nbsp; Logout

              </button>

            </div>


            {/* SIDEBAR BOTTOM */}

            <div
              className="position-absolute bottom-0 p-3 text-white-50 small"
            >

              © 2026 Bank Management

            </div>

          </div>



          {/* ================================================= */}
          {/* MAIN CONTENT */}
          {/* ================================================= */}

          <div className="col-md-10 p-0">


            {/* ================================================= */}
            {/* TOP HEADER */}
            {/* ================================================= */}

            <div
              className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center"
            >

              <div>

                <h5 className="fw-bold mb-1">
                  Admin Profile
                </h5>

                <small className="text-muted">
                  Manage your administrator profile
                </small>

              </div>


              <div className="d-flex align-items-center gap-3">

                <div
                  className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                  style={{
                    width: "42px",
                    height: "42px"
                  }}
                >

                  👤

                </div>

                <div>

                  <div className="fw-semibold">
                    Admin
                  </div>

                  <small className="text-muted">
                    Administrator
                  </small>

                </div>

              </div>

            </div>



            {/* ================================================= */}
            {/* PAGE CONTENT */}
            {/* ================================================= */}

            <div className="p-4">


              {/* PAGE TITLE */}




              <div className="row g-4">


                {/* ================================================= */}
                {/* PROFILE CARD */}
                {/* ================================================= */}

                <div className="col-lg-4">

                  <div
                    className="card border-0 shadow-sm text-center h-100"
                    style={{
                      borderRadius: "16px"
                    }}
                  >

                    <div className="card-body p-4">


                      {/* PROFILE ICON */}

                      <div
                        className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center text-white"
                        style={{
                          width: "110px",
                          height: "110px",
                          fontSize: "50px",
                          background:
                            "linear-gradient(135deg,#1769aa,#2196f3)"
                        }}
                      >

                        👤

                      </div>


                      <h4 className="fw-bold mb-1">
                        Admin
                      </h4>

                      <p className="text-muted mb-3">
                        Administrator
                      </p>


                      <span className="badge bg-success px-3 py-2">
                        ● Active
                      </span>


                      <hr className="my-4" />


                      <div className="text-start">

                        <div className="mb-3">

                          <small className="text-muted">
                            Role
                          </small>

                          <div className="fw-semibold">
                            Bank Administrator
                          </div>

                        </div>


                        <div className="mb-3">

                          <small className="text-muted">
                            Department
                          </small>

                          <div className="fw-semibold">
                            Bank Management
                          </div>

                        </div>


                        <div>

                          <small className="text-muted">
                            Account Status
                          </small>

                          <div className="fw-semibold text-success">
                            Active
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>



                {/* ================================================= */}
                {/* PROFILE INFORMATION */}
                {/* ================================================= */}

                <div className="col-lg-8">

                  <div
                    className="card border-0 shadow-sm"
                    style={{
                      borderRadius: "16px"
                    }}
                  >

                    <div className="card-body p-4">


                      <div className="d-flex align-items-center mb-4">

                        <div
                          className="rounded-3 bg-primary bg-opacity-10 text-primary d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "48px",
                            height: "48px",
                            fontSize: "22px"
                          }}
                        >

                          👤

                        </div>

                        <div>

                          <h5 className="fw-bold mb-1">
                            Personal Information
                          </h5>

                          <small className="text-muted">
                            Administrator account details
                          </small>

                        </div>

                      </div>



                      {/* INFORMATION */}

                      <div className="row g-4">


                        {/* NAME */}

                        <div className="col-md-6">

                          <label className="form-label text-muted">
                            Full Name
                          </label>

                          <div
                            className="form-control bg-light"
                            style={{
                              padding: "12px"
                            }}
                          >

                            Admin

                          </div>

                        </div>


                        {/* EMAIL */}

                        <div className="col-md-6">

                          <label className="form-label text-muted">
                            Email Address
                          </label>

                          <div
                            className="form-control bg-light"
                            style={{
                              padding: "12px"
                            }}
                          >

                            admin@bankmanagement.com

                          </div>

                        </div>


                        {/* CONTACT */}

                        <div className="col-md-6">

                          <label className="form-label text-muted">
                            Contact Number
                          </label>

                          <div
                            className="form-control bg-light"
                            style={{
                              padding: "12px"
                            }}
                          >

                            +91 9876543210

                          </div>

                        </div>


                        {/* ROLE */}

                        <div className="col-md-6">

                          <label className="form-label text-muted">
                            Role
                          </label>

                          <div
                            className="form-control bg-light"
                            style={{
                              padding: "12px"
                            }}
                          >

                            Administrator

                          </div>

                        </div>


                        {/* DEPARTMENT */}

                        <div className="col-md-6">

                          <label className="form-label text-muted">
                            Department
                          </label>

                          <div
                            className="form-control bg-light"
                            style={{
                              padding: "12px"
                            }}
                          >

                            Bank Management

                          </div>

                        </div>


                        {/* STATUS */}

                        <div className="col-md-6">

                          <label className="form-label text-muted">
                            Account Status
                          </label>

                          <div
                            className="form-control bg-light text-success fw-semibold"
                            style={{
                              padding: "12px"
                            }}
                          >

                            ● Active

                          </div>

                        </div>


                      </div>



                      {/* BUTTONS */}

                      <div className="mt-4 pt-3 border-top">

                        <button
                          className="btn btn-primary px-4 me-2"
                          onClick={() => alert("Edit Profile feature coming soon")}
                        >

                          ✏️ Edit Profile

                        </button>


                        <button
                          className="btn btn-outline-secondary px-4"
                          onClick={() => alert("Change Password feature coming soon")}
                        >

                          🔒 Change Password

                        </button>

                      </div>


                    </div>

                  </div>



                  {/* ================================================= */}
                  {/* SECURITY CARD */}
                  {/* ================================================= */}

                  <div
                    className="card border-0 shadow-sm mt-4"
                    style={{
                      borderRadius: "16px"
                    }}
                  >

                    <div className="card-body p-4">

                      <h5 className="fw-bold mb-3">
                        🔐 Security
                      </h5>

                      <div className="d-flex justify-content-between align-items-center">

                        <div>

                          <div className="fw-semibold">
                            Account Security
                          </div>

                          <small className="text-muted">
                            Your administrator account is currently active and secure.
                          </small>

                        </div>

                        <span className="badge bg-success px-3 py-2">
                          Secure
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminProfile;