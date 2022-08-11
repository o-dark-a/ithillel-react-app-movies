import React from 'react';
import Song from '../Song/Song';
import './SongsList.scss';

function SongsList({songs, removeSong}) {

  return (
    <div className="songs-wrapper">
      <ul className="songs">
        {
          songs.map(song => (
            <Song song={song} key={song.id} removeSong={removeSong}/>
          ))
        }
      </ul>
    </div>
  )
}

export default SongsList;