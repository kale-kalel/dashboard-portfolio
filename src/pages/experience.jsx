import React from 'react';
import ExperienceCard from '../components/molecule/card-experience.jsx';
import Button from '../components/atom/button.jsx';
import expPic1 from '../assets/exp-pic-01.png';

const Experience = ({ onCardClick }) => {
    return (
        <div className="experience-grid">

            {/* EXPERIENCE 1 */}
            <ExperienceCard
                className="experience-card"
                onClick={() => onCardClick('Experience 1')}
            >
                <div className="experience-card-image">
                    <img src={expPic1} alt="experience-1" />
                </div>

                <div className="experience-card-content">
                    <h3>Data Visualization Trainee</h3>
                    <p>Excelerate</p>
                    <span>07/2026 - 08/2026</span>

                    <Button>
                        Details
                    </Button>
                </div>
            </ExperienceCard>

        </div>
    );
};

export default Experience;