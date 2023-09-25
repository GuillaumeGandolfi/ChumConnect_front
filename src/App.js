import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import HomePage from "./components/views/HomePage";
import SignupPage from "./components/views/SignupPage";
import SigninPage from "./components/views/SigninPage";

function App() {
    return (
        <AuthProvider>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/signin" element={<SigninPage />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;