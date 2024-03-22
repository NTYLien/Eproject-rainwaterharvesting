
import './ProductDetail.css'


function ProductDetails() {

    return (
        <>
            < div className="product-detail" >
                <div className="container">
                    <div className="product-div">
                        <div className="close-btn"> <i className="fa-solid fa-xmark"></i></div>
                        <div className="product-div-left">
                            <div className="img-container">
                                <img src="https://picsum.photos/200" alt="product1" />
                            </div>
                            <div className="hover-container">
                                <div>
                                    <img src="https://picsum.photos/200" alt="product2" />
                                </div>
                                <div>
                                    <img src="https://picsum.photos/200" alt="product3" />
                                </div>
                                <div>
                                    <img src="https://picsum.photos/200" alt="product4" />
                                </div>

                            </div>
                        </div>
                        <div className="product-div-right">
                            <span className="product-name">Lorem ipsum dolor sit</span>
                            <span className="product-code">xxx</span>
                            <span className="product-price">$ 50.25</span>
                            <p className="product-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae animi
                                ad minima veritatis dolore. Architecto facere dignissimos voluptate fugit ratione molestias quis
                                quidem exercitationem voluptas.</p>
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