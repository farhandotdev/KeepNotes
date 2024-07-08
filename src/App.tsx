import "./App.css";
import { useReducer, useState } from "react";
import { ThemeContext } from "./context/theme/theme";
import Home from "./pages/Home";
import { StateContext, StateType } from "./context/state/state";
import { Notes } from "./components/note/data";
import Theme from "./components/theme/theme";
import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_EDIT_MODE,
  SET_NOTE_FOR_EDIT,
  UPDATE_NOTE,
} from "./actions";

function App() {
  const [theme, setTheme] = useState("light");

  const [state, dispatch] = useReducer(
    (state: StateType, action: { type: string; payload: any }) => {
      switch (action.type) {
        case SET_EDIT_MODE:
          return { ...state, editMode: action.payload };
        case SET_NOTE_FOR_EDIT:
          return { ...state, noteToBeEdited: action.payload };
        case ADD_NOTE:
          return { ...state, notes: [action.payload, ...state.notes] };
        case DELETE_NOTE:
          const index = state.notes.findIndex(
            (note) => note.id === action.payload
          );
          let editableNote = [...state.notes];
          editableNote.splice(index, 1);
          return { ...state, notes: editableNote };
        case UPDATE_NOTE:
          const indexUpdated = state.notes.findIndex(
            (note) => note.id === action.payload.id
          );
          let editableNoteUpdated = [...state.notes];
          editableNoteUpdated.splice(indexUpdated, 1, action.payload);
          return { ...state, notes: editableNoteUpdated };
        default:
          return state;
      }
    },
    { notes: Notes, editMode: false, noteToBeEdited: null }
  );

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeContext.Provider value={theme}>
        <Theme setTheme={setTheme} />
        <Home></Home>
      </ThemeContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
