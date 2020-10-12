import React from "react";

import Splashscreen from "../../Components/Splashscreen/Splashscreen";
import CareersSection from "../CareersSection/CareersSection";
import RestaurantList from "../RestaurantList/RestaurantList";

import "./Body.scss";

const Body = () => {
    return (
        <main className="body">
            <Splashscreen />
            <RestaurantList />
            <CareersSection />
        </main>
    );
}

export default Body;