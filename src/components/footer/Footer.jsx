import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="title">
                <h1 className='footer-h1'>UDEL</h1>
                
            </div>
            <div className="footer-menu">
                <ul className="footer-menu-list">
                    <li className="footer-menu-items">Home</li>
                    <li className="footer-menu-items">Shop</li>
                    <li className="footer-menu-items">Contact</li>
                    <li className="footer-menu-items">Services</li>
                </ul>
                <p className='footer-p'>
                    The amazing list of products we offer. In website
                    where you can get best web-services you can
                    find.The amazing list of products we offer. In
                    website where you can get best web-services you
                    can find
                </p>
            </div>
            <div className="bottom">
                <p className='bottom-text'>
                    Copyright content 2022 &copy; and registered &reg; 
                </p>
            </div>
        </div>
    );
};

export default Footer;
