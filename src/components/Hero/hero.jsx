import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import bannerImage from "../../assets/images/banner.jpg";
import "./hero.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "../Loader/loader";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [ApiData, setApiData] = useState(null);
  const [error, setError] = useState(null);

  const handleAddToCart = (product, event) => {
    // Create flying animation
    const button = event.currentTarget;
    const buttonRect = button.getBoundingClientRect();
    const cartIcon = document.querySelector('.cart-container');

    if (cartIcon) {
      const cartRect = cartIcon.getBoundingClientRect();

      // Create flying element
      const flyingItem = document.createElement('div');
      flyingItem.className = 'flying-item';
      flyingItem.style.left = `${buttonRect.left + buttonRect.width / 2}px`;
      flyingItem.style.top = `${buttonRect.top + buttonRect.height / 2}px`;
      document.body.appendChild(flyingItem);

      // Animate to cart (2 seconds)
      setTimeout(() => {
        flyingItem.style.transition = 'all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        flyingItem.style.left = `${cartRect.left + cartRect.width / 2}px`;
        flyingItem.style.top = `${cartRect.top + cartRect.height / 2}px`;
        flyingItem.style.transform = 'scale(0.3)';
        flyingItem.style.opacity = '0';
      }, 10);

      // Add to cart AFTER animation completes
      setTimeout(() => {
        addToCart(product);
      }, 2000);

      // Remove element after animation
      setTimeout(() => {
        document.body.removeChild(flyingItem);
      }, 2100);
    } else {
      // Fallback if cart icon not found
      addToCart(product);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setApiData(response.data);
      console.log(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);
  if (!ApiData) {
    return <Loader />;
  }

  if (error) return <h1>Error fetching data: {error}</h1>;

  return (
    <div>
      <div className="hero-section">
        <img src={bannerImage} alt="Banner" />
      </div>
      <div>
        <h1 className="hero-title">Welcome to Our Store</h1>
        <p className="hero-subtitle">Find the best products here</p>
      </div>
      <div style={{ display: "flex", textDecoration: "none", alignItems: "center" }}>
        <Link to="/products" className="hero-button">Shop Now</Link>
      </div>
      <div>
        <p className="hero-description">
          Discover a wide range of products tailored to your needs. Enjoy
          exclusive deals and offers available only in our store.
        </p>
      </div>
      <div>
        <div className="product-list">
          {ApiData &&
            ApiData.products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} width="100" />
                <h4>{product.title}</h4>
                <p>{product.brand}</p>
                <p>Price: ${product.price}</p>
                <div className="cart-button">
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    Add to Cart
                  </button>
                  <button onClick={() => navigate(`/product/${product.id}`)}>watch now</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
