import React, { useState, useEffect } from 'react';
import './ViewResume.css';
import Profile from './Profile/Profile';
import Experience from './Experience/Experience';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';

function ViewResume() {
    const [leftColumnContent, setLeftColumnContent] = useState([]);
    const [rightColumnContent, setRightColumnContent] = useState([]);

    useEffect(() => {
        const splitContentIntoColumns = () => {
            // Assuming these components return JSX elements
            const experience = <Experience />;
            const education = <Education />;
            const skills = <Skills />;
            const projects = <Projects />;

            setLeftColumnContent([experience, education, skills]);
            setRightColumnContent([projects]);
        };

        splitContentIntoColumns();
    }, []);

    return (
        <div className="view-resume">
            <div className="container text-center">
                <div className="resume">
                    <div className="resume-box m-0 mt-5">
                        <Profile />
                        <div className="two-column-text">
                            <div className="column" id="left-column" style={{ backgroundColor: 'transparent' }}>
                                {leftColumnContent.map((content, index) => (
                                    <div key={index}>{content}</div>
                                ))}
                            </div>
                            <div className="column" id="right-column" style={{ backgroundColor: 'transparent' }}>
                                {rightColumnContent.map((content, index) => (
                                    <div key={index}>{content}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewResume;
