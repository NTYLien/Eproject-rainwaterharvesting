import React, { useState } from 'react';
import './ToolProductSuggestion.css'
import { toast } from 'react-toastify';
import ProductShow from '../Products/ProductShow';
import { useNavigate } from 'react-router-dom';

function ToolProductSuggestion({ productData }) {
    const nav = useNavigate();

    const [storage, setStorage] = useState();
    const [location, setLocation] = useState();
    const [purpose, setPurpose] = useState();
    const [filter, setFilter] = useState();

    const [clickSubmit, setClickSubmit] = useState(false)

    console.log(storage)


    return (
        <div className='tool-page-form'>
            <div class="form">
                <div class="header">
                    <h2>Find the right products for your property</h2>
                    <p>This tool will help to find out which product is perfect for your rainwater harvesting system.
                    </p>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.target);
                    const errors = ['storage', 'location', 'purpose', 'filter'].map(inputName => {
                        const value = data.get(inputName);
                        if (value === null) {
                            return `- ${inputName} question is not selected. Please check again!`
                        }
                        return null
                    }).filter(error => error !== null)

                    if (errors.length > 0) {
                        // toast
                        toast.error(errors.join(", "))

                    } else {

                        setClickSubmit(true)
                    }
                }}>
                    <div class="body">

                        <div class="steps">
                            <div class="step">
                                <h4>What is the capacity of rainwater storage tank?</h4>
                                <p className='category-question'>Storage question</p>
                                <p>
                                    The capacity of the storage tank will depend on how much roof area you have, and how much rainfall you get! For domestic system you will require about 1.000 litres of storage per person
                                </p>
                                <div class="grid">
                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="small-storage"
                                                value="small-storage"
                                                onClick={(e) => { setStorage(e.target.value) }}
                                            />
                                            <label for="small-storage">Less than 3.000L</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="medium-storage" value="medium-storage"
                                                onClick={(e) => { setStorage(e.target.value) }} />
                                            <label for="medium-storage">3.000L-6.000L</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="large-storage" value='large-storage'
                                                onClick={(e) => { setStorage(e.target.value) }} />
                                            <label for="large-storage">More than 6.000L</label>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="step">
                                <h4>What type of rainwater harvasting tank do you need?</h4>
                                <p className='category-question'>Location question</p>
                                <p>Rainwater harvesting storage is located above ground, below ground, or partially buried.
                                </p>
                                <div class="grid">
                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="above-ground" value='aboveground'
                                                onClick={(e) => { setLocation(e.target.value) }} />
                                            <label for="above-ground">Above Ground</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="partially-buried" value='partially burried'
                                                onClick={(e) => { setLocation(e.target.value) }} />
                                            <label for="partially-buried">Partially Buried</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="in-ground" value='underground'
                                                onClick={(e) => { setLocation(e.target.value) }} />
                                            <label for="in-ground">In-Ground</label>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="step">
                                <h4>What do you use rain-water for? </h4>
                                <p className='category-question'>Purpose question</p>
                                <p>After filtering the water to remove smaller particulates, sediment and onder contaminants. This  water is now ready fo household use.</p>

                                <div class="grid">
                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="irrigation-system" name='purpose' value="irrigation"
                                                onClick={(e) => { setPurpose(e.target.value) }} />
                                            <label for="irrigation-system">Irrigation System</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="appliances" name='purpose' value="appliances"
                                                onClick={(e) => { setPurpose(e.target.value) }} />
                                            <label for="appliances">Appliances</label>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="step">
                                <h4>Will you filter be used for rain water, mains water or both?</h4>
                                <p className='category-question'>Filter question</p>
                                <p>If you use rainwater for appliances systems, we recommend choosing both</p>
                                <div class="grid">
                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="rain-water" name='filter' value="rain-water"
                                                onClick={(e) => { setFilter(e.target.value) }} />
                                            <label for="rain-water">Rain water</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="mains-water" name='filter' value="mains-water"
                                                onClick={(e) => { setFilter(e.target.value) }} />
                                            <label for="mains-water">Mains water</label>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="step">
                                <div class="confirmation">

                                    <p>For custom configurations and/or custom system drawings please give us a call at <span className='hotline'>1068.6801.</span> Price can vary significantly, based on configuration."
                                    </p>

                                    <div>
                                        <button type='submit'>Submit</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </form>

            </div >
            {
                clickSubmit &&
                (
                    productData.filter((product) => (product["storage-capacity"] === storage && product.location === location) || product.purpose === purpose || product.category === "pump").map(product => {
                        return <div className='result-product'>
                            <h4>{product.name}</h4>
                            <img src={product.imgurl} alt="" />

                            <p>{product.description}</p>
                            <ul className='Feature-list'>
                                Features of the GWDD System:
                                <li>{product.features1}</li>
                                <li>{product.features2}</li>
                                <li>{product.features3}</li>
                                <li>{product.features4}</li>
                                <li>{product.features5}</li>
                                <li>{product.features6}</li>


                            </ul>

                            <button className='buynow-btn'
                                onClick={() => { nav(`/products/${product.productCode}`) }}
                            >Buy Now</button>
                        </div>
                    }))

            }









        </div >
    );
}

export default ToolProductSuggestion;