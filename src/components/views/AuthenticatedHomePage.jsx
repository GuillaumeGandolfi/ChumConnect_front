import EventList from "../events/EventList";

function AuthenticatedHomePage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Bienvenue sur la page d'accueil authentifiée !</h1>
            <EventList />
            
        </div>
    );
}

export default AuthenticatedHomePage;