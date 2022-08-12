import React from 'react';
import Song from '../Song/Song';
import './SongsList.scss';

function SongsList({songs, removeSong, changeLikestatus}) {

  return (
    <div className="songs-wrapper">
      <ul className="songs">
        {
          songs.map(song => (
            <Song song={song} key={song.id} removeSong={removeSong} changeLikestatus={changeLikestatus}/>
          ))
        }
      </ul>
    </div>
  )
}

export default SongsList;