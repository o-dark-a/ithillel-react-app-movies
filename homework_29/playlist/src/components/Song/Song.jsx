import React from 'react';
import './Song.scss';
import ModSong from '../ModSong/ModSong';

function Song({song, removeSong, changeLikestatus}) {
  return (
    <li className='song'>
      <div className='song-title'>
        <span className='song-name'>{song.songName}</span>
        <span className='song-singer'>Singer: {song.singer}</span>
      </div>
      <ModSong removeSong={removeSong} song={song} changeLikestatus={changeLikestatus} />
    </li>
  )
}

export default Song;