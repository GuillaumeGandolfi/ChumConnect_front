import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

function Header() {

    const { isAuthenticated, setUnauthenticated } = useAuth();

    const handleLogout = async () => {
        try {
            await setUnauthenticated();
            window.location.href = '/';
        } catch (error) {
            console.error('Failed to log out', error);
        }
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <Link to="/">
                    <img src="/images/Chum-logo.png" alt="ChumConnect Logo" className="h-10 w-auto ml-10"/>
                </Link>
                <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
                    <Link to="#" className="text-white hover:text-gray-300">Accueil</Link> 
                    <Link to="#" className="text-white hover:text-gray-300">Découvrir ChumConnect</Link>
                    <Link to="#" className="text-white hover:text-gray-300">Comment ça marche ?</Link>
                </nav>
                <div className="flex space-x-4 items-center mt-4 md:mt-0">
                    {isAuthenticated ? (
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 text-center"
                        >
                            Déconnexion
                        </button>
                    ) : (
                        <>
                            <Link to="/signin" className="text-white hover:text-gray-300 text-center md:w-auto">
                                Se connecter
                            </Link>
                            <Link to="/signup" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 text-center md:w-auto">
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