import React from "react"


const UserDetails = (props) => {
     return (
        <div>
                <h3>Name: {props.name}</h3>
                <p>UserName: {props.username}</p>
                <p>Email: {props.email}</p>
                <address>Address: {props.address}</address>
        </div>
     )
}


export default UserDetails