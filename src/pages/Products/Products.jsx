import React, { useState } from 'react';
import './Product.css'
import CategoryFilter from './CategoryFilter';



function Products({ result, handleChange }) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)


    return (
        <div className='product-page'>
            <div className="filter-category">


                <div className="title" onClick={handleClick}>  Filter Product   <i className={click ? "fa-solid fa-xmark" : "fa-solid fa-angles-right"}></i></div>

                <div className={click ? 'show-filter active' : "show-filter"}> <CategoryFilter handleChange={handleChange}
                />
                </div>

            </div>


            <div className="product-show">

                <h1 className="title">Cleaner water.More of it.</h1>
                <p className="text">Explore our range and see what is possible for your rain harvesting system. Collect and store rain water with our Collection and Harvesting System products.</p>
                <div className='product-list'>
                    {result}
                </div>
            </div>


        </div >





    );
}

export default Products;