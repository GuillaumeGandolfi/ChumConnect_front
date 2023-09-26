import { useState, useEffect } from "react";

// common
import Header from "../common/Header";
import Footer from "../common/Footer";

// landing
import LandingPage from "../landing/LandingPage";

import { useAuth } from "../../contexts/AuthContext";
import AuthenticatedHomePage from "./AuthenticatedHomePage";

function HomePage() {
    const { isAuthenticated, refreshToken } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            if (isAuthenticated) {
                await refreshToken();
            }
            setIsLoading(false);
        };
        
        checkAuthentication();
    }, [refreshToken, isAuthenticated]);

    if (isLoading) {
        return <div>Chargement...</div>; // TODO : Faire un composant pour le loading
    }
    
    return (
        <div>
            <Header />
            { isAuthenticated ? (
                <AuthenticatedHomePage />
            ) : (
                <LandingPage />
            )}
            <Footer />
        </div>
    );
}

export default HomePage;