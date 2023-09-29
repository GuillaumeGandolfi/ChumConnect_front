import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // La logique pour charger l'utilisateur courant
        const loadCurrentUser = async () => {
            // Si l'utilisateur n'est pas authentifié, on ne fait rien
            if (!isAuthenticated) {
                return;
            }

            // Si l'utilisateur est authentifié, on charge ses informations
            try {
                const response = await fetch('http://localhost:3001/current-user', {
                    method: "GET",
                    credentials: 'include', // Pour inclure les cookies dans la requête
                });

                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.error("Failed to load current user", error);
            }
        };

        loadCurrentUser();
    }, [isAuthenticated]);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};