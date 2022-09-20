import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMzY1YWRjMzFkZjFmOTJlZTcwNGQxIn0sImlhdCI6MTY2MzMyNjQwMX0.y3V4yKCE51ws6IFRqAOSi8FySoh35e2SDEyOpJnx53Q'
            },
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
        
    }

    // Add a Note
    const addNote = async (title, description, tag) => {
        // ToDo API Call
        // API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMzY1YWRjMzFkZjFmOTJlZTcwNGQxIn0sImlhdCI6MTY2MzMyNjQwMX0.y3V4yKCE51ws6IFRqAOSi8FySoh35e2SDEyOpJnx53Q'
            },
            body: JSON.stringify({title, description, tag})
        });

        console.log("Adding a new note")
        const note = {
            "_id": "63257390f828e2d10548774f164",
            "user": "632365adc31df1f92ee704d1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-09-17T07:13:20.863Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMzY1YWRjMzFkZjFmOTJlZTcwNGQxIn0sImlhdCI6MTY2MzMyNjQwMX0.y3V4yKCE51ws6IFRqAOSi8FySoh35e2SDEyOpJnx53Q'
            },
        });
        const json = response.json();
        console.log(json);

        console.log("Deleting the note with id" + id)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    // Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call 
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjMyMzY1YWRjMzFkZjFmOTJlZTcwNGQxIn0sImlhdCI6MTY2MzMyNjQwMX0.y3V4yKCE51ws6IFRqAOSi8FySoh35e2SDEyOpJnx53Q'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json = response.json();

        // Logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;