import React, { useState } from 'react';
import "./Payment.css"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Payment(props) {
    const nav = useNavigate();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("")
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [address, setAddress] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("");
    const [cvv, setCvv] = useState("");



    return (
        <div className='payment-page'>
            <div className="back-to-shopping-cart">
                <h2>View Your Shopping Cart</h2>
                <button className="get-start-btn"
                    onClick={() => {
                        nav('/shoppingcart')
                    }}>
                    Get started <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();

                if (!name.trim() || !phone.trim() || !email.trim() || !city.trim() || !district.trim || !address.trim || !zipCode.trim() || !cardNumber.trim || !expMonth.trim || !expYear || !cvv.trim()) {
                    toast.error("Sorry! Please fill-in required information before submit the form");
                    return;

                }

                const phoneRegEx = /^\d{8,}$/;
                if (!phone.match(phoneRegEx)) {
                    toast.error("Your phone number must be at least 8 digits")
                    return;
                }

                const emailRegEx = /^[a-zA-Z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
                if (!email.match(emailRegEx)) {
                    toast.error("Invalid email")
                    return;
                }

                const cityRegEx = /^[a-zA-Z ]*$/
                if (!city.match(cityRegEx)) {
                    toast.error("City required only text characters")
                    return;
                }

                const cardNumberRegEx = /^\d{7,}$/
                if (!cardNumber.match(cardNumberRegEx)) {
                    toast.error("Your card number must be at least 7 digits")
                    return;
                }

                const cvvRegex = /^[0-9]{3,4}$/
                if (!cvv.match(cvvRegex)) {
                    toast.error("Your cvv number must be 3 or 4 digits")
                    return;
                }

                toast.success("Thank you for your shopping. Our sales team will contact to you in 1 hours for confirmation!");
                nav('/thankyou');

            }}>
                <div className='container-payment-page'>
                    <div className='billing'>
                        <div className="container">
                            <h2>BILING ADDRESS</h2>

                            <p className="text">Please input your recipient information</p>
                        </div>
                        <div className='form'>
                            <label className="name" for="Fullname">Full name <br />
                                <input className="fullname" type="text" name="Fullname" id="Fullname" placeholder="Enter name" required
                                    onChange={(e) => { setName(e.target.value) }} />
                            </label>
                            <br />

                            <label className="Phone" for="phone">Phone number<br />
                                <input className="phone" type="text" name="phone" id="phone" placeholder="Enter phone number" required
                                    onChange={(e) => { setPhone(e.target.value) }} />
                            </label> <br />
                            <label className="email" for="Email">Email <br />
                                <input className="email" type="text" name="Email" id="Email" placeholder="Enter email" required
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </label>
                            <br />
                            <label className="City" for="city">City <br />
                                <input className="city" type="text" name="city" id="city" placeholder="Enter city" required
                                    onChange={(e) => { setCity(e.target.value) }} />
                            </label> <br />

                            <label className="Address" for="Address">Address <br />
                                <input className="address" type="text" name="Address" id="Address" placeholder="Enter address" required
                                    onChange={(e) => { setAddress(e.target.value) }} />
                            </label> <br />

                            <div className='row-info-flex'>
                                <div className="district">
                                    <label for="district">District <br />
                                        <input className="district" type="text" name="district" id="distric" placeholder="Enter district" required
                                            onChange={(e) => { setDistrict(e.target.value) }} />
                                        <br />
                                    </label>

                                </div>
                                <div className="zipcode">

                                    <label className="code" for="code">Zip code</label><br />
                                    <input className="code2" type="text" name="zipcode" id="zipcode" placeholder="Zip code" required
                                        onChange={(e) => { setZipCode(e.target.value) }} />
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className='payment'>
                        <div className="container">
                            <h2>PAYMENT</h2>
                            <div className='accept-card'>
                                <p >Accepted Card</p>
                                <div className='card-show'>
                                    <div className="visa">


                                        <img src='https://www.edigitalagency.com.au/wp-content/uploads/new-visa-logo-high-quality-png-latest.png' alt='card' />

                                    </div>
                                    <div className="paypal">


                                        <img src='https://logos-world.net/wp-content/uploads/2020/08/PayPal-Symbol.png' alt='card' />
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="form" >
                            <label for="cardnumber">Credit Card Number  <br />
                                <input className="cardnumber" type="number" name="cardnumber" id="cardnumber" placeholder="Enter card number" required
                                    onChange={(e) => { setCardNumber(e.target.value) }} />
                            </label>
                            <br />
                            <label for="exp-month">Exp Month <br />
                                <select className="exp-month" type="number" name="exp-month" id="exp-month" placeholder="Enter expired month" required
                                    onChange={(e) => { setExpMonth(e.target.value) }} >
                                    <option value="">Choose month</option>
                                    <option value="1">Jan</option>
                                    <option value="2">Feb</option>
                                    <option value="3">Mar</option>
                                    <option value="4">Apr</option>
                                    <option value="5">May</option>
                                    <option value="6">Jun</option>
                                    <option value="7">Jul</option>
                                    <option value="8">Aug</option>
                                    <option value="9">Sep</option>
                                    <option value="10">Oct</option>
                                    <option value="11">Nov</option>
                                    <option value="12">Dec</option>
                                </select>
                            </label>

                            <br />
                            <div className='row-info-flex'>
                                <div className="exp-year">
                                    <label for="exp-year">Exp Year</label>
                                    <br />
                                    <select id="exp-year" className="exp-year" required onChange={(e) => { setExpYear(e.target.value) }}>
                                        <option value="">Choose year</option>
                                        <option value="2020">2020</option>
                                        <option value="202q">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>


                                    </select>
                                </div>
                                <div className="cvv">
                                    <label for="cvv">CVV</label>
                                    <br />
                                    <input className="cvv" type="password" name="cvv" id="cvv" required
                                        onChange={(e) => { setCvv(e.target.value) }} />
                                    <br />
                                </div>

                            </div>



                        </div>
                        <button type='submit' className='proceed-check-out'>Proceed to checkout</button>
                    </div>

                </div>
            </form>


        </div >
    );
}

export default Payment;