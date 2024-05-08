import React from 'react';
import "./Footer.css"
function Footer() {
    return (
        <footer className='footer'>
            <div className="container text-center py-4">
                <p>&copy; {new Date().getFullYear()} Resume Genius</p>
                <p>Crafted with love by our talented team</p>
                <ul className="list-inline mb-0">
                    <li className="list-inline-item m-2">
                        <a href="#" className="text-secondary">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item m-2">
                        <a href="#" className="text-secondary">Terms of Use</a>
                    </li>
                    <li className="list-inline-item m-2">
                        <a href="#" className="text-secondary">Contact Us</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;