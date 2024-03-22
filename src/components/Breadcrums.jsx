import React from 'react';
import './Breadcrums.css'

function Breadcrums(props) {
    const product = props;
    return (
        <div className='breadcrum'>
            HOME <i class="fa-solid fa-arrow-right"></i> PRODUCTS <i class="fa-solid fa-arrow-right"></i> {product.category}<i class="fa-solid fa-arrow-right"></i> {product.name}

        </div>
    );
}

export default Breadcrums;