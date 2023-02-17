import React from "react"
import Header from "./components/Header"
import Info from "./components/Info"
import Footer from "./components/Footer"

const App = () => {
    return (
        <>
            <div className="over-all">
                <Header/>
                <Info/>
                <Footer/>
            </div>
        </>
    )
}

export default App
