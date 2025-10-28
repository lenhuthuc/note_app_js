import axios from "./axios";

export const register = async (name, email, password) => {
    try {
        const res = await axios.post('/auth/register', { name, email, password });
        return res.data;
    } catch (error) {
        return { error: error.response?.data?.message || error.message };
    }
};

export const login = async (email, password) => {
    try {
        const res = await axios.post('/auth/login', {email, password});
        localStorage.setItem('token', res.data.token);
        return res.data.user;
    } catch (error) {
        return {
            error: error.response?.data?.message || error.message
        };
    }
}

export const logout = () => {
    localStorage.removeItem('token');
    window.location.href="/login";
}
