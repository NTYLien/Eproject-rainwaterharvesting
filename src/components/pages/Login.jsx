import React from 'react';
import "./Login.css"
import logo from "../logo-rainharvesting.jpg"
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const nav = useNavigate();
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
                        <input type="text" placeholder="Email or Phone" required />
                        <div className="icon">
                            <i className="fa-solid fa-user"></i>

                        </div>
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <div className="icon">
                            <i className="fa-solid fa-lock"></i>

                        </div>
                    </div>

                    <div className="option_div">
                        <div className="checkbox">
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </div>

                        <div className="forget_div">
                            <a href="#">Forget password</a>
                        </div>

                    </div>

                    <div className="input-box button">
                        <input type="submit" value="Login" />



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
