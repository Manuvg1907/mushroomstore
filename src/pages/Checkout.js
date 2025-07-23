// src/pages/Checkout.jsx
import React, { useState } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    pincode: "",
    discount: ""
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePayment = () => {
    alert("Proceeding to payment... Razorpay will be integrated here.");
    // You will integrate Razorpay or Stripe here
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold">Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <form className="card p-4 shadow">
            <h5 className="mb-3">Contact Information</h5>
            <input type="text" name="name" className="form-control mb-3" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" className="form-control mb-3" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="text" name="address" className="form-control mb-3" placeholder="Delivery Address" value={form.address} onChange={handleChange} required />
            <input type="text" name="pincode" className="form-control mb-3" placeholder="Pincode" value={form.pincode} onChange={handleChange} required />
            <input type="text" name="discount" className="form-control mb-3" placeholder="Discount Code (if any)" value={form.discount} onChange={handleChange} />
          </form>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <h5 className="mb-3">Order Summary</h5>
            <p>Items Total: ₹499.00</p>
            <p>Discount: ₹0</p>
            <hr />
            <h5>Grand Total: ₹499.00</h5>
            <button className="btn btn-success mt-3" onClick={handlePayment}>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
