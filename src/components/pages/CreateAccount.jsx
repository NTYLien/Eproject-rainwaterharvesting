import React from 'react';
import "./CreateAccount.css"

function CreateAccount(props) {
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
                            <span className="details">Fullname</span>
                            <input type="text" placeholder="Enter your name" required />
                        </div>

                        <div className="input-box">
                            <span className="details">Username</span>
                            <input type="text" placeholder="Enter your username" required />
                        </div>


                        <div className="input-box">
                            <span className="details">Phone number</span>
                            <input type="text" placeholder="Enter your number" required />
                        </div>

                        <div className="input-box">
                            <span className="details">Password</span>
                            <input type="text" placeholder="Enter your password" required />
                        </div>

                        <div className="input-box">
                            <span className="details">Confirm Password</span>
                            <input type="text" placeholder="Confirm your password" required />
                        </div>
                    </div>


                    <div className="terms">
                        <div className='term'>
                            <input type="radio" name="terms" />
                            I consent to Rainwater Harvesting collecting and managing my personal information in accordance with the Rainwater Harvesting Privacy Policy and Terms and Conditions.
                        </div>

                        <div className='term'>

                            <input type="radio" name="terms" />
                            Send me the latest Rainwater Harvesting updates, with newsletters, catalogues and helpful tips.
                        </div>
                    </div>


                    <div className="button">
                        <input type="submit" value="Register" />
                    </div>



                </form>
            </div>


        </div>
    );
}

export default CreateAccount;