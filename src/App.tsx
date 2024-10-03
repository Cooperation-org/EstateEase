import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sales from "./components/Sales";
import Rent from "./components/Rent";
const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Sales />} />
                <Route path="/" element={<Rent />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
