import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  { id: 1, name: "Button Mushroom", price: 49, img: "/images/mush_type-4.jpeg", desc: "Mild flavor, great for salads and stir-fries." },
  { id: 2, name: "Oyster Mushroom", price: 59, img: "/images/mush_type-2.jpeg", desc: "Soft texture and rich umami taste." },
  { id: 3, name: "Shiitake Mushroom", price: 69, img: "/images/mush_type-3.jpeg", desc: "Popular in Asian dishes with deep flavor." },
  { id: 4, name: "Enoki Mushroom", price: 79, img: "/images/mush_logo.jpeg", desc: "Thin and crunchy, ideal for soups." },
  { id: 5, name: "King Oyster", price: 89, img: "/images/mush_type-5.jpeg", desc: "Meaty texture, excellent grilled." },
  { id: 6, name: "Porcini", price: 99, img: "/images/mush_type-6.jpg", desc: "Earthy, nutty flavor, often dried." },
  { id: 7, name: "Morel Mushroom", price: 109, img: "/images/mush_type-7.jpg", desc: "Rare and gourmet, full of flavor." },
  { id: 8, name: "Chanterelle", price: 119, img: "/images/mush_type-8.jpg", desc: "Golden color, fruity aroma." },
];

const Products = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      const updated = cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
  };

  return (
    <div className="container mt-4 pt-4">
      {/* 🛒 Cart Icon with count */}
      <div className="position-fixed top-0 end-0 m-4 z-3">
        <div className="position-relative">
          <FaShoppingCart size={28} className="text-success" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {getTotalItems()}
          </span>
        </div>
      </div>

      <h2 className="text-center text-success mb-4">Our Fresh Mushrooms</h2>
      {products.map((p) => (
        <div key={p.id} className="card mb-4 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={p.img} className="img-fluid rounded-start" alt={p.name} />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center p-3">
              <h5 className="card-title">{p.name}</h5>
              <p className="card-text text-muted">{p.desc}</p>
              <h6 className="text-success">Price: ₹{p.price}</h6>
              <button className="btn btn-outline-success btn-sm mt-2" onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

