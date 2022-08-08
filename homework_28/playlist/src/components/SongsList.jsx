import React from 'react';
import Song from './Song';

function SongsList({songs}) {
  return (
    <div className="songs-wrapper">
      <ul className="songs">
        {
          songs.map(song => (
            <Song song={song} key={song.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default SongsList;