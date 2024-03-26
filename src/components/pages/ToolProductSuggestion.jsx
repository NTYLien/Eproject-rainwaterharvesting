import React, { useState } from 'react';
import './ToolProductSuggestion.css'
import { toast } from 'react-toastify';

function ToolProductSuggestion(props) {

    const [radiochecked, setRadioChecked] = useState(false)

    const [storage, setStorage] = useState(false)
    const [location, setLocation] = useState(false)
    const [purpose, setPurpose] = useState(false)
    const [filter, setFilter] = useState(false)




    return (
        <div className='tool-page-form'>
            <div class="form">
                <div class="header">
                    <h2>Find the right products for your property</h2>
                    <p>This tool will help to find out which product is perfect for residential rainwater harvesting system. If you are finding products for commercial - Click here.
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
                        // navigation
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
                                            />
                                            <label for="small-storage">Less than 3.000L</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="medium-storage" value="50000" />
                                            <label for="medium-storage">3.000L-5.000L</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='storage' id="large-storage" value='10000' />
                                            <label for="large-storage">More than 5.000L</label>
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
                                            <input type="radio" name='location' id="above-ground" value='aboveground' />
                                            <label for="above-ground">Above Ground</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="partially-buried" value='partially burried' />
                                            <label for="partially-buried">Partially Buried</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" name='location' id="in-ground" value='underground' />
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
                                            <input type="radio" id="irrigation-system" name='purpose' value="irrigation-system" />
                                            <label for="irrigation-system">Irrigation System</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="appliances" name='purpose' value="appliances" />
                                            <label for="appliances">Appliances</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="drink" name='purpose' value="drink" />
                                            <label for="drink">Drink</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="all" name='purpose' value="all" />
                                            <label for="all">Everything</label>
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
                                            <input type="radio" id="rain-water" name='filter' value="rain-water" />
                                            <label for="rain-water">Rain water</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="mains-water" name='filter' value="mains-water" />
                                            <label for="mains-water">Mains water</label>
                                        </div>
                                    </div>

                                    <div class="col">
                                        <div class="checkbox">
                                            <input type="radio" id="both" name='filter' value='both' />
                                            <label for="both">Both</label>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="step">
                                <div class="confirmation">

                                    <p>It depends on where you live. In most states, it’s legal to collect your own rainwater for watering lawns and gardens, but it may be against the law to collect rainwater for drinking. Check your local ordinances to be certain of the regulations in your area of the country.
                                    </p>

                                    <div>
                                        <button type='submit'>Submit</button>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </form>

            </div>

        </div>
    );
}

export default ToolProductSuggestion;