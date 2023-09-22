import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = ({ children }) => {
    const host = "http://localhost:5000"

    // const notesInitial = []
    const [notes, setNotes] = useState([])

    //get all notes
    const getNotes = async () => {
        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNzkwMzhiMGItOTI5OC00M2I1LTk1ZWEtMDUzOWVjZWEyODUxIn0sImlhdCI6MTY5Mzg0MDU5MX0.cK285JXda9DWYoLe7XGQtb-aBC9XGuQc_kzXjbZ9MKY"
                }
            });

            if (response.ok) {
                const json = await response.json();
                setNotes(json); // Update the state with the response data
            } else {
                // Handle error response
                console.error('Failed to fetch notes:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    //add note
    const addNote = async (title, content) => {

        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNzkwMzhiMGItOTI5OC00M2I1LTk1ZWEtMDUzOWVjZWEyODUxIn0sImlhdCI6MTY5Mzg0MDU5MX0.cK285JXda9DWYoLe7XGQtb-aBC9XGuQc_kzXjbZ9MKY"
                },
                body: JSON.stringify({title, content})
            });

            if (response.ok) {
                const json = await response.json();
                setNotes(json); // Update the state with the response data
            } else {
                // Handle error response
                console.error('Failed to fetch notes:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        }

        const note = {}
        setNotes(notes.concat(note))
    }
    //delete note
    const deleteNote = async (id) => {

        try {
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNzkwMzhiMGItOTI5OC00M2I1LTk1ZWEtMDUzOWVjZWEyODUxIn0sImlhdCI6MTY5Mzg0MDU5MX0.cK285JXda9DWYoLe7XGQtb-aBC9XGuQc_kzXjbZ9MKY"
                }
            });

            if (response.ok) {
                const json = await response.json();
                setNotes(json); // Update the state with the response data
            } else {
                // Handle error response
                console.error('Failed to fetch notes:', response.status, response.statusText);
            }
        } catch (error) {
            console.error('Error fetching notes:', error);
        }

        console.log("Delete")
        const newNote = setNotes(notes.filter((note) => { return note.id !== id }))
    }
    //edit note
    const editNote = () => {

    }


    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState