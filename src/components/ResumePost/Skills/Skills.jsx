import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';
import Projects from '../Projects/Projects';

function Skills() {
    const [showProjects, setShowProjects] = useState(false);
    const [skills, setSkills] = useState([
        {
            skillId: "",
            skillName: "",
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSkills = [...skills];
        updatedSkills[index][name] = value;
        setSkills(updatedSkills);
    };

    const handleAddSkill = () => {
        setSkills([
            ...skills,
            {
                skillId: "",
                skillName: "",
            }
        ]);
    };

    const handleRemoveSkill = (index) => {
        const updatedSkills = skills.filter((_, i) => i !== index);
        setSkills(updatedSkills);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(skills);
        setShowProjects(true);
    };

    return (
        <div className="skills">
            <form className="p-3">
                <div className="container">
                    <h3 className="display-6 mb-4">Skills</h3>
                    {skills.map((skill, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-3 mb-3">
                                <label htmlFor={`skillName-${index}`} className="form-label">Skill Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`skillName-${index}`}
                                    name="skillName"
                                    value={skill.skillName}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-3 mt-3 d-flex align-items-center">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => handleRemoveSkill(index)}
                                    style={{ color: '#dc3545' }}
                                >
                                    <FaTrash size={24} />
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </form>
            <div className="container d-flex justify-content-end">
                <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={handleAddSkill}
                >
                    <FaPlus size={24} />
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Next</button>
            </div>
            {showProjects && <Projects />}
        </div>
    );
}

export default Skills;
