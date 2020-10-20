import React from "react";
import "./RestaurantBanner.scss";

const RestaurantBanner = (props) => {
    return (
        <div className="restaurant-banner">
            <img src={props.img.url} alt={props.img.description} className="restaurant-banner__image"/>
            <h3 className="restaurant-banner__name">{props.name}</h3>
        </div>
    )
}

export default RestaurantBanner;