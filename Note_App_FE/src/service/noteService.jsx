import axios from "./axios";

export const NoteList = async () => {
    try {
        const list = await axios.get('/note');
        return list.data;
    } catch (error) {
        return {
            error: error.response?.data?.message || error.message
        };
    }
}

export const createNote = async (title, text) => {
    try {
        const result = await axios.post('/note', {title, text});
        return result.data;
    } catch (error) {
        return {
            error: error.response?.data?.message || error.message
        };  
    }
}

export const updateNote = async (text,id) => {
    try {
        const result = await axios.patch(`/note/${id}`, {text});
        return result.data;
    } catch (error) {
        return {
            error: error.response?.data?.message || error.message
        }
    }
}

export const deleteNote = async (id) => {
    try {
        const result = await axios.delete(`/note/${id}`);
        return result.data;
    } catch (error) {
        return {
            error: error.response?.data?.message || error.message
        };
    }
}