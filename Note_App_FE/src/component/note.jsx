import { ClassNames } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';
import { updateNote } from '../service/noteService';

function Note({IdNote, title, text, date, onUpdate, onDelete}) {
    const [isEdit,setIsEdit] = useState(false);
    const [textEdit,setTextEdit] = useState(text);
    return (
        <div>
            <h2>{title}</h2>
            {
            (!isEdit)? <div className='flex gap-2'>
            <p>{text}</p>
            <button onClick={()=>{setIsEdit(true)}}><EditIcon></EditIcon></button>
            </div> : <div className='flex gap-2'>
                <textarea value={textEdit} onChange={(e)=>{setTextEdit(e.target.value)}}>{textEdit}</textarea>
                <button onClick={()=>{
                    onUpdate(textEdit,IdNote);
                    setIsEdit(false);
                }}><SaveIcon></SaveIcon></button>
            </div>
            }
            <small>{date}</small>
            <button onClick={()=>onDelete(IdNote)}><DeleteIcon/></button>
        </div>
    );
}

export default Note;