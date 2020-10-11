import React from "react";

import Splashscreen from "../../Components/Splashscreen/Splashscreen";
import RestaurantList from "../RestaurantList/RestaurantList";

import "./Body.scss";

const Body = () => {
    return (
        <main className="body">
            <Splashscreen />
            <RestaurantList />
        </main>
    );
}

export default Body;