import React from "react";
import "./BlogSection.css";

const blogPosts = [
  {
    id: 1,
    category: "Technology",
    readTime: "15 min read",
    title: "The Impact of Technology on Home Services",
    summary: "Discover how smart home technology is revolutionizing the way we maintain and repair our homes.",
    author: "Tracey Wilson",
    date: "6 May, 2025",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
  },
  {
    id: 2,
    category: "DIY",
    readTime: "10 min read",
    title: "Essential Tools Every Homeowner Should Have",
    summary: "A comprehensive guide to building your home maintenance toolkit for common repairs and projects.",
    author: "Mike Anderson",
    date: "29 April, 2025",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    image: "https://images.pexels.com/photos/4145195/pexels-photo-4145195.jpeg",
  },
  {
    id: 3,
    category: "Sustainability",
    readTime: "8 min read",
    title: "Sustainable Home Maintenance Practices",
    summary: "Learn eco-friendly approaches to maintaining your home while reducing your environmental impact.",
    author: "Sarah Chen",
    date: "18 April, 2025",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    image: "https://images.pexels.com/photos/210679/pexels-photo-210679.jpeg",
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <div className="blog-meta">
                <span className="category">{post.category}</span>
                <span className="read-time">⏱ {post.readTime}</span>
              </div>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-summary">{post.summary}</p>
              <div className="blog-author">
                <img src={post.avatar} alt={post.author} className="author-avatar" />
                <div>
                  <p className="author-name">{post.author}</p>
                  <p className="post-date">{post.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
