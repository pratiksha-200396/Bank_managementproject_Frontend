
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CustomerDashboard() {

  let navigate = useNavigate();
  let { id } = useParams();

  let [account, setAccount] = useState({});


  // ================= GET ACCOUNT =================

  useEffect(() => {

    let getAccount = async () => {

      try {

        let result = await axios.get(
          "http://localhost:8080/viewpage/" + id
        );

        console.log(result.data);

        setAccount(result.data);

      } catch (error) {

        console.log(error);

      }

    };

    getAccount();

  }, [id]);


  // ================= LOGOUT =================

  let logout = () => {

    localStorage.removeItem("customerId");

    alert("Logout Successful");

    navigate("/login");

  };


  return (

    <div
      className="min-vh-100"
      style={{
        backgroundColor: "#f5f7fb"
      }}
    >

      <div className="container-fluid">

        <div className="row">


          {/* ================================================= */}
          {/* SIDEBAR */}
          {/* ================================================= */}

          <div
            className="col-md-3 col-lg-2 p-0"
            style={{
              minHeight: "100vh"
            }}
          >

            <div
              className="bg-white border-end shadow-sm p-3"
              style={{
                height: "100vh",
                position: "sticky",
                top: "0"
              }}
            >

              <div className="d-grid gap-2">


                {/* ================= DASHBOARD ================= */}

                <Link
                  to={"/customer-dashboard/" + id}
                  className="btn btn-primary text-start fw-semibold py-3 shadow-sm"
                >

                  🏠 &nbsp; Dashboard

                </Link>


                {/* ================= TRANSACTIONS ================= */}

                <Link
                  to={"/transaction/" + id}
                  className="btn btn-light text-secondary text-start fw-semibold py-3"
                >

                  💳 &nbsp; Transactions

                </Link>


                {/* ================= PROFILE ================= */}

                <Link
                  to={"/profile/" + id}
                  className="btn btn-light text-secondary text-start fw-semibold py-3"
                >

                  👤 &nbsp; My Profile

                </Link>


                {/* ================= DEPOSIT ================= */}

                <Link
                  to={"/deposit/" + id}
                  className="btn btn-light text-secondary text-start fw-semibold py-3"
                >

                  💰 &nbsp; Deposit

                </Link>


                {/* ================= WITHDRAW ================= */}

                <Link
                  to={"/withdraw/" + id}
                  className="btn btn-light text-secondary text-start fw-semibold py-3"
                >

                  💸 &nbsp; Withdraw

                </Link>

              </div>


              {/* ================= LOGOUT ================= */}

              <div
                style={{
                  position: "absolute",
                  bottom: "25px",
                  left: "20px",
                  right: "20px"
                }}
              >

                <button
                  onClick={logout}
                  className="btn btn-outline-danger w-100 fw-semibold py-2"
                >

                  🚪 &nbsp; Logout

                </button>

              </div>

            </div>

          </div>



          {/* ================================================= */}
          {/* MAIN CONTENT */}
          {/* ================================================= */}

          <div className="col-md-9 col-lg-10">

            <div className="p-4">


              {/* ================= WELCOME ================= */}

              <div className="mb-4">

                <h3 className="fw-bold text-dark">

                  Welcome, {account.username || "Customer"} 👋

                </h3>

                <p className="text-secondary mb-0">

                  Manage your bank account easily and securely.

                </p>

              </div>



              {/* ================================================= */}
              {/* ACCOUNT CARD */}
              {/* ================================================= */}

              <div
                className="card border-0 shadow rounded-4 text-white mb-5"
                style={{
                  background:
                    "linear-gradient(135deg, #0d6efd, #084298)"
                }}
              >

                <div className="card-body p-4 p-md-5">


                  <div className="row align-items-center">


                    {/* PROFILE IMAGE */}

                    <div className="col-md-2 text-center mb-4 mb-md-0">

                      <img
                        src={
                          account.userimg ||
                          "https://via.placeholder.com/110"
                        }
                        alt={account.username || "Profile"}
                        width="110"
                        height="110"
                        className="rounded-circle border border-4 border-white shadow"
                        style={{
                          objectFit: "cover"
                        }}
                      />

                    </div>



                    {/* USERNAME */}

                    <div className="col-md-6">

                      <small className="text-white-50">

                        ACCOUNT HOLDER

                      </small>

                      <h2 className="fw-bold mt-1 mb-2">

                        {account.username || "-"}

                      </h2>

                      <span className="badge bg-success px-3 py-2">

                        ✓ Active Account

                      </span>

                    </div>



                    {/* BALANCE */}

                    <div className="col-md-4 text-md-end mt-4 mt-md-0">

                      <small className="text-white-50">

                        AVAILABLE BALANCE

                      </small>

                      <h1 className="fw-bold mt-1 mb-0">

                        ₹{" "}

                        {Number(
                          account.balance || 0
                        ).toLocaleString("en-IN")}

                      </h1>

                    </div>

                  </div>



                  <hr className="my-4 border-white opacity-50" />



                  {/* ACCOUNT DETAILS */}

                  <div className="row g-4">


                    <div className="col-md-3">

                      <small className="text-white-50 d-block">

                        ACCOUNT NUMBER

                      </small>

                      <h5 className="fw-bold mt-2 mb-0">

                        {account.accno || "-"}

                      </h5>

                    </div>


                    <div className="col-md-3">

                      <small className="text-white-50 d-block">

                        ACCOUNT TYPE

                      </small>

                      <h5 className="fw-bold mt-2 mb-0">

                        {account.accountType || "-"}

                      </h5>

                    </div>


                    <div className="col-md-3">

                      <small className="text-white-50 d-block">

                        CONTACT

                      </small>

                      <h5 className="fw-bold mt-2 mb-0">

                        {account.contact || "-"}

                      </h5>

                    </div>


                    <div className="col-md-3">

                      <small className="text-white-50 d-block">

                        CUSTOMER ID

                      </small>

                      <h5 className="fw-bold mt-2 mb-0">

                        {account.id || "-"}

                      </h5>

                    </div>

                  </div>

                </div>

              </div>



              {/* ================================================= */}
              {/* QUICK ACTIONS */}
              {/* ================================================= */}

              <h3 className="fw-bold text-primary mt-4 mb-3">

                Quick Actions

              </h3>


              <div className="row g-3">


                {/* DEPOSIT */}

                <div className="col-md-6 col-xl-3">

                  <Link
                    to={"/deposit/" + id}
                    className="text-decoration-none"
                  >

                    <div className="card border-0 shadow-sm h-100">

                      <div className="card-body">

                        <div className="bg-success-subtle text-success rounded-circle d-inline-flex p-3 mb-3">

                          💰

                        </div>

                        <h5 className="fw-bold text-dark">

                          Deposit Money

                        </h5>

                        <p className="text-secondary small">

                          Add money to your bank account.

                        </p>

                        <span className="text-success fw-semibold">

                          Deposit →

                        </span>

                      </div>

                    </div>

                  </Link>

                </div>



                {/* WITHDRAW */}

                <div className="col-md-6 col-xl-3">

                  <Link
                    to={"/withdraw/" + id}
                    className="text-decoration-none"
                  >

                    <div className="card border-0 shadow-sm h-100">

                      <div className="card-body">

                        <div className="bg-warning-subtle text-warning rounded-circle d-inline-flex p-3 mb-3">

                          💸

                        </div>

                        <h5 className="fw-bold text-dark">

                          Withdraw Money

                        </h5>

                        <p className="text-secondary small">

                          Withdraw money from your account.

                        </p>

                        <span className="text-warning fw-semibold">

                          Withdraw →

                        </span>

                      </div>

                    </div>

                  </Link>

                </div>



                {/* TRANSACTIONS */}

                <div className="col-md-6 col-xl-3">

                  <Link
                    to={"/transaction/" + id}
                    className="text-decoration-none"
                  >

                    <div className="card border-0 shadow-sm h-100">

                      <div className="card-body">

                        <div className="bg-info-subtle text-info rounded-circle d-inline-flex p-3 mb-3">

                          📋

                        </div>

                        <h5 className="fw-bold text-dark">

                          Transactions

                        </h5>

                        <p className="text-secondary small">

                          View your transaction history.

                        </p>

                        <span className="text-info fw-semibold">

                          View All →

                        </span>

                      </div>

                    </div>

                  </Link>

                </div>



                {/* PROFILE */}

                <div className="col-md-6 col-xl-3">

                  <Link
                    to={"/profile/" + id}
                    className="text-decoration-none"
                  >

                    <div className="card border-0 shadow-sm h-100">

                      <div className="card-body">

                        <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex p-3 mb-3">

                          👤

                        </div>

                        <h5 className="fw-bold text-dark">

                          My Profile

                        </h5>

                        <p className="text-secondary small">

                          View your account details.

                        </p>

                        <span className="text-primary fw-semibold">

                          View Profile →

                        </span>

                      </div>

                    </div>

                  </Link>

                </div>


              </div>


            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default CustomerDashboard;