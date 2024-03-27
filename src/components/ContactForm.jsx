import React, { useState } from 'react';
import './ContactForm.css'
import { toast } from 'react-toastify';

function ContactForm(props) {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    return (
        <div className='contact-form'>
            <h3>Send us your question</h3>
            <form action="#">
                <div className="user-details">
                    <div className='name-input'>
                        <div className="input-box">
                            <span className="details ">First Name *</span>
                            <input type="text" required
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>

                        <div className="input-box ">
                            <span className="details">Last name *</span>
                            <input type="text" required
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="input-box">
                        <span className="details">Phone *</span>
                        <input type='tel' required
                            onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className="input-box">
                        <span className="details">Email *</span>
                        <input type="text" required
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-box message-box">
                        <span className="details">Your message</span>
                        <br />
                        <textarea onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>

                    <div className="subscribes-news-dot">
                        <input type='checkbox' name="subscribes" id="subscribes" />
                        <span>Subscribes to get our latest news</span>

                    </div>

                </div>

                <div className="button">
                    <input type="submit" value="Submit" onClick={(e) => {
                        e.preventDefault();
                        const infoContact = {
                            firstname: firstname.trim(),
                            lastname: lastname.trim(),
                            phone: phone.trim(),
                            email: email.trim(),
                            message: message.trim()

                        }
                        if (!firstname || !lastname || !phone || !email) {
                            toast.error("Sorry! Please fill-in required information before submit the form");
                            return;
                        }

                        const phoneRegEx = /^\d{8,}$/;
                        if (!infoContact.phone.match(phoneRegEx)) {
                            toast.error("Your phone number must be at least 8 digits")
                            return;
                        }
                        const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
                        if (!infoContact.email.match(emailRegEx)) {
                            toast.error("Invalid email")
                            return;
                        }
                        toast.success('Your message has been forwarded to the customer support team, who will contact you shortly. Thank you!')



                    }} />
                </div>
            </form>

        </div>
    );
}

export default ContactForm;