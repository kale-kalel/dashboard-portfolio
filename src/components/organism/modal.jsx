import React from 'react';

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
                    <div className="modal-body" style={{ minHeight: '200px', padding: '2rem' }}>

                        {/* ABOUT ME */}
                        {activeModal === 'About Me' && (
                            <div>
                                {/* Flex container to align the title and close button side-by-side */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                                    <h2 style={{ margin: 0 }}>About Me</h2>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <h5>Hello, I'm Jian Kalel D. Marquez</h5>
                                <div className='dash-modal-content'>
                                    <p>Hardworking data analyst intern, motivated to learn and grow, with a passion for uncovering insights and
                                        applying them to solve real-world problems to support organizations in making informed decisions.</p>
                                </div>
                            </div>
                        )}

                        {/* CONNECT W ME */}
                        {activeModal === 'Connect With Me' && (
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h2 style={{ margin: 0 }}>Let's Connect</h2>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>

                                    {/* EMAIL */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="mailto:kalelmarquez04@gmail.com"
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#262F50', fontWeight: '500', padding: '0 1.5rem' }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                            Email Me
                                        </a>
                                    </li>

                                    {/* LINKEDIN */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="https://linkedin.com/in/yourprofile"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#262F50', fontWeight: '500', padding: '0 1.5rem' }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#0077b5">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                            LinkedIn
                                        </a>
                                    </li>

                                    {/* INSTAGRAM */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="https://www.instagram.com/lellskii?stkn=M3ZheGxrdG4xbzVz&utm_source=qr"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#262F50', fontWeight: '500', padding: '0 1.5rem' }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                            Instagram
                                        </a>
                                    </li>

                                    {/* FACEBOOK */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <a
                                            href="https://www.facebook.com/kalel.marquez.2024"
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: '#262F50', fontWeight: '500', padding: '0 1.5rem' }}
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                            Facebook
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        )}

                        {/* PROJECT N EXP */}
                        {activeModal === 'Projects and Experience' && (
                            <div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h2 style={{ margin: 0 }}>Qualifications</h2>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <div className='dash-modal-content'>
                                    {/* CERTS */}
                                    <h5 style={{ margin: '10px 0 0 0', fontWeight: 'bold', 'padding-left': '1.5rem' }}>Certificates</h5>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '0', 'padding-left': '4.5rem' }}>
                                        <li>Hackathon Champion - Skydev Solutions Inc.</li>
                                        <li>SQL Basic - HackerRank</li>
                                        <li>Introduction to Data Analytics - Meta (Coursera)</li>
                                        <li>Relational Database - freeCodeCamp</li>
                                        <li>Python Essentials 2 - Cisco Networking Academy</li>
                                    </ul>

                                    {/* PROJ */}
                                    <h5 style={{ margin: '10px 0 0 0', fontWeight: 'bold', 'padding-left': '1.5rem' }}>Projects</h5>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '0', 'padding-left': '4.5rem' }}>
                                        <li>Vehicle Performance Analysis</li>
                                        <li>Interactive Earthquake Dashboard</li>
                                        <li>Exploratory Analysis on Superhero Dataset</li>
                                    </ul>

                                    {/* EXP */}
                                    <h5 style={{ margin: '10px 0 0 0', fontWeight: 'bold', 'padding-left': '1.5rem' }}>Experience</h5>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '0', 'padding-left': '4.5rem' }}>
                                        <li>Data Visualization Trainee - Excelerate</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* TECH */}
                        {activeModal === 'Tech' && (

                            <div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                    <h2 style={{ margin: 0 }}>Skills</h2>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={onClose}
                                        aria-label="Close"
                                        style={{ cursor: 'pointer' }}
                                    >
                                    </button>
                                </div>

                                <div className='dash-modal-content'>
                                    {/* TECHNICAL */}
                                    <h5 style={{ margin: '10px 0 0 0', fontWeight: 'bold', 'padding-left': '1.5rem' }}>Technical Skills</h5>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '0', 'padding-left': '4.5rem' }}>
                                        <li>MySQL</li>
                                        <li>Python</li>
                                        <li>Looker Studio</li>
                                        <li>Google Sheets</li>
                                    </ul>

                                    {/* SOFT */}
                                    <h5 style={{ margin: '10px 0 0 0', fontWeight: 'bold', 'padding-left': '1.5rem' }}>Soft Skills</h5>
                                    <ul style={{ paddingLeft: '20px', marginBottom: '0', 'padding-left': '4.5rem' }}>
                                        <li>Teamwork</li>
                                        <li>Problem-solving</li>
                                        <li>Detail-oriented</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Modal;