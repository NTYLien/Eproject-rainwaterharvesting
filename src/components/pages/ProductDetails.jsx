
import { useParams } from 'react-router-dom';
import './ProductDetail.css'


function ProductDetails(props) {

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



    return (
        <>
            < div className="product-detail" >
                <div className="container">
                    <div className="product-div">
                        <div className="close-btn"> <i className="fa-solid fa-xmark"></i></div>
                        <div className="product-div-left">
                            <div className="img-container">
                                <img src={img1} alt="product1" />
                            </div>
                            <div className="hover-container">
                                <div>
                                    <img src={img2} alt="product3" />
                                </div>
                                <div>
                                    <img src={img3} alt="product3" />
                                </div>
                                <div>
                                    <img src={imgurl} alt="product4" />
                                </div>

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
                                <button className="increase">
                                    <i className="fa-solid fa-plus"></i>
                                </button>
                                <input type="text" value="1" />
                                <button className="decrease">
                                    <i className="fa-solid fa-minus"></i>
                                </button>


                            </div>
                            <div className="btn-submit-groups">
                                <button type="button" className="add-wishlist-btn"><i className="fa-solid fa-heart"></i> Add to Wishlist</button>

                                <button type="button" className="add-cart-btn"><i className="fas fa-shopping-cart"></i> Add to cart</button>

                                <button type="button" className="buy-now-btn">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;