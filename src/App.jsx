import React from "react"
import Header from "./components/Header"
import Info from "./components/Info"
import Footer from "./components/Footer"

const App = () => {

    const [darkMode, setDarkMode] = React.useState(true)


    const handleClick =() => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }
    return (
        <>
            <div className="over-all">
                <Header darkMode={darkMode} darkModeToggle={handleClick}/>
                <Info darkMode={darkMode}/>
                <Footer darkMode={darkMode}/>
            </div>
        </>
    )
}

export default App
