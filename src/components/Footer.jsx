import React from 'react';
import './Footer.css'
import ContactForm from './ContactForm';

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
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-tiktok"></i>
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