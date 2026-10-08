
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function CreateAccount() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate();

  let onSubmit = async (data) => {
    console.log(data);

    try {await axios.post("http://localhost:8080/save", data);

      alert("Account Created Successfully");
      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="bg-light min-vh-100">

      <div className="container-fluid">

        <div className="row min-vh-100">

          {/* ================= LEFT SIDEBAR ================= */}

          <div className="col-md-4 col-lg-3 bg-white border-end p-4">

            <div className="d-flex flex-column h-100">

              <div className="mt-4">

                <h2 className="fw-bold text-primary">
                  Open Your Account
                </h2>

                <p className="text-secondary">
                  Create your bank account and enjoy
                  secure and convenient banking.
                </p>

              </div>


              {/* Features */}

              <div className="mt-4">

                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-primary-subtle text-primary rounded-circle
                    d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px"
                    }}
                  >
                    🔐
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Secure Banking
                    </h6>

                    <small className="text-secondary">
                      Safe and secure account
                    </small>

                  </div>

                </div>


                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-success-subtle text-success rounded-circle
                    d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px"
                    }}
                  >
                    💰
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Easy Transactions
                    </h6>

                    <small className="text-secondary">
                      Deposit and withdraw easily
                    </small>

                  </div>

                </div>


                <div className="d-flex align-items-center">

                  <div
                    className="bg-warning-subtle text-warning rounded-circle
                    d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "45px",
                      height: "45px"
                    }}
                  >
                    📊
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Account Tracking
                    </h6>

                    <small className="text-secondary">
                      Monitor your account anytime
                    </small>

                  </div>

                </div>

              </div>


              {/* Bottom */}

              <div className="mt-auto">

                <hr />

                <small className="text-secondary">
                  Secure Online Banking
                </small>

              </div>

            </div>

          </div>


          {/* ================= RIGHT CONTENT ================= */}

          <div className="col-md-8 col-lg-9 p-4 p-lg-5">

            <div className="row justify-content-center">

              <div className="col-xl-10">

                <div className="card border-0 shadow-sm rounded-4">

                  <div className="card-body p-4 p-lg-5">


                    {/* Header */}

                    <div className="mb-4">

                      <h3 className="fw-bold text-primary">
                        Create Bank Account
                      </h3>

                      <p className="text-secondary">
                        Enter your details to create your account
                      </p>

                    </div>


                    <form onSubmit={handleSubmit(onSubmit)}>

                      <div className="row">


                        {/* Username */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Username
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Username"
                            {...register("username", {
                              required: "Username is required"
                            })}
                          />

                          {errors.username && (
                            <small className="text-danger">
                              {errors.username.message}
                            </small>
                          )}

                        </div>


                        {/* Profile Image */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Profile Image
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Image URL"
                            {...register("userimg", {
                              required: "Profile image is required"
                            })}
                          />

                          {errors.userimg && (
                            <small className="text-danger">
                              {errors.userimg.message}
                            </small>
                          )}

                        </div>


                        {/* Account Number */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Account Number
                          </label>

                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Account Number"
                            {...register("accno", {
                              required: "Account number is required"
                            })}
                          />

                          {errors.accno && (
                            <small className="text-danger">
                              {errors.accno.message}
                            </small>
                          )}

                        </div>


                        {/* DOB */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Date of Birth
                          </label>

                          <input
                            type="date"
                            className="form-control"
                            {...register("dob", {
                              required: "Date of birth is required"
                            })}
                          />

                          {errors.dob && (
                            <small className="text-danger">
                              {errors.dob.message}
                            </small>
                          )}

                        </div>


                        {/* Contact */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Contact
                          </label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Contact"
                            {...register("contact", {
                              required: "Contact is required",
                              pattern: {
                                value: /^[0-9]{10}$/,
                                message: "Contact must contain 10 digits"
                              }
                            })}
                          />

                          {errors.contact && (
                            <small className="text-danger">
                              {errors.contact.message}
                            </small>
                          )}

                        </div>


                        {/* Age */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Age
                          </label>

                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Age"
                            {...register("age", {
                              required: "Age is required"
                            })}
                          />

                          {errors.age && (
                            <small className="text-danger">
                              {errors.age.message}
                            </small>
                          )}

                        </div>


                        {/* Gender */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold d-block">
                            Gender
                          </label>

                          <div className="form-check form-check-inline">

                            <input
                              type="radio"
                              className="form-check-input"
                              value="Male"
                              {...register("gender", {
                                required: "Please select gender"
                              })}
                            />

                            <label className="form-check-label">
                              Male
                            </label>

                          </div>


                          <div className="form-check form-check-inline">

                            <input
                              type="radio"
                              className="form-check-input"
                              value="Female"
                              {...register("gender")}
                            />

                            <label className="form-check-label">
                              Female
                            </label>

                          </div>

                          {errors.gender && (
                            <div>
                              <small className="text-danger">
                                {errors.gender.message}
                              </small>
                            </div>
                          )}

                        </div>


                        {/* Account Type */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Account Type
                          </label>

                          <select
                            className="form-select"
                            {...register("accountType", {
                              required: "Please select account type"
                            })}
                          >

                            <option value="">
                              Select Account Type
                            </option>

                            <option value="Saving">
                              Saving
                            </option>

                            <option value="Current">
                              Current
                            </option>

                          </select>

                          {errors.accountType && (
                            <small className="text-danger">
                              {errors.accountType.message}
                            </small>
                          )}

                        </div>


                        {/* Password */}

                        <div className="col-md-6 mb-3">

                          <label className="form-label fw-semibold">
                            Password
                          </label>

                          <input
                            type="password"
                            className="form-control"
                            placeholder="Create Password"
                            {...register("password", {
                              required: "Password is required",
                              minLength: {
                                value: 6,
                                message: "Password must contain at least 6 characters"
                              }
                            })}
                          />

                          {errors.password && (
                            <small className="text-danger">
                              {errors.password.message}
                            </small>
                          )}

                        </div>


                        {/* Balance */}

                        <div className="col-md-6 mb-4">

                          <label className="form-label fw-semibold">
                            Initial Balance
                          </label>

                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Balance"
                            {...register("balance", {
                              required: "Balance is required"
                            })}
                          />

                          {errors.balance && (
                            <small className="text-danger">
                              {errors.balance.message}
                            </small>
                          )}

                        </div>

                      </div>


                      {/* Create Account */}

                      <div className="d-grid">

                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Create Account
                        </button>

                      </div>


                      {/* Login */}

                      <div className="text-center mt-4">

                        <span className="text-secondary">
                          Already have an account?{" "}
                        </span>

                        <Link
                          to="/login"
                          className="text-primary fw-semibold text-decoration-none"
                        >
                          Login
                        </Link>

                      </div>

                    </form>

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

export default CreateAccount;