import React from "react";
import "./RestaurantList.scss";

const RestaurantList = () => {
    return (
        <section className="restaurants-section">
            <div className="restaurants__content">
                <h3 className="restaurants__header">What are you looking for today?</h3>
                <ul className="restaurants__list">
                    <li className="restaurants__item restaurants__item--small">1</li>
                    <li className="restaurants__item restaurants__item--wide">2</li>
                    <li className="restaurants__item restaurants__item--wide">3</li>
                    <li className="restaurants__item restaurants__item--small">4</li>
                    <li className="restaurants__item restaurants__item--small">5</li>
                    <li className="restaurants__item restaurants__item--wide">6</li>
                </ul>
            </div>
        </section>
    )
}

export default RestaurantList;