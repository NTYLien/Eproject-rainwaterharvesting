import React from 'react';
import "./ContactUs.css"


function ContactUs(props) {
    return (
        <div className="contact-us">
            <div className="content">
                <div className="left-side">
                    <div className="address details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">590 Cach Mang Thang 8, Ward 11, District 10, Ho Chi Minh City, VietNam.</div>

                    </div>

                    <div className="phone details">
                        <i className="fa-solid fa-phone"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">1068.6801</div>

                    </div>

                    <div className="email details">
                        <i className="fa-solid fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">rainwaterharvesting2024@gmail.com</div>
                        <div className="text-two">info@rainwaterharvesting.com</div>
                    </div>
                </div>

                <div className="right-side">
                    <div className="topic-text">Find Us On Google Maps</div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur voluptatum maxime architecto nulla vitae laboriosam natus distinctio amet voluptas qui aspernatur ipsam laborum, neque exercitationem modi deleniti debitis? Quasi.</p>



                </div>
            </div>
        </div>
    )
}
export default ContactUs;