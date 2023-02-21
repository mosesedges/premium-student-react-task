import React from "react"
import data from "./components/data"
import TravelCard from "./components/TravelCard"

const App = () => {
    const card = data.map(item => {
        return (
            <TravelCard
            key={item.title} 
            {...item} 
            />
        )
    })
    return (
        <div>
            {card}
        </div>
    )
}

export default App