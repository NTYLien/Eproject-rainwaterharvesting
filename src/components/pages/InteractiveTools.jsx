import React from 'react';
import './InteractiveTools.css'
import { useNavigate } from 'react-router-dom';

function InteractiveTools(props) {
    const nav = useNavigate();
    return (
        <div className="tools-page">
            <header>
                <h1>We are creating a better world through the power of design</h1>
                <p>We empower people to engage and participate in their own unique water journey as part of a bigger movement to contribute to water sustainability across the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque possimus exercitationem quae temporibus nesciunt ratione corrupti quod dignissimos, in omnis quasi id nostrum provident perspiciatis culpa fugiat inventore accusantium.</p>
            </header>
            <div className="container-content">
                <div className="colunm1">
                    <div className="content-info">Our specially designed tools will help you to choose the right product to suit your Rain Harvesting system.Our specially designed tools will help you to choose the right product to suit your Rain Harvesting system.</div>
                    <div className="toolbox" >
                        Caculate the cost of your project
                        <div> <button className='get-start-btn'
                            onClick={() => { nav(`/interactive-tools-cost-suggesttion`) }}
                        >Get Start
                            <i className="fa-solid fa-arrow-right"></i>
                        </button></div>

                    </div>
                </div>
                <div className="colunm2">
                    <div className="content-info">Tools created by our Product Development team to make designing and implementing your system as easy as possible. Our tools and will help you to get the right products for your property.</div>

                    <div className="toolbox">
                        Find the right products for your property
                        <div> <button className='get-start-btn'
                            onClick={() => { nav(`/interactive-tools-product-suggesttion`) }}
                        >Get Start
                            <i className="fa-solid fa-arrow-right"></i>
                        </button></div>

                    </div>

                </div>


            </div>
        </div>


    );
}

export default InteractiveTools;