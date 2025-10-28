import { useEffect, useState } from "react";
import { profile } from "../service/profileService";
import { Link } from "react-router-dom";

function Nav() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const config = async () => {
            const data = await profile();
            setUser(data);
        }
        config();
    },[]);
    return <div>
        {user ? `Xin chào ${user.name}` : 
        <>
        <Link to="/login" className="hover:underline">signin</Link>
        <p>or</p> 
        <Link to="register" className="hover:underline">register</Link>
        </>
         }
    </div>
}

export default Nav;