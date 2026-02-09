import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../Loader/loader";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./productdetail.css";

function ProductDetail() {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = (event) => {
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
        flyingItem.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
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

  const handleBuyNow = (event) => {
    // Add to cart first
    addToCart(product);
    // Then navigate to checkout
    navigate('/checkout');
  };

  const handleWishlistToggle = (event) => {
    event.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  if (!product) {
    return <Loader />;
  }

  return (
    <div className="product-detail-container">
      <button onClick={() => navigate(-1)} className="back-btn">
        ← Back to Products
      </button>

      <div className="product-detail">
        <div className="product-images">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="brand">{product.brand}</p>
          <p className="price">${product.price}</p>
          <p className="description">{product.description}</p>
          <p className="category">Category: {product.category}</p>
          <p className="rating">Rating: {product.rating}/5</p>

          <div className="detail-buttons">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
            <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>
            <button
              className={`wishlist-toggle-btn ${isInWishlist(product.id) ? 'active' : ''}`}
              onClick={handleWishlistToggle}
              title={isInWishlist(product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            >
              {isInWishlist(product.id) ? (
                <FaHeart className="heart-icon filled" />
              ) : (
                <FaRegHeart className="heart-icon" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;