import React from "react";
import "./CareersSection.scss";
import WorkCard from "../../Components/WorkCard/WorkCard";

const CareersSection = () => {
    return (
        <section className="careers">
            <div className="careers__content">
                <h3 className="careers__header">Work with Delivered</h3>
                <div className="careers__cards">
                    <div className="careers-work-card__wrapper">
                        <WorkCard 
                            id="1"
                            img={{
                                url: "../../../img/careers1.jpg",
                                description: "Riders"
                            }}
                            title="Riders"
                            description="Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts."
                        />
                    </div>    
                    <div className="careers-work-card__wrapper">
                        <WorkCard 
                            id="2"
                            img={{
                                url: "../../../img/careers2.jpg",
                                description: "Food"
                            }}
                            title="Restaurants"
                            description="Partner with Deliveroo and reach more customers than ever. We handle delivery, so you can focus on the food."
                        />
                    </div>    
                    <div className="careers-work-card__wrapper">
                        <WorkCard 
                            id="3" 
                            img={{
                                url: "../../../img/careers3.jpg", 
                                description: "Office workers"
                            }}
                            title="Careers"
                            description="Our mission is to change the way people eat. It's ambitious, but so are we. And we need people like you to help us do it."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CareersSection;