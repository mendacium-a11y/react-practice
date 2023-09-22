import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/NoteContext";

function NewNote() {

    const context = useContext(noteContext);
    const { addNote } = context;
    const [note, setNote] = useState({ title: "", content: "" })

    const submitForNew = (e) => {
        e.preventDefault()
        console.log("clicked")
        console.log(note)
        addNote(note.title, note.content)
    }

    const inputChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })

    }

    return (
        <div className="my-5 py-3">
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" onChange={inputChange} className="form-control" id="title" name="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">Content</label>
                    <textarea onChange={inputChange} name="content" type="text" className="form-control" id="content" />
                </div>

                <button type="submit" className="btn btn-primary" onClick={submitForNew}>Submit</button>
            </form>
        </div>
    )
}

export default NewNote