import React, { useState } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import "./Projects.css"
import { useNavigate } from 'react-router-dom';


function Projects() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([
        {
            projectId: "",
            projectName: "",
            projectTechUsed: "",
            projectDescription: "",
        }
    ]);

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedProjects = [...projects];
        updatedProjects[index][name] = value;
        setProjects(updatedProjects);
    };

    const handleAddProjects = () => {
        setProjects([
            ...projects,
            {
                projectId: "",
                projectName: "",
                projectTechUsed: "",
                projectDescription: "",
            }
        ]);
    };

    const handleRemoveProjects = (index) => {
        const updatedProjects = [...projects];
        updatedProjects.splice(index, 1);
        setProjects(updatedProjects);
    };

    const handleCheckResume = () => {
        navigate("/checkresume");
    }


    return (
        <div className="projects">
            <form className="p-3">
                <div className="container">
                    <h3 className="display-6 mb-4">Projects</h3>
                    {projects.map((project, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`projectName-${index}`} className="form-label">Project Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`projectName-${index}`}
                                    name="projectName"
                                    value={project.projectName}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor={`projectTechUsed-${index}`} className="form-label">Project Tech Used</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`projectTechUsed-${index}`}
                                    name="projectTechUsed"
                                    value={project.projectTechUsed}
                                    onChange={(e) => handleChange(e, index)}
                                />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label htmlFor={`projectDescription-${index}`} className="form-label">Project Description</label>
                                <textarea
                                    className="form-control"
                                    id={`projectDescription-${index}`}
                                    name="projectDescription"
                                    value={project.projectDescription}
                                    onChange={(e) => handleChange(e, index)}
                                    rows={4}
                                />
                            </div>
                            <div className="col-md-6 mt-3 d-flex align-items-center mb-3">
                                <button
                                    type="button"
                                    className="btn"
                                    onClick={() => handleRemoveProjects(index)}
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
                    onClick={handleAddProjects}
                >
                    <FaPlus size={24} />
                </button>

            </div>
            <div className="submitbutton pt-5">
                <button type="button " className="btn btn-warning submitbtn" onClick={handleCheckResume}>Check Resume</button>
            </div>
        </div>
    );
}

export default Projects;
