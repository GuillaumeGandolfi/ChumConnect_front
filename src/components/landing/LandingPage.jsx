
function LandingPage() {
    return (
        <div>
            <div className="flex flex-col items-center py-12 bg-gray-100">
                <h1 className="text-4xl font-bold mb-4 text-black"> Découvrez ChumConnect : Votre compagnon de sorties amicales !</h1>
                <p className="text-lg leading-relaxed mb-6 text-center px-8">
                Vous cherchez à élargir votre cercle d'amis et à vivre de nouvelles expériences ? 
                ChumConnect est là pour vous ! Notre plateforme vous permet de découvrir des activités 
                passionnantes, des sorties culturelles ou même des escapades naturelles à proximité. 
                Rejoignez une communauté bienveillante où tout est conçu pour créer des liens authentiques. 
                Que vous souhaitiez proposer une sortie ou simplement rejoindre l'aventure d'un autre, 
                ChumConnect est votre passerelle vers des rencontres amicales inoubliables.
                </p>
                <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-700 transition duration-300">Rejoignez-nous !</button>
            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold text-center mt-8 mb-4">Pourquoi choisir ChumConnect ?</h2>
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold">Rencontres locales</h3>
                        <p>
                            Faites la connaissance de personnes partageant les mêmes 
                            intérêts que vous, juste à côté de chez vous.
                        </p>
                    </div>
                    <img src="/images/0_1.png" alt="Amis buvant un verre" 
                    className="w-full md:w-1/3 h-auto md:max-h-48 object-cover rounded-md"/>
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold">Diversité des activités</h3>
                        <p>
                            Des sorties en nature aux soirées cinéma, 
                            découvrez une variété d'activités proposées par les membres.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold">Communauté conviviale</h3>
                        <p>
                            Rejoignez une communauté bienveillante et ouverte, 
                            prête à accueillir de nouveaux membres.</p>
                    </div>
                    <img src="/images/0_3.png" alt="Amis faisant de la randonnée" 
                    className="w-full md:w-1/3 h-auto md:max-h-48 object-cover rounded-md" />
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold">Créez vos propres événements</h3>
                        <p>
                            Vous avez une passion ou un intérêt particulier que vous souhaitez partager ? 
                            Créez votre propre événement et invitez d'autres à vous rejoindre.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-4">
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold">Fonctionnalités de recherche avancées</h3>
                        <p> 
                            Trouvez des événements et des personnes qui correspondent exactement à 
                            ce que vous recherchez grâce aux fonctionnalités de recherche.</p>
                    </div>
                    <img src="/images/0_0.png" alt="Amis autour d'un barbecue" 
                    className="w-full md:w-1/3 h-auto md:max-h-48 object-cover rounded-md" />
                    <div className="md:w-1/3">
                        <h3 className="text-xl font-semibold">Des sorties pour tous les goûts</h3>
                        <p>
                            Que vous soyez un amateur de sport, un passionné de culture ou un 
                            amoureux de la nature, vous trouverez votre bonheur parmi les sorties proposées.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;