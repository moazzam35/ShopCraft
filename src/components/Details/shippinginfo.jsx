import React from 'react';
import './InfoPage.css';

function ShippingInfo() {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Shipping Information</h1>
        
        <section className="info-section">
          <h2>Shipping Methods & Delivery Times</h2>
          <div className="shipping-options">
            <div className="option-card">
              <h3>Standard Shipping</h3>
              <p className="delivery-time">5-7 Business Days</p>
              <p className="price">FREE on orders over $50</p>
              <p>$5.99 for orders under $50</p>
            </div>
            
            <div className="option-card">
              <h3>Express Shipping</h3>
              <p className="delivery-time">2-3 Business Days</p>
              <p className="price">$12.99</p>
            </div>
            
            <div className="option-card">
              <h3>Next Day Delivery</h3>
              <p className="delivery-time">1 Business Day</p>
              <p className="price">$19.99</p>
              <p>Order before 2 PM for same-day dispatch</p>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Shipping Locations</h2>
          <p>We currently ship to the following locations:</p>
          <ul className="location-list">
            <li>United States (all 50 states)</li>
            <li>Canada</li>
            <li>United Kingdom</li>
            <li>European Union countries</li>
            <li>Australia & New Zealand</li>
          </ul>
          <p>International shipping times may vary based on customs processing.</p>
        </section>

        <section className="info-section">
          <h2>Order Processing</h2>
          <p>Orders are processed within 1-2 business days (Monday-Friday, excluding holidays). You will receive a confirmation email with tracking information once your order has shipped.</p>
        </section>

        <section className="info-section">
          <h2>Tracking Your Order</h2>
          <p>Once your order ships, you will receive an email with your tracking number. You can track your package by:</p>
          <ul>
            <li>Clicking the tracking link in your shipping confirmation email</li>
            <li>Visiting our Track Order page and entering your order number</li>
            <li>Logging into your account and viewing order history</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Shipping Restrictions</h2>
          <p>We cannot ship to:</p>
          <ul>
            <li>PO Boxes (Express and Next Day only)</li>
            <li>Military APO/FPO addresses (Standard shipping only)</li>
            <li>Countries under trade restrictions</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Questions?</h2>
          <p>If you have any questions about shipping, please contact our customer service team at shipping@shopcraft.com or call us at 1-555-123-4567.</p>
        </section>
      </div>
    </div>
  );
}

export default ShippingInfo;