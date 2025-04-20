import React from "react";
import "../styles/ACM_Membership.css";
import membershipData from "../data/membershipData";
import "./Navbar"

const MembershipACM = () => {
    return (
        <div className="membership-page">
            <main>
                <h1 className="page-title">{membershipData.title}</h1>

                {membershipData.sections.map((section, index) => (
                    <section className="content-section" key={index}>
                        <h2 className="section-title">{section.sectionTitle}</h2>
                        <p className="section-content">{section.content}</p>

                        {section.benefits && (
                            <div className="benefits-grid">
                                {section.benefits.map((benefit, idx) => (
                                    <div className="benefit-card" key={idx}>
                                        <h3 className="benefit-title">{benefit.title}</h3>
                                        <p className="benefit-description">{benefit.description}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {section.membershipLinks && (
                            <div className="membership-buttons">
                                {section.membershipLinks.map((link, idx) => (
                                    <a href={link.url} className="join-btn" key={idx}>
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </section>
                ))}
            </main>
        </div>
    );
};

export default MembershipACM;
