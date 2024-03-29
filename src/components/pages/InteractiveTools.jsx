import React from 'react';
import './InteractiveTools.css'
import { useNavigate } from 'react-router-dom';

function InteractiveTools(props) {
    const nav = useNavigate();
    return (
        <div className="tools-page">
            <header>
                <h1>We are creating a better world through the power of design</h1>
                <p>RainHarvest Systems is your comprehensive resource for residential and commercial water harvesting, treatment and reuse products and systems. Our innovative products work seamlessly together to provide a solution for your specific requirements. Our systems, both residential and commercial, are designed around the same principle - the capture, treatment, and reuse of collected water.</p>
            </header>
            <div className="container-content">
                <div className="colunm1">
                    <div className="content-info">Our specially designed tools will help you to choose the right product to suit your Rain Harvesting system.Our specially designed tools will help you to choose the right product to suit your Rain Harvesting system.</div>
                    <div className="toolbox" >
                        Caculate the cost of your project
                        <div> <button className='get-start-btn'
                            onClick={() => { nav(`/interactive-tools/interactive-tools-cost-suggestion`) }}
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
                            onClick={() => { nav(`/interactive-tools/interactive-tools-product-suggestion`) }}
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