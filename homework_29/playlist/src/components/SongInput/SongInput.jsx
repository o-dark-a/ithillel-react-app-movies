import React from 'react';

function SongInput({newSong, onChange}) {
  return <input value={newSong} onChange={onChange} className="input-box" type="text" placeholder="Song..." />
}

export default SongInput;