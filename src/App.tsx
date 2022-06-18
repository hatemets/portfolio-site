import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollWrapper from "./components/ScrollWrapper"


const App = () => {
    return (
        <div id="App">
            <Router>
                <ScrollWrapper>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </ScrollWrapper>
            </Router>
        </div>
    )
}


export default App
