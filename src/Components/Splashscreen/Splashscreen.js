import React from "react";
import "./Splashscreen.scss";

const Splashscreen = () => {
    return (
        <section className="splashscreen">
            <p className="splashscreen__description">Your favorite restaurants, delivered to your home</p>
            <form className="splashscreen-form">
                <label for="splashscreen-form__input-field" className="splashscreen-form__label">Enter your adress to find local restaurants</label>
                <input id="splashscreen-form__input-field" type="text" className="splashscreen-form__input-field" placeholder="Enter your address"/>
                <input type="submit" className="splashscreen-form__button" value="Search"/>
            </form>
            <p className="splashscreen__ad">#Delivered to you!</p>
        </section>
    )
}

export default Splashscreen;