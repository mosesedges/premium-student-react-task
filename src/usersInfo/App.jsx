import React from "react"
import Users from "./components/Users"
import {Data, Pics} from "./components/data"


const App = () => {
    const userResult = Data.map(user => {
        const { name, username, email, address:{street, suite,city,zipcode}} = user
        return (<Users 
                    name={name} 
                    username={username} 
                    email={email} 
                    address={` 
                    Street:${street} 
                    City: ${city}  
                    ${suite} 
                    Zipcode:${zipcode}` }
                    />)
    })

    return(
        <div>
            <h1>HI USERS</h1>
            {userResult}
        </div>
    )
}

export default App