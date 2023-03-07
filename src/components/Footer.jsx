import React from "react"
import { FaTwitterSquare,FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

const Footer = (props) => {
    return (
        <>
            <div className={props.darkMode? "dark-footer":"footer-container"}>
            <a href="#"><FaTwitterSquare className="social"/></a>
            <a href="#"><FaFacebookSquare className="social"/></a>
            <a href="#"><FaInstagramSquare className="social"/></a>
            <a href="#"><FaGithubSquare className="social"/></a>
            </div>
        </>
    )
}

export default Footer