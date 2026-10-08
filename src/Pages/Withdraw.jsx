
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

function Withdraw() {

  let { id } = useParams();
  let navigate = useNavigate();

  const {register,handleSubmit,setValue,formState: { errors }} = useForm();

  let [selectedAmount, setSelectedAmount] = useState("");

  let onSubmit = async (data) => {

    try {

      await axios.put(
        "http://localhost:8080/withdraw/" + id + "/" + data.amount
      );

      alert("Money Withdrawn Successfully");

      navigate("/profile/" + id);

    } catch (error) {

      console.log(error);

    }

  };

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


              {/* DASHBOARD */}

              <Link
                to={"/customer-dashboard/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                🏠 &nbsp; Dashboard
              </Link>


              {/* TRANSACTIONS */}

              <Link
                to={"/transaction/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                💳 &nbsp; Transactions
              </Link>


              {/* PROFILE */}

              <Link
                to={"/profile/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                👤 &nbsp; My Profile
              </Link>


              {/* DEPOSIT */}

              <Link
                to={"/deposit/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                💰 &nbsp; Deposit
              </Link>


              {/* WITHDRAW ACTIVE */}

              <Link
                to={"/withdraw/" + id}
                className="btn btn-primary text-start fw-semibold py-3 shadow-sm"
              >
                💸 &nbsp; Withdraw
              </Link>


            </div>


            {/* ================= LOGOUT ================= */}

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


              {/* PAGE TITLE */}

              <div className="mb-4">

                <h2 className="fw-bold mb-1">
                  Withdraw Funds
                </h2>

                <p className="text-secondary mb-0">
                  Enter the amount you want to withdraw from your account.
                </p>

              </div>


              {/* ================= WITHDRAW CARD ================= */}

              <div className="row justify-content-center">

                <div className="col-xl-8 col-lg-9 col-md-10">

                  <div className="card border-0 shadow-sm rounded-4 overflow-hidden">


                    {/* CARD HEADER */}

                    <div className="bg-primary text-white p-4">

                      <div className="d-flex align-items-center">

                        <div
                          className="bg-white text-primary rounded-3 d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "55px",
                            height: "55px",
                            fontSize: "26px"
                          }}
                        >
                          💸
                        </div>

                        <div>

                          <h4 className="fw-bold mb-1">
                            Withdraw Money
                          </h4>

                          <small className="opacity-75">
                            Secure and easy withdrawal
                          </small>

                        </div>

                      </div>

                    </div>


                    {/* CARD BODY */}

                    <div className="card-body p-4 p-lg-5">


                      {/* SECURITY MESSAGE */}

                      <div className="bg-light border rounded-3 p-3 mb-4">

                        <div className="d-flex align-items-center">

                          <div className="fs-4 me-3">
                            🔐
                          </div>

                          <div>

                            <h6 className="fw-bold mb-1">
                              Secure Transaction
                            </h6>

                            <small className="text-secondary">
                              Your withdrawal will be processed securely
                              from your bank account.
                            </small>

                          </div>

                        </div>

                      </div>


                      {/* FORM */}

                      <form onSubmit={handleSubmit(onSubmit)}>


                        {/* AMOUNT */}

                        <div className="mb-4">

                          <label className="form-label fw-bold">
                            Withdrawal Amount
                          </label>

                          <div className="input-group input-group-lg">

                            <span className="input-group-text bg-light border-end-0">
                              ₹
                            </span>

                            <input
                              type="number"
                              className={
                                "form-control bg-light border-start-0 " +
                                (errors.amount ? "is-invalid" : "")
                              }
                              placeholder="Enter amount"
                              {...register("amount", {

                                required:
                                  "Please enter withdrawal amount",

                                min: {
                                  value: 1,
                                  message:
                                    "Amount must be greater than ₹0"
                                },

                                max: {
                                  value: 1000000,
                                  message:
                                    "Maximum withdrawal is ₹10,00,000"
                                }

                              })}
                              onChange={(e) => {

                                setSelectedAmount(
                                  Number(e.target.value)
                                );

                              }}
                            />

                          </div>


                          {errors.amount && (

                            <small className="text-danger mt-1 d-block">
                              {errors.amount.message}
                            </small>

                          )}

                        </div>


                        {/* QUICK SELECT */}

                        <div className="mb-4">

                          <label className="form-label fw-bold">
                            Quick Select
                          </label>

                          <div className="row g-2">

                            {[500, 1000, 2000, 5000].map((amount) => (

                              <div
                                className="col-6 col-md-3"
                                key={amount}
                              >

                                <button
                                  type="button"
                                  onClick={() =>
                                    quickAmount(amount)
                                  }
                                  className={
                                    "btn w-100 py-2 rounded-3 " +
                                    (
                                      selectedAmount === amount
                                        ? "btn-primary"
                                        : "btn-outline-primary"
                                    )
                                  }
                                >

                                  ₹{amount}

                                </button>

                              </div>

                            ))}

                          </div>

                        </div>


                        {/* INFORMATION */}

                        <div className="alert alert-warning border-0 rounded-3 mb-4">

                          <div className="d-flex">

                            <span className="me-2">
                              ℹ️
                            </span>

                            <small>
                              Please make sure you have sufficient
                              balance before making the withdrawal.
                            </small>

                          </div>

                        </div>


                        {/* BUTTONS */}

                        <div className="row g-3">

                          <div className="col-md-7">

                            <button
                              type="submit"
                              className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold"
                            >
                              💸 &nbsp; Withdraw Money
                            </button>

                          </div>


                          <div className="col-md-5">

                            <Link
                              to={"/customer-dashboard/" + id}
                              className="btn btn-light border btn-lg w-100 rounded-3 fw-semibold"
                            >
                              Cancel
                            </Link>

                          </div>

                        </div>


                      </form>

                    </div>

                  </div>


                  {/* FOOTER */}

                  <div className="text-center mt-4">

                    <small className="text-secondary">
                      🔒 Your transaction is protected by secure
                      banking protocols.
                    </small>

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

export default Withdraw;