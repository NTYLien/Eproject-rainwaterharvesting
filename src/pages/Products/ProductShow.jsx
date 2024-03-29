import "./ProductShow.css";
import { useNavigate } from "react-router-dom";

function ProductShow({ name, productCode, price, imgurl }) {
  const nav = useNavigate();

  return (
    <>
      <div className="products">
        <div className="container">
          <div className="product-item">
            <div
              className="product-img"
              onClick={() => {
                nav(`/products/${productCode}`);
              }}
            >
              <img src={imgurl} alt="product" />
              <button
                type="button"
                className="btn-quickview"
                onClick={() => {
                  nav(`/products/${productCode}`);
                }}
              >
                Quick view
              </button>
            </div>

            <div className="product-info">
              <p
                className="product-name"
                onClick={() => {
                  nav(`/products/${productCode}`);
                }}
              >
                <span>{name}</span>
              </p>
              <p className="product-code">
                SKU: <span>{productCode}</span>
              </p>
              <p className="product-price">
                $<span>{price}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductShow;
