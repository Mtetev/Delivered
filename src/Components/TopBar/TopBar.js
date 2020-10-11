import React from "react";
import "./TopBar.scss";

const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbar-logo">
                <img src="" alt="logo" className="topbar-logo__image"/>
                <h2 className="topbar-logo__name">delivered</h2>
            </div>
            <div className="topbar-actions">
                <a href="#" className="topbar-actions__button">Log in </a>
                <a href="#" className="topbar-actions__button">Partner with us</a>
                <a href="#" className="topbar-actions__button">Menu</a>
            </div>
        </div>
    )
}

export default TopBar;