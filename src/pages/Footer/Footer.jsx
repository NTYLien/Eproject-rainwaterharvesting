import React from 'react';
import './Footer.css'
import ContactForm from "./ContactForm";

function Footer(props) {
    return (
        <div>
            <footer>
                <div className="main-footer">
                    <div className="info-footer">
                        <h3>Contact</h3>
                        <p>Hotline: <span className='info-text'>1068.6801</span></p>
                        <p>Email: <span className='info-text'>rainwaterharvesting2024@gmail.com</span></p>
                        <p>Address: <span className='info-text'>590 Cach Mang Thang 8, Ward 11, District 10, Ho Chi Minh City, VietNam.
                        </span></p>
                        <h3 className='follow-us'>Follow Us On</h3>
                        <div className='social-media-icon'>
                            <ul class="social-media-list">
                                <li><a href="#" target="_blank" class="contact-icon">
                                    <i class="fab fa-github" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" class="contact-icon">
                                    <i class="fab fa-codepen" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" class="contact-icon">
                                    <i class="fab fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li><a href="#" target="_blank" class="contact-icon">
                                    <i class="fab fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-footer">
                        <ContactForm />

                    </div>
                </div>
                <div className='copyright'>
                    <p> <i class="fa-regular fa-copyright"></i> 2024 Rainwater Harvesting. All Rights Reserved</p>
                </div>
            </footer>

        </div>
    );
}

export default Footer;