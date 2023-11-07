import NotesList from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first Note",
    date : "15/Oct/2023"
    },
    {
      id: nanoid(),
      text: "This is my second Note",
      date : "15/Oct/2023"
    },
    {
      id: nanoid(),
      text: "This is my third Note",
      date : "15/Oct/2023"
    },
    {
      id: nanoid(),
      text: "This is my last Note",
      date : "15/Oct/2023"
    },
    {
      id: nanoid(),
      text: "This is my updated Note",
      date : "15/Nov/2023"
      }
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
      
    </div>
  )
};

export default App;