
import { useUser } from '../../contexts/UserContext';

function ProfilePage() {
    const { user } = useUser();
    console.log(user);
    
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-semibold mb-4">Profil de {user && user.firstname}</h1>
            <p>Email : {user && user.email}</p>
        </div>
    );
}

export default ProfilePage;