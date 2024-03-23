import React from 'react';
import './Aboutus.css'

function Aboutus(props) {
    return (
        <div>
            <div className='aboutus'>
                <div className='ourstory-container'>
                    <div className='ourstory-image'>
                        <div className="imgs-large">
                            <img className="large-image" src="https://picsum.photos/200" alt="Aboutus-1" />
                        </div>

                        <div className='imgs-small'>
                            <img src="https://picsum.photos/200" alt="Aboutus-2" />
                            <img src="https://picsum.photos/200" alt="Aboutus-3" />
                        </div>

                    </div>


                    <div className='ourstory-text'>
                        <h2>Our Story</h2>
                        <p>Rainwater harvesting is the technique of collection and storage of rain into natural reservoirs, tanks, cisterns and other natural and artificial storage units. Rainwater harvesting is also related to the proper management and possible storage of stormwater, which is precipitation from rain and snowmelt events which flows over land (both impervious and pervious surfaces), to advance the infiltration and deceleration of surface water into subsurface aquifers (before it is lost as surface runoff). Rainwater harvesting will improve the stability and quality of local water supply, contributes to sustainable stormwater management, reduces potable water used for food production and irrigation, and can promote other sustainable development goals.</p>
                    </div>
                </div>



                <div className='mission-container'>
                    <div className="mission-text">
                        <h2>Our Mission</h2>
                        <p>Our mission is to provide high-quality products/services to our customers while maintaining a focus on sustainability and social responsibility.Every single day our Rain Harvesting team help Rain Harvesters across the world. We share system designs, we discuss system issues and improvements, we design and make new products, create educational materials, online courses and talk to people. We talk to people to learn and be inspired by how people collect rainwater.  We hope to inspire new Rain Harvesters to start, help them to solve problems and learn to care for their Rain Harvesting system, big or small. All day every day our quest is to help people collect rainwater</p>
                    </div>

                    <div className="mission-image">
                        <img src="https://picsum.photos/200" alt="Aboutus4" />
                    </div>
                </div>
            </div >
        </div>

    );
}

export default Aboutus;