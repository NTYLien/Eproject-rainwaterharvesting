import React from "react";
import "./WishList.css";
import { useNavigate } from "react-router-dom";

function WishList({
  productData,
  removeFromWishList,
  wishList,
  totalWishListItem,
}) {
  const nav = useNavigate();
  return (
    <div>
      <div className="wishlist-page">
        <h1> Your Saved Items({totalWishListItem} items)</h1>
        <table>
          <tr>
            <th>No</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>View</th>
            <th>Remove</th>
          </tr>

          {wishList.map((item, index) => {
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
                  {item.price} <span>$</span>
                </td>
                <td
                  className="view-icon"
                  onClick={() => {
                    nav(`/products/${item.productCode}`);
                  }}
                >
                  <i class="fa-solid fa-eye"></i>View
                </td>
                <td data-cell="" className="remove-btn">
                  <button
                    className="remove-btn"
                    onClick={() => {
                      removeFromWishList(item);
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
        </div>
      </div>
    </div>
  );
}

export default WishList;
