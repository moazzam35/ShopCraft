import React, { useState } from 'react';
import './InfoPage.css';

function TrackOrder() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate tracking result
    setTrackingResult({
      orderNumber: orderNumber,
      status: 'In Transit',
      estimatedDelivery: 'Friday, February 7, 2026',
      items: [
        { name: 'Essence Mascara Lash Princess', quantity: 2 },
        { name: 'Eyeshadow Palette with Mirror', quantity: 1 }
      ],
      tracking: [
        { date: 'Feb 4, 2026 10:30 AM', status: 'Package picked up', location: 'Los Angeles, CA' },
        { date: 'Feb 4, 2026 3:45 PM', status: 'In transit', location: 'Phoenix, AZ' },
        { date: 'Feb 5, 2026 8:20 AM', status: 'Arrived at facility', location: 'Dallas, TX' },
        { date: 'Feb 5, 2026 2:15 PM', status: 'Out for delivery', location: 'Your city' }
      ]
    });
  };

  return (
    <div className="info-page track-order-page">
      <div className="container">
        <h1>Track Your Order</h1>
        
        <section className="info-section">
          <div className="track-form-wrapper">
            <p className="form-intro">Enter your order number and email address to track your shipment.</p>
            
            <form className="track-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="orderNumber">Order Number</label>
                <input
                  type="text"
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g., SHC-123456"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button type="submit" className="track-button">Track Order</button>
            </form>
          </div>
        </section>

        {trackingResult && (
          <section className="tracking-results">
            <div className="result-header">
              <h2>Order #{trackingResult.orderNumber}</h2>
              <div className="status-badge">{trackingResult.status}</div>
            </div>

            <div className="delivery-info">
              <p className="estimated-delivery">
                <strong>Estimated Delivery:</strong> {trackingResult.estimatedDelivery}
              </p>
            </div>

            <div className="order-items">
              <h3>Items in this order</h3>
              {trackingResult.items.map((item, index) => (
                <div key={index} className="order-item">
                  <span>{item.name}</span>
                  <span>Qty: {item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="tracking-timeline">
              <h3>Tracking History</h3>
              {trackingResult.tracking.map((event, index) => (
                <div key={index} className={`timeline-item ${index === trackingResult.tracking.length - 1 ? 'current' : ''}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <p className="timeline-date">{event.date}</p>
                    <p className="timeline-status">{event.status}</p>
                    <p className="timeline-location">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="info-section">
          <h2>Where to Find Your Order Number</h2>
          <p>Your order number can be found in:</p>
          <ul>
            <li>Order confirmation email sent when you placed your order</li>
            <li>Shipping confirmation email (sent when order ships)</li>
            <li>Your account order history (if you have an account)</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Tracking Not Working?</h2>
          <p>If you are having trouble tracking your order:</p>
          <ul>
            <li>Double-check that you entered the correct order number and email</li>
            <li>Tracking information may take 24-48 hours to appear after shipping</li>
            <li>Check your spam/junk folder for shipping confirmation emails</li>
          </ul>
          <p>Still need help? Contact our support team or call 1-555-123-4567.</p>
        </section>
      </div>
    </div>
  );
}

export default TrackOrder;