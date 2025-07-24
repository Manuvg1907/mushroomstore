import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);
  }, []);

  const updateCartStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updated = cart.filter(item => item.id !== id);
    updateCartStorage(updated);
  };

  const increaseQty = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateCartStorage(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map(item =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item
      )
      .filter(item => (item.quantity || 1) > 0);
    updateCartStorage(updated);
  };

  const total = cart.reduce(
    (acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="container py-5">
      <h3 className="mb-4 text-center text-success fw-bold">🛒 Your Cart</h3>
      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          Your cart is empty. <Link to="/products">Shop Now</Link>
        </div>
      ) : (
        <>
          <div className="table-responsive mb-4 shadow-sm">
            <table className="table align-middle table-bordered table-hover bg-white">
              <thead className="table-success">
                <tr>
                  <th>Product</th>
                  <th>Price (₹)</th>
                  <th>Quantity</th>
                  <th>Subtotal (₹)</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-sm btn-outline-danger me-2"
                          onClick={() => decreaseQty(item.id)}
                        >−</button>
                        <span>{item.quantity || 1}</span>
                        <button
                          className="btn btn-sm btn-outline-success ms-2"
                          onClick={() => increaseQty(item.id)}
                        >+</button>
                      </div>
                    </td>
                    <td>₹{(item.price * (item.quantity || 1)).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-between align-items-center border-top pt-3">
            <h4 className="text-success">Total: ₹{total.toFixed(2)}</h4>
            <Link to="/checkout" className="btn btn-success mt-3">Proceed to Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
