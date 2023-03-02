import React from 'react'
import data from './components/data'
import Header from './components/Header'
import Todos from './components/Todos'


const App = () => {

    const [users, setUsers] = React.useState(data)

    const [todo, setTodo] = React.useState([
        {
            id:1,
            done: false,
            first:"CLEAN THE HOUSE",
            second: "DO SOME LAUNDRY",
            third: "COOK LUNCH",
            forth: "DO ASSIGNMENTS",
        },
        {
            id:2,
            done: true,
            first:"PRAY",
            second: "READ THE BIBLE",
            third: "ANGELIUS",
            forth: "SING PRAISES",
        }
    ])
    const handleClick = (id) =>{
        setTodo(prevTodos => {
            return prevTodos.map(todo => {
                return todo.id === id ? {...todo, done: !todo.done} : todo
            })
        })
    }  

    const TodoList = todo.map(todo => {
        const {id, first, second, third, done} = todo
        return(
            <Todos
                key={todo.id}
                first={first}
                second={second}
                third={third}
                click={()=>handleClick(todo.id)}
                done={done}
            />
        )

    })

    const details = users.map(user => { const {id, name, username, email} = user
        return(
            <Header 
                name={name}
                username={username}
                email={email}
                key={id}
            />
        )
    })


    return (
        <>
        {/* {details} */}
        {TodoList}
        </>
    )
}

export default App