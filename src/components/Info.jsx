import React from "react"
import {FaEnvelope, FaLinkedin} from "react-icons/fa"

const Info = () => {
    return (
        < div className="main-el">
            <h1 className="name-el">Laura Smith</h1>
            <p className="occupation-el">Frontend Developer</p>
            <p className="web-el">laurasmith.website</p>
            <div className="button-container">
            <button className="email-btn"><span className="icons"><FaEnvelope/></span>Email</button>
            <button className="linkedin-btn"><span className="icons"><FaLinkedin/></span>LinkedIn</button>
            </div>
            <div className="desc-container">
            <h3>About</h3>
            <p className="desc-1">I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p className="desc-2">Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}

export default Info