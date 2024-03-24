import React from 'react';
import './ToolProductSuggestion.css'

function ToolProductSuggestion(props) {
    return (
        <div>
            <div class="form">
                <div class="header">
                    <h2>Find the right products for your property</h2>
                    <p>This tool will help to find out which product is perfect for residential rainwater harvesting system. If you are finding products for commercial - Click here.
                    </p>
                </div>

                <div class="body">

                    <div class="steps">
                        <div class="step">
                            <h4>What is the capacity of rainwater storage tank?</h4>
                            <p>
                                The capacity of the storage tank will depend on how much roof area you have, and how much rainfall you get! For domestic system you will require about 1.000 litres of storage per person
                            </p>
                            <div class="grid">
                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="small-storage" />
                                        <label for="small-storage">Less than 3.000L</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="medium-storage" />
                                        <label for="medium-storage">3.000L-10.000L</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="large-storage" />
                                        <label for="large-storage">More than 10.000L</label>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="step">
                            <h4>What type of rainwater harvasting tank do you need?</h4>
                            <p>Rainwater harvesting storage is located above ground, below ground, or partially buried.
                            </p>
                            <div class="grid">
                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="above-ground" />
                                        <label for="above-ground">Above Ground</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="partially-buried" />
                                        <label for="partially-buried">Partially Buried</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="in-ground" />
                                        <label for="in-ground">In-Ground</label>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div class="step">
                            <h4>What do you use rain-water for? </h4>
                            <p>After filtering the water to remove smaller particulates, sediment and onder contaminants. This  water is now ready fo household use.</p>

                            <div class="grid">
                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="irrigation-system" />
                                        <label for="irrigation-system">Irrigation System</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="appliances" />
                                        <label for="appliances">Appliances</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="drink" />
                                        <label for="drink">Drink</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="all" />
                                        <label for="all">Everything</label>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div class="step">
                            <h4>Will you filter be used for rain water, mains water or both?</h4>
                            <p>If you use rainwater for drink, we recommend choosing both</p>
                            <div class="grid">
                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="rain-water" />
                                        <label for="rain-water">Rain water</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="mains-water" />
                                        <label for="mains-water">Mains water</label>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="checkbox">
                                        <input type="checkbox" id="both" />
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
                                    <button>Submit</button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default ToolProductSuggestion;