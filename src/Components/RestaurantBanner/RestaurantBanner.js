import React from "react";
import "./RestaurantBanner.scss";

const RestaurantBanner = (props) => {
    return (
        <div className="restaurant-banner">
            <img src={props.imageURL} alt={props.imageAlt} className="restaurant-banner__image"/>
            <h3 className="restaurant-banner__name">{props.name}</h3>
        </div>
    )
}

export default RestaurantBanner;