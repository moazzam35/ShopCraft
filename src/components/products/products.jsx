import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import "./products.css";
import axios from "axios";
import Loader from "../Loader/loader";
import { useNavigate } from "react-router-dom";
function Products() {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [productData, setproductData] = useState(null);

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
      }, 1500);

      // Remove element after animation
      setTimeout(() => {
        document.body.removeChild(flyingItem);
      }, 1600);
    } else {
      // Fallback if cart icon not found
      addToCart(product);
    }
  };

  const products = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      setproductData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  products();
  if (!productData) {
    return <Loader />;
  }
  return (
    <div className="product-container">
      {productData &&
        productData.carts.map((product) => {
          return (
            <div key={product.id} className="product-card">
              <div>
                <img src={product.products[0].thumbnail} alt="" />
              </div>
              <h4>{product.products[0].title}</h4>
              <p>{product.products[0].brand}</p>
              <p>Price: ${product.products[0].price}</p>
              <div className="cart-button">
                <button
                  onClick={(e) => handleAddToCart(product.products[0], e)}
                >
                  Add to Cart
                </button>
                <button onClick={() => navigate(`/product/${product.id}`)}>watch now</button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Products;
