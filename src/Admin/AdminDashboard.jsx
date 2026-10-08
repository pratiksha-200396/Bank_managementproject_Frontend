import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function AdminDashboard() {

  // API data sathi useState
  let [customer, setCustomer] = useState(null);
  let [customers, setCustomers] = useState([]);

  let navigate = useNavigate();

  let {register,handleSubmit,reset} = useForm();

  useEffect(() => {
    let getCustomers = async () => {
      try {

        let result = await axios.get("http://localhost:8080/admin/getall");
        console.log(result.data);
        setCustomers(result.data);

      } catch (error) {
        console.log(error);
      }

    };

    getCustomers();}, []);

  let searchCustomer = async (data) => {

    try {
      let result = await axios.get("http://localhost:8080/admin/get/" + data.accno);
      console.log(result.data);
      setCustomer(result.data);
      // reset();

    } catch (error) {

      console.log(error);

      alert("Customer Not Found");

      setCustomer(null);

    }

  };

  let logout = () => {
    navigate("/admin-login");
  };


  return (

    <div
      className="container-fluid"
      style={{
        backgroundColor: "#f4f7fb",
        minHeight: "100vh",
        padding: "0"
      }}
    >

      <div className="row g-0">


        {/* =========================
            SIDEBAR
        ========================= */}

        <div
          className="col-md-3 col-lg-2"
          style={{
            backgroundColor: "#0b1f3a",
            minHeight: "100vh",
            color: "white",
            position: "relative"
          }}
        >

          {/* Sidebar Menu */}

          <div className="p-3">



            {/* Dashboard */}

            <Link
              to="/admin-dashboard"
              className="text-decoration-none text-white"
            >

              <div
                className="p-3 mb-2"
                style={{
                  backgroundColor: "#1769aa",
                  borderRadius: "10px"
                }}
              >

                🏠 &nbsp; Dashboard

              </div>

            </Link>


            {/* All Customers */}

            <Link
              to="/allcustomers"
              className="text-decoration-none text-white"
            >

              <div
                className="p-3 mb-2"
                style={{
                  borderRadius: "10px"
                }}
              >

                👥 &nbsp; All Customers

              </div>

            </Link>


            {/* Profile */}

            <Link
              to="/admin-profile"
              className="text-decoration-none text-white"
            >

              <div
                className="p-3 mb-2"
                style={{
                  borderRadius: "10px"
                }}
              >

                👤 &nbsp; Profile

              </div>

            </Link>


            {/* Logout */}

            <div
              className="p-3 mt-3"
              onClick={logout}
              style={{
                borderRadius: "10px",
                cursor: "pointer"
              }}
            >

              🚪 &nbsp; Logout

            </div>

          </div>


          {/* Bottom Text */}

          <div
            className="text-center small"
            style={{
              position: "absolute",
              bottom: "20px",
              width: "100%",
              opacity: "0.6"
            }}
          >

            © 2026 Bank Management

          </div>

        </div>



        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="col-md-9 col-lg-10">


          {/* =========================
              TOP HEADER
          ========================= */}

          <div
            className="bg-white px-4 py-3 shadow-sm d-flex justify-content-between align-items-center"
          >

            <div>

              <h4 className="fw-bold mb-1">
                Admin Dashboard
              </h4>

              <small className="text-muted">
                Welcome back, Admin 👋
              </small>

            </div>


            <div
              className="d-flex align-items-center"
            >

              <div
                className="text-end me-3"
              >

                <strong>
                  Admin
                </strong>

                <br />

                <small className="text-muted">
                  Administrator
                </small>

              </div>


              <div
                className="rounded-circle d-flex justify-content-center align-items-center"
                style={{
                  width: "45px",
                  height: "45px",
                  backgroundColor: "#1769aa",
                  color: "white",
                  fontSize: "20px"
                }}
              >

                👤

              </div>

            </div>

          </div>



          {/* =========================
              DASHBOARD CONTENT
          ========================= */}

          <div className="p-4">


            {/* Page Heading */}

            <div className="mb-4">

              <h3 className="fw-bold">
                Dashboard Overview
              </h3>

              <p className="text-muted">
                Manage customers and accounts from here.
              </p>

            </div>



            {/* =========================
                STAT CARDS
            ========================= */}

            <div className="row g-4 mb-4">


              {/* Total Customers */}

              <div className="col-md-6">

                <div
                  className="p-4 text-white shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg,#1769aa,#2196f3)",
                    borderRadius: "15px"
                  }}
                >

                  <div className="d-flex justify-content-between align-items-center">

                    <div>

                      <p className="mb-1">
                        Total Customers
                      </p>

                      <h2 className="fw-bold mb-0">
                        {customers.length}
                      </h2>

                    </div>


                    <div
                      style={{
                        fontSize: "40px"
                      }}
                    >
                      👥
                    </div>

                  </div>

                </div>

              </div>



              {/* Total Accounts */}

              <div className="col-md-6">

                <div
                  className="p-4 text-white shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg,#198754,#20c997)",
                    borderRadius: "15px"
                  }}
                >

                  <div className="d-flex justify-content-between align-items-center">

                    <div>

                      <p className="mb-1">
                        Total Accounts
                      </p>

                      <h2 className="fw-bold mb-0">
                        {customers.length}
                      </h2>

                    </div>


                    <div
                      style={{
                        fontSize: "40px"
                      }}
                    >
                      💳
                    </div>

                  </div>

                </div>

              </div>

            </div>



            {/* =========================
                SEARCH CUSTOMER
            ========================= */}

            <div
              className="card border-0 shadow-sm mb-4"
              style={{
                borderRadius: "15px"
              }}
            >

              <div className="card-body p-4">

                <h5 className="fw-bold mb-3">
                  🔍 Search Customer
                </h5>


                <form
                  onSubmit={handleSubmit(searchCustomer)}
                >

                  <div className="row g-3">


                    {/* Account Number */}

                    <div className="col-md-9">

                      <input
                        type="number"
                        className="form-control form-control-lg"
                        placeholder="Enter account number..."
                        {...register("accno", {
                          required: true
                        })}
                        style={{
                          borderRadius: "10px"
                        }}
                      />

                    </div>


                    {/* Search Button */}

                    <div className="col-md-3">

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                        style={{
                          borderRadius: "10px"
                        }}
                      >

                        🔍 Search Customer

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>



            {/* =========================
                SEARCH RESULT
            ========================= */}

            {customer && (

              <div
                className="card border-0 shadow-sm mb-4"
                style={{
                  borderRadius: "15px"
                }}
              >

                <div className="card-body p-4">

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <h5 className="fw-bold mb-0">
                      Customer Details
                    </h5>

                    <span className="badge bg-success">
                      Active
                    </span>

                  </div>


                  <div className="row g-3">


                    {/* Account Number */}

                    <div className="col-md-4">

                      <div className="bg-light p-3 rounded">

                        <small className="text-muted">
                          Account Number
                        </small>

                        <h6 className="fw-bold mb-0">
                          {customer.accno}
                        </h6>

                      </div>

                    </div>


                    {/* Contact */}

                    <div className="col-md-4">

                      <div className="bg-light p-3 rounded">

                        <small className="text-muted">
                          Contact
                        </small>

                        <h6 className="fw-bold mb-0">
                          {customer.contact}
                        </h6>

                      </div>

                    </div>


                    {/* Age */}

                    <div className="col-md-4">

                      <div className="bg-light p-3 rounded">

                        <small className="text-muted">
                          Age
                        </small>

                        <h6 className="fw-bold mb-0">
                          {customer.age}
                        </h6>

                      </div>

                    </div>


                    {/* Gender */}

                    <div className="col-md-4">

                      <div className="bg-light p-3 rounded">

                        <small className="text-muted">
                          Gender
                        </small>

                        <h6 className="fw-bold mb-0">
                          {customer.gender}
                        </h6>

                      </div>

                    </div>


                    {/* Balance */}

                    <div className="col-md-4">

                      <div className="bg-light p-3 rounded">

                        <small className="text-muted">
                          Balance
                        </small>

                        <h6 className="fw-bold mb-0 text-success">
                          ₹ {customer.balance}
                        </h6>

                      </div>

                    </div>


                  </div>


                  {/* View Full Details */}

                  <div className="mt-4">

                    <Link
                      to={`/customer-details/${customer.id}`}
                      className="btn btn-outline-primary"
                      style={{
                        borderRadius: "8px"
                      }}
                    >

                      View Full Details →

                    </Link>

                  </div>

                </div>

              </div>

            )}



            {/* =========================
                RECENT CUSTOMERS
            ========================= */}

            <div
              className="card border-0 shadow-sm"
              style={{
                borderRadius: "15px"
              }}
            >

              <div className="card-body p-4">


                {/* Heading */}

                <div
                  className="d-flex justify-content-between align-items-center mb-3"
                >

                  <div>

                    <h5 className="fw-bold mb-1">
                      Recent Customers
                    </h5>

                    <small className="text-muted">
                      Recently registered customers
                    </small>

                  </div>


                  <Link
                    to="/all-customers"
                    className="btn btn-sm btn-outline-primary"
                    style={{
                      borderRadius: "8px"
                    }}
                  >

                    View All →

                  </Link>

                </div>



                {/* Customer Table */}

                <div className="table-responsive">

                  <table className="table table-hover align-middle">

                    <thead
                      className="table-light"
                    >

                      <tr>

                        <th>
                          Account No
                        </th>

                        <th>
                          Contact
                        </th>

                        <th>
                          Age
                        </th>

                        <th>
                          Gender
                        </th>

                        <th>
                          Balance
                        </th>

                      </tr>

                    </thead>


                    <tbody>


                      {customers.length > 0 ? (

                        customers
                          .slice(0, 5)
                          .map((c) => (

                            <tr key={c.id}>

                              <td className="fw-semibold">

                                {c.accno}

                              </td>


                              <td>

                                {c.contact}

                              </td>


                              <td>

                                {c.age}

                              </td>


                              <td>

                                {c.gender}

                              </td>


                              <td className="fw-semibold text-success">

                                ₹ {c.balance}

                              </td>

                            </tr>

                          ))

                      ) : (

                        <tr>

                          <td
                            colSpan="5"
                            className="text-center text-muted py-4"
                          >

                            No customers found.

                          </td>

                        </tr>

                      )}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>


          </div>

        </div>

      </div>

    </div>

  );

}

export default AdminDashboard;