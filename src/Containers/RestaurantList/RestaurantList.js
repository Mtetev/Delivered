import React from "react";
import "./RestaurantList.scss";

const RestaurantList = () => {
    return (
        <section className="restaurants-section">
            <h3 className="restaurants__header">What are you looking for today?</h3>
            <ul className="restaurants__list">
                <li className="restaurant__item">1</li>
                <li className="restaurant__item">2</li>
                <li className="restaurant__item">3</li>
                <li className="restaurant__item">4</li>
                <li className="restaurant__item">5</li>
            </ul>
        </section>
    )
}

export default RestaurantList;