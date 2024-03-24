import React from 'react';
import './ServiceCard.css'
import { useNavigate } from 'react-router-dom';

function ServiceCard({ id, imgurl, imgBg, name, description }) {
    const nav = useNavigate();
    return (
        <div className='service-card'>
            <img src={imgurl} alt="service" />
            <div className='bg-overlay'></div>
            <div className='content'>
                <h2 >{name}
                </h2>
                <p className='description'>{description}</p>

                <button className='getstart-btn'
                    onClick={() => { nav(`/our-services/`) }}
                >Get Start <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    );
}

export default ServiceCard;