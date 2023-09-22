
function Header() {
    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <span className="text-xl font-semibold">ChumConnect</span>
                </div>
                <nav className="space-x-8">
                    <a href="#" className="text-white hover:text-gray-300">Accueil</a>
                    <a href="#" className="text-white hover:text-gray-300">Découvrir ChumConnect</a>
                    <a href="#" className="text-white hover:text-gray-300">Comment ça marche ?</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact/Support</a>
                </nav>
                <div className="space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Se connecter</a>
                    <a href="#" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">S'inscrire</a>
                </div>
            </div>
        </header>
    );
}

export default Header;