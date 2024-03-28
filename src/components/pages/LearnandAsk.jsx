import React, { useState } from 'react';
import './LearnandAsk.css'
import TopBanner from '../TopBanner';


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
                            {show[x.id] &&
                                <>
                                    <p className='learn-info'>{x.content1}</p>
                                    <img src={x.imgBg1} alt="learn-and-ask" />
                                    <p className='learn-info'>{x.content2}</p>
                                    <img src={x.imgBg2} alt="learn-and-ask" />
                                    <p className='learn-info'>{x.content3}</p>
                                </>
                            }
                        </div>

                    </div >
                )
            })}
            <div className='youtube-videos'>
                <h3>Rain water system knowledge videos</h3>
                <div className='video-list'>
                    <div className='video'>
                        <iframe width="350" height="240" src="https://www.youtube.com/embed/2LtfEz2jimA?si=5wDUhQFNa0wV36V1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='video'>
                        <iframe width="350" height="240" src="https://www.youtube.com/embed/9J1_tuKW7-g?si=1WISi5SeXZ8kvrR8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                    <div className='video'>
                        <iframe width="350" height="240" src="https://www.youtube.com/embed/UbLcToeBjrY?si=XkVTwGqq6uAvicm2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </div>



        </>
    );
}

export default LearnandAsk;