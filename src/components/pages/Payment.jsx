import React from 'react';
import "./Payment.css"
import { useNavigate } from 'react-router-dom';

function Payment(props) {
    const nav = useNavigate();
    return (
        <div classNameName='payment-page'>
            <div className="Cart">
                <h2>View Your Shopping Cart</h2>
                <button className="get-start-btn"
                    onClick={() => {
                        nav('/shoppingcart')
                    }}>
                    Get started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='container-payment-page'>
                <div className='billing'>
                    <div className="container">
                        <h2>BILING ADDRESS</h2>
                        <p className="text">Same as your sign in account</p>
                        <p className="text">Edit your recipient information</p>
                    </div> <br />
                    <form action="" method="GET" className='form'>
                        <label className="name" for="Fullname">Full name <br />
                            <input className="fullname" type="text" name="Fullname" id="Fullname" placeholder="Enter name" />
                        </label>
                        <br />
                        <label className="email2" for="Email">Email <br />
                            <input className="email" type="text" name="Email" id="Email" placeholder="Enter email" />
                        </label>
                        <br /><br /> <br /><br />
                        <label className="Address" for="Address">Address <br />
                            <input className="address" type="text" name="Address" id="Address" placeholder="Enter address" />
                        </label> <br />
                        <label className="City" for="city">City <br />
                            <input className="city" type="text" name="city" id="city" placeholder="Enter ciy" />
                        </label> <br />



                        <div className='row-info-flex'>
                            <div className="district">
                                <label for="district">District</label> <br />
                                <select id="district" className="dropdown2">
                                    <option value="">Choose</option>
                                    <option value="Cuu Chi">Cuu Chi</option>
                                    <option value="Binh Chanh">Binh Chanh</option>
                                    <option value="Can Gio">Can Gio</option>
                                    <option value="Hoc Mon">Hoc Mon</option>
                                    <option value="Nha Be">Nha Be</option>

                                </select>
                            </div>
                            <div className="zipcode">

                                <label className="code" for="code">Zip code</label><br />
                                <input className="code2" type="text" name="cvv" id="cvv" placeholder="Zip code" />
                            </div>

                        </div>


                    </form>
                </div>
                <div className='payment'>
                    <div className="container">
                        <h2>PAYMENT</h2>
                        <div className='accept-card'>
                            <p>Accepted Card</p>
                            <div className='card-show'>
                                <div className="visa">
                                    <p>Visa</p>
                                    <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-visa-logo-high-quality-png-latest.png' alt='card' />

                                </div>
                                <div className="paypal">
                                    <p>PayPal</p>
                                    <img src='https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png' alt='card' />
                                </div>
                            </div>

                        </div>


                    </div>
                    <form className="form" action="">
                        <label for="number">Credit Card Number <br />
                            <input className="number" type="text" name="number" id="number" placeholder="Enter card number" />
                        </label>
                        <br /><br />
                        <label for="month">Exp Month <br />
                            <input className="month" type="text" name="month" id="month" placeholder="Enter Month" />
                        </label>

                        <br /> <br />
                        <div className='row-info-flex'>
                            <div className="exp-year">
                                <label for="exp-year">Exp Year</label>
                                <br />
                                <select id="exp-year" className="dropdown">
                                    <option value="">Choose year</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2021">2022</option>
                                    <option value="2021">2023</option>
                                    <option value="2021">2024</option>

                                </select>
                            </div>
                            <div className="cvv">
                                <label for="cvv">CVV</label>
                                <br />
                                <input className="cvv" type="text" name="cvv" id="cvv" placeholder="CVV" />
                                <br />
                            </div>

                        </div>



                    </form>
                    <button className='proceed-check-out'>Proceed to checkout</button>
                </div>
            </div>


        </div >
    );
}

export default Payment;