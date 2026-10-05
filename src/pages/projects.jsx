import React from 'react';
import projPic1 from '../assets/proj-pic-01.png';
import projPic2 from '../assets/proj-pic-02.png';
import projPic3 from '../assets/proj-pic-03.png';

const Projects = () => {
    return (
        <div className="projects-page">

            {/* TITLE */}
            <h2 className="projects-title">
                Projects
            </h2>

            <div
                id="projectsCarousel"
                className="carousel slide projects-carousel"
            >
                <div className="carousel-inner">

                    {/* PROJECT 1 */}
                    <div className="carousel-item active">
                        <a
                            href="https://github.com/kale-kalel/Attribute-Analysis-of-Fictional-Human-Characters"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <img
                                src={projPic1}
                                alt="Project 1"
                                className="project-image"
                            />
                        </a>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="carousel-item">
                        <a
                            href="https://github.com/kale-kalel/Earthquake-Interactive-Dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <img
                                src={projPic2}
                                alt="Project 2"
                                className="project-image"
                            />
                        </a>
                    </div>

                    {/* PROJECT 3 */}
                    <div className="carousel-item">
                        <a
                            href="https://github.com/kale-kalel/Vehicle-Sales-Performance-Analysis-and-Dashboard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <img
                                src={projPic3}
                                alt="Project 3"
                                className="project-image"
                            />
                        </a>
                    </div>

                </div>

                {/* PREVIOUS */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#projectsCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        className="project-carousel-arrow"
                        aria-hidden="true"
                    >
                        ‹
                    </span>

                    <span className="visually-hidden">
                        Previous
                    </span>
                </button>

                {/* NEXT */}
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#projectsCarousel"
                    data-bs-slide="next"
                >
                    <span
                        className="project-carousel-arrow"
                        aria-hidden="true"
                    >
                        ›
                    </span>

                    <span className="visually-hidden">
                        Next
                    </span>
                </button>

            </div>

        </div>
    );
};

export default Projects;