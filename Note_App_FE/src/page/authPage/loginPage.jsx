import { useState } from "react";
import { login } from "../../service/authService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [valid, setValid] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        console.log("da gui form");
        if(user.error) {
            setValid("sai mat khau hoac email");
        }
        else {
            setValid("");
            navigate("/");
        }
    }
    return (<div>
        <form onSubmit={HandleSubmit} className="flex flex-col gap-4">
            <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            />
            <div className="flex justify-center min-h-screenn w-full text-sm text-gray-500">{valid}</div>
            <button type="submit">Submit</button>
        </form>
        <div className="flex gap-1 justify-center p-2 text-sm">
            Chưa có tài khoản 
            <Link to="/register" className="text-blue-600 hover:underline">đăng kí </Link>
        </div>
    </div>);
}

export default Login;