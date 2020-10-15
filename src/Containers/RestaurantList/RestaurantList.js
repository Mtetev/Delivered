import React from "react";
import RestaurantBanner from "../../Components/RestaurantBanner/RestaurantBanner";
import "./RestaurantList.scss";

const RestaurantList = () => {
    return (
        <section className="restaurants-section">
            <div className="restaurants__content">
                <h3 className="restaurants__header">What are you looking for today?</h3>
                <ul className="restaurants__list">
                    <li className="restaurants__item restaurants__item--small">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner imageURL="../../../img/food1.jpg" imageAlt="food picture" name="Fine dinning" />
                        </a> 
                    </li>
                    <li className="restaurants__item restaurants__item--wide">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner imageURL="../../../img/food2.jpg" imageAlt="food picture" name="Exquisite desserts" />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--wide">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner imageURL="../../../img/food3.jpg" imageAlt="food picture" name="sweet delights" />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--small">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner imageURL="../../../img/food4.jpg" imageAlt="food picture" name="Main courses" />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--small">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner imageURL="../../../img/food5.jpg" imageAlt="food picture" name="Barbeque" />
                        </a>
                    </li>
                    <li className="restaurants__item restaurants__item--wide">
                        <a href="#" className="restaurants__link"> 
                            <RestaurantBanner imageURL="../../../img/food6.jpg" imageAlt="food picture" name="Specialties" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default RestaurantList;