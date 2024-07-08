import "./note.css";
import { ColorLight, ColorDark, NoteType } from "./note-type";
import Card from "../card/card";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/theme/theme";
import { DELETE_NOTE, SET_EDIT_MODE, SET_NOTE_FOR_EDIT } from "../../actions";
import { StateContext } from "../../context/state/state";

export type NoteProp = {
  note: NoteType;
};

function Note(props: NoteProp) {
  const theme = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  const editNote = (note: NoteType) => {
    dispatch({ type: SET_EDIT_MODE, payload: true });
    dispatch({ type: SET_NOTE_FOR_EDIT, payload: note });
  };

  return (
    <Card
      bgColor={
        theme === "dark"
          ? props.note.priority && ColorDark[props.note.priority]
          : props.note.priority && ColorLight[props.note.priority]
      }
      height="2"
      padding="2"
    >
      <>
        <div>{props.note.text}</div>
        <div className="right-corner">
          <FaEdit
            className="edit"
            size={20}
            onClick={() => editNote(props.note)}
          ></FaEdit>
          <FaTrash
            className="trash"
            size={20}
            onClick={() =>
              dispatch({ type: DELETE_NOTE, payload: props.note.id })
            }
          ></FaTrash>
        </div>
      </>
    </Card>
  );
}

export default Note;
