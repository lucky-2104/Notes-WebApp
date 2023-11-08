import NotesList from './components/NotesList';
import Search from './components/Search';
import { useState } from 'react';
import { nanoid } from 'nanoid';
// import AddNote from './components/AddNote';
const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text: text,
      date: date.toDateString(),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    
    <div className="container">
      <Search />
      <NotesList notes={notes} handleAddNote={addNote}
        handleDeleteNote={deleteNote} />
      
    </div>
  )
};

export default App;