
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Transaction() {

  let { id } = useParams();
  let navigate = useNavigate();

  let [transaction, setTransaction] = useState([]);
  let [account, setAccount] = useState(null);

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

  useEffect(() => {

    let getTransactions = async () => {

      try {
        let result = await axios.get(
          "http://localhost:8080/viewtransaction/" + id
        );

        console.log("Transactions:", result.data);

        setTransaction(result.data);

      } catch (error) {

        console.log(error);

      }

    };

    getTransactions();

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


            {/* MENU */}

            <div className="d-grid gap-2">


              {/* Dashboard */}

              <Link
                to={"/customer-dashboard/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                🏠 &nbsp; Dashboard
              </Link>


              {/* Transactions - ACTIVE */}

              <Link
                to={"/transaction/" + id}
                className="btn btn-primary text-start fw-semibold py-3 shadow-sm"
              >
                💳 &nbsp; Transactions
              </Link>


              {/* My Profile */}

              <Link
                to={"/profile/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                👤 &nbsp; My Profile
              </Link>


              {/* Deposit */}

              <Link
                to={"/deposit/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
              >
                💰 &nbsp; Deposit
              </Link>


              {/* Withdraw */}

              <Link
                to={"/withdraw/" + id}
                className="btn btn-light text-secondary text-start fw-semibold py-3"
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


              {/* ================= HEADER ================= */}

              <div className="bg-primary text-white rounded-4 shadow-sm p-3 text-center mb-4">

                <h4 className="fw-bold mb-0">
                  Transaction History
                </h4>

              </div>


              {/* ================= MAIN CARD ================= */}

              <div className="card border-0 shadow rounded-4">

                <div className="card-body p-3 p-md-4">


                  {/* TITLE */}

                  <div className="text-center mb-4">

                    <h3 className="fw-bold">
                      Transaction History
                    </h3>


                    {account && (

                      <p className="text-secondary mb-0">

                        Account Number:{" "}

                        <span className="fw-bold text-dark">
                          {account.accno}
                        </span>

                      </p>

                    )}

                  </div>


                  {/* ================= TABLE ================= */}

                  <div className="table-responsive">

                    <table className="table align-middle mb-0">


                      <thead>

                        <tr className="table-light">

                          <th className="py-3">
                            Date
                          </th>

                          <th className="py-3">
                            Type
                          </th>

                          <th className="py-3">
                            Amount (₹)
                          </th>

                          <th className="py-3">
                            Balance (₹)
                          </th>

                        </tr>

                      </thead>


                      <tbody>

                        {transaction.length > 0 ? (

                          transaction.map((item) => (

                            <tr key={item.tid}>


                              {/* DATE */}

                              <td className="py-3">
                                {item.traData}
                              </td>


                              {/* TYPE */}

                              <td className="py-3">

                                <span
                                  className={
                                    item.traType === "deposite"
                                      ? "text-success fw-semibold"
                                      : "text-danger fw-semibold"
                                  }
                                >

                                  {item.traType === "deposite"
                                    ? "Deposit"
                                    : "Withdraw"}

                                </span>

                              </td>


                              {/* AMOUNT */}

                              <td className="py-3">

                                <span
                                  className={
                                    item.traType === "deposite"
                                      ? "text-success fw-bold"
                                      : "text-danger fw-bold"
                                  }
                                >

                                  {item.traType === "deposite"
                                    ? "+ "
                                    : "- "}

                                  {Number(item.traAmount).toLocaleString(
                                    "en-IN",
                                    {
                                      minimumFractionDigits: 2
                                    }
                                  )}

                                </span>

                              </td>


                              {/* BALANCE */}

                              <td className="py-3">

                                <span className="fw-semibold text-dark">

                                  ₹{" "}

                                  {account
                                    ? Number(account.balance).toLocaleString(
                                        "en-IN",
                                        {
                                          minimumFractionDigits: 2
                                        }
                                      )
                                    : "0.00"}

                                </span>

                              </td>


                            </tr>

                          ))

                        ) : (

                          <tr>

                            <td
                              colSpan="4"
                              className="text-center text-secondary py-5"
                            >

                              No transactions found

                            </td>

                          </tr>

                        )}

                      </tbody>

                    </table>

                  </div>


                  {/* ================= BUTTONS ================= */}

                  <div className="d-flex justify-content-between align-items-center mt-4">


                    <Link
                      to={"/customer-dashboard/" + id}
                      className="btn btn-primary rounded-3"
                    >

                      ← Dashboard

                    </Link>


                    <button
                      onClick={logout}
                      className="btn btn-outline-danger rounded-3"
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


export default Transaction;