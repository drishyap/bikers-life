import React from "react";
import "./Intro.css";

const Intro = () => {
    return (
        <div className="intro">
            <div className="navbar">
                <div className="logo">UDEL</div>
                <ul className="menu">
                    <li className="menu-items">Home</li>
                    <li className="menu-items">Shop</li>
                    <li className="menu-items">Contact</li>
                    <li className="menu-items">Services</li>
                </ul>
            </div>
            <div className="hero">
                <div className="bg">
                    <img
                        src="https://images.pexels.com/photos/1416169/pexels-photo-1416169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="hero-img"
                    />
                </div>
                <div className="hero-texts">
                    <p className='hero-desc'>
                        Welcome to our website where you can get best
                        web-services you can find
                    </p>
                    <div className="button">
                        <button className="btn btn-left">
                            Explore
                        </button>
                        <button className="btn btn-right">
                            Find us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
