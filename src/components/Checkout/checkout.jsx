import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  FaArrowLeft,
  FaCreditCard,
  FaPaypal,
  FaApplePay,
  FaGooglePay,
  FaLock,
  FaTruck,
  FaShieldAlt,
  FaCheckCircle,
  FaRegCreditCard,
  FaCalendarAlt,
  FaLock as FaCvv,
} from "react-icons/fa";
import "./checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "US",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    saveInfo: false,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.address) newErrors.address = "Address is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.zipCode) newErrors.zipCode = "ZIP code is required";
    }

    if (step === 2) {
      if (!formData.cardNumber)
        newErrors.cardNumber = "Card number is required";
      if (!formData.cardName) newErrors.cardName = "Name on card is required";
      if (!formData.expiryDate)
        newErrors.expiryDate = "Expiry date is required";
      if (!formData.cvv) newErrors.cvv = "CVV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      clearCart();
      navigate("/order-confirmation");
    }
  };

  // Calculate order totals from cart
  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const calculateDiscount = () => {
    return cart.reduce((total, product) => {
      const discount = product.discountPercentage ? (product.price * product.discountPercentage / 100) * product.quantity : 0;
      return total + discount;
    }, 0);
  };

  const orderSummary = {
    items: cart,
    subtotal: calculateSubtotal(),
    shipping: 0,
    discount: calculateDiscount(),
    total: calculateSubtotal() - calculateDiscount(),
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-header-content">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Back to Cart
          </button>
          <div className="logo" onClick={() => navigate("/")}>
            <span className="logo-icon">S</span>
            <span className="logo-text">ShopCraft</span>
          </div>
          <div className="secure-badge">
            <FaLock /> Secure Checkout
          </div>
        </div>
      </div>

      <div className="checkout-container">
        <div className="checkout-main">
          {/* Progress Steps */}
          <div className="progress-steps">
            <div
              className={`step ${step >= 1 ? "active" : ""} ${step > 1 ? "completed" : ""}`}
            >
              <div className="step-number">1</div>
              <span>Shipping</span>
            </div>
            <div className="step-line"></div>
            <div
              className={`step ${step >= 2 ? "active" : ""} ${step > 2 ? "completed" : ""}`}
            >
              <div className="step-number">2</div>
              <span>Payment</span>
            </div>
            <div className="step-line"></div>
            <div className={`step ${step >= 3 ? "active" : ""}`}>
              <div className="step-number">3</div>
              <span>Review</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            {step === 1 && (
              <div className="form-section">
                <h2>Contact Information</h2>
                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-text">{errors.email}</span>
                  )}
                </div>

                <h2>Shipping Address</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className={errors.firstName ? "error" : ""}
                    />
                    {errors.firstName && (
                      <span className="error-text">{errors.firstName}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className={errors.lastName ? "error" : ""}
                    />
                    {errors.lastName && (
                      <span className="error-text">{errors.lastName}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Address *</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street"
                    className={errors.address ? "error" : ""}
                  />
                  {errors.address && (
                    <span className="error-text">{errors.address}</span>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="New York"
                      className={errors.city ? "error" : ""}
                    />
                    {errors.city && (
                      <span className="error-text">{errors.city}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder="10001"
                      className={errors.zipCode ? "error" : ""}
                    />
                    {errors.zipCode && (
                      <span className="error-text">{errors.zipCode}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Phone (optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div className="form-group checkbox">
                  <label>
                    <input
                      type="checkbox"
                      name="saveInfo"
                      checked={formData.saveInfo}
                      onChange={handleInputChange}
                    />
                    Save this information for next time
                  </label>
                </div>

                <button
                  type="button"
                  className="btn-primary"
                  onClick={handleNext}
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-section">
                <h2>Payment Method</h2>

                <div className="payment-methods">
                  <div className="payment-method active">
                    <div className="payment-icon">
                      <FaRegCreditCard />
                    </div>
                    <span>Credit Card</span>
                  </div>
                  <div className="payment-method">
                    <div className="payment-icon">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        alt="PayPal"
                        className="payment-img"
                      />
                    </div>
                    <span>PayPal</span>
                  </div>
                  <div className="payment-method">
                    <div className="payment-icon">
                      <FaApplePay />
                    </div>
                    <span>Apple Pay</span>
                  </div>
                  <div className="payment-method">
                    <div className="payment-icon">
                      <FaGooglePay />
                    </div>
                    <span>Google Pay</span>
                  </div>
                </div>

                <div className="card-inputs">
                  <div className="form-group">
                    <label>Card Number *</label>
                    <div className="input-with-icon">
                      <FaRegCreditCard />
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className={errors.cardNumber ? "error" : ""}
                      />
                    </div>
                    {errors.cardNumber && (
                      <span className="error-text">{errors.cardNumber}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Name on Card *</label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={errors.cardName ? "error" : ""}
                    />
                    {errors.cardName && (
                      <span className="error-text">{errors.cardName}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Expiry Date *</label>
                      <div className="input-with-icon">
                        <FaCalendarAlt />
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className={errors.expiryDate ? "error" : ""}
                        />
                      </div>
                      {errors.expiryDate && (
                        <span className="error-text">{errors.expiryDate}</span>
                      )}
                    </div>
                    <div className="form-group">
                      <label>CVV *</label>
                      <div className="input-with-icon">
                        <FaCvv />
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          className={errors.cvv ? "error" : ""}
                        />
                      </div>
                      {errors.cvv && (
                        <span className="error-text">{errors.cvv}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="security-badges">
                  <div className="badge">
                    <FaLock /> SSL Secure
                  </div>
                  <div className="badge">
                    <FaShieldAlt /> Protected
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleBack}
                  >
                    Back to Shipping
                  </button>
                  <button
                    type="button"
                    className="btn-primary"
                    onClick={handleNext}
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-section review-section">
                <h2>Review Your Order</h2>

                <div className="review-block">
                  <h3>Contact</h3>
                  <p>{formData.email}</p>
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => setStep(1)}
                  >
                    Edit
                  </button>
                </div>

                <div className="review-block">
                  <h3>Ship to</h3>
                  <p>
                    {formData.firstName} {formData.lastName}
                  </p>
                  <p>{formData.address}</p>
                  <p>
                    {formData.city}, {formData.zipCode}
                  </p>
                  <p>{formData.country}</p>
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => setStep(1)}
                  >
                    Edit
                  </button>
                </div>

                <div className="review-block">
                  <h3>Payment</h3>
                  <p>**** **** **** {formData.cardNumber.slice(-4)}</p>
                  <p>{formData.cardName}</p>
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => setStep(2)}
                  >
                    Edit
                  </button>
                </div>

                <div className="terms">
                  <p>
                    By placing your order, you agree to our{" "}
                    <a href="/terms">Terms of Service</a> and{" "}
                    <a href="/privacy">Privacy Policy</a>.
                  </p>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={handleBack}
                  >
                    Back to Payment
                  </button>
                  <button type="submit" className="btn-primary place-order">
                    Place Order - ${orderSummary.total.toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </form>

          <div className="checkout-footer">
            <div className="trust-badges">
              <div className="trust-item">
                <FaTruck />
                <span>Free Shipping</span>
              </div>
              <div className="trust-item">
                <FaShieldAlt />
                <span>Secure Payment</span>
              </div>
              <div className="trust-item">
                <FaCheckCircle />
                <span>Money Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary Sidebar */}
        <div className="order-summary">
          <div className="summary-card">
            <h3>Order Summary</h3>

            <div className="summary-items">
              {orderSummary.items.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="item-image">
                    <img src={item.thumbnail || item.image} alt={item.title || item.name} />
                    <span className="item-qty">{item.quantity}</span>
                  </div>
                  <div className="item-details">
                    <p className="item-name">{item.title || item.name}</p>
                    <p className="item-variant">{item.brand || 'Default Title'}</p>
                  </div>
                  <div className="item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${orderSummary.subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span className="free">FREE</span>
            </div>
            <div className="summary-row discount">
              <span>Discount</span>
              <span>-${orderSummary.discount.toFixed(2)}</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-row total">
              <span>Total</span>
              <div className="total-price">
                <span className="currency">USD</span>
                <span className="amount">${orderSummary.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="payment-icon">
            <div>
              <h3>We Accept</h3>
            </div>
            <div className="images-payment-boxed">
              <div className="payment-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                  alt="Visa"
                  className="payment-img"
                />
              </div>
              <div className="payment-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="payment-img"
                />
              </div>
              <div className="payment-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                  alt="PayPal"
                  className="payment-img"
                />
              </div>
              <div className="payment-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg"
                  alt="Stripe"
                  className="payment-img"
                />
              </div>
              <div className="payment-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                  alt="American Express"
                  className="payment-img"
                />
              </div>
              <div className="payment-item" style={{ background: '#000' }}>
                <svg viewBox="0 0 24 24" className="payment-svg apple-pay">
                  <path
                    d="M5.5 3.5C4.1 3.5 3 4.6 3 6v12c0 1.4 1.1 2.5 2.5 2.5h13c1.4 0 2.5-1.1 2.5-2.5V6c0-1.4-1.1-2.5-2.5-2.5h-13zm8.3 4.7c.3-.4.5-.9.4-1.4-.5 0-1 .3-1.4.7-.3.3-.6.9-.5 1.4.6 0 1.1-.3 1.5-.7zm.6 1c-.8 0-1.5.5-1.9.5s-1-.5-1.7-.5c-.9 0-1.7.5-2.1 1.3-.9 1.6-.2 4 .7 5.3.4.6.9 1.3 1.6 1.3.6 0 .9-.4 1.6-.4.7 0 .9.4 1.6.4.7 0 1.1-.6 1.5-1.3.5-.7.7-1.4.7-1.4s-1.4-.5-1.4-2.1c0-1.3 1.1-1.9 1.1-1.9-.6-.9-1.6-1-1.7-1.2z"
                    fill="#fff"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
