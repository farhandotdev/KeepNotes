import "./note.css";
import {Color, Priority } from "./note-type";
import Card from "../card/card";
import { FaTrash, FaEdit } from "react-icons/fa";

export type NoteProp = {
    id: string,
    text: string,
    priority?: Priority,
    editNote: (id: string) => void,
    deleteNote: (id: string) => void,
}

function Note(props: NoteProp) {
  return (
    <Card
      bgColor={props.priority && Color[props.priority]}
      height="2"
      padding="2"
    >
      <>
        <div>{props.text}</div>
        <div className="right-corner">
          <FaEdit className="edit" size={20} onClick={()=>props.editNote(props.id)}></FaEdit>
          <FaTrash className="trash" size={20} onClick={()=>props.deleteNote(props.id)}></FaTrash>
        </div>
      </>
    </Card>
  );
}

export default Note;
