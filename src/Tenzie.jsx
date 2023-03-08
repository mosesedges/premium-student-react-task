import React from "react"
import Die from "./Die"

/**
 * Challenge:
 * 
 * Write a function (allNewDice) that returns an array 
 * of 10 random numbers between 1-6 inclusive.
 * 
 * Log the array of numbers to the console for now
 */




export default function App() {
    
    const allNewDice = () => {
        const arr = []
        const random = Math.floor(Math.random()* (7 - 1) + 1 )
      
        for(let i = 0; i < 10; i++){
            // const newArr = arr.push(random)
            console.log("Amen")
        }
        //  console.log(newArr)
    }
    
    allNewDice()
   
    
    return (
        <main>
            <div className="dice-container">
                <Die value="1" />
                <Die value="2" />
                <Die value="3" />
                <Die value="4" />
                <Die value="5" />
                <Die value="6" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
                <Die value="1" />
            </div>
        </main>
    )
}