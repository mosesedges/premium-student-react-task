import React from "react"
import data from "./components/data"
import TravelCard from "./components/TravelCard"
import Counter from "./components/Counter"

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
            <Counter/>
            {card}
        </div>
    )
}

export default App