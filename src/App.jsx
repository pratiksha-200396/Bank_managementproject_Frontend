import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Customer Pages
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";
import CustomerDashboard from "./Pages/CustomerDashboard";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Transaction from "./Pages/Transaction";
import Profile from "./Pages/Profile";

// Admin Pages
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDashboard";
import CustomerDetails from "./Admin/CustomerDetails";
import UpdateCustomer from "./Admin/UpdateCustomer";
import Home from "./Pages/Home";
import AllCustomers from "./Admin/AllCustomers";
import AdminProfile from "./Admin/AdminProfile";


function App() {

  return (

    <BrowserRouter>

      {/* Common Header */}

      <Header
       />
       
      <Routes>

        {/* ================= CUSTOMER MODULE ================= */}

        {/* Customer Dashboard */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/customer-dashboard"
          element={<CustomerDashboard />}
        />


        {/* Create Account */}

        <Route
          path="/create-account"
          element={<CreateAccount />}
        />


        {/* Customer Login */}

        <Route
          path="/login"
          element={<Login />}
        />


        {/* Customer Dashboard */}

        <Route
          path="/customer-dashboard/:id"
          element={<CustomerDashboard />}
        />


        {/* Customer Profile */}

        <Route
          path="/profile/:id"
          element={<Profile />}
        />


        {/* Deposit */}

        <Route
          path="/deposit/:id"
          element={<Deposit />}
        />


        {/* Withdraw */}

        <Route
          path="/withdraw/:id"
          element={<Withdraw />}
        />


        {/* Transaction History */}

        <Route
          path="/transaction/:id"
          element={<Transaction />}
        />



        {/* ================= ADMIN MODULE ================= */}

        {/* Admin Login */}

        <Route
          path="/admin-login"
          element={<AdminLogin/>}
        />


        <Route
          path="/allcustomers"
          element={<AllCustomers/>}
        />

        <Route
  path="/admin-profile"
  element={<AdminProfile/>}
/>


        {/* Admin Dashboard */}

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />


        {/* Customer Details */}

        <Route
          path="/customer-details/:id"
          element={<CustomerDetails />}
        />


        {/* Update Customer */}

        <Route
          path="/update-customer/:id"
          element={<UpdateCustomer />}
        />


      </Routes>


      {/* Common Footer */}

      <Footer />

    </BrowserRouter>

  );

}

export default App;