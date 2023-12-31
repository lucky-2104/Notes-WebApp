import { MdDeleteForever } from 'react-icons/md';

const Note = ({id,text,date , handleDeleteNote}) => {
    return (
        <div className='note'>
            <span className='note-text'> {/*updated span with className note-text*/}
                {text}
            </span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDeleteForever
					className='delete-icon'
                    size='1.3em'
                    onClick={()=>handleDeleteNote(id)}
				/>
            </div>
        </div>
    )
};

export default Note;
