// File: src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "../styles/Home.css";
import { FaShoppingCart } from "react-icons/fa";

const categories = [
  "Fruits", "Vegetables", "Dairy", "Bakery", "Snacks", "Beverages", "Organic"
];

const promotions = [
  {
    title: "Under ₹99",
    img: "/images/mushroom_bng.jpeg"
  },
  {
    title: "Best Sellers",
    img: "/images/mush_bng.jpeg"
  },
];

const products = [
  {
    id: 1, name: "Button Mushroom", price: "49", img: "/images/mush_type-4.jpeg"
  },
  {
    id: 2, name: "Oyster Mushroom", price: "59", img: "/images/mush_type-2.jpeg"
  },
  {
    id: 3, name: "Shiitake Mushroom", price: "69", img: "/images/mush_type-3.jpeg"
  },
  {
    id: 4, name: "Enoki Mushroom", price: "79", img: "/images/mush_logo.jpeg"
  },
  {
    id: 5, name: "King Oyster", price: "89", img: "/images/mush_type-5.jpeg"
  },
  {
    id: 6, name: "Porcini", price: "99", img: "/images/mush_type-6.jpg"
  },
  {
    id: 7, name: "Morel Mushroom", price: "109", img: "/images/mush_type-7.jpg"
  },
  {
    id: 8, name: "Chanterelle", price: "119", img: "/images/mush_type-8.jpg"
  },
];

const Home = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(p => p.id !== id));
  };

  const toggleCart = () => {
    setShowCart(prev => !prev);
  };

  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);

  return (
    <>
      {/* Fixed Navbar with Cart Icon */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
        <div className="container-fluid justify-content-between">
          <span className="navbar-brand fw-bold">Mushroom Store</span>
          <div className="position-relative">
            <FaShoppingCart size={24} className="me-2 cursor-pointer" onClick={toggleCart} />
            {cart.length > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                {cart.length}
              </span>
            )}
            {/* Dropdown Cart */}
            {showCart && (
              <div className="position-absolute end-0 mt-2 p-3 bg-white shadow rounded border" style={{ minWidth: '250px', zIndex: 10 }}>
                <h6 className="mb-2">Cart Items:</h6>
                {cart.length === 0 ? (
                  <p className="text-muted">No items in cart.</p>
                ) : (
                  <ul className="list-group mb-2">
                    {cart.map((item, index) => (
                      <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name} - ₹{item.price}
                        <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item.id)}>x</button>
                      </li>
                    ))}
                  </ul>
                )}
                {cart.length > 0 && <p className="fw-bold">Total: ₹{totalPrice}</p>}
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="mt-5 pt-4">
        {/* Promotions Carousel */}
        <div id="promoCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
          <div className="carousel-inner rounded overflow-hidden" style={{ maxHeight: "250px" }}>
            {promotions.map((p, i) => (
              <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                <img
                  src={p.img}
                  className="d-block w-100"
                  alt={p.title}
                  style={{ height: "250px", objectFit: "cover", width: "100%" }}
                />
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#promoCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" />
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#promoCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" />
          </button>
        </div>

        {/* Categories */}
        <div className="d-flex overflow-auto pb-3 mb-4 category-bar">
          {categories.map((cat, i) => (
            <div key={i} className="text-center mx-3 animate__animated animate__fadeInUp">
              <div className="rounded-circle bg-light d-flex align-items-center justify-content-center shadow-sm" style={{ width: 60, height: 60 }}>
                <span className="text-muted fw-bold">{cat[0]}</span>
              </div>
              <small className="d-block mt-2 text-secondary">{cat}</small>
            </div>
          ))}
        </div>

        {/* Products */}
        <h5 className="mb-3">Fresh Mushrooms</h5>
        <div className="row">
          {products.map(p => (
            <div key={p.id} className="col-6 col-sm-4 col-md-3 mb-4">
              <div className="card h-100 shadow-lg animate__animated animate__fadeInUp">
                <img src={p.img} className="card-img-top" alt={p.name} style={{ height: 160, objectFit: "cover" }} />
                <div className="card-body d-flex flex-column text-center">
                  <h6 className="card-title fw-semibold">{p.name}</h6>
                  <p className="text-success fs-6 mb-2">₹{p.price}</p>
                  <button className="btn btn-sm btn-outline-success mt-auto" onClick={() => addToCart(p)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
