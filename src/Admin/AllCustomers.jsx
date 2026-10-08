
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function AllCustomers() {

  let [customers, setCustomers] = useState([]);

  let { register, handleSubmit, reset } = useForm();

  let navigate = useNavigate();


  // ================= GET ALL CUSTOMERS =================

  let getCustomers = async () => {

    try {

      let result = await axios.get(
        "http://localhost:8080/admin/getall"
      );

      console.log(result.data);

      setCustomers(result.data);

    } catch (error) {

      console.log(error);

      alert("Unable to fetch customers");

    }

  };


  useEffect(() => {

    getCustomers();

  }, []);


  // ================= LOGOUT =================

  let logout = () => {

    navigate("/admin-login");

  };


  // ================= DELETE CUSTOMER =================

  // Delete backend API available असेल तर हा function uncomment कर

  /*
  let deleteCustomer = async (data) => {

    try {

      await axios.delete(
        "http://localhost:8080/admin/delete/" + data.id
      );

      alert("Customer deleted successfully");

      reset();

      getCustomers();

    } catch (error) {

      console.log(error);

      alert("Unable to delete customer");

    }

  };
  */


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

                  All Customers

                </h5>

                <small className="text-muted">

                  View and manage all customer accounts

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

                  <h3 className="fw-bold mb-1">

                    Customer Accounts

                  </h3>

                  <p className="text-muted mb-0">

                    View and manage all customer accounts

                  </p>

                </div>

              </div>



              {/* ================================================= */}
              {/* CUSTOMER CARD */}
              {/* ================================================= */}

              <div className="card border-0 shadow-sm">

                <div className="card-body p-4">


                  <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                      <h5 className="fw-bold mb-1">

                        Customer Accounts

                      </h5>

                      <small className="text-muted">

                        Complete customer information

                      </small>

                    </div>


                    <span className="badge bg-primary px-3 py-2">

                      {customers.length} Customers

                    </span>

                  </div>



                  {/* ================= TABLE ================= */}

                  <div className="table-responsive">

                    <table className="table table-hover align-middle">

                      <thead className="table-light">

                        <tr>

                          <th>ID</th>

                          <th>Account No.</th>

                          <th>DOB</th>

                          <th>Contact</th>

                          <th>Age</th>

                          <th>Gender</th>

                          <th>Account Type</th>

                          <th>Balance</th>

                          <th>Action</th>

                        </tr>

                      </thead>


                      <tbody>

                        {customers.length > 0 ? (

                          customers.map((customer) => (

                            <tr key={customer.id}>

                              <td className="fw-semibold">

                                {customer.id}

                              </td>


                              <td className="fw-semibold text-primary">

                                {customer.accno}

                              </td>


                              <td>

                                {customer.dob}

                              </td>


                              <td>

                                {customer.contact}

                              </td>


                              <td>

                                {customer.age}

                              </td>


                              <td>

                                {customer.gender}

                              </td>


                              <td>

                                <span className="badge bg-secondary">

                                  {customer.accountType}

                                </span>

                              </td>


                              <td className="fw-bold text-success">

                                ₹ {customer.balance}

                              </td>


                              <td>

                                <div className="d-flex gap-2">

                                  {/* VIEW */}

                                  <Link
                                    to={
                                      "/customer-details/" +
                                      customer.id
                                    }
                                    className="btn btn-sm btn-outline-primary"
                                  >

                                    View

                                  </Link>


                                  {/* DELETE */}

                                  <form
                                    onSubmit={handleSubmit(() =>
                                      deleteCustomer({
                                        id: customer.id
                                      })
                                    )}
                                  >

                                    <input
                                      type="hidden"
                                      value={customer.id}
                                      {...register("id")}
                                    />


                                    <button
                                      type="submit"
                                      className="btn btn-sm btn-outline-danger"
                                    >

                                      Delete

                                    </button>

                                  </form>

                                </div>

                              </td>

                            </tr>

                          ))

                        ) : (

                          <tr>

                            <td
                              colSpan="9"
                              className="text-center text-muted py-5"
                            >

                              No customers found

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

    </div>

  );

}

export default AllCustomers;