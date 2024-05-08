import React, { useState } from 'react';
import "./Projects.css"; // Import CSS file for custom styling

function Projects() {
    const [projects, setProjects] = useState([
        {
            projectId: "1",
            projectName: "Wafa Enterprises - Payment Application",
            technologyUsed: "React JSX, Spring Boot, Spring Data JPA, Hibernate, Spring Security, MySQL",
            skillUsed: "Communication, Problem-solving, Team Collaboration",
            projectDescription: "Wafa Enterprises is a sophisticated payment application designed to facilitate lucky draw transactions. It offers both Admin and User login functionalities, allowing seamless access to transaction details and account management."
        },
        {
            projectId: "2",
            projectName: "Movie Booking - Payment Application",
            technologyUsed: "React JSX, Spring Boot, Spring Data JPA, Hibernate, Spring Security, MySQL, RazorPay",
            skillUsed: "Communication, Problem-solving, Critical Thinking",
            projectDescription: "Movie Booking - Payment Application facilitates movie ticket bookings and payments. It utilizes advanced technologies like React JSX, Spring Boot, Spring Data JPA, Hibernate, Spring Security, MySQL, and RazorPay for secure and efficient booking experiences."
        },
        {
            projectId: "3",
            projectName: "Resume Builder - Application",
            technologyUsed: "React JSX, Spring Boot, Spring Data JPA, Hibernate, MySQL",
            skillUsed: "Communication, Problem-solving, Critical Thinking",
            projectDescription: "Resume Builder - Application assists users in creating professional resumes effortlessly. It employs React JSX, Spring Boot, Spring Data JPA, Hibernate, and MySQL for seamless user experiences."
        },
        {
            projectId: "4",
            projectName: "Email Scheduler - Application",
            technologyUsed: "Spring Boot, Spring Data JPA, Hibernate, MySQL, PDFTOJAVA",
            skillUsed: "Communication, Problem-solving, Critical Thinking, Team-Collaboration",
            projectDescription: "Email Scheduler Application automates sending emails with resumes to HR. It uses Spring Boot, Spring Data JPA, Hibernate, MySQL, and PDFTOJAVA for efficient scheduling and delivery."
        },
        {
            projectId: "5",
            projectName: "Prank Payment - Application",
            technologyUsed: "React Native, Spring Boot, Spring Data JPA, Hibernate, MySQL",
            skillUsed: "Communication, Problem-solving, Critical Thinking",
            projectDescription: "Prank Payment Application is a unique project developed with React Native for the frontend and Spring Boot for the backend. It simulates a payment application interface but with a humorous twist."
        }
    ]);

    return (
        <div className='projects'>
            <h3 className='text-start' style={{ fontSize: '1.5rem' }}>PROJECTS</h3>
            <div className="line">
                <hr className="thick-line mt-0" style={{ backgroundColor: 'black', height: '4px' }} />
            </div>
            <div className="container">
                <div className="row mb-4">
                    {projects.map((project, index) => (
                        <div className="col-12" key={index}>
                            <div className="project-name">
                                <h5 className='text-start text-primary' style={{ fontSize: '1rem' }}> {project.projectName}</h5>
                            </div>
                            <ul className="project-details">
                                <li className='text-start mb-2' style={{ fontSize: '0.9rem' }}><strong>Description:</strong> {project.projectDescription}</li>
                                <li className='text-start mb-2' style={{ fontSize: '0.9rem' }}><strong>Technology Used:</strong> {project.technologyUsed}</li>
                                <li className='text-start mb-2' style={{ fontSize: '0.9rem' }}><strong>Skills Used:</strong> {project.skillUsed}</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
