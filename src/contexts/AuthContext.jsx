import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuthenticated = () => {
        setIsAuthenticated(true);
    };

    const setUnauthenticated = async () => {
        setIsAuthenticated(false);

        try {
            const response = await fetch("http://localhost:3001/logout", {
                method: "POST",
                credentials: 'include', // pour inclure les cookies dans la requête
            });

            if (!response.ok) {
                throw new Error(response.status);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const refreshToken = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:3001/refresh-token", {
                method: "POST",
                credentials: 'include',
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            setAuthenticated();
        } catch (error) {
            console.error(error);
            setUnauthenticated();
        }
    }, []);

    const checkAuthStatus = useCallback(async () => {
        try {
            const response = await fetch("http://localhost:3001/auth-status", {
                method: "GET",
                credentials: 'include', // pour inclure les cookies dans la requête
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            const data = await response.json();
            setIsAuthenticated(data.isAuthenticated);
        } catch (error) {
            console.error(error)
        }
    }, []);

    useEffect(() => {
        
        // On vérifie si l'utilisateur est authentifié lorsque l'application est chargée
        // refreshToken();
        checkAuthStatus();
    }, [checkAuthStatus]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setAuthenticated, setUnauthenticated, refreshToken, checkAuthStatus }}>
            {children}
        </AuthContext.Provider>
    );
};