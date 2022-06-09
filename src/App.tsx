import React from "react"
import logo from "./logo.svg"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import "./styles/App.scss"

const App = () => {
    return (
        <div id="App">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Router>
        </div>
    )
}


export default App
