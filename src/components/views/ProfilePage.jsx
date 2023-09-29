
import { useUser } from '../../contexts/UserContext';

function ProfilePage() {
    const { user } = useUser();

    if (!user) {
        return <div>Loading...</div>;
    }
    console.log(user);
    
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Profil de {user.firstname}</h1>
            <p>Email : {user.email}</p>
        </div>
    );
}

export default ProfilePage;