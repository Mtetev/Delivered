import React from "react";
import RestaurantBanner from "../../Components/RestaurantBanner/RestaurantBanner";
import "./RestaurantList.scss";

import FoodImage1 from "../../../img/food1.jpg";
import FoodImage2 from "../../../img/food2.jpg";
import FoodImage3 from "../../../img/food3.jpg";
import FoodImage4 from "../../../img/food4.jpg";
import FoodImage5 from "../../../img/food5.jpg";
import FoodImage6 from "../../../img/food6.jpg";

const RestaurantList = () => {
    return (
        <section className="restaurants">
            <div className="restaurants__content">
                <h3 className="restaurants__header">What are you looking for today?</h3>
                <ul className="restaurants__list">
                    <li className="restaurants__item restaurants__item--small">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner 
                                img = {{
                                    url: FoodImage1,
                                    description: "food picture"
                                 }}
                                name="Fine dinning"
                            />
                        </a> 
                    </li>
                    <li className="restaurants__item restaurants__item--wide">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner 
                                img={{
                                    url: FoodImage2,
                                    description: "food picture"
                                }}
                                name="Exquisite desserts" 
                            />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--wide">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner 
                                img={{
                                    url: FoodImage3,
                                    description: "food picture"
                                }}
                                name="sweet delights"
                            />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--small">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner 
                                img={{
                                    url: FoodImage4,
                                    description: "food picture"
                                }}
                                name="Main courses"
                            />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--small">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner 
                                img={{
                                    url: FoodImage5,
                                    description: "food picture"
                                }}
                                name="Barbeque"
                            />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--wide">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner 
                                img={{
                                    url: FoodImage6,
                                    description: "food picture"
                                }}
                                name="Specialties"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default RestaurantList;