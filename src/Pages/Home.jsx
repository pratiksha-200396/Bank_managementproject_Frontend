import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-light min-vh-100">

      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container py-5">
          <div className="row align-items-center">

            <div className="col-lg-6">
              <span className="badge bg-white text-primary px-3 py-2 mb-3">
                Secure & Trusted Banking
              </span>

              <h1 className="display-4 fw-bold">
                Banking Made Simple,
                <br />
                Secure & Easy
              </h1>

              <p className="lead mt-4">
                Manage your money, transactions and account
                securely from anywhere, anytime.
              </p>

              <div className="mt-4">
                <Link
                  to="/create-account"
                  className="btn btn-light btn-lg me-3 px-4"
                >
                  Open Account
                </Link>

                <Link
                  to="/login"
                  className="btn btn-outline-light btn-lg px-4"
                >
                  Customer Login
                </Link>
              </div>
            </div>

            <div className="col-lg-6 text-center mt-5 mt-lg-0">
              <div className="bg-white text-dark rounded-4 shadow-lg p-4 mx-auto"
                style={{ maxWidth: "420px" }}>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0">My Account</h5>
                  <span className="badge bg-success">
                    Active
                  </span>
                </div>

                <p className="text-muted mb-1">
                  Available Balance
                </p>

                <h2 className="fw-bold text-primary">
                  ₹1,64,714.39
                </h2>

                <hr />

                <div className="row text-center">
                  <div className="col-4">
                    <div className="fs-3">💰</div>
                    <small className="text-muted">Deposit</small>
                  </div>

                  <div className="col-4">
                    <div className="fs-3">💸</div>
                    <small className="text-muted">Withdraw</small>
                  </div>

                  <div className="col-4">
                    <div className="fs-3">📊</div>
                    <small className="text-muted">Transactions</small>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Features */}
      <section className="py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Everything You Need in One Place
            </h2>

            <p className="text-muted">
              Simple, secure and convenient banking services
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "55px", height: "55px" }}>
                    🔐
                  </div>

                  <h5 className="fw-bold">
                    Secure Banking
                  </h5>

                  <p className="text-muted">
                    Your account and transaction information
                    is protected with secure banking technology.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "55px", height: "55px" }}>
                    💳
                  </div>

                  <h5 className="fw-bold">
                    Easy Transactions
                  </h5>

                  <p className="text-muted">
                    Deposit, withdraw and check your transaction
                    history easily from your dashboard.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100">
                <div className="card-body p-4">
                  <div className="bg-warning text-dark rounded-circle d-flex align-items-center justify-content-center mb-3"
                    style={{ width: "55px", height: "55px" }}>
                    📱
                  </div>

                  <h5 className="fw-bold">
                    Anytime Access
                  </h5>

                  <p className="text-muted">
                    Access your banking services anytime
                    from your computer or mobile device.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Banking Services */}
      <section className="bg-white py-5">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Our Banking Services
            </h2>

            <p className="text-muted">
              Manage your finances with ease
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">🏦</div>
                  <h6 className="fw-bold">Savings Account</h6>
                  <p className="small text-muted">
                    Safe and convenient savings.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">💰</div>
                  <h6 className="fw-bold">Deposit Money</h6>
                  <p className="small text-muted">
                    Add money to your account easily.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">💸</div>
                  <h6 className="fw-bold">Withdraw Money</h6>
                  <p className="small text-muted">
                    Withdraw money whenever you need.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow-sm text-center h-100">
                <div className="card-body p-4">
                  <div className="fs-1 mb-3">📈</div>
                  <h6 className="fw-bold">Transaction History</h6>
                  <p className="small text-muted">
                    Track all your transactions.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-5">
        <div className="container">
          <div className="bg-dark text-white rounded-4 p-5 text-center">

            <h2 className="fw-bold">
              Ready to Start Banking?
            </h2>

            <p className="text-white-50">
              Create your account today and experience
              simple and secure digital banking.
            </p>

            <Link
              to="/create-account"
              className="btn btn-primary btn-lg px-5 mt-3"
            >
              Create Account
            </Link>

          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;