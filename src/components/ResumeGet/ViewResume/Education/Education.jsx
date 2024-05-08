import React, { useState } from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Education() {
    const [education, setEducation] = useState([
        {
            educationId: "1",
            schoolName: "Sahyadri College of Engineering and Management",
            degree: "Bachelor of Engineering",
            fieldOfStudy: "Mechanical",
            grade: "7.0 CGPA",
            startDate: "2016",
            endDate: "2020",
            location: "Mangalore, India"
        },
        // Add more education objects as needed
    ]);

    return (
        <div className='education' style={{ backgroundColor: 'white' }}>
            <h3 className='text-start' style={{ fontSize: '1.5rem' }}>EDUCATION</h3>
            <div className="line">
                <hr className="thick-line mt-0" style={{ backgroundColor: 'black', height: '4px' }} />
                <div className="container">
                    <div className="row mb-4">
                        {education.map((edu, index) => (
                            <div className="col-12" key={index}>
                                <div className="degree">
                                    <h5 className='text-start' style={{ fontSize: '1.2rem' }}>{edu.degree} ({edu.fieldOfStudy})</h5>
                                </div>
                                <div className="school">
                                    <h6 className='text-start text-primary' style={{ fontSize: '1rem' }}>{edu.schoolName}</h6>
                                </div>
                                <div className="date d-flex align-items-center">
                                    <div className="startDate d-flex me-2">
                                        <MdOutlineDateRange style={{ marginTop: '1px', fontSize: '1.1rem' }} /> <h6 className='text-start mb-0 ms-1' style={{ fontSize: '1rem' }}>{edu.startDate} - </h6>
                                    </div>
                                    <h6 className='text-start mb-0 endDate' style={{ marginRight: '100px', fontSize: '1rem' }}>{edu.endDate}</h6>
                                    <div className="location d-flex">
                                        <CiLocationOn style={{ marginTop: '3px', fontSize: '1.1rem' }} />
                                        <h6 className='text-start mb-0 ms-1' style={{ fontSize: '1rem' }}>{edu.location}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;
