import React, { useState } from 'react';
import './ShoppingCart.css'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ShoppingCart(props) {
    const nav = useNavigate();
    const productData = props.ProductData;

    const [list, setList] = useState(productData);


    let [quantity, setQuantity] = useState(1);

    // Handle increase & decrease quantity 

    const handleIncreaseQuantity = () => {
        setQuantity(++quantity)
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(--quantity)
        }
    };





    return (
        <div className="shoppingcart-page">
            <h1> Your Shopping Cart(0 items)</h1>
            <div className="total-cost-text">Total: <span className="total-cost-number">24.4$</span></div>
            <table>
                <tr>
                    <th>No</th>
                    <th>Product</th>
                    <th>Price (USD)</th>
                    <th>Quantity</th>
                    <th>Total(USD)</th>
                    <th>Delete</th>
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
                    <td data-cell className="quantiy">
                        <div className="button-quantity">
                            <button className="increase"
                                onClick={handleIncreaseQuantity}>
                                <i className="fa-solid fa-plus"></i>
                            </button>
                            <input type="text" value={quantity} />
                            <button className="decrease"
                                onClick={handleDecreaseQuantity}>
                                <i className="fa-solid fa-minus"></i>
                            </button>
                        </div>

                    </td>
                    <td data-cell="Total: " className="total">24 <span>$</span></td>
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

    );
}

export default ShoppingCart;