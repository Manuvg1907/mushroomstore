import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import "../styles/Home.css";

const categories = [
  "Fruits", "Vegetables", "Dairy", "Bakery", "Snacks", "Beverages", "Organic"
];

const promotions = [
  { title: "Under ₹99", img: "../images/mushroom_bng.jpeg" },
  { title: "Best Sellers", img:"../images/mush_type-1.jpeg" },
];
console.log(promotions[1]);

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: `Mushroom Pack ${i + 1}`,
  price: `${49 + i * 10}`,
  img: "../images/mush_type-2.jpeg",
}));

const Home = () => {
  return (
    <>
      {/* Promos Carousel */}
      <div id="promoCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {promotions.map((p, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={p.img} className="d-block w-100" alt={p.title} />
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
          <div key={i} className="category-card animate__animated animate__fadeInUp">
            <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2">
              <span className="text-muted">{cat[0]}</span>
            </div>
            <small>{cat}</small>
          </div>
        ))}
      </div>

      {/* Product Grid */}
      <h5 className="mb-3">Fresh Mushrooms</h5>
      <div className="row">
        {products.map(p => (
          <div key={p.id} className="col-6 col-sm-4 col-md-3 mb-4">
            <div className="card product-card animate__animated animate__zoomIn">
              <img src={p.img} className="card-img-top" alt={p.name} />
              <div className="card-body text-center p-2">
                <h6 className="card-title mb-1">{p.name}</h6>
                <p className="text-success mb-2">₹{p.price}</p>
                <button className="btn btn-sm btn-outline-success">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
