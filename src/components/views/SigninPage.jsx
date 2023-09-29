import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Header from "../common/Header";
import Footer from "../common/Footer";


function LoginPage() {

    const { setAuthenticated } = useAuth();
    const { setUser } = useUser();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setError(""); // On réinitialise les erreurs à chaque soumission du formulaire

        try {
            const response = await fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: 'include', // pour inclure les cookies dans la requête
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error("Les identifiants sont incorrects.");
                } else if (response.status === 400) {
                    throw new Error("La requête est mal formée.");
                } else {
                    throw new Error("Une erreur est survenue lors de la connexion.");
                }
            }

            const data = await response.json();
            console.log(data);
            setAuthenticated(); // Appelez la fonction login() pour mettre à jour l'état d'authentification
            setUser(data.user); // Appelez la fonction setUser() pour mettre à jour l'état de l'utilisateur
            setFormData({ email: "", password: "" }); // Réinitialisation du formulaire
            navigate('/'); // Redirigez vers la page d'accueil après la connexion réussie
        } catch (error) {
            setError(error.message); // Mise à jour de l'état de l'erreur avec le message d'erreur spécifique
            console.error(error);
        }
    }

    return (
        <>
            <Header />
                <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Connexion</h2>
                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            {error && (
                                <div className="mb-4 text-red-500">
                                    {error}
                                </div>
                            )}
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Adresse Email
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="email" 
                                            name="email" 
                                            type="email" 
                                            onChange={handleChange} 
                                            value={formData.email} 
                                            required 
                                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Mot de passe
                                    </label>
                                    <div className="mt-1">
                                        <input 
                                            id="password" 
                                            name="password" 
                                            type="password" 
                                            onChange={handleChange} 
                                            value={formData.password} 
                                            required 
                                            className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                    </div>
                                </div>

                                <div>
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        Se connecter
                                    </button>
                                </div>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">
                                            Ou
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 grid grid-cols-1 gap-3">
                                    {/* Vous pouvez ajouter ici le lien vers la page d'inscription */}
                                    <div className="mt-4 flex justify-center">
                                        <span className="text-gray-600 text-sm">Pas encore de compte ? </span>
                                        <Link to="/signup" className="text-blue-500 hover:text-blue-700 text-sm ml-1">
                                            S'inscrire
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    );
}

export default LoginPage;