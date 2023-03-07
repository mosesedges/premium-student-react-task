import React from "react"

const Header = (props) => {
    return (
        <header >
            <p 
            className={props.darkMode? "dark" : ""}
            onClick={props.darkModeToggle}
            >
                {props.darkMode ? ">>>" : "<<<"}
            </p>
            <img src="./src/images/photo.png" className="photo-el" alt="a woman's photo"/>
        </header>
    )
}
export default Header