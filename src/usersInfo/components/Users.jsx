import React from "react"


const UserDetails = (props) => {
     return (
        <div>
            <ul>
                <li>{props.name}</li>
                <li>{props.username}</li>
                <li>{props.email}</li>
                <li>{props.address}</li>
            </ul>
        </div>
     )
}


export default UserDetails