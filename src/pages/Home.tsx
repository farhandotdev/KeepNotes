import './home.css';
import Note from '../components/note/note';
import { Notes } from '../components/note/data';
import AddNote from '../components/add-note/add-note';
import { useContext, useState } from 'react';
import { NoteType } from '../components/note/note-type';
import { ThemeContext } from '../context/theme/theme';

function Home() {
  const [notes, setNotes] = useState(Notes);
  const [editMode, setEditMode] = useState(false);
  const [noteToBeEditted, setNoteToBeEditted] = useState<NoteType | null>(null);
  const theme = useContext(ThemeContext);

  const addNote = (note: NoteType) =>{
    setNotes([note, ...notes])
  }

  const updateNote = (updatedNote: NoteType) =>{
    const index = notes.findIndex(note=>note.id===updatedNote.id);
    let editableNote = [...notes]
    editableNote.splice(index, 1, updatedNote);
    setNotes(editableNote)
    setEditMode(false)
  }

  const editNote = (id: string) => {
    const note = notes.find(note=>note.id===id);
    setEditMode(true);
    if(note){
      setNoteToBeEditted(note);
    }
  }

  const deleteNote = (id: string) => {
    const index = notes.findIndex(note=>note.id===id);
    let editableNote = [...notes]
    editableNote.splice(index, 1)
    setNotes(editableNote)
  }

  return (
    <div className={`home ${theme}`}>
      <h1>Keep notes</h1>
      <AddNote addNote = {addNote} editMode = {editMode} noteToBeEditted = {noteToBeEditted} updateNote={updateNote}/>
      <div>
        {notes.map(note => <Note key={note.id} id={note.id} text={note.text} priority={note.priority} editNote={editNote} deleteNote={deleteNote} />)}
      </div>
    </div>
  );
}

export default Home;
