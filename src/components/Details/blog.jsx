import React from 'react';
import './InfoPage.css';

function Blog() {
  const posts = [
    {
      id: 1,
      title: "Spring Fashion Trends 2024: What's Hot This Season",
      excerpt: "Discover the must-have styles and colors that are defining spring fashion this year.",
      category: "Fashion",
      date: "February 1, 2024",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "10 Essential Beauty Products Every Woman Needs",
      excerpt: "Build the perfect beauty routine with these must-have products that deliver real results.",
      category: "Beauty",
      date: "January 28, 2024",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "How to Style Your Home for Spring",
      excerpt: "Transform your living space with these easy and affordable spring decorating ideas.",
      category: "Home & Living",
      date: "January 25, 2024",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Tech Gadgets That Will Change Your Life",
      excerpt: "The latest electronics and smart devices that actually make your daily life easier.",
      category: "Technology",
      date: "January 22, 2024",
      image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Sustainable Shopping: How to Make Eco-Friendly Choices",
      excerpt: "Learn how to shop consciously and reduce your environmental impact without sacrificing style.",
      category: "Lifestyle",
      date: "January 18, 2024",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "The Ultimate Gift Guide for Every Occasion",
      excerpt: "Find the perfect gift for birthdays, anniversaries, and special celebrations.",
      category: "Gift Ideas",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=600",
      readTime: "10 min read"
    }
  ];

  const categories = ["All", "Fashion", "Beauty", "Home & Living", "Technology", "Lifestyle", "Gift Ideas"];

  return (
    <div className="info-page blog-page">
      <div className="container">
        <h1>ShopCraft Blog</h1>
        <p className="page-intro">Stay inspired with our latest trends, tips, and lifestyle guides.</p>
        
        <section className="blog-categories">
          {categories.map((category, index) => (
            <button key={index} className={`category-btn ${index === 0 ? 'active' : ''}`}>
              {category}
            </button>
          ))}
        </section>

        <section className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category-badge">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <a  className="read-more">
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="info-section newsletter-signup">
          <h2>Never Miss a Post</h2>
          <p>Subscribe to our newsletter and get the latest articles delivered to your inbox.</p>
          <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </section>

        <section className="info-section">
          <h2>Popular Topics</h2>
          <div className="topic-tags">
            <span className="tag">Spring Fashion</span>
            <span className="tag">Beauty Tips</span>
            <span className="tag">Home Decor</span>
            <span className="tag">Gift Guide</span>
            <span className="tag">Tech Reviews</span>
            <span className="tag">Sustainable Living</span>
            <span className="tag">Style Guides</span>
            <span className="tag">Product Reviews</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Blog;