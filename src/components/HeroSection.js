import React from "react"
import Button from "./Button"
import "./HeroSection.css"
const HeroSection=()=>{
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay muted/>
            <h1>TRAVEL AROUND THE VERSE</h1>
            <p>What are you waiting for</p>
            <div className="hero-btn">
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">Get Started</Button>
                <Button className="btns" buttonSize="btn--large" buttonStyle="btn--outline">Watch Trailers<i className="far fa-play-circle"></i></Button>


            </div>

            </div>

    )

}
export default HeroSection