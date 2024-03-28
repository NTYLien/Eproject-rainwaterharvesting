import React, { useState } from 'react';
import './ToolProductSuggestion.css'
import { toast } from 'react-toastify';
import ProductShow from '../ProductShow';

function ToolProductSuggestion({ productData }) {


    const [storage, setStorage] = useState();
    const [location, setLocation] = useState();
    const [purpose, setPurpose] = useState();
    const [filter, setFilter] = useState();




    return (
        <div className='tool-page-form'>
            <div class="form">
                <div class="header">
                    <h2>Find the right products for your property</h2>
                    <p>This tool will help to find out which product is perfect for your rainwater harvesting system.
                    </p>
                </div>
                <form onSubmit={(e) => {
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
                        e.preventDefault();
                    } else {


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
                                                value="3000"
                                                onChange={(e) => { setStorage(e.target.value) }}
                                            />
                                            <label for="small-storage">Less than 3.000L</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="medium-storage" value="5000"
                                                onChange={(e) => { setStorage(e.target.value) }} />
                                            <label for="medium-storage">3.000L-6.000L</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="large-storage" value='10000'
                                                onChange={(e) => { setStorage(e.target.value) }} />
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
                                                onChange={(e) => { setLocation(e.target.value) }} />
                                            <label for="above-ground">Above Ground</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="partially-buried" value='partially burried'
                                                onChange={(e) => { setLocation(e.target.value) }} />
                                            <label for="partially-buried">Partially Buried</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="in-ground" value='underground'
                                                onChange={(e) => { setLocation(e.target.value) }} />
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
                                            <input type="radio" id="irrigation-system" name='purpose' value="irrigation-system"
                                                onChange={(e) => { setPurpose(e.target.value) }} />
                                            <label for="irrigation-system">Irrigation System</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="appliances" name='purpose' value="appliances"
                                                onChange={(e) => { setPurpose(e.target.value) }} />
                                            <label for="appliances">Appliances</label>
                                        </div>
                                    </div>



                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="all" name='purpose' value="both"
                                                onChange={(e) => { setPurpose(e.target.value) }} />
                                            <label for="all">Both</label>
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div class="step">
                                <h4>Will you filter be used for rain water, mains water or both?</h4>
                                <p className='category-question'>Filter question</p>
                                <p>If you use rainwater for drink, we recommend choosing both</p>
                                <div class="grid">
                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="rain-water" name='filter' value="rain-water"
                                                onChange={(e) => { setFilter(e.target.value) }} />
                                            <label for="rain-water">Rain water</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="mains-water" name='filter' value="mains-water"
                                                onChange={(e) => { setFilter(e.target.value) }} />
                                            <label for="mains-water">Mains water</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="both" name='filter' value='both'
                                                onChange={(e) => { setFilter(e.target.value) }} />
                                            <label for="both">Both</label>
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

        </div >
    );
}

export default ToolProductSuggestion;