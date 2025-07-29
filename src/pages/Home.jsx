import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "../styles/Home.css";

const promotions = [
  { title: "Under ₹99", img: "/images/mushroom_bng.jpeg" },
  { title: "Best Sellers", img: "/images/mush_bng.jpeg" },
];

const products = [
  { id: 1, name: "Button Mushroom", price: 49, img: "/images/mush_type-4.jpeg", rating: 4.5 },
  { id: 2, name: "Oyster Mushroom", price: 59, img: "/images/mush_type-2.jpeg", rating: 4.8 },
  { id: 3, name: "Shiitake Mushroom", price: 69, img: "/images/mush_type-3.jpeg", rating: 4.6 },
  { id: 4, name: "Enoki Mushroom", price: 79, img: "/images/mush_logo.jpeg", rating: 4.7 },
];

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    const badge = document.getElementById("cart-count");
    if (badge) {
      const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
      badge.textContent = totalQty;
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id);
      if (exists) {
        return prev.map(p => p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p);
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQty = (id) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, quantity: p.quantity + 1 } : p));
  };

  const decreaseQty = (id) => {
    setCart(prev => {
      const updated = prev.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p);
      return updated.filter(p => p.quantity > 0);
    });
  };

  const getQty = (id) => cart.find(p => p.id === id)?.quantity || 0;

  return (
    <div className="mt-5 pt-4" style={{ background: "linear-gradient(to bottom, #ffffff, #f1f4f7)" }}>
      {/* Hero Section */}
      <section className="text-center py-4">
        <h1 className="fw-bold text-success mb-2 animate__animated animate__fadeInDown">
          Welcome to Fresh Mushrooms!
        </h1>
        <p className="text-muted fs-6 animate__animated animate__fadeInUp">
          Get the freshest organic mushrooms at the best prices.
        </p>
      </section>

      {/* Carousel */}
      <div id="promoCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner rounded overflow-hidden" style={{ maxHeight: "250px" }}>
          {promotions.map((p, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img
                src={p.img}
                className="d-block w-100"
                alt={p.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Products */}
      <h5 className="mb-3 d-flex justify-content-between align-items-center px-2">
        🛒 Best Sellers
        <button className="btn btn-sm btn-outline-primary" onClick={() => navigate("/products")}>View All</button>
      </h5>
      <div className="d-flex overflow-auto mb-4 px-2">
        {products.map((p) => (
          <div key={p.id} className="card me-3 shadow-sm" style={{ minWidth: 200 }}>
            <img src={p.img} className="card-img-top" alt={p.name} style={{ height: 140, objectFit: "cover" }} />
            <div className="card-body text-center">
              <h6 className="card-title fw-bold">{p.name}</h6>
              <p className="text-success">₹{p.price}</p>
              <p className="text-warning">⭐ {p.rating}</p>

              {getQty(p.id) === 0 ? (
                <button className="btn btn-sm btn-success mb-1" onClick={() => addToCart(p)}>Add to Cart</button>
              ) : (
                <div className="d-flex justify-content-center align-items-center mb-2">
                  <button className="btn btn-sm btn-outline-danger me-2" onClick={() => decreaseQty(p.id)}>−</button>
                  <span>{getQty(p.id)}</span>
                  <button className="btn btn-sm btn-outline-success ms-2" onClick={() => increaseQty(p.id)}>+</button>
                </div>
              )}

              <button className="btn btn-sm btn-outline-secondary">Quick View</button>
            </div>
          </div>
        ))}
      </div>

      {/* other sections stay unchanged */}
    </div>
  );
};

export default Home;

