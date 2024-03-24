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
                return (
                    <div className='our-service'>
                        <div className="service-intro">
                            <h3 className="title">{x.name}</h3>
                            <div className='description'>{x.description}</div>
                            <button className="showmore-btn" onClick={() =>
                                setShow({ ...show, [x.id]: !show[x.id] })}>{show[x.id] ? "Click to Hide" : "Show more"}</button>

                        </div >

                        <div className="service-content">
                            {show && <p className='service-info'>{x.content}</p>}
                        </div>

                    </div >
                )
            })}


        </>
    );
}

export default OurServices;