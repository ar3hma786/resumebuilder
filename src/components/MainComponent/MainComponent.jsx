import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Profile from '../ResumePost/Profile/Profile';
import Footer from '../Footer/Footer';
import "./MainComponent.css";
import CheckResume from '../ResumeGet/CheckResume/CheckResume';

function MainComponent() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Profile />} />
                    <Route path="/checkresume" element={<CheckResume />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default MainComponent;
