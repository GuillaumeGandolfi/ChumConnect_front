import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const setAuthenticated = () => {
        setIsAuthenticated(true);
    };

    const setUnauthenticated = async () => {
        setIsAuthenticated(false);
        try {
            const response = await fetch("http://localhost:3001/logout", {
                method: "POST",
                credentials: 'include',
            });
            if (!response.ok) {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const checkAuthStatusAndRefreshToken = useCallback(async () => {

        setIsLoading(true);
        try {
            const response = await fetch("http://localhost:3001/check-auth-status-and-refresh-token", {
                method: "POST",
                credentials: 'include',
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setIsAuthenticated(data.isAuthenticated);
            }  else if (response.status === 401) {
                // L'utilisateur n'est pas authentifié. Ce n'est pas vraiment une "erreur", 
                // c'est juste une information. Pas besoin de déconnecter l'utilisateur 
                // ou de lancer une erreur.
                setIsAuthenticated(false);
            } else {
                console.error(data.message);
                setUnauthenticated();
            }
        } catch (error) {
            console.error(error);
            setUnauthenticated();
        } finally {
            setIsLoading(false); // Fin du chargement
        }
    }, []); // Pas de dépendance ici, donc pas de boucle infinie
    
    useEffect(() => {
        checkAuthStatusAndRefreshToken();
    }, [checkAuthStatusAndRefreshToken]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, setAuthenticated, setUnauthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};