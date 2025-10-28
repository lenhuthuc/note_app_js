import axios from "./axios";

export const profile = async () => {
    try {
        const result = await axios.get('/profile');
        return result.data;
    } catch (error) {
        return {
            error: error.response?.data?.message || error.message
        }
    }
}