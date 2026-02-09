import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import {
  FaShoppingCart,
  FaTrash,
  FaPlus,
  FaMinus,
  FaArrowLeft,
  FaCreditCard,
  FaPaypal,
  FaMobileAlt,
  FaTags
} from 'react-icons/fa';
import './cart.css';
import Loader from '../Loader/loader';

// Promo codes
const PROMO_CODES = {
  'SAVE10': 10,
  'SAVE20': 20,
  'WELCOME15': 15,
  'SHOPCRAFT': 25,
};

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [promoDiscount, setPromoDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const handleApplyPromo = () => {
    const code = promoCode.toUpperCase().trim();
    if (PROMO_CODES[code]) {
      setPromoDiscount(PROMO_CODES[code]);
      setPromoSuccess(`Promo code applied! ${PROMO_CODES[code]}% off`);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
      setPromoSuccess('');
      setPromoDiscount(0);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const calculateDiscount = () => {
    return cart.reduce((total, product) => {
      const discount = product.discountPercentage ? (product.price * product.discountPercentage / 100) * product.quantity : 0;
      return total + discount;
    }, 0);
  };

  const calculatePromoDiscount = () => {
    return (calculateSubtotal() - calculateDiscount()) * (promoDiscount / 100);
  };

  const calculateTotal = () => {
    return calculateSubtotal() - calculateDiscount() - calculatePromoDiscount();
  };

  const getTotalItems = () => {
    return cart.reduce((count, product) => count + product.quantity, 0);
  };



  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <FaShoppingCart className="empty-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <button className="shop-now-btn" onClick={() => navigate('/products')}>
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <div className="cart-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Back to Shopping
        </button>
        <h1>Shopping Cart</h1>
        <p className="cart-subtitle">{getTotalItems()} items in your cart</p>
      </div>

      <div className="cart-content">
        {/* Cart Items Section */}
        <div className="cart-items-section">
          {cart.map((product) => (
            <div key={product.id} className="cart-product-card">
              <div className="product-image">
                <img src={product.thumbnail} alt={product.title} />
              </div>

              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-brand">{product.brand}</p>
                <p className="product-category">{product.category}</p>
                <div className="product-rating">
                  <span className="rating-stars"><FaStar style={{ color: '#FFD700' }} /> {product.rating}</span>
                  <span className="stock-status">
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </span>
                </div>
              </div>

              <div className="product-pricing">
                <div className="price-info">
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <p className="product-discount">{product.discountPercentage}% off</p>
                </div>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(product.id, -1)}
                  >
                    <FaMinus />
                  </button>
                  <span className="quantity">{product.quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => updateQuantity(product.id, 1)}
                  >
                    <FaPlus />
                  </button>
                </div>

                <div className="product-total">
                  <p className="total-label">Total:</p>
                  <p className="total-price">
                    ${(product.price * product.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(product.id)}
                  title="Remove item"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="cart-summary-section">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal ({getTotalItems()} items):</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="summary-row discount-row">
                <span>Discount:</span>
                <span>-${calculateDiscount().toFixed(2)}</span>
              </div>
              {promoDiscount > 0 && (
                <div className="summary-row promo-row">
                  <span>Promo ({promoDiscount}% off):</span>
                  <span>-${calculatePromoDiscount().toFixed(2)}</span>
                </div>
              )}
              <div className="summary-row shipping-row">
                <span>Shipping:</span>
                <span className="free-shipping">FREE</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </div>

            <Link to="/checkout" style={{ textDecoration: 'none' }}>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </Link>
            <Link to="/products">
              <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
                Continue Shopping
              </button>
            </Link>

            <div className="payment-methods">
              <p>We Accept:</p>
              <div className="payment-icons">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                />
              </div>
            </div>
          </div>

          <div className="promo-card">
            <div className="promo-header">
              <FaTags className="promo-icon" />
              <h4>Have a Promo Code?</h4>
            </div>
            <div className="promo-input-group">
              <input
                type="text"
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handleApplyPromo}>Apply</button>
            </div>
            {promoSuccess && <p className="promo-success">{promoSuccess}</p>}
            {promoError && <p className="promo-error">{promoError}</p>}
            <p className="promo-hint">Try: SAVE10, SAVE20, WELCOME15, SHOPCRAFT</p>
          </div>

          <div className="benefits-card">
            <h4>Shopping Benefits</h4>
            <ul>
              <li>✓ Free shipping on orders over $50</li>
              <li>✓ 30-day return policy</li>
              <li>✓ Secure payment processing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;