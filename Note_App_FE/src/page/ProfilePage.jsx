import { useEffect, useState } from "react";
import { profile } from "../service/profileService";
import { logout } from "../service/authService";
function ProfilePage() {
    const [user,setUser] = useState(null);
    useEffect(() => {
        const fectProfile = async () => {
            const data = await profile();
            setUser(data);
        }
        fectProfile();
    },[]);
    
    if(!user) return <div>Loading....</div>
    console.log(user);
    
    return (<div className="flex flex-col gap-4">
        <div>{user.name}</div>
        <div>{user.email}</div>
        <button onClick={logout}>Logout</button>
    </div>);
}

export default ProfilePage;