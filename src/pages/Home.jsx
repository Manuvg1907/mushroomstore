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
  { id: 1, name: "Button Mushroom", price: "49", img: "/images/mush_type-4.jpeg", rating: 4.5 },
  { id: 2, name: "Oyster Mushroom", price: "59", img: "/images/mush_type-2.jpeg", rating: 4.8 },
  { id: 3, name: "Shiitake Mushroom", price: "69", img: "/images/mush_type-3.jpeg", rating: 4.6 },
  { id: 4, name: "Enoki Mushroom", price: "79", img: "/images/mush_logo.jpeg", rating: 4.7 },
];

const testimonials = [
  { name: "Aarti S.", text: "Fresh and delivered on time!", rating: 5 },
  { name: "Rahul K.", text: "Best organic mushrooms in town.", rating: 4.8 },
];

const facts = [
  "Mushrooms are a source of Vitamin D",
  "Enoki mushrooms have cancer-fighting properties",
  "Mushrooms are rich in antioxidants",
  "They support immune health"
];

const Home = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

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

      {/* Featured Products */}
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
              <button className="btn btn-sm btn-success mb-1" onClick={() => addToCart(p)}>Add to Cart</button>
              <button className="btn btn-sm btn-outline-secondary">Quick View</button>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h4 className="fw-bold mb-4">🥇 Why Choose Us?</h4>
          <div className="row">
            {["100% Organic", "Farm Fresh", "Fast Delivery", "Fair Pricing"].map((label, i) => (
              <div key={i} className="col-6 col-md-3 mb-3">
                <div className="p-3 border rounded shadow-sm">
                  <div className="fs-2 mb-2">✔️</div>
                  <p className="mb-0 fw-semibold">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="text-center py-5">
        <div className="container">
          <h4 className="fw-bold mb-4">📸 Behind the Scenes</h4>
          <img src="/images/farm_scene.jpeg" className="img-fluid rounded shadow-sm" alt="Farming" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 text-center">
        <div className="container">
          <h4 className="fw-bold mb-4">❤️ What Our Customers Say</h4>
          <div className="row justify-content-center">
            {testimonials.map((t, i) => (
              <div key={i} className="col-md-5 mb-3">
                <div className="p-3 border rounded shadow-sm">
                  <p className="mb-1 text-secondary">"{t.text}"</p>
                  <p className="fw-semibold mb-0">- {t.name}</p>
                  <p className="text-warning">⭐ {t.rating}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h4 className="fw-bold mb-4">📦 How It Works</h4>
          <div className="row">
            {["Choose Product", "Add to Cart", "Get Home Delivery"].map((step, i) => (
              <div key={i} className="col-4">
                <div className="p-3 border rounded shadow-sm">
                  <p className="fw-semibold mb-1">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mushroom Facts */}
      <section className="py-5 text-center">
        <div className="container">
          <h4 className="fw-bold mb-4">🧠 Did You Know?</h4>
          <div className="row">
            {facts.map((fact, i) => (
              <div key={i} className="col-6 col-md-3 mb-3">
                <div className="p-3 border rounded shadow-sm">
                  <p className="mb-0">🍄 {fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviceable Locations */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h4 className="fw-bold mb-4">🗺️ We Deliver To</h4>
          <p>Bangalore, Mysore, Shivamogga</p>
        </div>
      </section>

      {/* Contact / Chat Support */}
      <section className="py-5 text-center">
        <div className="container">
          <h4 className="fw-bold mb-3">📞 Need Help?</h4>
          <p>Email us at <a href="mailto:support@mushroomshop.in">support@mushroomshop.in</a> or chat with us on WhatsApp</p>
          <a href="https://wa.me/918431278287" className="btn btn-success">Chat on WhatsApp</a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h4 className="fw-bold mb-3">✨ Subscribe & Get 10% Off</h4>
          <form className="row justify-content-center">
            <div className="col-sm-6 col-md-4">
              <input type="email" className="form-control mb-2" placeholder="Enter your email" required />
            </div>
            <div className="col-auto">
              <button className="btn btn-light mb-2">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
