import React from "react";
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__submenu">
                    <h3 className="footer__submenu-title">Discover Delivered</h3>  
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">About us</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Newsroom</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Foodscene blog</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Engineering blog</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Design blog</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Restaurant signup</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Becoume a rider</a></li>
                    </ul>        
                </div>
                <div className="footer__submenu">
                    <h3 className="footer__submenu-title">Legal</h3>  
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Terms and Conditions</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Privacy</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Cookies</a></li>
                    </ul>
                </div>
                <div className="footer__submenu">
                    <h3 className="footer__submenu-title">Help</h3>  
                    <ul className="footer__list">
                        <li className="footer__item"><a href="#" className="footer__link">Contact</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">FAQs</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Cuisines</a></li>
                        <li className="footer__item"><a href="#" className="footer__link">Site map</a></li>
                    </ul>
                </div>
            </div>
        </footer>  
    );
}

export default Footer;