import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Auth from "./Auth"
import Profile from "./Profile"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
