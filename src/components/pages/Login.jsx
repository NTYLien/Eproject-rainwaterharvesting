import React from 'react';

function Login(props) {
    return (
        <>
            <div classNameNameName='login'>
                <div classNameName="modal" id="myModal">
                    <div classNameName="modal-dialog">
                        <div classNameName="modal-content">

                            <div classNameName="modal-header">
                                <img src="" alt="LOGO" classNameName="logologin" />
                                <button type="button" classNameName="btn-close" data-bs-dismiss="modal"></button>
                            </div>


                            <div classNameName="modal-body">
                                <div>
                                    <div classNameName="modal-title" style={{ textAlign: "center" }}>
                                        <h1><span classNameName="mdi--user-circle"></span>Log In
                                        </h1>
                                        <p>with your Rainharvesting account</p>
                                    </div>

                                    <div>
                                        <button classNameName="another-signin">
                                            <span classNameName="flat-color-icons--google"></span>Sign in with google
                                        </button>

                                        <button classNameName="another-signin">
                                            <span classNameName="logos--facebook"></span>Sign in with facebook
                                        </button>
                                    </div>
                                </div>

                                <div classNameName="mycontainer">
                                    <div classNameName="InputLogin">
                                        <h5>Email:</h5>
                                        <input type="email" />

                                        <h5 >Password</h5>
                                        <input type="password" />

                                        <span>
                                            <h6>Forget your password?</h6>
                                        </span>
                                    </div>

                                    <button classNameName="loginbutton">
                                        <h5>LOG IN</h5>
                                    </button>
                                </div>
                            </div>


                        </div>
                        <div className="modal-footer" style={{ justifyContent: "center" }}>
                            or <h5><div data-bs-toggle="modal" data-bs-target="#myModalSignUp" > Create an
                                Account</div></h5>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Login;