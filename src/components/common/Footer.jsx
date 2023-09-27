import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                
                {/* Colonne À propos */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">À propos</h3>
                    <ul className="space-y-2">
                    <li><Link to="#" className="hover:text-gray-400">L'équipe</Link></li>
                    <li><Link to="#" className="hover:text-gray-400">L'histoire</Link></li>
                    {/* Autres liens... */}
                    </ul>
                </div>
                
                {/* Colonne Comment ça marche */}
                <div className="md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold mb-4">Comment ça marche</h3>
                    <ul className="space-y-2">
                    <li><Link to="#" className="hover:text-gray-400">Créer un événement</Link></li>
                    <li><Link to="#" className="hover:text-gray-400">Rejoindre une sortie</Link></li>
                    {/* Autres liens... */}
                    </ul>
                </div>
                
                {/* Colonne Contact */}
                <div className="md:w-1/3">
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <p>Email : support@chumconnect.com</p>
                    {/* Autres coordonnées... */}
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;