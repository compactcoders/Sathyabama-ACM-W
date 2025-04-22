import React from "react";
import "../styles/ACM_Membership.css";
import membershipData from "../data/membershipData";
import { FaCheckCircle, FaPen, FaLink, FaDollarSign, FaRegFileAlt } from "react-icons/fa";
import "./Navbar";

const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const output = [];
    let currentList = [];

    lines.forEach((line, idx) => {
        const trimmed = line.trim();

        if (trimmed.startsWith("**") && trimmed.endsWith(":")) {
            // Push previous list if exists
            if (currentList.length > 0) {
                output.push(<ol key={`list-${idx}`}>{currentList}</ol>);
                currentList = [];
            }
            const headingText = trimmed.replace(/\*\*/g, "").slice(0, -1);
            output.push(<h4 key={`heading-${idx}`} className="section-heading">{headingText}</h4>);
        } else if (/^\d+\.\s/.test(trimmed)) {
            currentList.push(
                <li key={`step-${idx}`} className="step-item">
                    <span className="step-icon">
                        {idx === 0 && <FaPen />}
                        {idx === 1 && <FaRegFileAlt />}
                        {idx === 2 && <FaCheckCircle />}
                        {idx === 3 && <FaLink />}
                        {idx === 4 && <FaDollarSign />}
                    </span>
                    {trimmed}
                </li>
            );
        } else {
            // Push previous list if exists
            if (currentList.length > 0) {
                output.push(<ol key={`list-${idx}`}>{currentList}</ol>);
                currentList = [];
            }
            output.push(<p key={`para-${idx}`}>{trimmed}</p>);
        }
    });

    // Push remaining list if any
    if (currentList.length > 0) {
        output.push(<ol key="final-list">{currentList}</ol>);
    }

    return output;
};

const MembershipACM = () => {
    return (
        <div className="membership-page">
            <main>
                <h1 className="page-title">{membershipData.title}</h1>

                {membershipData.sections.map((section, index) => (
                    <section className="content-section" key={index}>
                        <h2 className="section-title">{section.sectionTitle}</h2>
                        <div className="section-content">{renderContent(section.content)}</div>

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
                                    <a href={link.url} className="join-btn" key={idx} target="_blank" rel="noopener noreferrer">
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
