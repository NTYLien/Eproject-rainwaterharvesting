import React, { useState } from "react";
import "./ToolCostSuggestion.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ToolCostSuggestion(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const userInfoFromTool = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    country: country.trim(),
  };
  const nav = useNavigate();
  return (
    <div className="tool-page-form">
      <div class="form">
        <div class="header">
          <h2>Calculate the cost of your Rainwater Collection System</h2>
          <p>
            We will help to estimate total cost of your project based on the
            type of system, materials, and needed labor.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            if (
              !userInfoFromTool.name ||
              !userInfoFromTool.email ||
              !userInfoFromTool.phone ||
              !userInfoFromTool.country
            ) {
              toast.error(
                "Sorry! Please fill-in required info question before submit the form",
              );
              return;
            }

            const emailRegEx = /^[a-zA-Z]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

            if (!userInfoFromTool.email.match(emailRegEx)) {
              toast.error("Invalid email");
              return;
            }

            const phoneRegEx = /^\d{8,}$/;
            if (!userInfoFromTool.phone.match(phoneRegEx)) {
              toast.error("Your phone number must be at least 8 digits");
              return;
            }

            const data = new FormData(e.target);
            const errors = ["info", "method", "system", "material"]
              .map((inputName) => {
                const value = data.get(inputName);
                if (value === null) {
                  return `- ${inputName} question is not selected. Please check again!`;
                }
                return null;
              })
              .filter((error) => error !== null);

            if (errors.length > 0) {
              toast.error(errors.join(", "));
            } else {
              toast.info(
                "Successfull! Thank you for sending us your infomation!",
              );
              nav(
                "/interactive-tools/interactive-tools-cost-suggestion/system-cost-guide",
              );
            }
          }}
        >
          <div class="body">
            <div class="steps">
              <div class="step">
                <h4>Your requirements details</h4>
                <p>Please fill in the required information on the form.</p>
                <p className="category-question">Info question</p>
                <div class="grid">
                  <div class="col">
                    <lable for="name">Name*</lable>
                    <input
                      type="text"
                      id="name"
                      name="info"
                      required
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>

                  <div class="col">
                    <lable for="email">Email*</lable>
                    <input
                      type="text"
                      id="email"
                      name="info"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>

                  <div class="col">
                    <lable for="phone">Phone number*</lable>
                    <input
                      type="number"
                      id="phone"
                      name="info"
                      required
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>

                  <div class="col">
                    <lable for="country">Your address*</lable>
                    <input
                      type="text"
                      id="address"
                      name="info"
                      required
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div class="step">
                <h4>Rainwater Collection Method</h4>
                <p className="category-question">Method question</p>
                <p>
                  There are two main methods for harvesting rainwater: rooftop
                  rainwater harvesting and surface runoff harvesting. These
                  methods work differently, but both involve collecting and
                  storing rainwater for reuse, rather than simply letting it run
                  off and drain away. Which method is right for you?
                </p>
                <div class="grid">
                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="method"
                        value="rooftop-harvestion"
                        id="rooftop-harvestion"
                      />
                      <label for="rooftop-harvestion">Rooftop Harvesting</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="method"
                        value="surface-runoff-harvesting"
                        id="surface-runoff-harvesting"
                      />
                      <label for="surface-runoff-harvesting">
                        Surface Runoff Harvesting
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="step">
                <h4>Rainwater Collection System</h4>
                <p className="category-question">System question</p>
                <p>
                  You can get very simple rainwater collection systems like
                  barrels that sit out in the open and collect rainwater that
                  runs off the roof, as well as much more complicated systems
                  involving pipes flowing from the roof down underground into
                  below-surface tanks. Which system is right for you?
                </p>

                <div class="grid">
                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="system"
                        value="rain-barrel"
                        id="rain-barrel"
                      />
                      <label for="rain-barrel">Rain Barrel</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="system"
                        value="dry-system"
                        id="dry-system"
                      />
                      <label for="dry-system">Dry System</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="checkbox">
                      <input type="radio" name="system" value id="wet-system" />
                      <label for="wet-system">Wet System</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="step">
                <h4>Rainwater Tank Material</h4>
                <p className="category-question">Material question</p>
                <p>
                  The tank makes up the largest portion of a rainwater recycling
                  system cost in many cases. They are required for use with dry
                  and wet rainwater harvesting systems. The only difference is
                  one is above ground, and one is below ground. ?
                </p>

                <div class="grid">
                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="material"
                        value="polyethylene"
                        id="polyethylene"
                      />
                      <label for="polyethylene">Polyethylene</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="material"
                        value="fiberglass"
                        id="fiberglass"
                      />
                      <label for="fiberglass">Fiberglass</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="material"
                        value="steel"
                        id="steel"
                      />
                      <label for="steel">Steel</label>
                    </div>
                  </div>

                  <div class="col">
                    <div class="checkbox">
                      <input
                        type="radio"
                        name="material"
                        value="concrete"
                        id="concrete"
                      />
                      <label for="concrete">Concrete</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="step">
                <div class="confirmation">
                  <p>
                    We have created the rainwater collection calculator team to
                    assist you with understanding the rainwater collection
                    opportunity you have and to assist you in sizing an optimal
                    rainwater collection tank size for your situation.This form
                    will learn-intro us know more about your requirements.
                  </p>

                  <div>
                    <button type="submit">Submit</button>
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

export default ToolCostSuggestion;
