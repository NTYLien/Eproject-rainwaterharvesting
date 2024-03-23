
import { useNavigate, useParams } from 'react-router-dom';
import './ProductDetail.css'
import { useState } from 'react';
import { toast } from 'react-toastify';


function ProductDetails(props) {
    const nav = useNavigate();

    const productData = props.productData;
    let { productCode } = useParams();
    const item = productData.find(x => x.productCode === productCode);
    const name = item.name;
    const img1 = item.img1;
    const img2 = item.img2;
    const img3 = item.img3;
    const imgurl = item.imgurl;
    const price = item.price;
    const description = item.description;
    const features1 = item.features1;
    const features2 = item.features2;
    const features3 = item.features3;
    const features4 = item.features4;
    const features5 = item.features5;
    const features6 = item.features6;



    let [quantity, setQuantity] = useState(1);

    // Handle increase & decrease quantity 

    const handleIncreaseQuantity = () => {
        setQuantity(++quantity)
    }

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(--quantity)
        }
    }

    //  change image
    const imgs = [imgurl, img1, img2, img3];
    const [mainImageIndex, setMainImageIndex] = useState(0);

    return (
        <>
            < div className="product-detail" >
                <div className="container">
                    <div className="product-div">
                        <div className="close-btn"> <i className="fa-solid fa-xmark"></i></div>
                        <div className="product-div-left">
                            <div className="img-container">

                                <img src={imgs[mainImageIndex]} alt="product1" />
                            </div>
                            <div className="hover-container">
                                {imgs.map((data, i) => {
                                    if (i === mainImageIndex) { return null }
                                    return (
                                        <>
                                            <div>
                                                <img src={data} alt="productdetail" onClick={() => setMainImageIndex(i)} />
                                            </div>
                                        </>
                                    )
                                })}



                            </div>
                        </div>
                        <div className="product-div-right">
                            <span className="product-name">{name}</span>
                            <span className="product-code">SKU: {productCode}</span>
                            <span className="product-price">$ {price}</span>
                            <p className="product-description">{description}</p>
                            <div className='feature-content'>
                                <p className='title-features'>Features of the GWDD System:</p>
                                <ul className='Feature-list'>
                                    <li>{features1}</li>
                                    <li>{features2}</li>
                                    <li>{features3}</li>
                                    <li>{features4}</li>
                                    <li>{features5}</li>
                                    <li>{features6}</li>


                                </ul>
                            </div>
                            <div className="button-quantity">
                                <button className="increase"
                                    onClick={handleIncreaseQuantity}
                                >
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <input type="number" value={quantity} />
                                <button className="decrease"
                                    onClick={handleDecreaseQuantity}>
                                    <i className="fa-solid fa-minus"></i>
                                </button>


                            </div>
                            <div className="btn-submit-groups">
                                <button type="button" className="add-wishlist-btn"
                                    onClick={() => { toast.success("Product successfully added to your wishlist ") }}
                                ><i className="fa-solid fa-heart"></i> Add to Wishlist</button>

                                <button type="button" className="add-cart-btn"
                                    onClick={() => { toast.success("Product successfully added to your shopping cart") }}
                                ><i className="fas fa-shopping-cart"></i> Add to cart</button>

                                <button type="button" className="buy-now-btn"
                                    onClick={() => { nav(`/payment/${productCode}`) }}
                                >Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;