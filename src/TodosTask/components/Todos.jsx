import React from 'react'


const Todos = (props) => {

    const styles = {textDecoration : props.done? "line-through" : "underline"}
    console.log(props.done)
    
    return(
        <div>
            <ul style={styles} onClick={props.click}>
                <li >{props.first}</li>
                <li >{props.second}</li>
                <li >{props.third}</li>
            </ul>
        </div>
    )
}

export default Todos