import React from 'react';
import './ContentSession.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ServiceCard from './ServiceCard';
import Navbar from './Navbar';
import TopBanner from './TopBanner';

function ContentSession(props) {
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

    const serviceData = [
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

    const service = serviceData.map((item) => (<ServiceCard
        imgurl={item.imgurl}
        name={item.name}
        description={item.description}
    />));

    const projectData = [
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
        }


    ];

    const project = projectData.map((item) => (<ServiceCard
        imgurl={item.imgurl}
        name={item.name}
        description={item.description}
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
                                One of the most common methods of rainwater harvesting used in construction planning is the installation of rainwater tanks and storage systems. These structures are designed to collect rainwater from rooftops, storing it for later use.
                                <br />
                                <br />
                                The benefits of rainwater tanks and storage systems are manifold. Firstly, they provide an alternative source of water for activities such as irrigation, flushing toilets, and washing cars. By using harvested rainwater, you can reduce your reliance on traditional water sources, thus conserving water and potentially lowering your water bills. Additionally, rainwater is naturally soft and free from chemicals, making it ideal for watering plants and gardens.
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

                    <Carousel responsive={responsive}>
                        {service}
                    </Carousel>
                </div>


                <div className='content-session3'>
                    <h1 className='title'> <i class="fa-solid fa-cloud-rain"></i>Our Projects</h1>
                    <Carousel responsive={responsive}>
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

                                    <button className='getstart-btn'>Read more <i class="fa-solid fa-arrow-right"></i></button>
                                </div>



                            </div>

                        </div>
                        <div className='news-column1'>

                            <div className='news-card-colunm'>


                                <div className='news-card-content'>
                                    <h4 className='news-title' >America Should Harvest a Trillion Gallons of Rainwater
                                    </h4>
                                    <p className='description'>Over the weekend, Burning Man attendees were forced to shelter in place when the usually-parched Black Rock Desert got roughly 3 months’ worth of rain in 24 hours.  </p>

                                    <button className='getstart-btn'>Read more <i class="fa-solid fa-arrow-right"></i></button>
                                </div>



                            </div>

                            <div className='news-card-colunm'>


                                <div className='news-card-content'>
                                    <h4 className='news-title' >Rainwater harvesting systems got a boost from 2019 Act: CM
                                    </h4>
                                    <p className='description'>Over the weekend, Burning Man attendees were forced to shelter in place when the usually-parched Black Rock Desert got roughly 3 months’ worth of rain in 24 hours.</p>

                                    <button className='getstart-btn'>Read more <i class="fa-solid fa-arrow-right"></i></button>
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