import React from "react"
import {FaEnvelope, FaLinkedin} from "react-icons/fa"

const Info = () => {
    return (
        <>
            <h1 className="name-el">Laura Smith</h1>
            <p className="occupation-el">Frontend Developer</p>
            <p className="web-el">laurasmith.website</p>
            <button className="email-btn"><span></span> <FaEnvelope/> email</button>
            <button className="linkedin-btn"><span></span><FaLinkedin/> LinkedIn</button>
            <h3>About</h3>
            <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </>
    )
}

export default Info