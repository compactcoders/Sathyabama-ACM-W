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
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Torquent taciti ridiculus efficitur magna lectus metus.
                        Egestas elementum class platea nisi phasellus enim orci nam. Taciti etiam lectus ac porttitor phasellus metus.
                        Ligula phasellus curabitur porttitor ante posuere. Vivamus laicina fames euismod porttitor quis.
                    </p>
                    <button className="read-btn">READ NOW</button>
                </div>
                <div className="featured-image"></div>
            </section>

            {/* Categories */}
            <div className="categories">
                <button className="category-btn active">ALL ARTICLES</button>
                <button className="category-btn">CATEGORY 1</button>
                <button className="category-btn">CATEGORY 2</button>
                <button className="category-btn">CATEGORY 3</button>
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
