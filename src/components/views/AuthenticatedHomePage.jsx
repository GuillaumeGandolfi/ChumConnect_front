import EventList from "../events/EventList";

function AuthenticatedHomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto py-8 flex-grow">
                <h1 className="text-2xl font-semibold mb-4">Bienvenue sur la page d'accueil authentifiée !</h1>
                <EventList />
            </div>
        </div>
    );
}

export default AuthenticatedHomePage;