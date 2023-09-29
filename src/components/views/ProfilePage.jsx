import Header from "../common/Header";
import Footer from "../common/Footer";
import { useUser } from '../../contexts/UserContext';

function ProfilePage() {
    const { user } = useUser();

    if (!user) {
        return <div>Loading...</div>;
    }
    console.log(user);
    
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="profile-page flex-grow">
                <div className="relative block h-64 bg-blue-500">
                    <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
                </div>
                <div className="bg-gray-100 py-6">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-3/4 md:w-1/2 lg:w-1/3 mx-auto mb-6 shadow-xl rounded-lg -mt-40">
                            <div className="px-6 py-4">
                                <div className="flex justify-center mb-5">
                                    <div className="relative">
                                        {user && user.profileImage
                                            ? <img className="rounded-full h-auto align-middle border-2 border-indigo-500 w-32 h-32 object-cover" src={user.profileImage} alt="User Profile" />
                                            : <div className="bg-gray-300 rounded-full flex items-center justify-center w-32 h-32">
                                                <span className="text-gray-500 text-6xl">👤</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-800">
                                        {user && `${user.firstname} ${user.lastname}`}
                                    </h3>
                                    <div className="mt-0 text-gray-800 uppercase tracking-wide">
                                        {user && user.email}
                                    </div>
                                    <div className="mb-2 text-gray-800">
                                        Age: {user && user.age}
                                    </div>
                                    <div className="mb-2 text-gray-800">
                                        Ville: {user && user.city}
                                    </div>
                                    <div className="mb-2 text-gray-800">
                                        Niveau: {user && user.level}
                                    </div>
                                    <div className="mb-2 text-gray-800">
                                        Expérience: {user && user.experience}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProfilePage;