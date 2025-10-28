import { useState } from "react"
import { createNote, updateNote } from "../service/noteService";


export function FormNote({onSave, onCancel}) {
    const [text,setText] = useState("");
    const [title,setTitle] = useState("");
    const handleSave = async () => {
        if (!title || !text) return;
        await onSave(title,text);
        setTitle("");
        setText("");
        onCancel();
    }
    return <div>
            <input placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => {setTitle(e.target.value)}}>
            </input>
            <textarea value={text} 
            onChange={(e)=>{setText(e.target.value)}} 
            placeholder="Viết ghi chú tại đây..."></textarea>
            <button type="submit" onClick={() => { handleSave() }}>Save</button>
            <button onClick={() => {onCancel()}}>Hủy</button>

    </div>
}