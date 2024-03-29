import React, { useEffect, useState } from 'react';
import "./CreateAccount.css";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function CreateAccount(props) {
    const nav = useNavigate();
    const [id, setId] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const newAccount = {
        id: id,
        userName: userName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password: password.trim(),
        confirmPassword: confirmPassword.trim(),
    }
    const [userList, setUserList] = useState(null);

    useEffect(() => {
        fetch(`https://65d55b7e3f1ab8c63436c5ea.mockapi.io/userrainharvesting/${id}`
            , {
                method: 'GET',
                headers: { 'content-type': 'application/json' },
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
            }).then(user => {
                setUserList(user)
            });
    }, [id]);


    return (
        <div className='create-account-page'>
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
                            <input type="password" placeholder="Enter your password" required
                                onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="input-box">
                            <span className="details">Confirm Password*</span>
                            <input type="password" placeholder="Confirm your password" required
                                onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        </div>
                    </div>


                    <div className="terms">
                        <div className='term'>
                            <input type="checkbox" name="terms" checked />
                            I consent to Rainwater Harvesting collecting and managing my personal information in accordance with the Rainwater Harvesting Privacy Policy and Terms and Conditions.
                        </div>

                        <div className='term'>

                            <input type="checkbox" name="terms" />
                            Send me the latest Rainwater Harvesting updates, with newsletters, catalogues and helpful tips.
                        </div>
                    </div>


                    <div className="button">
                        <button className='submit-btn' type="submit" value="Register"
                            onClick={(e) => {
                                e.preventDefault();

                                fetch('https://65d55b7e3f1ab8c63436c5ea.mockapi.io/userrainharvesting', {
                                    method: 'POST',
                                    headers: { 'content-type': 'application/json' },
                                    // Send your data in the request body as JSON
                                    body: JSON.stringify(newAccount)
                                }).then(() => {


                                    nav("/")
                                })


                                if (!newAccount.userName || !newAccount.email || !newAccount.phone || !newAccount.password || !newAccount.confirmPassword) {
                                    toast.error("Sorry! Please fill-in required information before submit the form");
                                    return;
                                }
                                const foundEmail = userList.find((user) => user.email === newAccount.email)
                                if (foundEmail) {

                                    toast.error("This email is already exist! Please change your email")
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

                                const phoneRegEx = /^\d{8,}$/;
                                if (!newAccount.phone.match(phoneRegEx)) {
                                    toast.error("Your phone number must be at least 8 digits")
                                    return;
                                }
                                const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
                                if (!newAccount.password.match(passwordRegEx)) {
                                    toast.error("Password have to minimum 5 characters, at least one letter and one number.")
                                    return;
                                }

                                if (newAccount.password !== newAccount.confirmPassword) {
                                    toast.error("Confirm Password not match!")
                                    return;
                                }


                                toast.success('Congratulation, your account has been successfully created!')
                                nav("/log-in")


                            }}
                        >Sign Up</button>
                    </div>



                </form>
            </div>


        </div>
    );
}

export default CreateAccount;