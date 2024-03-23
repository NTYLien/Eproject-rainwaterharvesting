import React from 'react';
import './ProjectCard.css'
import { useNavigate } from 'react-router-dom';

function ProjectCard({ id, imgurl, name, description }) {
    const nav = useNavigate();
    return (
        <div className='project-card'>

            <div className="image">
                <img src={imgurl} alt="project" />
                <button className='moredetail-btn'
                    onClick={() => { nav(`/our-projects/${id}`) }}
                > More details <i class="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className='content'>
                <h5 >{name}
                </h5>
                <p className='description'>{description}</p>
            </div>

        </div>


    );
}

export default ProjectCard;