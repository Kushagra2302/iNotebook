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
            }
        ]
        const [notes, setNotes] = useState(notesInitial)


    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;