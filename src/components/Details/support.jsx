import React from "react";
import "./InfoPage.css";
import { BsChatRightText } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaBoxOpen ,FaSearch } from "react-icons/fa";
import { FaRotate, FaQuestion } from "react-icons/fa6";

function Support() {
  return (
    <div className="info-page support-page">
      <div className="container">
        <h1>Customer Support</h1>
        <p className="page-intro">
          We are here to help! Choose the best way to reach us.
        </p>

        <section className="support-options">
          <div className="support-card">
            <div className="support-icon">
              <BsChatRightText />
            </div>
            <h2>Live Chat</h2>
            <p>Get instant answers from our support team</p>
            <p className="availability">Available 24/7</p>
            <a target="blank" href="https://moazzam35.github.io/portfolio/" className="support-btn">Start Chat</a>
          </div>

          <div className="support-card">
            <div className="support-icon">
              <CiMail />
            </div>
            <h2>Email Support</h2>
            <p>
              Send us a detailed message and we will respond within 24 hours
            </p>
            <p className="contact-info">moazzampasha356.com</p>
            <a href="mailto:moazzampasha356.com" className="support-btn">
              Send Email
            </a>
          </div>

          <div className="support-card">
            <div className="support-icon">
              <MdOutlineWifiCalling3 />
            </div>
            <h2>Phone Support</h2>
            <p>Speak directly with our customer service team</p>
            <p className="contact-info">030000000</p>
            <p className="availability">Mon-Fri, 9AM-6PM EST</p>
          </div>
        </section>

        <section className="info-section">
          <h2>How Can We Help You Today?</h2>
          <div className="help-topics">
            <a href="/shipping-info" className="help-topic">
              <span className="topic-icon">
                <FaBoxOpen />
              </span>
              <div>
                <h3>Shipping & Delivery</h3>
                <p>Track orders, shipping times, and delivery info</p>
              </div>
            </a>

            <a href="/returns" className="help-topic">
              <span className="topic-icon">
                <FaRotate />
              </span>
              <div>
                <h3>Returns & Exchanges</h3>
                <p>Return policy, refunds, and exchanges</p>
              </div>
            </a>

            <a href="/faq" className="help-topic">
              <span className="topic-icon"><FaQuestion /></span>
              <div>
                <h3>FAQ</h3>
                <p>Find answers to common questions</p>
              </div>
            </a>

            <a href="/track-order" className="help-topic">
              <span className="topic-icon"><FaSearch /></span>
              <div>
                <h3>Track Your Order</h3>
                <p>Check your order status and location</p>
              </div>
            </a>
          </div>
        </section>

        <section className="info-section">
          <h2>Response Times</h2>
          <div className="response-grid">
            <div className="response-item">
              <h3>Live Chat</h3>
              <p className="response-time">Instant</p>
              <p>Real-time responses 24/7</p>
            </div>
            <div className="response-item">
              <h3>Email</h3>
              <p className="response-time">Within 24 hours</p>
              <p>Usually within 2-4 hours during business hours</p>
            </div>
            <div className="response-item">
              <h3>Phone</h3>
              <p className="response-time">Immediate</p>
              <p>Mon-Fri, 9AM-6PM EST</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>What to Include in Your Message</h2>
          <p>To help us assist you faster, please include:</p>
          <ul>
            <li>Your order number (if applicable)</li>
            <li>Email address used for the order</li>
            <li>Detailed description of your issue or question</li>
            <li>Photos (if reporting damaged or defective items)</li>
            <li>Your preferred resolution</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>International Customers</h2>
          <p>For customers outside the United States:</p>
          <ul>
            <li>
              Email is the fastest way to reach us (support@shopcraft.com)
            </li>
            <li>Live chat available in English 24/7</li>
            <li>Check our FAQ for international shipping and customs info</li>
            <li>All support emails answered within 24 hours</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Feedback & Suggestions</h2>
          <p>
            We love hearing from our customers! Share your feedback,
            suggestions, or experiences with us:
          </p>
          <ul>
            <li>Email: moazzampasha356@gmail.com </li>
            <li>Leave a review on your order</li>
            <li>Follow us on social media and send us a message</li>
          </ul>
          <p>Your feedback helps us improve and serve you better!</p>
        </section>
      </div>
    </div>
  );
}

export default Support;
