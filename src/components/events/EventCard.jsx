function EventCard({ event }) {
    return (
        <div className="bg-white border p-4 rounded-md shadow-md m-2">
            <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-700">{event.description}</p>
            {/* Ajouter ici d'autres détails de l'événement comme la date, le lieu, etc. */}
        </div>
    );
}

export default EventCard;