import React, { useState } from 'react';
import "./CreateAccount.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CreateAccount(props) {
    const nav = useNavigate();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const newAccount = {
        userName: userName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password: password.trim(),
        confirmpassword: confirmpassword.trim(),
    }
    return (
        <div classNameName='create-account-page'>
            <div className="container">
                <div className="title">
                    Registration Form
                </div>

                <div className="social-icons">

                    <a href="#">
                        <i className="fa-brands fa-google"></i><span>Google</span>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-facebook"></i><span>Facebook</span>
                    </a>

                </div>
                <form action="#">

                    <div className="user-details">
                        <div className="input-box">
                            <span className="details">Username*</span>
                            <input type="text" placeholder="Enter your name" required
                                onChange={(e) => { setUserName(e.target.value) }}

                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Email*</span>
                            <input type="text" placeholder="Enter your email" required
                                onChange={(e) => { setEmail(e.target.value) }}

                            />
                        </div>


                        <div className="input-box">
                            <span className="details">Phone number*</span>
                            <input type="text" placeholder="Enter your number" required
                                onChange={(e) => { setPhone(e.target.value) }} />
                        </div>

                        <div className="input-box">
                            <span className="details">Password*</span>
                            <input type="text" placeholder="Enter your password" required
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="input-box">
                            <span className="details">Confirm Password*</span>
                            <input type="text" placeholder="Confirm your password" required
                                onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        </div>
                    </div>


                    <div className="terms">
                        <div className='term'>
                            <input type="radio" name="terms" checked />
                            I consent to Rainwater Harvesting collecting and managing my personal information in accordance with the Rainwater Harvesting Privacy Policy and Terms and Conditions.
                        </div>

                        <div className='term'>

                            <input type="radio" name="terms" />
                            Send me the latest Rainwater Harvesting updates, with newsletters, catalogues and helpful tips.
                        </div>
                    </div>


                    <div className="button">
                        <input type="submit" value="Register"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!newAccount.userName || !newAccount.email || !newAccount.phone || !newAccount.password || !newAccount.confirmpassword) {
                                    toast.error("Sorry! Please fill-in required information before submit the form");
                                    return;
                                }

                                const nameRegEx = /^\w{3,}$/;
                                if (!newAccount.userName.match(nameRegEx)) {
                                    toast.error("Username have to at least 3 alphabet characters ")
                                    return;

                                }

                                const emailRegEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

                                if (!newAccount.email.match(emailRegEx)) {
                                    toast.error("Invalid email")
                                    return;

                                }

                                const phoneRegEx = /^\d{8}$/;
                                if (!newAccount.phone.match(phoneRegEx)) {
                                    toast.error("Your phone number must be 8 digits")
                                    return;
                                }
                                const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                                if (!newAccount.password.match(passwordRegEx)) {
                                    toast.error("Password have to minimum eight characters, at least one letter and one number.")
                                    return;
                                }

                                if (newAccount.password !== newAccount.confirmpassword) {
                                    toast.error("Confirm Password not match!")
                                    return;
                                }



                                toast.success('Congratulation, your account has been successfully created!')
                                nav("/")

                            }}
                        />
                    </div>



                </form>
            </div>


        </div>
    );
}

export default CreateAccount;