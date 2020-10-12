import React from "react";
import "./WorkCard.scss";

const WorkCard = (props) => {
    return (
        <div className={"work-card work-card--" + props.id}>
            <div className="work-card__top">
                <img src={props.img.url} alt={props.img.description} className="work-card__image"/>
            </div>
            <div className="work-card__bottom">
                <h3 className="work-card__title">{props.title}</h3>
                <p className="work-card__description">{props.description}</p>
                <a href="#" className="work-card__button">Find out more</a>
            </div>
        </div>
    );
}

export default WorkCard;