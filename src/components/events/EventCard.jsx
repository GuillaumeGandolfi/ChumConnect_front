import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function EventCard({ event }) {
    return (
        <div className="transform transition-transform duration-500 hover:scale-105 m-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">{event.title}</h2>
                <p className="text-gray-300 mb-4">{event.description}</p>
                <div className="mt-2">
                    <div className="flex items-center mb-2">
                        <FaClock className="text-gray-400 mr-2" />
                        <span className="text-gray-400 text-sm">{event.date} à {event.start_time}</span>
                    </div>
                    <div className="flex items-center">
                        <FaMapMarkerAlt className="text-gray-400 mr-2" />
                        <span className="text-gray-400 text-sm">{event.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;