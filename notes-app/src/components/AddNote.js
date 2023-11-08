import { useState } from 'react';

const AddNote = ({handleAddNote}) => {

    const [noteText, setNoteText] = useState("");
    const charaterLimit = 200;
    const handleChange = (event) => {
        if( charaterLimit -  event.target.value.length >= 0 )
        setNoteText(event.target.value);
    };

    const handleSaveclick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    };
    return (
        <div className="note new">
            <textarea rows="8" cols="10"
                placeholder="Type to Add the Note....."
                value = {noteText}
                onChange={handleChange}> 

            </textarea>
            <div className="note-footer">
                <small>{charaterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveclick}>Save</button>
            </div>

        </div>
    )
};
export default AddNote;