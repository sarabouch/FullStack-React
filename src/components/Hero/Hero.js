import React from 'react';
import "./Hero.scss";
import { Button } from "reactstrap"


const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="logo">
                    <img className="logo-img" src="/cloud-rain.svg" alt="" />
                </div>
                <h1>New podcast for developers</h1>
                <Button>Listen Now</Button>
            </div>
            <div className="hero-img">
                <img src="/undraw_developer_activity_bv83.svg" alt="" />
            </div>
        </section>
    )
}


export default Hero;
