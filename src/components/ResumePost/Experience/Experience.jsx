import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import "./Experience.css";
import Education from '../Education/Education';
import { addExperience, deleteExperience, getExperience } from '../../APIService/APIService';

function Experience() {
    const [showEducation, setShowEducation] = useState(false);
    const [experiences, setExperiences] = useState([
        {
            experienceId: null,
            companyName: "",
            position: "",
            startDate: "",
            endDate: "",
            location: "",
            description: ""
        },
    ]);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await getExperience();
                setExperiences(response);
            } catch (error) {
                console.error('Error fetching experiences:', error.message);
            }
        };
        fetchExperiences();
    }, []);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedExperiences = [...experiences];
        updatedExperiences[index][name] = value;
        setExperiences(updatedExperiences);
    };

    const handleAddExperience = () => {
        setExperiences([
            ...experiences,
            {
                experienceId: null,
                companyName: "",
                position: "",
                startDate: "",
                endDate: "",
                location: "",
                description: ""
            }
        ]);
    };

    const handleRemoveExperience = async (index) => {
        const experience = experiences[index];
        console.log('experience.experienceId:', experience.experienceId);
        if (experience.experienceId && typeof experience.experienceId === 'number') {
            try {
                console.log('Deleting experience with ID:', experience.experienceId);
                await deleteExperience(experience.experienceId)
                console.log('Experience deleted successfully');
                const updatedExperiences = experiences.filter((_, i) => i !== index);
                setExperiences(updatedExperiences);
            } catch (error) {
                console.error('Error deleting experience:', error.message);
            }
        } else {
            console.error('Experience ID is not a number or undefined');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addExperience(experiences);
            console.log(response);
            setShowEducation(true);
        } catch (error) {
            console.error('Error adding experience:', error.message);
        }
    };

    return (
        <div className="experience">
            <form className="p-3">
                <div className="container">
                    <h3 className="display-6 mb-4">Experience</h3>
                    {experiences.map((experience, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`companyName-${index}`} className="form-label">Company Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`companyName-${index}`}
                                    name="companyName"
                                    value={experience.companyName}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`position-${index}`} className="form-label">Position</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`position-${index}`}
                                    name="position"
                                    value={experience.position}
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
                                    value={experience.startDate}
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
                                    value={experience.endDate}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`location-${index}`} className="form-label">Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`location-${index}`}
                                    name="location"
                                    value={experience.location}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`description-${index}`} className="form-label">Job Description</label>
                                <textarea
                                    className="form-control"
                                    id={`description-${index}`}
                                    name="description"
                                    value={experience.description}
                                    onChange={(e) => handleChange(e, index)}
                                    rows={4}
                                />
                            </div>
                            <div className="col-md-6 mb-3 d-flex align-items-center">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => handleRemoveExperience(index)}
                                    style={{ color: '#dc3545' }}
                                >
                                    <FaTrash size={24} />
                                </button>
                            </div>
                        </div> // Correct this code such that when next is clicked data is stored and shown and then it shows delete option 
                    ))}
                </div>
            </form>
            <div className="container d-flex justify-content-end">
                <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={handleAddExperience}
                >
                    <FaPlus size={24} />
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Next</button>
            </div>
            {showEducation && <Education />}
        </div>
    );
}

export default Experience;