import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import Register from "./pages/RegistrationPage/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LandingPage/>} /> {/* Route for Home */}
                <Route path="/register" element={<Register/>} /> {/* Route for Register */}
            </Routes>
        </Router>
    );
}

export default App;
