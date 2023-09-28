import { useState } from "react";
import { Link } from 'react-router-dom';

import Header from "../common/Header";
import Footer from "../common/Footer";


function SignupPage() {

    // On utilise le hook useState pour créer un état local
    // Il permet de stocker les données du formulaire
    // On peut ensuite les utiliser pour les envoyer au serveur
    // ou pour les afficher dans le formulaire si une erreur survient
    const [formData, setFormData] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: "",
        confirmation: ""
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

        // Vérification de la correspondance des mots de passe
        if (formData.password !== formData.confirmation) {
            setError("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const response = await fetch ("http://localhost:3001/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.text(); // ou response.json() si le serveur renvoie du JSON
                console.error('Error data:', errorData);
                throw new Error(response.status);
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            setError("Une erreur s'est produite lors de la création du compte");
            console.error(error);
        }
    }

    return (

        <>
            <Header />
                <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Créer un compte</h2>
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
                                <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                    Prénom
                                </label>
                                <div className="mt-1">
                                    <input 
                                        id="firstname" 
                                        name="firstname" 
                                        type="text" 
                                        onChange={handleChange} 
                                        value={formData.firstname} 
                                        required 
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                                    Nom
                                </label>
                                <div className="mt-1">
                                    <input 
                                        id="lastname" 
                                        name="lastname" 
                                        type="text" 
                                        onChange={handleChange} 
                                        value={formData.lastname} 
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
                                <label htmlFor="confirmation" className="block text-sm font-medium text-gray-700">
                                    Confirmation du Mot de Passe
                                </label>
                                <div className="mt-1">
                                    <input 
                                        id="confirmation" 
                                        name="confirmation" 
                                        type="password" 
                                        onChange={handleChange} 
                                        value={formData.confirmation} 
                                        required 
                                        className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                S'inscrire
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
                            {/* Ajoutez ici des boutons pour une connexion avec d'autres services si nécessaire */}
                            </div>
                            <div className="mt-4 flex justify-center">
                                <span className="text-gray-600 text-sm">Déjà inscrit ? </span>
                                <Link to="/signin" className="text-blue-500 hover:text-blue-700 text-sm ml-1">
                                    Se connecter
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
        
    );
}

export default SignupPage;