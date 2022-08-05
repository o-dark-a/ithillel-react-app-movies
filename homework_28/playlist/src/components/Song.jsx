import React from 'react';

function Song({song}) {
  return (
    <li className='song'>
      <span className='song-name'>{song.songName}</span>
      <span className='song-singer'>Singer: {song.singer}</span>
    </li>
  )
}

export default Song;