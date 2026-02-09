import React, { useState } from "react";
import "./infopage.css";
import { MdOutlineMapsHomeWork , MdAddCall } from "react-icons/md";
import { IoMailUnreadSharp ,IoChatboxEllipsesOutline } from "react-icons/io5";
import { FaInstagramSquare ,FaFacebook ,FaPhone , FaYoutube } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <h1>Get in Touch</h1>
          <p>We would love to hear from you. Send us a message!</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p className="contact-description">
                Have a question or need assistance? Our team is here to help!
              </p>

              <div className="info-item">
                <div className="info-icon">
                  <MdOutlineMapsHomeWork style={{  color: "purple" }} />
                </div>
                <div>
                  <h3>Address</h3>
                  <p>
                    model town BahawalNagar
                    <br />
                    Pakistan , Punjab
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><IoMailUnreadSharp style={{  color: "green" }} /></div>
                <div>
                  <h3>Email</h3>
                  <p>
                    support@shopcraft.com
                    <br />
                    sales@shopcraft.com
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MdAddCall style={{  color: "red" }} /></div>
                <div>
                  <h3>Phone</h3>
                  <p>
                    +92 (308) 123-4567
                    <br />
                    Mon-Fri, 9AM-6PM EST
                  </p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><IoChatboxEllipsesOutline style={{  color: "blue" }} /></div>
                <div>
                  <h3>Live Chat</h3>
                  <p>
                    Available 24/7
                    <br />
                    Click the chat icon
                  </p>
                </div>
              </div>

              <div className="social-links">
                <h3>Follow Us</h3>
                <div className="social-icons">
                  <a href="#" className="social-icon">
                    <FaInstagramSquare style={{  color: "red" }} />
                  </a>
                  <a href="#" className="social-icon">
                    <FaFacebook style={{}} />
                  </a>
                  <a href="#" className="social-icon">
                    <FaPhone style={{  color: "orange" }} />
                  </a>
                  <a href="#" className="social-icon">
                    <FaYoutube style={{  color: "red" }} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="contact-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>What are your shipping times?</h3>
              <p>
                We ship within 1-2 business days. Standard shipping takes 3-5
                business days, and express shipping takes 1-2 business days.
              </p>
            </div>
            <div className="faq-item">
              <h3>What is your return policy?</h3>
              <p>
                We offer a 30-day return policy on all items. Products must be
                unused and in original packaging.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you ship internationally?</h3>
              <p>
                Yes! We ship to over 100 countries worldwide. International
                shipping times vary by location.
              </p>
            </div>
            <div className="faq-item">
              <h3>How can I track my order?</h3>
              <p>
                Once your order ships, you will receive a tracking number via
                email to monitor your package.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
