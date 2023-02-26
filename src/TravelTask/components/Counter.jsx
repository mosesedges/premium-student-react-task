import React, {useSate} from 'react'


const Counter = () => {
    const [count, setCount] = useSate(0)

    const add = () => {
        return setCount(prevCount => prevCount + 1)
    }
    
    const subtract = () => {
        return setCount(prevCount => prevCount - 1)
    }
    return (
        <>
        <div>
            <button onClick={add}>-</button>
            <h1>{count}</h1>
            <button onClick={subtract}>-</button>
        </div>
        </>
    )
};

export default Counter