import React from 'react';
import { Link } from 'react-router-dom';
import './errorPage.css'; // Import the CSS file for styling
import { FaHome , FaShoppingBasket } from "react-icons/fa";
function ErrorPage() {
  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <div className="notfound-content">
          {/* Large 404 */}
          <div className="error-code">
            <span className="four">4</span>
            <span className="zero">0</span>
            <span className="four">4</span>
          </div>

          {/* Main Message */}
          <h1 className="error-title">Oops! Page Not Found</h1>
          <p className="error-message">
            The page you're looking for seems to have wandered off. 
            Don't worry, even the best shoppers get lost sometimes!
          </p>

          {/* Action Buttons */}
          <div className="error-actions">
            <Link to="/" className="btn-primary">
              <span className="btn-icon"><FaHome className='icon' /></span>
              Back to Home
            </Link>
            <Link to="/products" className="btn-secondary">
              <span className="btn-icon"><FaShoppingBasket className='icon' /></span>
              Continue Shopping
            </Link>
          </div>

          <div className="quick-links">
            <p>Looking for something specific?</p>
            <div className="links-grid">
              <Link className='link-item' to="/products">Shop All Products</Link>
              <Link className='link-item' to="/cart">View Cart</Link>
              <Link className='link-item' to="/track-order">Track Order</Link>
              <Link className='link-item' to="/support">Get Support</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ErrorPage;