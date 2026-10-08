import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function Login() {

  const {register,handleSubmit,formState: { errors }} = useForm();

  let navigate = useNavigate();
  let onSubmit = async (data) => {
    try {
      console.log( data);
      let result = await axios.post("http://localhost:8080/login",data );

      console.log("LOGIN RESPONSE:", result.data);


      // Login successful
      if (result.data != null && result.data.id != null) {

        // Logged-in customer ID save
        localStorage.setItem(
          "customerId",
          result.data.id
        );

        // Optional: account number save
        localStorage.setItem(
          "accountNumber",
          result.data.accno
        );

        alert("Login Successful");

        navigate(
          "/customer-dashboard/" + result.data.id
        );

      } else {

        alert("Invalid Account Number or Password");

      }

    } catch (error) {

      console.log(error);

      alert("Invalid Account Number or Password");

    }

  };


  return (

    <div className="bg-light min-vh-100">

      <div className="container-fluid">

        <div className="row min-vh-100">

          {/* LEFT SIDE */}

          <div className="col-md-4 col-lg-3 bg-white border-end p-4">

            <div className="d-flex flex-column h-100">

              <div>

                <h2 className="fw-bold text-primary">
                  Welcome Back!
                </h2>

                <p className="text-secondary">
                  Access your account and manage your
                  banking activities easily.
                </p>

              </div>


              <div className="mt-4">

                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-primary-subtle text-primary rounded-circle
                    d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "42px",
                      height: "42px"
                    }}
                  >
                    💳
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Manage Account
                    </h6>

                    <small className="text-secondary">
                      Check your account details
                    </small>

                  </div>

                </div>


                <div className="d-flex align-items-center mb-4">

                  <div
                    className="bg-success-subtle text-success rounded-circle
                    d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "42px",
                      height: "42px"
                    }}
                  >
                    💰
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Easy Banking
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
                      width: "42px",
                      height: "42px"
                    }}
                  >
                    📊
                  </div>

                  <div>

                    <h6 className="fw-bold mb-1">
                      Track Transactions
                    </h6>

                    <small className="text-secondary">
                      View your transaction history
                    </small>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* RIGHT SIDE */}

          <div
            className="col-md-8 col-lg-9 d-flex
            align-items-center justify-content-center p-4"
          >

            <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5">

              <div className="card border-0 shadow rounded-4">

                <div className="card-body p-4 p-md-5">

                  <div className="text-center mb-4">

                    <div
                      className="bg-primary-subtle text-primary
                      rounded-circle d-inline-flex
                      align-items-center justify-content-center mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "28px"
                      }}
                    >
                      🔐
                    </div>

                    <h3 className="fw-bold text-primary">
                      Customer Login
                    </h3>

                    <p className="text-secondary">
                      Login to access your bank account
                    </p>

                  </div>


                  <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Account Number
                      </label>

                      <input
                        type="text"
                        className="form-control form-control-lg"
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


                    <div className="mb-4">

                      <label className="form-label fw-semibold">
                        Password
                      </label>

                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Enter Password"
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


                    <div className="d-grid">

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg rounded-3"
                      >
                        Login
                      </button>

                    </div>


                    <div className="text-center mt-4">

                      <span className="text-secondary">
                        Don't have an account?{" "}
                      </span>

                      <Link
                        to="/create-account"
                        className="text-primary fw-semibold text-decoration-none"
                      >
                        Create Account
                      </Link>

                    </div>


                    <div className="text-center mt-3">

                      <Link
                        to="/admin-login"
                        className="text-secondary text-decoration-none"
                      >
                        Admin Login
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
  );
}

export default Login;
