import React, { useState } from 'react';
import './LearnandAsk.css'


function LearnandAsk(props) {
    const learnData = props.LearnAndAsk;
    const [show, setShow] = useState({});
    console.log({ show })

    return (

        <>
            {learnData.map((x) => {
                return (
                    <div className='our-learn'>
                        <div className="learn-intro">
                            <h3 className="title">{x.name}</h3>
                            <div className='description'>{x.description}</div>
                            <button className="showmore-btn" onClick={() =>

                                setShow({ ...show, [x.id]: !show[x.id] })}>{show[x.id] ? "Click to Hide" : "Show more"}</button>

                        </div >

                        <div className="learn-content">
                            {show[x.id] && <p className='learn-info'>{x.content}</p>}
                        </div>

                    </div >
                )
            })}


        </>
    );
}

export default LearnandAsk;