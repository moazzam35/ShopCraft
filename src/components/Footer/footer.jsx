import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaMailBulk,
  FaInstagram,
  FaPortrait,
} from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <span>S</span>
              ShopCraft
            </div>
            <p>
              Your trusted destination for quality products. Shop the latest
              trends with confidence and style.
            </p>
            <div className="social-icons">
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=moazzampasha356@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaMailBulk />
              </a>
              <a href="https://www.instagram.com/moazzam_kamboh/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://moazzam35.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                <FaPortrait />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <Link className="footer-pages" to="/">
                Home
              </Link>

              <Link className="footer-pages" to="/products">
                Shop
              </Link>

              <Link className="footer-pages" to="/about">
                About Us
              </Link>

              <Link className="footer-pages" to="/contact">
                Contact
              </Link>
              <Link className="footer-pages" to="/blog">
                Blog
              </Link>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <Link className="footer-pages" to="/shipping-info">
                Shipping Info
              </Link>
              <Link className="footer-pages" to="/returns">
                Returns
              </Link>
              <Link className="footer-pages" to="/faq">
                FAQ
              </Link>
              <Link className="footer-pages" to="/track-order">
                Track Order
              </Link>
              <Link className="footer-pages" to="/support">
                Support
              </Link>
              <Link className="footer-pages" to="/blog">
                Blog
              </Link>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h3>Newsletter</h3>
            <p>Subscribe to get special offers and updates!</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ShopCraft. All rights reserved.</p>

          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </div>

          <div className="payment-methods">
            <span style={{ color: "#7a7a7a", fontSize: "14px" }}>
              We Accept:
            </span>
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
    </footer>
  );
}

export default Footer;
