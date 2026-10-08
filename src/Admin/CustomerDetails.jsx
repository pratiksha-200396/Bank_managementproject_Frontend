
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CustomerDetails() {

  let { id } = useParams();

  let navigate = useNavigate();

  let [customer, setCustomer] = useState(null);
 //customer chya details get krnya sathi
  useEffect(() => {

    axios
      .get("http://localhost:8080/admin/getdetails/" + id)
      .then((result) => {

        console.log(result.data);

        setCustomer(result.data);

      })
      .catch((error) => {

        console.log(error);

        alert("Customer Details Not Found");

      });

  }, [id]);

// logout sathi
  let logout = () => {

    navigate("/admin-login");

  };


  // ================= LOADING =================

  if (!customer) {

    return (

      <div className="min-vh-100 bg-light">

        <div className="container mt-5 text-center">

          <div className="spinner-border text-primary"></div>

          <p className="mt-3">

            Loading Customer Details...

          </p>

        </div>

      </div>

    );

  }


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

            <div className="p-3">


              {/* ================= DASHBOARD ================= */}

              <Link
                to="/admin-dashboard"
                className="d-block text-decoration-none text-white-50 fw-semibold p-3 rounded-3 mb-2"
              >

                🏠 &nbsp; Dashboard

              </Link>


              {/* ================= ALL CUSTOMERS ================= */}

              <Link
                to="/allcustomers"
                className="d-block text-decoration-none text-white fw-semibold p-3 rounded-3 mb-2"
                style={{
                  background: "#1769aa"
                }}
              >

                👥 &nbsp; All Customers

              </Link>


              {/* ================= PROFILE ================= */}

              <Link
                to="/admin-profile"
                className="d-block text-decoration-none text-white-50 fw-semibold p-3 rounded-3 mb-2"
              >

                👤 &nbsp; Profile

              </Link>


              {/* ================= LOGOUT ================= */}

              <button
                onClick={logout}
                className="btn btn-link text-white-50 text-decoration-none fw-semibold p-3 w-100 text-start"
              >

                🚪 &nbsp; Logout

              </button>

            </div>


            {/* ================= SIDEBAR BOTTOM ================= */}

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


            {/* ================= TOP HEADER ================= */}

            <div
              className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center"
            >

              <div>

                <h5 className="fw-bold mb-1">

                  Customer Details

                </h5>

                <small className="text-muted">

                  Complete customer account information

                </small>

              </div>


              {/* ADMIN INFO */}

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


              {/* ================= PAGE HEADER ================= */}

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h2 className="fw-bold">

                    Customer Details

                  </h2>

                  <p className="text-muted mb-0">

                    Complete customer account information

                  </p>

                </div>


                <Link
                  to="/allcustomers"
                  className="btn btn-outline-primary"
                >

                  ← Back to Customers

                </Link>

              </div>



              {/* ================================================= */}
              {/* CUSTOMER CARD */}
              {/* ================================================= */}

              <div className="card border-0 shadow-sm">


                {/* ================= CARD HEADER ================= */}

                <div className="card-header bg-primary text-white p-4">

                  <div className="d-flex align-items-center">

                    <div
                      className="bg-white text-primary rounded-circle d-flex justify-content-center align-items-center me-3"
                      style={{
                        width: "55px",
                        height: "55px",
                        fontSize: "25px"
                      }}
                    >

                      👤

                    </div>


                    <div>

                      <h4 className="fw-bold mb-1">

                        Customer Account

                      </h4>

                      <small>

                        Account No: {customer.accno}

                      </small>

                    </div>

                  </div>

                </div>



                {/* ================= CARD BODY ================= */}

                <div className="card-body p-4">

                  <div className="row">


                    {/* ================= CUSTOMER ID ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Customer ID

                        </small>

                        <h5 className="fw-bold mt-2">

                          {customer.id}

                        </h5>

                      </div>

                    </div>



                    {/* ================= ACCOUNT NUMBER ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Account Number

                        </small>

                        <h5 className="fw-bold mt-2">

                          {customer.accno}

                        </h5>

                      </div>

                    </div>



                    {/* ================= DOB ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Date of Birth

                        </small>

                        <h5 className="fw-bold mt-2">

                          {customer.dob}

                        </h5>

                      </div>

                    </div>



                    {/* ================= CONTACT ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Contact Number

                        </small>

                        <h5 className="fw-bold mt-2">

                          {customer.contact}

                        </h5>

                      </div>

                    </div>



                    {/* ================= AGE ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Age

                        </small>

                        <h5 className="fw-bold mt-2">

                          {customer.age}

                        </h5>

                      </div>

                    </div>



                    {/* ================= GENDER ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Gender

                        </small>

                        <h5 className="fw-bold mt-2">

                          {customer.gender}

                        </h5>

                      </div>

                    </div>



                    {/* ================= ACCOUNT TYPE ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Account Type

                        </small>

                        <h5 className="fw-bold mt-2 text-primary">

                          {customer.accountType}

                        </h5>

                      </div>

                    </div>



                    {/* ================= BALANCE ================= */}

                    <div className="col-md-6 mb-4">

                      <div className="border rounded p-3 h-100">

                        <small className="text-muted">

                          Current Balance

                        </small>

                        <h5 className="fw-bold mt-2 text-success">

                          ₹ {customer.balance}

                        </h5>

                      </div>

                    </div>

                  </div>



                  <hr />



                  {/* ================= BUTTONS ================= */}

                  <div className="d-flex gap-2 flex-wrap">

                    <Link
                      to={"/update-customer/" + customer.id}
                      className="btn btn-warning"
                    >

                      ✏️ Update Customer

                    </Link>


                    <Link
                      to="/allcustomers"
                      className="btn btn-secondary"
                    >

                      ← Back

                    </Link>

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

export default CustomerDetails;