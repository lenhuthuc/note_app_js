import { useEffect, useState } from "react";
import { createNote, deleteNote, NoteList, updateNote } from "../service/noteService";
import Note from "../component/note";
import AddIcon from '@mui/icons-material/Add';
import { FormNote } from "../component/FormNote";

function Menu() {
    const [showForm, setShowForm] = useState(false);
    const [list,setList] = useState([]);
    
    useEffect(()=>{
        const config = async () => {
            const data = await NoteList();
            setList(data);
        }
        config();
    },[]);
    
    const HandleUpdate = async (text, id) => {
        await updateNote(text,id);
        setList((prev)=>prev.map((note)=>  note.IdNote === id ? {...note, text} : note));
    }

    const HandleDelete = async (id) => {
        await deleteNote(id);
        setList((prev)=>prev.filter((note)=>note.IdNote !== id));
    }

    const CreateNote = async (title, text) => {
        const data = await createNote(title,text);
        setList((prev)=>[...prev,{
            data,
            title,
            text,
            createdAt: new Date()
        }]);
    }

    if(!list) return <div>Loading....</div> 
    return (
        <div>
            {list.map((note) => (
                <Note key={note.IdNote} {...note} onUpdate = {HandleUpdate} onDelete={HandleDelete} />
            ))}
            <button onClick={() => {
                setShowForm(true);
            }}><AddIcon></AddIcon></button>
            {showForm&&(<FormNote onSave={CreateNote} onCancel={() => setShowForm(false)}></FormNote>)}
        </div>
    );
}

export default Menu;