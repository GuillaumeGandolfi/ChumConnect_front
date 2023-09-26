import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = async () => {
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
            // On vérifie s'il existe un refresh token
            const existingRefreshToken = document.cookie
                .split('; ')
                .find(row => row.startsWith('refreshToken'))
                ?.split('=')[1];

            // S'il n'y a pas de refreshToken, on ne fait pas la requête
            if (!existingRefreshToken) {
                return;
            }
            
            const response = await fetch("http://localhost:3001/refresh-token", {
                method: "POST",
                credentials: 'include', // pour inclure les cookies dans la requête
            });

            if (!response.ok) {
                throw new Error(response.status);
            }

            // const data = await response.json();
            // console.log(data);
            login(); // Mettez à jour l'état d'authentification avec le nouveau token
        } catch (error) {
            console.error(error);
            logout(); // En cas d'erreur, déconnectez l'utilisateur
        }
    }, []);

    useEffect(() => {
        // On vérifie si l'utilisateur est authentifié lorsque l'application est chargée
        refreshToken();
    }, [refreshToken]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshToken }}>
            {children}
        </AuthContext.Provider>
    );
};