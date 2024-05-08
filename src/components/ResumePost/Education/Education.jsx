import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import Skills from '../Skills/Skills';

function Education() {
    const [showSkills, setShowSkills] = useState(false);
    const [education, setEducation] = useState([
        {
            EducationId: "",
            schoolName: "",
            degree: "",
            grade: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: ""
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = [...education];
        updatedEducation[index][name] = value;
        setEducation(updatedEducation);
    };

    const handleAddEducation = () => {
        setEducation([
            ...education,
            {
                EducationId: "",
                schoolName: "",
                degree: "",
                grade: "",
                fieldOfStudy: "",
                startDate: "",
                endDate: ""
            }
        ]);
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(education);
        setShowSkills(true);
    };

    return (
        <div className="education">
            <form className="p-3">
                <div className="container">
                    <h3 className="display-6 mb-4">Education</h3>
                    {education.map((edu, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`schoolName-${index}`} className="form-label">University Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`schoolName-${index}`}
                                    name="schoolName"
                                    value={edu.schoolName}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`degree-${index}`} className="form-label">Degree</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`degree-${index}`}
                                    name="degree"
                                    value={edu.degree}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`grade-${index}`} className="form-label">Grade</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`grade-${index}`}
                                    name="grade"
                                    value={edu.grade}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`fieldOfStudy-${index}`} className="form-label">Field Of Study</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`fieldOfStudy-${index}`}
                                    name="fieldOfStudy"
                                    value={edu.fieldOfStudy}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`startDate-${index}`} className="form-label">Start Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`startDate-${index}`}
                                    name="startDate"
                                    value={edu.startDate}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`endDate-${index}`} className="form-label">End Date</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`endDate-${index}`}
                                    name="endDate"
                                    value={edu.endDate}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3 d-flex align-items-center">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => handleRemoveEducation(index)}
                                    style={{ color: 'red' }}
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
                    onClick={handleAddEducation}
                >
                    <FaPlus size={24} />
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Next</button>
            </div>
            {showSkills && <Skills />}
        </div>
    );
}

export default Education;
