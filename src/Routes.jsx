import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameScreen from "./pages/GameScreen";

export function PageRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route eaxct path="/gameScreen" element={<GameScreen />} />
            </Routes>
        </Router>
    );
}
