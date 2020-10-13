import React from "react";
import "./CareersSection.scss";
import WorkCard from "../../Components/WorkCard/WorkCard";

const CareersSection = () => {
    return (
        <section className="careers-section">
            <div className="careers__content">
                <div className="work-card__wrapper">
                    <WorkCard id="1" img={{url: "../../../img/bike.jpg", description: "Riders picture"}} title="Riders" description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts." />
                </div>    
                <div className="work-card__wrapper">
                    <WorkCard id="2" img={{url: "../../../img/bike.jpg", description: "Riders picture"}} title="Riders" description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts." />
                </div>    
                <div className="work-card__wrapper">
                    <WorkCard id="3" img={{url: "../../../img/bike.jpg", description: "Riders picture"}} title="Riders" description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts." />
                </div>
            </div>
        </section>
    )
}

export default CareersSection;