import { createContext } from "react";
import { NoteType } from "../../components/note/note-type";
import { AllAction } from "../../actions";

export type StateType = {
  notes: NoteType[];
  editMode: boolean;
  noteToBeEdited: NoteType | null;
};
export type ActionType = {
  type: AllAction;
  payload: any;
};
export const StateContext = createContext<{
  state: StateType;
  dispatch: (action: ActionType) => void;
}>({} as { state: StateType; dispatch: (action: ActionType) => void });
