import React, { useState } from 'react';
import './SystemCostGuide.css'

function SystemCostGuide(props) {

    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(!show)
    }
    return (
        <div className='cost-guide-page'>
            <h2>Rainwater Collection System Cost Guide</h2>
            <p>A rainwater collection system is a way to capture rainwater to save and distribute later. They can be simple or complex, but either way are a great way to save on your water bill and conserve water over the long term.
                <br />

                If you live in an area that experiences drought or if you find yourself frequently watering your lawn or garden, having a rainwater storage and distribution system can help offset relying on the municipal water supply.
                <br />
                The cost to install a rainwater collection system varies based on the type of system, materials, and needed labor. The national average cost ranges from $1,000 to $3,500, with many homeowners paying about $2,500 for a dry system with a 5,000 gallon polyethylene storage tank installed. For a 55 rain barrel with a spigot, the costs can be as low as $150. On the other end, prices can rise to $15,000 for a 5,000-gallon steel tank with a wet system, irrigation, excavation, and a sprinkler.</p>

            <h4>Rainwater Harvesting System Cost</h4>
            <table className="averageCostTable table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <td id="th1" headers="blank" colspan="2" style={{ textAlign: "center" }}>Rainwater Catchment System Cost</td>
                    </tr>
                </thead>
                <tbody className="thead-bg-green">

                    <tr>
                        <td headers="h">National average cost</td>
                        <td headers="h"><strong>$2,500</strong></td>
                    </tr>
                    <tr>
                        <td headers="h">Average range</td>
                        <td headers="h"><strong>$1,000-$3,500</strong>
                        </td>
                    </tr>
                    <tr>
                        <td headers="h">Low-end</td>
                        <td headers="h"><strong>$150</strong></td>
                    </tr>
                    <tr>
                        <td headers="h">High-end</td><td headers="h"><strong>$15,000</strong></td>
                    </tr></tbody>
            </table>

            <div className='cost-container'>
                <div className='system-method'>
                    <h3 className='title'
                    >Rainwater Collection System Costs by Method</h3>
                    <p>There are two main methods for harvesting rainwater: rooftop rainwater harvesting and surface runoff harvesting. These methods work differently, but both involve collecting and storing rainwater for reuse, rather than simply letting it run off and drain away.</p>
                    <img src="https://assets.fixr.com/cost_guides/rainwater-collection-system/rainwater-collection-system-5edf4ecf2a321.png" alt="rain-method" />
                    <div>
                        <button className='get-start-btn' onClick={handleClick} > {show ? "Click to Hide" : "Show more"}</button>
                    </div>



                    {show ?
                        <>
                            <h4>Rooftop Rainwater Harvesting</h4>
                            <p>Rooftop rainwater harvesting is much cheaper than surface runoff harvesting and costs between $1,000 and $5,000 on average. This method focuses on collecting rainwater directly from the roof. It uses the roof as a catchment device, letting water land on the roof panes, flow into the gutters, and then be redirected into a tank. At a minimum, this system requires a collection area, a conveyance system, and somewhere for the water to be stored. In addition to being less costly, this method is also environmentally friendly.</p>
                            <h4>Surface Runoff Harvesting</h4>
                            <p>Surface runoff harvesting focuses on collecting runoff rainwater but involves a lot of labor and digging and has costs that range from $8,000 to $15,000. This means letting the rain fall on the ground and then having it flow into a tank, which is usually situated below the ground. Unlike with a rooftop system, surface runoffs make use of the ground itself as the collection area for the rainwater. It flows along the ground and down into grates, where it enters underground pipes and flows into a tank.
                                <br />
                                In-ground surface runoff systems must be located at least 10 feet away from any watertight sewer line and 50 feet away from any non-watertight sewer line to avoid contamination. If you cannot work within those limits, you may have to stick with an above-ground system. A surface runoff system can have one grate or several, depending on your specific needs.</p>
                        </>
                        : ""}





                </div>
                <div className='system-method'>
                    <h3 className='title'>Rainwater Collection System Cost by Type</h3>
                    <p>TThere are different types of rainwater collection systems, varying in capacity, function, and price. You can get very simple rainwater collection systems like barrels that sit out in the open and collect rainwater that runs off the roof, as well as much more complicated systems involving pipes flowing from the roof down underground into below-surface tanks. The most common rainwater collection methods make use of the rooftop harvesting method, and the table below shows three common types, along with a price range.</p>
                    <img src="https://assets.fixr.com/cost_guides/rainwater-collection-system/rainwater-collection-system-5edf4f4bed1ea.png" alt="rain-method" />

                    <table className="costTable table table-striped table-bordered table-hover">
                        <tbody className="thead-bg-blue">
                            <tr>
                                <td id="th4" headers="blank" style={{
                                    textAlign: "center"
                                }}>Type</td>
                                < td id="th5" headers="blank"  > Average Price Range(Labor Included)</td></tr><tr><td headers="h" >Rain Barrel</td>
                                <td headers="h"><strong>$120 - $160</strong></td>
                            </tr>
                            <tr>
                                <td headers="h">Dry System</td>
                                <td headers="h" ><strong>$1,000 - $5,000</strong>
                                </td>
                            </tr>
                            <tr>
                                <td headers="h">Wet System</td>
                                <td headers="h"><strong>$8,000 - $15,000</strong>
                                </td></tr>
                        </tbody>
                    </table>
                    <div>
                        <button className='get-start-btn' onClick={handleClick} > {show ? "Click to Hide" : "Show more"}</button>
                    </div>
                    {show ? <>
                        <h4>Rain Barrel</h4>
                        <p>Rain barrels cost about $120 to $160 and are the simplest method for collecting rainwater. Home rain barrels range from 40 to 120 gallons. The most common size is 55 gallons. This rainwater collection method has no installation price since it consists of nothing more than placing a rain barrel under a gutter. A rain barrel connects to a gutter downspout and usually has a cover and a spigot at the base for distribution. Raising the barrel above ground level will allow gravity to push water out. Some people may worry that having big barrels sitting alongside their home could look unsightly, but these days, there are plenty of decorative rain barrels available. Some homeowners use them as outdoor furniture, painting the exterior and growing plants on the top to enhance the look of their rainwater collection system.</p>
                        <h4>Dry System of Rainwater Harvesting</h4>
                        <p>Dry rainwater collection systems cost between $1,000 and $5,000. A ‘dry’ system is essentially a larger version of a rain barrel. A dry system uses a large storage tank that is placed close to the house for water to flow from the gutter pipes directly into the storage tank. This is called a dry system because the collection pipe is “dry” in between rainfalls, as the water flows straight into the tank. The largest portion of the cost of a dry system is the storage tank, which varies based on capacity and storage material. A 5,000-gallon polyethylene tank costs about $2,000 to $4,000.
                            <br />
                            The main benefit of a dry system is how simple it is. The pipes run directly from the gutters to the tank, emptying themselves in the process, with minimal maintenance required. On the downside, they involve the use of barrels or tanks placed above the ground very close to your home, which may be an issue for some homeowners.</p>

                        <h4>Wet System of Rainwater Harvesting</h4>
                        <p>A wet system is much more complex than a dry system. It costs about $8,000 to $15,000 for an average tank that holds about 5,000 gallons. The price may increase if you choose a larger tank. With this type of system, the pipes are located underground, and all gutters eventually feed into this system. The pipes fill with water until there is enough to spill over into the storage tank. These systems are known as wet systems because the pipes remain filled with water at all times unless you empty them somehow. The big benefit of a wet system is that the pipes are hidden away, so they will not interfere with the aesthetics of your property. On the downside, the pipes can be vulnerable to issues like bug infestations and debris accumulation, so it requires good filters and regular maintenance.
                            <br />
                            Due to the need for underground piping, it costs significantly more than a dry system or rain barrel. The excavation cost runs $440 to $760 for three hours of access to the excavator and an operator. You will also need to factor in the price of the tank you choose.
                            <br />
                            However, prices vary based on any extra items you would like to add. For instance, if you want to install a 5,000-gallon ‘wet’ tank with a sprinkler system, you’ll pay $4,000 to $7,000 for the irrigation and sprinkler installation. Another addition you might want is a water treatment system, which is about $2,500 to $3,000. Neither of these items are required for a basic rainwater gathering system. The water treatment system isn’t needed if your water will be used for irrigation. Sprinkler systems are also not mandatory, but are often installed at the same time as a wet system.</p>

                    </> : ""}


                </div>

                <div className='system-method '>
                    <h3>Rainwater Tank Price by Material</h3>
                    <p>The tank makes up the largest portion of a rainwater recycling system cost in many cases. They are required for use with dry and wet rainwater harvesting systems. The only difference is one is above ground, and one is below ground. Tanks vary in size and range from about 600 to 50,000 gallons in capacity. Small homes may need only a 2,500 gallon tank, while large properties with a lot of landscaping may require a 10,000 gallon tank. An average tank size of 5,000 gallons is reasonable for a large number of homeowners, which is reflected in the table and information below.</p>
                    <img src="https://assets.fixr.com/cost_guides/rainwater-collection-system/rainwater-collection-system-61a4cb960f08b.png" alt="rain-method" />
                    <table class="costTable table table-striped table-bordered table-hover">
                        <tbody class="thead-bg-blue"><tr>
                            <td id="th6" headers="blank" >Tank Material</td>
                            <td id="th7" headers="blank" >Average Price for a 5,000-Gallon Tank (Materials Only)</td>
                        </tr>
                            <tr>
                                <td headers="h" >Polyethylene</td>
                                <td headers="h" ><strong>$2,000 - $4,000</strong>
                                </td>
                            </tr>
                            <tr>
                                <td headers="h" >Fiberglass</td>
                                <td headers="h" ><strong>$2,000 - $5,000</strong></td>
                            </tr>
                            <tr>
                                <td headers="h" >Steel</td>
                                <td headers="h" ><strong>$3,000 - $6,000</strong></td></tr><tr><td headers="h" >Concrete</td>
                                <td headers="h" ><strong>$3,000 - $6,000</strong></td></tr>
                        </tbody>
                    </table>
                    <div>
                        <button className='get-start-btn' onClick={handleClick} > {show ? "Click to Hide" : "Show more"}</button>
                    </div>
                    {show ? <>
                        <h4>Polyethylene Tank</h4>
                        <p>Homeowners can expect to pay $2,000 to $4,000 for a polyethylene rainwater tank. This is one of the most common options for water harvesting across the United States. There are several reasons to consider choosing this material for your tank. It is affordable compared to many other materials. It also comes in a variety of colors and sizes and is lightweight compared to steel or concrete tanks. These tanks are made of flexible plastic and come in opaque or translucent versions. Solid opaque tanks are considered the best option since algae are less likely to grow inside. They can only be used above ground or as a partially buried option.</p>
                        <h4>Fiberglass Tank</h4>
                        <p>When choosing a fiberglass tank, you pay $2,000 to $5,000. One of the perks of a fiberglass tank is that it is sturdy and durable enough to be installed above or below the ground. This tank is lightweight like polyethylene but rigid and fairly simple to repair when needed. However, any parts that have been cut will be sharp and fine, so caution should be used when touching those areas of the tank.</p>
                        <h4>Steel Rainwater Tanks</h4>
                        <p>A steel tank is a bit pricier at $3,000 to $6,000 but offers many exceptional benefits. These tanks are easy to access, very durable, and have an aesthetic that many appreciate. A steel tank ranges in size from a few hundreds of gallons to many thousands of gallons, so they work for most anyone’s needs. In most cases, a vinyl bladder is inside the steel tank and is the vessel that holds the water. These tanks are often assembled at your home due to their large size. Steel can corrode when buried, so these tanks are typically used above ground.</p>
                        <h4>Concrete Rainwater Tanks</h4>
                        <p>The final option is a concrete water tank, ranging from $3,000 to $6,000. The main benefits of concrete are its heaviness, durability, and strength. This type of tank can be used above ground or underground for versatility. They come in two forms, including ferro-concrete and monolithic-pour concrete. The former is a new style where a mixture of concrete is applied to a metal frame. Monolithic-pour means the tanks are prefabricated or poured in place before assembly. Concrete also has the advantage of increasing the pH of water.</p>


                    </> : ""}


                </div>


            </div>

            <p className='contact'>  To provide you with the most accurate and up-to-date cost figures, our teams will contact you base on your information that you sent us at the form as soon as posible. Be sure to let us know if you have questions for us via our support-center phone number: <span>1068.6801 </span></p>

        </div >
    );
}

export default SystemCostGuide;