import "./home.css";
import Note from "../components/note/note";
import AddNote from "../components/add-note/add-note";
import { useContext } from "react";
import { ThemeContext } from "../context/theme/theme";
import { StateContext } from "../context/state/state";

function Home() {
  const theme = useContext(ThemeContext);
  const { state} = useContext(StateContext);

  return (
    <div className={`home ${theme}`}>
      <h1>Keep notes</h1>
      <AddNote />
      <div>
        {state.notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Home;
