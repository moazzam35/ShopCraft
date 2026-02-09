import React, { useState } from 'react';
import './InfoPage.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All payments are processed securely."
        },
        {
          q: "Can I modify or cancel my order?",
          a: "You can modify or cancel your order within 1 hour of placing it. After that, orders are processed and cannot be changed. Please contact customer service immediately if you need to make changes."
        },
        {
          q: "Do you offer gift wrapping?",
          a: "Yes! Gift wrapping is available for $4.99 per item. You can add this option during checkout. We also include a personalized gift message at no extra charge."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Next Day delivery arrives within 1 business day. Processing time is 1-2 business days."
        },
        {
          q: "Do you ship internationally?",
          a: "Yes! We ship to over 100 countries worldwide. International shipping times vary by location, typically 7-14 business days. Check our Shipping Info page for details."
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you will receive a tracking number via email. You can also track your order by logging into your account or visiting our Track Order page."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy. Items must be unused, in original packaging, with all tags attached. Visit our Returns page to initiate a return or exchange."
        },
        {
          q: "How long do refunds take?",
          a: "Once we receive your return, refunds are processed within 5-7 business days. The refund will be credited to your original payment method."
        },
        {
          q: "Can I exchange an item?",
          a: "Yes! We are happy to exchange items for different sizes or colors. Contact us or initiate an exchange through your account. Exchanges ship as soon as we receive your return."
        }
      ]
    },
    {
      category: "Account & Security",
      questions: [
        {
          q: "Do I need an account to make a purchase?",
          a: "No, you can checkout as a guest. However, creating an account allows you to track orders, save favorites, and checkout faster on future purchases."
        },
        {
          q: "Is my personal information secure?",
          a: "Absolutely. We use industry-standard SSL encryption to protect your data. We never sell or share your personal information with third parties."
        },
        {
          q: "How do I reset my password?",
          a: "Click 'Forgot Password' on the login page. You will receive an email with instructions to reset your password. If you do not receive the email, check your spam folder."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="info-page faq-page">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <p className="page-intro">Find answers to common questions about orders, shipping, returns, and more.</p>
        
        {faqs.map((category, catIndex) => (
          <section key={catIndex} className="faq-category">
            <h2>{category.category}</h2>
            <div className="faq-list">
              {category.questions.map((faq, qIndex) => {
                const key = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === key;
                
                return (
                  <div key={qIndex} className={`faq-item ${isOpen ? 'active' : ''}`}>
                    <button 
                      className="faq-question"
                      onClick={() => toggleFAQ(catIndex, qIndex)}
                    >
                      <span>{faq.q}</span>
                      <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

       
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";
export default FAQ;