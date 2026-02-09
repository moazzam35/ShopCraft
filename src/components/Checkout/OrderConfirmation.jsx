import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTruck, FaEnvelope, FaHome } from "react-icons/fa";
import "./orderconfirmation.css";

function OrderConfirmation() {
    const navigate = useNavigate();
    const orderNumber = Math.random().toString(36).substring(2, 10).toUpperCase();

    return (
        <div className="confirmation-container">
            <div className="confirmation-card">
                <div className="success-icon">
                    <FaCheckCircle />
                </div>

                <h1>Order Confirmed!</h1>
                <p className="thank-you">Thank you for your purchase</p>

                <div className="order-number">
                    <span>Order Number:</span>
                    <strong>#{orderNumber}</strong>
                </div>

                <div className="confirmation-details">
                    <div className="detail-item">
                        <FaEnvelope className="detail-icon" />
                        <div>
                            <h4>Confirmation Email</h4>
                            <p>We've sent a confirmation email with your order details</p>
                        </div>
                    </div>

                    <div className="detail-item">
                        <FaTruck className="detail-icon" />
                        <div>
                            <h4>Shipping Updates</h4>
                            <p>You'll receive shipping updates via email</p>
                        </div>
                    </div>
                </div>

                <div className="confirmation-actions">
                    <button className="primary-btn" onClick={() => navigate("/products")}>
                        Continue Shopping
                    </button>
                    <button className="secondary-btn" onClick={() => navigate("/")}>
                        <FaHome /> Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirmation;
