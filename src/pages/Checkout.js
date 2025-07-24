import React, { useState, useEffect } from "react";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    pincode: "",
    discount: ""
  });

  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cleanedCart = storedCart.map(item => ({
      ...item,
      price: Number(item.price),
      quantity: item.quantity || 1,
    }));
    setCartItems(cleanedCart);

    const calculatedTotal = cleanedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () => {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      alert("Failed to load Razorpay SDK. Please check your connection.");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay test/live key
      amount: total * 100,
      currency: "INR",
      name: "Mushroom Store",
      description: "Test Transaction",
      image: "https://cdn-icons-png.flaticon.com/512/235/235861.png",
      handler: function (response) {
        alert("Payment successful!");
        console.log("Razorpay Payment ID:", response.razorpay_payment_id);
        localStorage.removeItem("cart");
        setCartItems([]);
        setTotal(0);
      },
      prefill: {
        name: form.name,
        email: form.email,
        contact: "",
      },
      notes: {
        address: form.address
      },
      theme: {
        color: "#28a745"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center text-success animate__animated animate__fadeInDown">Checkout</h2>
      <div className="row">
        {/* Contact Form */}
        <div className="col-md-6 mb-4">
          <form className="card p-4 shadow-sm border-0 animate__animated animate__fadeInLeft">
            <h5 className="mb-3">Contact Information</h5>
            <input type="text" name="name" className="form-control mb-3" placeholder="Full Name" value={form.name} onChange={handleChange} required />
            <input type="email" name="email" className="form-control mb-3" placeholder="Email" value={form.email} onChange={handleChange} required />
            <input type="text" name="address" className="form-control mb-3" placeholder="Delivery Address" value={form.address} onChange={handleChange} required />
            <input type="text" name="pincode" className="form-control mb-3" placeholder="Pincode" value={form.pincode} onChange={handleChange} required />
            <input type="text" name="discount" className="form-control mb-3" placeholder="Discount Code (if any)" value={form.discount} onChange={handleChange} />
          </form>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0 animate__animated animate__fadeInRight">
            <h5 className="mb-3">Order Summary</h5>
            <ul className="list-group mb-3">
              {cartItems.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong> × {item.quantity}
                  </div>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="mb-1">Items Total: ₹{total.toFixed(2)}</p>
            <p className="mb-1 text-danger">Discount: ₹0</p>
            <hr />
            <h5 className="text-dark">Grand Total: ₹{total.toFixed(2)}</h5>
            <button className="btn btn-success mt-3 w-100" onClick={handlePayment}>
              Pay Now with Razorpay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
