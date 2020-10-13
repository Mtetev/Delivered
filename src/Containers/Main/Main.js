import React from "react";

import TopBar from "../../Components/TopBar/TopBar";
import Body from "../../Containers/Body/Body";
import Footer from "../../Components/Footer/Footer";


import "./Main.scss";

const Main = () => {
    return [
        <TopBar />,
        <Body />,
        <Footer />
    ]
}

export default Main;

