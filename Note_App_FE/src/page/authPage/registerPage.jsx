import { register } from "../../service/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = (e) => {
        e.preventDefault();
        register(name, email, password);
        console.log("da gui form");
        navigate("/login");
    }
    return <div>
        <form onSubmit={HandleSubmit} className="flex flex-col gap-4">
            <input 
            type="text" 
            placeholder="Username" 
            value={name}
            onChange={(e)=>{setName(e.target.value)}}></input>
            <input 
            type="email" 
            placeholder="Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input 
            type="password" 
            placeholder="Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button type="submit">Register</button>
        </form>
    </div>
}
export default Register;