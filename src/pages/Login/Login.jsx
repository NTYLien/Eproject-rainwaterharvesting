import React, { useEffect, useState } from 'react';
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login({ setLoggedUser }) {
    const nav = useNavigate();

    const [id, setId] = useState("");

    const [userList, setUserList] = useState(null)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const loginAccount = {
        userName: userName.trim(),
        password: password.trim()
    }


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
    }, []);












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
                        <input type="text" placeholder="Username" id='username'
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
                            <input className='rememberme' type="checkbox" />
                            <span >Remember me</span>
                        </div>

                        <div className="forget_div" onClick={() => {
                            if (!loginAccount.userName) {
                                window.prompt("Please enter your email address so we can send you an email to reset your password.");

                            }


                        }}>
                            <a>Forget password</a>
                        </div>

                    </div>

                    <div className="input-box">
                        <button className='submit-btn' type="submit" value="Login"
                            onClick={(e) => {
                                e.preventDefault();
                                if (!loginAccount.userName || !loginAccount.password) {
                                    toast.error("Please input required box");
                                    return;
                                };

                                const foundUser = userList.find((user) => user.userName === loginAccount.userName);

                                if (foundUser) {
                                    if (foundUser.password === loginAccount.password) {
                                        toast.success("Login Successfully!")
                                        setLoggedUser(loginAccount.userName)
                                        const prevUrl = window.location.hash.split('ref=#')[1] || '/'
                                        nav(prevUrl)

                                    } else {
                                        toast.error("Wrong password!")
                                    }
                                } else {
                                    toast.error("Wrong username!");
                                }
                            }}
                        >Login</button>



                    </div>

                    <div className="sign_up" >
                        Not a member? <Link to='/create-account' >Signup now</Link>
                    </div>

                </form>
            </div >
        </div >

    );
}

export default Login;
