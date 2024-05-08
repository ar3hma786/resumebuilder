import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./CheckResume.css";
import ViewResume from '../ViewResume/ViewResume';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

function CheckResume() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const handleEdit = () => {
        navigate('/');
    };

    const downloadPDF = () => {
        const capture = document.querySelector('.view-resume');
        const containerWidth = capture.offsetWidth;
        const containerHeight = capture.offsetHeight;
        const scale = 2; // Adjust scale as needed for better resolution
        setLoader(true);

        // Create a canvas element with adjusted dimensions
        const canvas = document.createElement('canvas');
        canvas.width = containerWidth * scale;
        canvas.height = containerHeight * scale;
        canvas.style.width = containerWidth + 'px';
        canvas.style.height = containerHeight + 'px';

        const context = canvas.getContext('2d');
        context.scale(scale, scale);

        // Render HTML to canvas
        html2canvas(capture, { canvas: canvas }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', [containerWidth, containerHeight]);
            pdf.addImage(imgData, 'PNG', 0, 0, containerWidth, containerHeight);
            pdf.save('resume.pdf');
            setLoader(false);
        });
    };

    return (
        <div className="check-resume">
            <div className="container text-center">
                <h1 className="display-4 text-dark pb-2">Congratulations! Your Resume is Ready.</h1>
                <p className="lead text-muted m-0 pb-5">Your professional resume is just a click away. Download it now and start applying for your dream job.</p>
                <button className="btn btn-outline-primary btn-lg me-2" onClick={handleEdit}>Edit Resume</button>
                <button className="btn btn-primary btn-lg" onClick={downloadPDF}>Download Resume</button>
                <div className='view-resume'>
                    <ViewResume />
                </div>
            </div>
        </div>
    );
}

export default CheckResume;
