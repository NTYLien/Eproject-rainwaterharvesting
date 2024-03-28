import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TopBanner from '../TopBanner';
import './OurServices.css'

function OurServices(props) {
    const serviceData = props.ServiceData;
    const [show, setShow] = useState({});

    return (

        <>
            {serviceData.map((x) => {
                debugger
                return (
                    <div className='our-service'>
                        <div className="service-intro">
                            <h3 className="title">{x.name}</h3>
                            <div className='description'>{x.description}</div>
                            <button className="showmore-btn" onClick={() =>

                                setShow({ ...show, [x.id]: !show[x.id] })}>
                                {show[x.id] ? "Click to Hide" : "Show more"}</button>

                        </div >

                        <div className="learn-content">
                            {show[x.id] &&
                                <div className='learn-info'>
                                    <p>{x.content1}</p>
                                    <p>{x.content2}</p>
                                    <img className='service-img' src={x.imgBg} alt="service" />
                                    <p>{x.content3}</p>
                                    <p>{x.content4}</p>



                                </div>}
                        </div>

                    </div >
                )
            })}


        </>
    );
}

export default OurServices;