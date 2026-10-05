import React from 'react';
import expPic1 from '../../assets/exp-pic-01.png';

import {
    EmailIcon,
    LinkedInIcon,
    InstagramIcon,
    FacebookIcon
} from '../atom/icon.jsx';

const Modal = ({ activeModal, onClose }) => {
    if (!activeModal) return null;

    return (
        <div
            className="modal show"
            style={{
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1050
            }}
            onClick={onClose}
        >
            <div
                className="modal-dialog modal-lg"
                style={{ margin: '10% auto' }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-content">
                    <div
                        className="modal-body"
                        style={{
                            minHeight: '200px',
                            padding: '2rem'
                        }}
                    >

                        {/* ABOUT ME */}
                        {activeModal === 'About Me' && (
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '15px'
                                    }}
                                >
                                    <h2 style={{ margin: 0 }}>
                                        About Me
                                    </h2>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <h5>
                                    Hello, I'm Jian Kalel D. Marquez
                                </h5>

                                <div className="dash-modal-content">
                                    <p>
                                        Hardworking data analyst intern,
                                        motivated to learn and grow, with a
                                        passion for uncovering insights and
                                        applying them to solve real-world
                                        problems to support organizations in
                                        making informed decisions.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* CONNECT W ME */}
                        {activeModal === 'Connect With Me' && (
                            <div>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <h2 style={{ margin: 0 }}>
                                        Let's Connect
                                    </h2>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <ul
                                    style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}
                                >

                                    {/* EMAIL */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="mailto:kalelmarquez04@gmail.com"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                textDecoration: 'none',
                                                color: '#262F50',
                                                fontWeight: '500',
                                                padding: '0 1.5rem'
                                            }}
                                        >
                                            <EmailIcon />
                                            Email Me
                                        </a>
                                    </li>

                                    {/* LINKEDIN */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="https://linkedin.com/in/yourprofile"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                textDecoration: 'none',
                                                color: '#262F50',
                                                fontWeight: '500',
                                                padding: '0 1.5rem'
                                            }}
                                        >
                                            <LinkedInIcon />
                                            LinkedIn
                                        </a>
                                    </li>

                                    {/* INSTAGRAM */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="https://www.instagram.com/lellskii?stkn=M3ZheGxrdG4xbzVz&utm_source=qr"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                textDecoration: 'none',
                                                color: '#262F50',
                                                fontWeight: '500',
                                                padding: '0 1.5rem'
                                            }}
                                        >
                                            <InstagramIcon />
                                            Instagram
                                        </a>
                                    </li>

                                    {/* FACEBOOK */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="https://www.facebook.com/kalel.marquez.2024"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                textDecoration: 'none',
                                                color: '#262F50',
                                                fontWeight: '500',
                                                padding: '0 1.5rem'
                                            }}
                                        >
                                            <FacebookIcon />
                                            Facebook
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        )}

                        {/* PROJECT N EXP */}
                        {activeModal === 'Projects and Experience' && (
                            <div>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <h2 style={{ margin: 0 }}>
                                        Qualifications
                                    </h2>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <div className="dash-modal-content">

                                    {/* CERTS */}
                                    <h5
                                        style={{
                                            margin: '10px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Certificates
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>
                                            Hackathon Champion - Skydev
                                            Solutions Inc.
                                        </li>
                                        <li>
                                            SQL Basic - HackerRank
                                        </li>
                                        <li>
                                            Introduction to Data Analytics -
                                            Meta (Coursera)
                                        </li>
                                        <li>
                                            Relational Database - freeCodeCamp
                                        </li>
                                        <li>
                                            Python Essentials 2 - Cisco
                                            Networking Academy
                                        </li>
                                    </ul>

                                    {/* PROJ */}
                                    <h5
                                        style={{
                                            margin: '10px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Projects
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>
                                            Vehicle Performance Analysis
                                        </li>
                                        <li>
                                            Interactive Earthquake Dashboard
                                        </li>
                                        <li>
                                            Exploratory Analysis on Superhero
                                            Dataset
                                        </li>
                                    </ul>

                                    {/* EXP */}
                                    <h5
                                        style={{
                                            margin: '10px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Experience
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>
                                            Data Visualization Trainee -
                                            Excelerate
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        )}

                        {/* TECH */}
                        {activeModal === 'Tech' && (
                            <div>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <h2 style={{ margin: 0 }}>
                                        Skills
                                    </h2>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <div className="dash-modal-content">

                                    {/* TECHNICAL */}
                                    <h5
                                        style={{
                                            margin: '10px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Technical Skills
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>MySQL</li>
                                        <li>Python</li>
                                        <li>Looker Studio</li>
                                        <li>Google Sheets</li>
                                    </ul>

                                    {/* SOFT */}
                                    <h5
                                        style={{
                                            margin: '10px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Soft Skills
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>Teamwork</li>
                                        <li>Problem-solving</li>
                                        <li>Detail-oriented</li>
                                    </ul>

                                </div>
                            </div>
                        )}

                        {/* EXPERIENCE 1 */}
                        {activeModal === 'Experience 1' && (
                            <div>

                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <div>
                                        <h2 style={{ margin: 0 }}>
                                            Data Visualization Trainee
                                        </h2>

                                        <p style={{ margin: '5px 0 0 0' }}>
                                            Excelerate
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                {/* IMAGE */}
                                <div
                                    style={{
                                        width: '100%',
                                        marginBottom: '20px'
                                    }}
                                >
                                    <img
                                        src={expPic1}
                                        alt="Data Visualization Trainee at Excelerate"
                                        style={{
                                            width: '100%',
                                            display: 'block'
                                        }}
                                    />
                                </div>

                                {/* DATE */}
                                <p
                                    style={{
                                        marginBottom: '20px',
                                        fontWeight: '500'
                                    }}
                                >
                                    July 2026 – August 2026
                                </p>

                                <div className="dash-modal-content">

                                    {/* OVERVIEW */}
                                    <h5
                                        style={{
                                            margin: '10px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Overview
                                    </h5>

                                    <p
                                        style={{
                                            paddingLeft: '1.5rem',
                                            paddingRight: '1.5rem'
                                        }}
                                    >
                                        Served as a project lead throughout the
                                        internship, overseeing dataset
                                        validation and ensuring data quality
                                        using Google Sheets and Python.
                                    </p>

                                    {/* RESPONSIBILITIES */}
                                    <h5
                                        style={{
                                            margin: '20px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Responsibilities
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>
                                            Performed exploratory data analysis
                                            to identify trends and generate
                                            insights.
                                        </li>

                                        <li>
                                            Developed an interactive data
                                            visualization dashboard to
                                            communicate key metrics and
                                            findings.
                                        </li>

                                        <li>
                                            Presented the project's process,
                                            findings, and recommendations.
                                        </li>
                                    </ul>

                                    {/* TOOLS */}
                                    <h5
                                        style={{
                                            margin: '20px 0 0 0',
                                            fontWeight: 'bold',
                                            paddingLeft: '1.5rem'
                                        }}
                                    >
                                        Tools
                                    </h5>

                                    <ul
                                        style={{
                                            paddingLeft: '4.5rem',
                                            marginBottom: '0'
                                        }}
                                    >
                                        <li>Google Sheets</li>
                                        <li>Python</li>
                                        <li>Power BI</li>
                                    </ul>

                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;