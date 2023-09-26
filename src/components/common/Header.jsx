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
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div>
                    <span className="text-xl font-semibold">ChumConnect</span>
                </div>
                <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
                    <Link to="#" className="text-white hover:text-gray-300">Accueil</Link> 
                    <Link to="#" className="text-white hover:text-gray-300">Découvrir ChumConnect</Link>
                    <Link to="#" className="text-white hover:text-gray-300">Comment ça marche ?</Link>
                    <Link to="#" className="text-white hover:text-gray-300">Contact/Support</Link>
                </nav>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    {isAuthenticated ? (
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 w-full md:w-auto text-center"
                        >
                            Déconnexion
                        </button>
                    ) : (
                        <>
                            <Link to="/signin" className="text-white hover:text-gray-300 block text-center w-full md:w-auto">
                                Se connecter
                            </Link>
                            <Link to="/signup" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 block text-center w-full md:w-auto">
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