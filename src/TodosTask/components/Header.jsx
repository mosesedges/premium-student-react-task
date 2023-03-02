import React from 'react';



const Header = (props) => {
    return (
        <header>
            <h1>Welcome</h1>
            <p>{props.name}</p>
            <address>{props.username}</address>
            <p> {props.email}</p>
        </header>
    )
}

export default Header;