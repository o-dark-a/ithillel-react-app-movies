import { createContext, useReducer } from "react";
import { initialState, SongReducer } from "../reducer/SongReducer";
export const SongContextComponent = createContext({});

function SongContext({ children }) {
  const [state, dispatch] = useReducer(SongReducer, initialState);
  return (
    <SongContextComponent.Provider value={ [state, dispatch] }>
      {children}
    </SongContextComponent.Provider>
  );
}

export default SongContext;
