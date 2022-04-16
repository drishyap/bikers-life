import React from "react";
import "./About.css";
import journey from "../../image/journey.png";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src="https://images.pexels.com/photos/2949293/pexels-photo-2949293.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1>This is the journey and, Welcome</h1>
                <p>
                    The amazing list of products we offer. In website
                    where you can get best web-services you can find
                </p>
                <img
                    src={journey}
                    alt=""
                    className="about-right-img"
                />
            </div>
        </div>
    );
};
export default About;
