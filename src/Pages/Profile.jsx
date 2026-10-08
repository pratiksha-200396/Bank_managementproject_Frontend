import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Profile() {

  let { id } = useParams();
  let navigate = useNavigate();

  let [account, setAccount] = useState({});

  useEffect(() => {

    let getProfile = async () => {

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
    getProfile();
  }, [id]);


  let logout = () => {
    alert("Logout Successful");
    navigate("/login");
  };


  return (

    <div className="bg-light min-vh-100">

      <div className="container-fluid">

        <div className="row">


          {/* ================= SIDEBAR ================= */}

          <div className="col-md-3 col-lg-2 bg-white border-end min-vh-100 p-3">

            <div className="d-grid gap-2">

              <Link
                to={"/customer-dashboard/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                🏠 &nbsp; Dashboard
              </Link>


              <Link
                to={"/transaction/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                💳 &nbsp; Transactions
              </Link>


              <Link
                to={"/profile/" + id}
                className="btn btn-primary text-start fw-semibold py-3 shadow-sm"
              >
                👤 &nbsp; My Profile
              </Link>


              <Link
                to={"/deposit/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                💰 &nbsp; Deposit
              </Link>


              <Link
                to={"/withdraw/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                💸 &nbsp; Withdraw
              </Link>

            </div>


            {/* LOGOUT */}

            <div className="mt-5 pt-5">

              <button
                onClick={logout}
                className="btn btn-outline-danger w-100 fw-semibold py-2"
              >
                🚪 &nbsp; Logout
              </button>

            </div>

          </div>


          {/* ================= MAIN CONTENT ================= */}

          <div className="col-md-9 col-lg-10">

            <div className="p-4">


              {/* ================= PROFILE BANNER ================= */}

              <div
                className="card border-0 shadow-sm rounded-4 mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #0d6efd, #084298)"
                }}
              >

                <div className="card-body p-4 text-white">

                  <div className="row align-items-center">


                    {/* PROFILE PHOTO */}

                    <div className="col-md-2 text-center mb-3 mb-md-0">

                      <img
                        src={
                          account.userimg ||
                          "https://via.placeholder.com/100"
                        }
                        alt={account.username || "Profile"}
                        width="100"
                        height="100"
                        className="rounded-circle border border-4 border-white shadow"
                        style={{
                          objectFit: "cover"
                        }}
                      />

                    </div>


                    {/* PROFILE NAME */}

                    <div className="col-md-7">

                      <small className="opacity-75">
                        ACCOUNT HOLDER
                      </small>

                      <h2 className="fw-bold mb-1">
                        {account.username || "-"} 👋
                      </h2>

                      <p className="mb-2 opacity-75">
                        Your banking profile is secure and active.
                      </p>

                      <span className="badge bg-white text-primary px-3 py-2">
                        ✓ Active Account
                      </span>

                    </div>


                    {/* ACCOUNT NUMBER */}

                    <div className="col-md-3 text-md-end mt-3 mt-md-0">

                      <small className="opacity-75">
                        ACCOUNT NUMBER
                      </small>

                      <h5 className="fw-bold mt-1">
                        {account.accno || "-"}
                      </h5>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================= ACCOUNT DETAILS ================= */}

              <div className="d-flex justify-content-between align-items-center mb-3">

                <div>

                  <h4 className="fw-bold mb-1">
                    Account Overview
                  </h4>

                  <p className="text-secondary mb-0">
                    Your current account information
                  </p>

                </div>

              </div>


              <div className="row g-4 mb-4">


                {/* ================= BALANCE CARD ================= */}

                <div className="col-lg-5">

                  <div
                    className="card border-0 shadow-sm rounded-4 h-100"
                    style={{
                      background:
                        "linear-gradient(135deg, #198754, #146c43)"
                    }}
                  >

                    <div className="card-body p-4 text-white">


                      <div className="d-flex justify-content-between align-items-center">

                        <div>

                          <p className="mb-1 opacity-75">
                            Available Balance
                          </p>

                          <h1 className="fw-bold mb-0">

                            ₹{" "}
                            {Number(
                              account.balance || 0
                            ).toLocaleString("en-IN")}

                          </h1>

                        </div>


                        <div
                          className="bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "55px",
                            height: "55px"
                          }}
                        >

                          <span className="fs-3">
                            ₹
                          </span>

                        </div>

                      </div>


                      <hr className="border-white opacity-50 my-4" />


                      <div className="row">


                        {/* ACCOUNT TYPE */}

                        <div className="col-6">

                          <small className="opacity-75">
                            ACCOUNT TYPE
                          </small>

                          <h6 className="fw-bold mt-1">
                            {account.accountType || "-"}
                          </h6>

                        </div>


                        {/* ACCOUNT NUMBER */}

                        <div className="col-6">

                          <small className="opacity-75">
                            ACCOUNT NO.
                          </small>

                          <h6 className="fw-bold mt-1">
                            **** {account.accno || "-"}
                          </h6>

                        </div>


                      </div>

                    </div>

                  </div>

                </div>


                {/* ================= QUICK INFO ================= */}

                <div className="col-lg-7">

                  <div className="card border-0 shadow-sm rounded-4 h-100">

                    <div className="card-body p-4">

                      <h5 className="fw-bold text-primary mb-4">
                        Account Information
                      </h5>


                      <div className="row g-4">


                        {/* CUSTOMER ID */}

                        <div className="col-sm-6">

                          <div className="d-flex align-items-center">

                            <div className="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                              👤
                            </div>

                            <div>

                              <small className="text-secondary">
                                Customer ID
                              </small>

                              <h6 className="fw-bold mb-0">
                                {account.id || "-"}
                              </h6>

                            </div>

                          </div>

                        </div>


                        {/* CONTACT */}

                        <div className="col-sm-6">

                          <div className="d-flex align-items-center">

                            <div className="bg-success bg-opacity-10 rounded-3 p-3 me-3">
                              📱
                            </div>

                            <div>

                              <small className="text-secondary">
                                Contact
                              </small>

                              <h6 className="fw-bold mb-0">
                                {account.contact || "-"}
                              </h6>

                            </div>

                          </div>

                        </div>


                        {/* DOB */}

                        <div className="col-sm-6">

                          <div className="d-flex align-items-center">

                            <div className="bg-warning bg-opacity-10 rounded-3 p-3 me-3">
                              🎂
                            </div>

                            <div>

                              <small className="text-secondary">
                                Date of Birth
                              </small>

                              <h6 className="fw-bold mb-0">
                                {account.dob || "-"}
                              </h6>

                            </div>

                          </div>

                        </div>


                        {/* GENDER */}

                        <div className="col-sm-6">

                          <div className="d-flex align-items-center">

                            <div className="bg-info bg-opacity-10 rounded-3 p-3 me-3">
                              👥
                            </div>

                            <div>

                              <small className="text-secondary">
                                Gender
                              </small>

                              <h6 className="fw-bold mb-0">
                                {account.gender || "-"}
                              </h6>

                            </div>

                          </div>

                        </div>


                      </div>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================= PERSONAL INFORMATION ================= */}

              <div className="card border-0 shadow-sm rounded-4">

                <div className="card-body p-4">


                  <div className="d-flex align-items-center mb-4">

                    <div className="bg-primary text-white rounded-3 p-2 me-3">
                      👤
                    </div>

                    <div>

                      <h5 className="fw-bold mb-0">
                        Personal Information
                      </h5>

                      <small className="text-secondary">
                        Registered customer details
                      </small>

                    </div>

                  </div>


                  <div className="row g-4">


                    {/* USERNAME */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Username
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.username || "-"}
                      </h6>

                    </div>


                    {/* CUSTOMER ID */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Customer ID
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.id || "-"}
                      </h6>

                    </div>


                    {/* ACCOUNT NUMBER */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Account Number
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.accno || "-"}
                      </h6>

                    </div>


                    {/* ACCOUNT TYPE */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Account Type
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.accountType || "-"}
                      </h6>

                    </div>


                    {/* DOB */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Date of Birth
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.dob || "-"}
                      </h6>

                    </div>


                    {/* AGE */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Age
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.age || "-"}
                      </h6>

                    </div>


                    {/* GENDER */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Gender
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.gender || "-"}
                      </h6>

                    </div>


                    {/* CONTACT */}

                    <div className="col-md-4">

                      <small className="text-secondary">
                        Contact Number
                      </small>

                      <h6 className="fw-bold mt-1">
                        {account.contact || "-"}
                      </h6>

                    </div>


                  </div>


                  {/* BUTTONS */}

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between flex-wrap gap-2">


                    <Link
                      to={"/customer-dashboard/" + id}
                      className="btn btn-primary px-4 rounded-3"
                    >
                      ← Dashboard
                    </Link>


                    <button
                      onClick={logout}
                      className="btn btn-outline-danger px-4 rounded-3"
                    >
                      Logout
                    </button>


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

export default Profile;