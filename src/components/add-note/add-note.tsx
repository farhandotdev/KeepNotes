import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./add-note.css";
import { NoteType, Priority } from "../note/note-type";
import Card from "../card/card";
import { ThemeContext } from "../../context/theme/theme";

type AddNoteProps = {
  addNote: (note: NoteType) => void;
  editMode: boolean;
  noteToBeEditted: NoteType | null;
  updateNote: (note: NoteType) => void;
};

function AddNote(props: AddNoteProps) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<Priority>("low");
  const theme = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const setNoteContent = (note:NoteType) =>{
    setText(note.text);
    setPriority(note.priority);
  }

  useEffect(()=>{
    if(props.noteToBeEditted && props.editMode){
      setNoteContent(props.noteToBeEditted);
    }
  }, [props.noteToBeEditted, props.editMode])
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if(props.editMode){
      props.noteToBeEditted && props.updateNote({
        text,
        priority,
        id: props.noteToBeEditted.id
      })
    }else{
      props.addNote({
        text,
        priority,
        id: uuidv4(),
      });
    }
    setText("");
    setPriority("low");
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  };
  return (
    <Card bgColor={theme==='dark'?"#333":"#ddd"} height="2">
      <form className="addNote">
        <input type="text" placeholder="  Add notes...." onChange={handleChange} value={text} />
        <select onChange={handleSelect} value={priority}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button onClick={handleClick}>{props.editMode?'Edit':'Add'}</button>
      </form>
    </Card>
  );
}

export default AddNote;
