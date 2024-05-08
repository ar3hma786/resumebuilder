import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'
import Experience from "../Experience/Experience";
import { createProfile } from "../../APIService/APIService";// assuming this component is defined elsewhere

function Profile({ profileId }) {
  const [showExperience, setShowExperience] = useState(false);
  const [values, setValues] = useState({
    profileId: profileId,
    name: "",
    email: "",
    phone: "",
    address: "",
    linkedIn: "",
    portfolioWebsite: ""
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      // Send profile data to the backend API
      const response = await createProfile(values); // Send values as request body
      console.log(response.data); // Log response from the backend
      setShowExperience(true);
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };


  useEffect(() => {
    return () => {
      setShowExperience(false);
    };
  }, [values.profileId]);

  return (
    <div className="profile ">
      <div className="header-background">
        <div className="container text-center">
          <h1 className="display-4 text-dark">Create Your Resume in Minutes</h1>
          <p className="lead text-dark m-0">Quickly and easily create a professional-looking resume with our intuitive resume builder.</p>
        </div>
      </div>
      <form className="p-3">
        <div className="container">
          <h3 className="display-6 mb-4">Create Profile</h3>
          <div className="form-row">
            <div className="form-group row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center mb-3">
                <label htmlFor="name" className="me-4">Name</label>
                <input
                  type="text"
                  className="form-control form-control-fixed"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-md-6 d-flex align-items-center mb-3">
                <label htmlFor="email" className="email">Email</label>
                <input
                  type="email"
                  className="form-control form-control-fixed"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center mb-3">
                <label htmlFor="phone" className="phone">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-md-6 d-flex align-items-center mb-3">
                <label htmlFor="address" className="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-lg-6 col-md-6 d-flex align-items-center mb-3">
                <label htmlFor="linkedIn" className="me-2">LinkedIn</label>
                <input
                  type="text"
                  className="form-control"
                  id="linkedIn"
                  value={values.linkedIn}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 col-md-6 d-flex align-items-center">
                <label htmlFor="portfolioWebsite" className="portfolioWebsite">Portfolio</label>
                <input
                  type="text"
                  className="form-control"
                  id="portfolioWebsite"
                  value={values.portfolioWebsite}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className="container d-flex justify-content-end">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Next</button>
      </div>
      {showExperience && <Experience />}
    </div>
  );
}

export default Profile;