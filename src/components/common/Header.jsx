import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Header() {

    const { isAuthenticated, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            window.location.href = '/';
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <span className="text-xl font-semibold">ChumConnect</span>
                </div>
                <nav className="space-x-8">
                    <Link to="#" className="text-white hover:text-gray-300">Acceuil</Link> 
                    <Link to="#" className="text-white hover:text-gray-300">Découvrir ChumConnect</Link>
                    <Link to="#" className="text-white hover:text-gray-300">Comment ça marche ?</Link>
                    <Link to="#" className="text-white hover:text-gray-300">Contact/Support</Link>
                </nav>
                <div className="space-x-4">
                    {isAuthenticated ? (
                        // Si l'utilisateur est authentifié, afficher le bouton de déconnexion
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
                        >
                            Déconnexion
                        </button>
                    ) : (
                        // Si l'utilisateur n'est pas authentifié, afficher les boutons de connexion et d'inscription
                        <>
                            <Link to="/signin" className="text-white hover:text-gray-300">
                                Se connecter
                            </Link>
                            <Link to="/signup" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                                S'inscrire
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;