import React, { useState } from "react";
import "./ShoppingCart.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ShoppingCart({
  ProductData: productData,
  removeFromCart,
  increaseCartQuantity,
  descreaseCartQuantity,
  totalCartItems,
  totalCost,
  cart,
  isUserLoggedIn,
}) {
  const nav = useNavigate();
  return (
    <div className="shoppingcart-page">
      <h1> Your Shopping Cart({totalCartItems} items)</h1>
      <div className="total-cost-text">
        Total: <span className="total-cost-number">{totalCost}$</span>
      </div>
      <table>
        <tr>
          <th>No</th>
          <th>Product</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Total(USD)</th>
          <th>Delete</th>
        </tr>
        {cart.map((item, index) => {
          const totalCost = item.price * item.quantity;
          return (
            <tr>
              <td data-cell="No: " className="No">
                {index + 1}
              </td>
              <td data-cell="" className="product-item">
                <img src={item.imgurl} alt="product" />
                <div className="product-info">
                  <span
                    className="product-name"
                    onClick={() => {
                      nav(`/products/${item.productCode}`);
                    }}
                  >
                    {item.name}
                  </span>
                  <p className="product-code">
                    Product Code: <span>{item.productCode}</span>
                  </p>
                </div>
              </td>
              <td data-cell="Price: " className="price">
                {item.price}
                <span>$</span>
              </td>
              <td data-cell="" className="quantity">
                <div className="button-quantity">
                  <button
                    className="increase"
                    onClick={() => {
                      increaseCartQuantity(item);
                    }}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <input type="text" value={item.quantity} />
                  <button
                    className="decrease"
                    onClick={() => {
                      descreaseCartQuantity(item);
                    }}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>
                </div>
              </td>
              <td data-cell="Total: " className="total">
                {totalCost}
                <span>$</span>
              </td>
              <td data-cell="" className="remove-btn">
                <button
                  onClick={() => {
                    removeFromCart(item);
                  }}
                >
                  {" "}
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="btn-groups">
        <button
          className="back-btn"
          onClick={() => {
            nav("/products");
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
          Continue to shopping
        </button>
        <button
          className={totalCost !== 0 ? "checkout-btn" : "checkout-btn-disable"}
          onClick={() => {
            if (totalCost !== 0) {
              if (isUserLoggedIn) {
                nav("/payment");
              } else {
                if (
                  window.confirm(
                    "You must log in before doing payment. Login now?",
                  )
                ) {
                  nav(`/log-in?ref=${window.location.hash}`);
                }
              }
            }
          }}
        >
          Check out
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;
