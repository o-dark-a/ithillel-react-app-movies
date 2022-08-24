import {React, useContext} from 'react';
import { SongContextComponent } from '../../context/context';

function SongInput({onChange}) {
  const [{ newSong, newSongName }] = useContext(SongContextComponent);
  return <input value={newSongName} onChange={onChange} className="input-box" type="text" placeholder="Song..." />
}

export default SongInput;