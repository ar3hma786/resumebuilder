import React, { useState } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import "./Experience.css";

function Experience() {
    const [experiences, setExperiences] = useState([
        {
            experienceId: "",
            companyName: "",
            position: "",
            location: "",
            startDate: "",
            endDate: "",
            description: `<ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>`
        },

    ]);

    return (
        <div className='experience' style={{ backgroundColor: 'transparent' }}>
            <h3 className='text-start' style={{ fontSize: '1.5rem' }}>EXPERIENCE</h3>
            <div className="line">
                <hr className="thick-line mt-0" style={{ backgroundColor: 'black', height: '4px' }} />
                <div className="container">
                    {experiences.map((experience, index) => (
                        <div className="row mb-3" key={index}>
                            <div className="col-12">
                                <div className="position">
                                    <h5 className='text-start' style={{ fontSize: '1.2rem', backgroundColor: 'transparent' }}> {experience.position}</h5>
                                </div>
                                <div className="companyName">
                                    <h6 className='text-start text-primary' style={{ fontSize: '1rem', backgroundColor: 'transparent' }}> {experience.companyName}</h6>
                                </div>
                                <div className="date d-flex align-items-center">
                                    <div className="startDate d-flex me-2">
                                        <MdOutlineDateRange style={{ marginTop: '1px', fontSize: '1.1rem', backgroundColor: 'transparent' }} /> <h6 className='text-start mb-0 ms-1' style={{ fontSize: '1rem', backgroundColor: 'transparent' }}>{experience.startDate} - </h6>
                                    </div>
                                    <h6 className='text-start mb-0 endDate' style={{ fontSize: '1rem', backgroundColor: 'transparent' }}>{experience.endDate}</h6>
                                    <div className="location d-flex">
                                        <CiLocationOn style={{ marginTop: '1px', fontSize: '1.1rem', backgroundColor: 'transparent' }} />
                                        <h6 className='text-start mb-0 ms-1' style={{ fontSize: '1rem', backgroundColor: 'transparent' }}>{experience.location}</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <p></p>
                                <p dangerouslySetInnerHTML={{ __html: experience.description }} className='text-start' style={{ fontSize: '0.9rem', backgroundColor: 'transparent' }}></p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
