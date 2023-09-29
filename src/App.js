import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";

import HomePage from "./components/views/HomePage";
import SignupPage from "./components/views/SignupPage";
import SigninPage from "./components/views/SigninPage";
import ProfilePage from "./components/views/ProfilePage";

function App() {
    return (
        <AuthProvider>
            <UserProvider>
                <Router>
                    <div>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/signup" element={<SignupPage />} />
                            <Route path="/signin" element={<SigninPage />} />
                            <Route path="/profil" element={<ProfilePage />} />
                        </Routes>
                    </div>
                </Router>
            </UserProvider>
        </AuthProvider>
    );
}

export default App;