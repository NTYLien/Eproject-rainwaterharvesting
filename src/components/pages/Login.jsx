import React, { useState } from 'react';
import "./Login.css"
import logo from "../logo-rainharvesting.jpg"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login(props) {
    const nav = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginAccount = {
        userName: userName.trim(),
        password: password.trim()
    }



    return (
        <div classNameName='login-page'>
            <div className="main_div">
                <div className="title">Login Form</div>
                <div className="social-icons">
                    <a href="#">
                        <i className="fa-brands fa-google"></i><span>Google</span>
                    </a>

                    <a href="#">
                        <i className="fa-brands fa-facebook"></i><span>Facebook</span>
                    </a>

                </div>

                <form action="#">
                    <div className="input-box">
                        <input type="text" placeholder="Email or Phone" id='username'
                            onChange={(e) => { setUserName(e.target.value) }}
                            required />
                        <div className="icon">
                            <i className="fa-solid fa-user"></i>

                        </div>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required
                            onChange={(e) => { setPassword(e.target.value) }} />
                        <div className="icon">
                            <i className="fa-solid fa-lock"></i>

                        </div>
                    </div>

                    <div className="option_div">
                        <div className="checkbox">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>

                        <div className="forget_div" onClick={() => {
                            if (!loginAccount.userName) {
                                toast.info("Please enter your email address so we can send you an email to reset your password.");
                                return;
                            }
                            toast.success("We sent you an email to reset your password. Please check!")

                        }}>
                            <a href="#">Forget password</a>
                        </div>

                    </div>

                    <div className="input-box button">
                        <input type="submit" value="Login"
                            onClick={() => {
                                if (!loginAccount.userName || !loginAccount.password) {
                                    toast.error("Please input required box");
                                    return;
                                }
                                if (loginAccount.userName.match("admin") && loginAccount.password.match("admin")) {
                                    toast.success("Login Successfully!")
                                    nav("/")
                                    return;
                                } else {
                                    toast.error("Your username or password not match!")
                                    return;
                                }

                            }}
                        />



                    </div>

                    <div className="sign_up" onClick={() => { nav(`/create-account`) }}>
                        Not a member? <a href="#">Signup now</a>
                    </div>

                </form>
            </div >
        </div >

    );
}

export default Login;
