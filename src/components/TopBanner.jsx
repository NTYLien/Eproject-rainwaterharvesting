import React, { useEffect, useRef, useState } from 'react';
import './TopBanner.css'
import videoBg from '../assets/video-raining.mp4'
import { useNavigate } from 'react-router-dom';

function TopBanner(props) {

    const nav = useNavigate();
    const videoRef = useRef();

    const [isPlay, setIsPlay] = useState(true);
    const [click, setClick] = useState(false);

    const videoPause = () => {
        videoRef.current.pause();
        setIsPlay(false)
    }

    const videoPlay = () => {
        videoRef.current.play();
        setIsPlay(true)
    }

    const toggleVideo = () => {
        if (click) {
            setClick(false);
            videoPause()
        } else {
            videoPlay()
            setClick(true);
        }

    }

    console.log(videoRef.current)
    return (
        <div className='home-page'>
            <div className="top-banner">
                <video src={videoBg} loop ref={videoRef}></video>

                <div className={click ? 'bg-overlay' : 'bg-overlay-active'}></div>
                <div className='content'>
                    <div className='toggleVideo-icon'>
                        <i onClick={toggleVideo} className={click ? 'fa-solid fa-volume-high' : 'fa-solid fa-volume-xmark'}></i></div>


                    <h1>What is Rain Harvesting & why do it?</h1>
                    <p className='banner-description'>Rainwater harvesting has gained increasing attention in recent years as a sustainable water management practice. Education about the benefits of rainwater harvesting can encourage behaviour change. </p>

                    <button className='getstart-btn' onClick={() => { nav('/learn-and-ask') }}>Get Start <i class="fa-solid fa-arrow-right"></i></button>
                </div>


            </div>



        </div >
    );
}

export default TopBanner;