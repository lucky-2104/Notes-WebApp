import { useState } from 'react';

const AddNote = () => {

    const [noteText, setNoteText] = useState("");
    const handleChange = (event) => {
        setNoteText(event.target.value);
    };

    const handleSaveclick = () => {
        
    }
    return (
        <div className="note new">
            <textarea rows="8" cols="10"
                placeholder="Type to Add the Note....."
                value = {noteText}
                onChange={handleChange}> 

            </textarea>
            <div className="note-footer">
                <small>200 Remaining</small>
                <button className="save" onClick={handleSaveclick}>Save</button>
            </div>

        </div>
    )
};

export default AddNote;