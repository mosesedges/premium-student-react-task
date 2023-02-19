import React from "react"
import Users from "./components/Users"
import Data from "./components/data"


const App = () => {
    const userResult = Data.map(user => {
        const { name, username, email, address:{street, suit,city,zipcode}} = user
        return (<Users name={name} username={username} email={email} address/>)
    })

    return(
        <div>
            <h1>HI USERS</h1>
            {userResult}
        </div>
    )
}

export default App