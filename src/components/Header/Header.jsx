import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Header.css'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg header ">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#">ResumeGenius</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item page me-3">
                                <a className="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                            </li>

                            <li className="nav-item page me-3">
                                <a className="nav-link active text-secondary" aria-current="page" href="#">About</a>
                            </li>

                            <li className="nav-item page me-3">
                                <a className="nav-link active text-secondary" aria-current="page" href="#">Contact Us</a>
                            </li>

                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2 search" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark submit" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Header;