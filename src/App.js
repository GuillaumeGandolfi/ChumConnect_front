import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/views/HomePage";
import SignupPage from "./components/views/SignupPage";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
