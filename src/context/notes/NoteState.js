import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitial =
        [
            {
                "_id": "6324652b6ccb3d99b9233d89",
                "user": "632365adc31df1f92ee704d1",
                "title": "My Title",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-16T11:59:39.913Z",
                "__v": 0
            },
            {
                "_id": "6324652c6ccb3d99b9233d8b",
                "user": "632365adc31df1f92ee704d1",
                "title": "My Title",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-16T11:59:40.035Z",
                "__v": 0
            },
            {
                "_id": "63257390f828e2d108774f16",
                "user": "632365adc31df1f92ee704d1",
                "title": "New note",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-17T07:13:20.863Z",
                "__v": 0
            },
            {
                "_id": "63257390f828e2d19908774f161",
                "user": "632365adc31df1f92ee704d1",
                "title": "New note",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-17T07:13:20.863Z",
                "__v": 0
            },
            {
                "_id": "63257390f828e872d108774f162",
                "user": "632365adc31df1f92ee704d1",
                "title": "New note",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-17T07:13:20.863Z",
                "__v": 0
            },
            {
                "_id": "63257390f828e276d108774f163",
                "user": "632365adc31df1f92ee704d1",
                "title": "New note",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-17T07:13:20.863Z",
                "__v": 0
            },
            {
                "_id": "63257390f828e2d10548774f164",
                "user": "632365adc31df1f92ee704d1",
                "title": "New note",
                "description": "Please wake up early",
                "tag": "personal",
                "date": "2022-09-17T07:13:20.863Z",
                "__v": 0
            },
        ]
        const [notes, setNotes] = useState(notesInitial)

        // Add a Note
        const addNote = (title, description, tag) =>{
            // ToDo API Call
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
        const deleteNote = () =>{
            
        }

        // Edit a Note
        const editNote = () =>{
            
        }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;