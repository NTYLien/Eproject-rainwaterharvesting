import React from 'react';
import './ContactForm.css'

function ContactForm(props) {
    return (
        <div className='contact-form'>
            <h3>Send us your question</h3>
            <form action="#">
                <div className="user-details">
                    <div className='name-input'>
                        <div className="input-box">
                            <span className="details ">First Name *</span>
                            <input type="text" required />
                        </div>

                        <div className="input-box ">
                            <span className="details">Last name *</span>
                            <input type="text" required />
                        </div>
                    </div>

                    <div className="input-box">
                        <span className="details">Email *</span>
                        <input type="text" required />
                    </div>

                    <div className="input-box message-box">
                        <span className="details">Your message</span>
                        <br />
                        <textarea ></textarea>
                    </div>

                    <div className="subscribes-news-dot">
                        <input type='checkbox' name="subscribes" id="subscribes" />
                        <span>Subscribes to get our latest news</span>

                    </div>

                </div>

                <div className="button">
                    <input type="submit" value="Submit" />
                </div>
            </form>

        </div>
    );
}

export default ContactForm;