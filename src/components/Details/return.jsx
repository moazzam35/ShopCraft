import React from 'react';
import './InfoPage.css';

function Returns() {
  return (
    <div className="info-page">
      <div className="container">
        <h1>Returns & Refunds Policy</h1>
        
        <section className="info-section">
          <h2>Our 30-Day Return Policy</h2>
          <p>We want you to be completely satisfied with your purchase. If you are not happy with your order, you can return it within 30 days of delivery for a full refund or exchange.</p>
        </section>

        <section className="info-section">
          <h2>Return Requirements</h2>
          <p>To be eligible for a return, items must meet the following conditions:</p>
          <ul>
            <li>Items must be unused and in the same condition as received</li>
            <li>Items must be in original packaging</li>
            <li>Include all tags, labels, and accessories</li>
            <li>Proof of purchase (receipt or order number) is required</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>How to Return an Item</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Initiate Your Return</h3>
                <p>Log into your account and go to Order History, or contact customer service at returns@shopcraft.com</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Pack Your Items</h3>
                <p>Securely pack items in their original packaging. Include your return authorization form.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Ship It Back</h3>
                <p>Use the prepaid return label we provide. Drop off at any authorized shipping location.</p>
              </div>
            </div>
            
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Get Your Refund</h3>
                <p>Once we receive and inspect your return, we will process your refund within 5-7 business days.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="info-section">
          <h2>Return Shipping</h2>
          <p><strong>Free return shipping</strong> is provided for all domestic returns. We will email you a prepaid return label once your return is approved.</p>
          <p>For international returns, customers are responsible for return shipping costs.</p>
        </section>

        <section className="info-section">
          <h2>Refund Processing</h2>
          <p>Refunds will be issued to your original payment method:</p>
          <ul>
            <li>Credit/Debit Cards: 5-7 business days</li>
            <li>PayPal: 3-5 business days</li>
            <li>Store Credit: Immediate</li>
          </ul>
          <p>You will receive an email confirmation once your refund has been processed.</p>
        </section>

        <section className="info-section">
          <h2>Non-Returnable Items</h2>
          <p>The following items cannot be returned:</p>
          <ul>
            <li>Final sale items</li>
            <li>Gift cards</li>
            <li>Downloadable products</li>
            <li>Personal care items (for hygiene reasons)</li>
            <li>Items marked as non-returnable at time of purchase</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Exchanges</h2>
          <p>If you need a different size or color, we are happy to help! Contact us at exchanges@shopcraft.com or initiate an exchange through your account. We will ship your exchange item as soon as we receive your return.</p>
        </section>

        <section className="info-section">
          <h2>Damaged or Defective Items</h2>
          <p>If you receive a damaged or defective item, please contact us immediately at support@shopcraft.com with photos of the damage. We will arrange a free replacement or full refund, including return shipping costs.</p>
        </section>

        <section className="info-section">
          <h2>Need Help?</h2>
          <p>Our customer service team is here to help with any return questions. Contact us at:</p>
          <p>Email: returns@shopcraft.com</p>
          <p>Phone: 03081234567</p>
        </section>
      </div>
    </div>
  );
}

export default Returns;