import { createContext, useReducer } from "react";
import { initialState, SongReducer } from "../reducer/SongReducer";
export const SongContextComponent = createContext({});

function SongContext({ children }) {
  const [{songs, sortOrder, newSongName}, dispatch] = useReducer(SongReducer, initialState);
  return (
    <SongContextComponent.Provider value={ [{songs, sortOrder, newSongName}, dispatch] }>
      {children}
    </SongContextComponent.Provider>
  );
}

export default SongContext;
