import React from 'react';
import './WishList.css'
import { useNavigate } from 'react-router-dom';

function WishList(props) {
    const nav = useNavigate();
    return (
        <div>
            <div className="shoppingcart-page">
                <h1> Your Saved Items(0 items)</h1>

                <table>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Price (USD)</th>


                        <th>Remove</th>
                    </tr>
                    <tr>
                        <td data-cell="No: " className="No">1</td>
                        <td data-cell className="product-item">
                            <img src="https://picsum.photos/200" alt="product" />
                            <div className="product-info">
                                <span className="product-name">Name ABCXYZ</span>
                                <p className="product-code">Product Code: <span>xxxx</span>
                                </p>
                            </div>

                        </td>
                        <td data-cell="Price: " className="price">12 <span>$</span></td>


                        <td data-cell className="remove-btn"
                        ><i className="fa-solid fa-trash"></i></td>
                    </tr>


                </table>
                <div className="btn-groups">
                    <button className="back-btn"
                        onClick={() => { nav('/products') }}>
                        <i className="fa-solid fa-arrow-left"></i>
                        Continue to shopping</button>
                    <button className="checkout-btn">Check out
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>


        </div>
    );
}

export default WishList;