import React from "react";
import "./CareersSection.scss";
import WorkCard from "../../Components/WorkCard/WorkCard";

const CareersSection = () => {
    return (
        <section className="section-careers">
            <WorkCard id="1" img={{url: "../../../img/bike.jpg", description: "Riders picture"}} title="Riders" description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts." />
            <WorkCard id="2" img={{url: "../../../img/bike.jpg", description: "Riders picture"}} title="Riders" description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts." />
            <WorkCard id="3" img={{url: "../../../img/bike.jpg", description: "Riders picture"}} title="Riders" description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts." />
        </section>
    )
}

export default CareersSection;