import React, { useState } from 'react';

function Skills() {
    const [skills, setSkills] = useState([
        {
            skillId: "1",
            skillName: "Java",
        },
        {
            skillId: "2",
            skillName: "Springboot",
        },
        {
            skillId: "3",
            skillName: "Spring Data JPA",
        },
        {
            skillId: "4",
            skillName: "Hibernate",
        },
        {
            skillId: "5",
            skillName: "REST API",
        },
        {
            skillId: "6",
            skillName: "Microservices",
        },
        {
            skillId: "7",
            skillName: "Spring Security",
        },
        {
            skillId: "8",
            skillName: "JWT , OAuth",
        },
        {
            skillId: "9",
            skillName: "MySQL",
        },
        {
            skillId: "10",
            skillName: "React JSX",
        },
        {
            skillId: "11",
            skillName: "React Native",
        },
        {
            skillId: "12",
            skillName: "HTML",
        },
        {
            skillId: "13",
            skillName: "CSS",
        },
        {
            skillId: "14",
            skillName: "Bootstrap",
        },
        {
            skillId: "15",
            skillName: "JavaScript",
        },
        {
            skillId: "16",
            skillName: "Docker",
        },
        {
            skillId: "17",
            skillName: "GitHub",
        },
        {
            skillId: "18",
            skillName: "Postman",
        },
        {
            skillId: "19",
            skillName: "VS Code",
        },
        {
            skillId: "20",
            skillName: "AWS",
        }
    ]);

    return (
        <div className='skills '>
            <h3 className='text-start' style={{ fontSize: '1.5rem' }}>SKILLS</h3>
            <div className="line">
                <hr className="thick-line mt-0" style={{ backgroundColor: 'black', height: '4px' }} />
            </div>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {skills.map((skill, index) => (
                    <div key={index} className="c">
                        <div className="" style={{ border: '1px solid black', borderRadius: '10px', textAlign: 'center', alignItems: 'center', width: 'fit-content', fontSize: '0.8rem', padding: '5px', marginBottom: '5px', marginRight: '10px' }}>{skill.skillName}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
