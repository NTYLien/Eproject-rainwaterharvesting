import React from 'react';
import './ContentSession.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ServiceCard from '../Services/ServiceCard';
import TopBanner from './TopBanner';
import ProjectCard from '../Projects/ProjectCard';
import { useNavigate } from 'react-router-dom';

function ContentSession(props) {

    const nav = useNavigate();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
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

    const serviceData = props.ServiceData;
    const service = serviceData.map((item) => (<ServiceCard
        imgurl={item.imgurl}
        name={item.name}
        description={item.description}
        id={item.id}
        imgBg={item.imgBg}
    />));

    const projectData = props.ProjectData;

    const project = projectData.map((item) => (<ProjectCard
        imgurl={item.imgurl}
        name={item.name}
        description={item.description}
        id={item.id}
    />));


    return (
        <div className='content-session'>
            <TopBanner />
            <div className='content-homepage' >
                <div className='content-session1'>
                    <h1 className='title'> <i class="fa-solid fa-cloud-rain"></i> Rain water harvesting techniques</h1>



                    <div className="row1">

                        <div className='photo'>

                        </div>
                        <div className="row-content">
                            <h3 className='name-title'>Rooftop Rainwater Harvesting System</h3>
                            <p>
                                Rooftop rainwater harvesting is a method of collecting rain water where it falls and in which rain water is captured from the roof catchments of domestic houses or commercial buildings and stored in the tanks. Harvested rain water can either be stored in a tank or diverted to artificial recharge system to meet the household/commercial needs through storage in tanks.
                                <br />
                                <br />
                                This method is simple, eco-friendly, less expensive and truly effective. Roof-top rainwater harvesting method (RRH) involves diverting and recharging (or) storing rainwater that falls on the roof of a house/building. The main objective of rooftop rain water harvesting is to make water available for future use, to improve quality of ground water and etc.
                            </p>
                        </div>
                    </div>

                    <div className="row2">
                        <div className='photo'>

                        </div>
                        <div className="row-content">
                            <h3 className='name-title'>Surface Run-Off Rainwater Harvesting System</h3>
                            <p>
                                Another rainwater harvesting technique is the creation of permeable surfaces and percolation pits. Permeable surfaces are designed to allow rainwater to infiltrate into the ground, replenishing the groundwater table. These surfaces can be made using materials such as permeable pavers, gravel, or even grass. Percolation pits, on the other hand, are excavations filled with porous materials like broken bricks or pebbles. They help facilitate the absorption and percolation of rainwater into the soil.
                                <br />  <br />
                                The benefit of permeable surfaces and percolation pits is their ability to minimise surface runoff and prevent waterlogging. By allowing rainwater to naturally seep into the ground, the risk of flooding is reduced, and the groundwater table is recharged. This technique not only helps improve water scarcity but also promotes soil health and prevents erosion. It’s a win-win for both the environment and your construction site.
                            </p>
                        </div>
                    </div>



                </div>

                <div className='content-session2'>
                    <h1 className='title'> <i class="fa-solid fa-cloud-rain"> </i>  Our Services </h1>

                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={2000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}>
                        {service}
                    </Carousel>
                </div>


                <div className='content-session3'>
                    <h1 className='title'> <i class="fa-solid fa-cloud-rain"></i>Our Projects</h1>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={2000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite={false}
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={responsive}>
                        {project}



                    </Carousel>
                </div>


                <div className='content-session4'>
                    <h1 className='title'> <i class="fa-solid fa-cloud-rain"></i>Lastest News</h1>
                    <div className="news-row">

                        <div className='news-column'>
                            <div className='news-card-colunm2'>
                                <div className='news-card-content'>
                                    <h3 className='news-title'>The Future of Rainwater Harvesting: Innovations and Trends
                                    </h3>
                                    <p className='description'>Rainwater harvesting is a sustainable and environmentally friendly way to collect and store rainwater for various uses, such as irrigation, household purposes, and even for drinking. In recent years, rainwater harvesting has seen a surge in popularity, and the trend is expected to continue in the future as people become more aware of the benefits of using rainwater and the need to conserve resources. <br /><br />
                                        The integration of smart technology into rainwater harvesting systems is one of the biggest trends in the future of this industry. Smart technology allows for real-time monitoring of water usage and storage, automatic scheduling of irrigation systems, and remote access to control and manage the system. This will not only make the use of rainwater more convenient but also ensure that the water is being used efficiently. Here at Smart Water, we are already a part of this smart technology movement, and our Smart Water tank indicator provides you with all...


                                    </p>

                                    <button className='getstart-btn' onClick={() => { nav("/news") }}>Read all news <i class="fa-solid fa-arrow-right"></i></button>
                                </div>



                            </div>

                        </div>
                        <div className='news-column1'>

                            <div className='news-card-colunm'>


                                <div className='news-card-content'>
                                    <h4 className='news-title' >America Should Harvest a Trillion Gallons of Rainwater
                                    </h4>
                                    <p className='description'>Over the weekend, Burning Man attendees were forced to shelter in place when the usually-parched Black Rock Desert got roughly 3 months’ worth of rain in 24 hours.  </p>

                                    <button className='getstart-btn' onClick={() => { nav("/news") }}>Read all news <i class="fa-solid fa-arrow-right"></i></button>
                                </div>



                            </div>

                            <div className='news-card-colunm'>


                                <div className='news-card-content'>
                                    <h4 className='news-title' >Rainwater harvesting systems got a boost from 2019 Act: CM
                                    </h4>
                                    <p className='description'>Over the weekend, Burning Man attendees were forced to shelter in place when the usually-parched Black Rock Desert got roughly 3 months' worth of rain in 24 hours.</p>

                                    <button className='getstart-btn' onClick={() => { nav("/news") }}>Read all news<i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContentSession;