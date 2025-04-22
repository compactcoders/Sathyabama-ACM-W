import React from "react";
import "../styles/Blogs.css";
import blogsData from "../data/Blogs_data";

const Blogs = () => {
    return (
        <div className="blogs-page">
            <h1 className="page-title">BLOGS</h1>

            {/* Featured Article */}
            <section className="featured-article">
                <div className="featured-content">
                    <h2 className="featured-title">FEATURED ARTICLE</h2>
                    <p className="featured-text">
                    Welcome to the official ACM-W blog, a space dedicated to empowering women in the field of computing. Our blog highlights inspiring stories, groundbreaking research, emerging technologies, and the accomplishments of women making a mark in the tech world. From interviews with trailblazing leaders to advice on navigating the tech industry, ACM-W blogs offer valuable insights, mentorship, and resources to support women in their academic and professional journeys. Whether you're a student, a professional, or just passionate about tech, our blog provides a platform to stay informed, inspired, and connected with a global community of women in computing.
                    </p>
                    <button className="read-btn">Coming Soon!</button>
                </div>
                <div className="featured-image"></div>
            </section>

            {/* Categories */}
            <div className="categories">
                <button className="category-btn active">ALL ARTICLES</button>
            </div>

            {/* Articles Grid */}
            <section className="articles-grid">
                {blogsData.map((blog, index) => (
                    <div className="blog-card" key={index}>
                        <div className="blog-image"></div>
                        <div className="blog-content">
                            <span className="category-label">CATEGORY</span>
                            <h3 className="blog-title">{blog.title}</h3>
                            <div className="blog-footer">
                                <a href={blog.link} className="read-link">Read Now</a>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Blogs;
