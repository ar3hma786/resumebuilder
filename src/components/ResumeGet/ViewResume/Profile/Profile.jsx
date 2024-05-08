import React, { useEffect, useState } from 'react';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarker, FaLinkedin } from 'react-icons/fa';
import { BsLink45Deg } from 'react-icons/bs';
import { useParams } from 'react-router-dom'; // Import useParams
import { getProfile } from '../../../APIService/APIService';

function Profile() {
    const { profileId } = useParams(); // Fetch profileId from useParams
    const [profile, setProfile] = useState({
        profileId: "",
        name: "",
        email: "",
        phone: "",
        role: "",
        address: "",
        linkedIn: "",
        portfolioWebsite: ""
    });

    useEffect(() => {
        if (profileId) {
            getProfile(profileId).then((response) => {
                setProfile(response);
            }).catch((error) => {
                console.error('Error fetching profile:', error.message);
            });
        }
    }, [profileId]); // Add profileId to the dependency array

    return (
        <section className="profile-container">
            <div className="">
                <div className="profile-info container">
                    <h1 className='name text-start'>{profile.name}</h1>
                    <h3 className='role text-start'>{profile.role}</h3>
                    <ul className="list-unstyled row lists">
                        <li className="col-lg-4 col-md-4 col-sm-4 details mb-2">
                            <span className="text-left"><FaEnvelope className="icon" />{profile.email}</span>
                        </li>
                        <li className="col-lg-4 col-md-4 col-sm-4 details mb-2">
                            <a className='linkedIn' href={profile.linkedIn} style={{ textDecoration: 'none', color: 'black' }}><FaLinkedin className="icon" />{profile.linkedIn}</a>
                        </li>
                        <li className="col-lg-4 col-md-4 col-sm-4 details mb-2">
                            <span className="text-left"><FaPhoneAlt className="icon" /> {profile.phone}</span>
                        </li>
                        <li className="col-lg-4 col-md-4 col-sm-4 details">
                            <span className="text-left"><FaMapMarker className="icon" />{profile.address}</span>
                        </li>
                        <li className="col-lg-4 col-md-4 col-sm-4 details">
                            <a className='portfolioWebsite' href={profile.portfolioWebsite} style={{ textDecoration: 'none', color: 'black' }}>
                                <BsLink45Deg className="icon" />
                                {profile.portfolioWebsite}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Profile;
