import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    const refreshToken = async () => {
        try {
            const response = await fetch("http://localhost:3001/refresh-token", {
                method: "POST",
                credentials: 'include', // pour inclure les cookies dans la requête
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            const data = await response.json();
            console.log(data);
            login(); // Mettez à jour l'état d'authentification avec le nouveau token
        } catch (error) {
            console.error(error);
            logout(); // En cas d'erreur, déconnectez l'utilisateur
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};