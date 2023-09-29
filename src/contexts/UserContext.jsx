import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // La logique pour charger l'utilisateur courant
        const loadCurrentUser = async () => {
            // On vérifie si le token est présent dans les cookies
            // Si oui, on récupère l'utilisateur actuellement connecté
            // Sinon, on ne fait rien
            const token = document.cookie.split('; ').find(row => row.startsWith('token='));
            if (!token) {
                return;
            }

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
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};