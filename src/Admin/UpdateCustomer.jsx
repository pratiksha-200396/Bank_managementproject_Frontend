
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateCustomer() {

  let { id } = useParams();

  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();


  // ================= GET CUSTOMER DETAILS =================

  useEffect(() => {

    axios
      .get("http://localhost:8080/admin/getdetails/" + id)
      .then((result) => {

        console.log(result.data);

        setValue("accno", result.data.accno);
        setValue("dob", result.data.dob);
        setValue("contact", result.data.contact);
        setValue("age", result.data.age);
        setValue("gender", result.data.gender);
        setValue("accountType", result.data.accountType);
        setValue("balance", result.data.balance);

      })
      .catch((error) => {

        console.log(error);

        alert("Customer Details Not Found");

      });

  }, [id, setValue]);


  // ================= UPDATE CUSTOMER =================

  let onSubmit = async (data) => {

    try {

      console.log(data);

      let result = await axios.put(
        "http://localhost:8080/admin/update/" + id,
        data
      );

      console.log(result.data);

      alert("Customer Details Updated Successfully");

      navigate("/customer-details/" + id);

    } catch (error) {

      console.log(error);

      alert("Customer Update Failed");

    }

  };


  // ================= LOGOUT =================

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

                  Update Customer

                </h5>

                <small className="text-muted">

                  Update customer account information

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

              {/* ================= HEADER ================= */}

              <div className="d-flex justify-content-between align-items-center mb-4">

                <div>

                  <h2 className="fw-bold">

                    Update Customer

                  </h2>

                  <p className="text-muted mb-0">

                    Update customer account information

                  </p>

                </div>


                <Link
                  to={"/customer-details/" + id}
                  className="btn btn-outline-primary"
                >

                  ← Back

                </Link>

              </div>



              {/* ================================================= */}
              {/* FORM CARD */}
              {/* ================================================= */}

              <div className="card border-0 shadow-sm">

                <div className="card-header bg-warning p-4">

                  <h4 className="fw-bold mb-1">

                    ✏️ Customer Information

                  </h4>

                  <small>

                    Update the required customer details

                  </small>

                </div>


                <div className="card-body p-4">

                  <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="row">


                      {/* ================= ACCOUNT NUMBER ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Account Number

                        </label>

                        <input
                          type="number"
                          className="form-control"
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



                      {/* ================= DOB ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Date of Birth

                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="DD-MM-YYYY"
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



                      {/* ================= CONTACT ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Contact Number

                        </label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter 10 digit contact number"
                          {...register("contact", {
                            required: "Contact number is required",
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



                      {/* ================= AGE ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Age

                        </label>

                        <input
                          type="number"
                          className="form-control"
                          {...register("age", {
                            required: "Age is required",
                            min: {
                              value: 18,
                              message: "Age must be at least 18"
                            }
                          })}
                        />

                        {errors.age && (

                          <small className="text-danger">

                            {errors.age.message}

                          </small>

                        )}

                      </div>



                      {/* ================= GENDER ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Gender

                        </label>

                        <select
                          className="form-select"
                          {...register("gender", {
                            required: "Gender is required"
                          })}
                        >

                          <option value="">

                            Select Gender

                          </option>

                          <option value="Male">

                            Male

                          </option>

                          <option value="Female">

                            Female

                          </option>

                          <option value="Other">

                            Other

                          </option>

                        </select>

                        {errors.gender && (

                          <small className="text-danger">

                            {errors.gender.message}

                          </small>

                        )}

                      </div>



                      {/* ================= ACCOUNT TYPE ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Account Type

                        </label>

                        <select
                          className="form-select"
                          {...register("accountType", {
                            required: "Account type is required"
                          })}
                        >

                          <option value="">

                            Select Account Type

                          </option>

                          <option value="saving">

                            Saving

                          </option>

                          <option value="current">

                            Current

                          </option>

                        </select>

                        {errors.accountType && (

                          <small className="text-danger">

                            {errors.accountType.message}

                          </small>

                        )}

                      </div>



                      {/* ================= BALANCE ================= */}

                      <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                          Balance

                        </label>

                        <input
                          type="number"
                          step="0.01"
                          className="form-control"
                          {...register("balance", {
                            required: "Balance is required",
                            min: {
                              value: 0,
                              message: "Balance cannot be negative"
                            }
                          })}
                        />

                        {errors.balance && (

                          <small className="text-danger">

                            {errors.balance.message}

                          </small>

                        )}

                      </div>

                    </div>



                    <hr className="my-4" />



                    {/* ================= BUTTONS ================= */}

                    <div className="d-flex gap-2">

                      <button
                        type="submit"
                        className="btn btn-warning px-4 fw-semibold"
                      >

                        ✏️ Update Customer

                      </button>


                      <Link
                        to={"/customer-details/" + id}
                        className="btn btn-secondary px-4"
                      >

                        Cancel

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

export default UpdateCustomer;