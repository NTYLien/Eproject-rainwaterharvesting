import React from 'react';
import './Projects.css'
import ProjectCard from './ProjectCard';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


function Projects(props) {
    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 6,

        },
        desktop: {
            breakpoint: { max: 3000, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }

    };

    const commercialData = [
        {
            id: 1,
            imgurl: "https://picsum.photos/200?random=2",
            name: "Design & Consulting",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 2,
            imgurl: "https://picsum.photos/200?random=2",
            name: "Residential Installation",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 3,
            imgurl: "https://picsum.photos/200?random=3",
            name: "Commercial Construction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 4,
            imgurl: "https://picsum.photos/200?random=4",
            name: "DIY & System Kits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 5,
            imgurl: "https://picsum.photos/200?random=5",
            name: "Maintaince",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },
        {
            id: 6,
            imgurl: "https://picsum.photos/200?random=6",
            name: "Inspection & Testing",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        }
    ];


    const residentialData = [
        {
            id: 1,
            imgurl: "https://picsum.photos/200?random=1",
            name: "Design & Consulting",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 2,
            imgurl: "https://picsum.photos/200?random=2",
            name: "Residential Installation",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 3,
            imgurl: "https://picsum.photos/200?random=3",
            name: "Commercial Construction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 4,
            imgurl: "https://picsum.photos/200?random=4",
            name: "DIY & System Kits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },

        {
            id: 5,
            imgurl: "https://picsum.photos/200?random=5",
            name: "Maintaince",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        },
        {
            id: 6,
            imgurl: "https://picsum.photos/200?random=6",
            name: "Inspection & Testing",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui illo eum ea magnam, dolorem iste numquam."
        }
    ];

    const commercial = commercialData.map((item) => (<ProjectCard
        imgurl={item.imgurl}
        name={item.name}
        description={item.description}
    />));

    const residential = residentialData.map((item) => (<ProjectCard
        imgurl={item.imgurl}
        name={item.name}
        description={item.description}
    />));



    return (
        <div className='projects-page'>
            <header>
                <h1>We are creating a better world through the power of design</h1>
                <p>We empower people to engage and participate in their own unique water journey as part of a bigger movement to contribute to water sustainability across the world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet doloremque possimus exercitationem quae temporibus nesciunt ratione corrupti quod dignissimos, in omnis quasi id nostrum provident perspiciatis culpa fugiat inventore accusantium.</p>
            </header>

            <div className='projects-content'>
                <div className='commercial'>
                    <h4 className='title'>Commercial areas <i class="fa-solid fa-arrow-down"></i></h4>
                    <Carousel

                        responsive={responsive}>
                        {commercial}
                    </Carousel>
                </div>

                <div className='residential'>
                    <h4 className='title'>Residential areas <i class="fa-solid fa-arrow-down"></i></h4>
                    <Carousel responsive={responsive}>
                        {residential}
                    </Carousel>
                </div>
            </div>

        </div>
    );
}

export default Projects;