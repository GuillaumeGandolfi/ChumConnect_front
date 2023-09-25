// common
import Header from "../common/Header";
import Footer from "../common/Footer";

// landing
import LandingPage from "../landing/LandingPage";

import { useAuth } from "../../contexts/AuthContext";

function HomePage() {
    const { isAuthenticated } = useAuth();
    
    return (
        <div>
            <Header />
            { isAuthenticated ? (
                <div>
                    <h1>Vous êtes connecté !</h1>
                </div>
            ) : (
                <LandingPage />
            )}
            <Footer />
        </div>
    );
}

export default HomePage;