import { Navigate, Route, Routes } from "react-router-dom";
import RegisterPage from "../page/authPage/registerPage";
import ProfilePage from "../page/ProfilePage";
import LoginPage from "../page/authPage/loginPage"
import ProtectedRoute from "./ProtectedRoute";
import Menu from "../page/MenuPage";
import Nav from "../component/nav";

export default function AppRoute() {
    return (
        <Routes>
            <Route path="/profile" element={
                <ProtectedRoute>
                    <ProfilePage/>
                </ProtectedRoute>
            }/>
            <Route path="/" element={
                <ProtectedRoute>
                    <Nav/>
                    <Menu/>
                </ProtectedRoute>
            }/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    );
}