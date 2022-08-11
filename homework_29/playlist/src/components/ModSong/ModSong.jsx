import React from "react";
import { AiOutlineDelete } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

function ModSong({song, removeSong}) {

  return (
    <div className='song-mod'>
      <button onClick={() => removeSong(song.id)} className='song-delete-btn' type='button'><AiOutlineDelete /></button>
      <button className='song-like-btn' type='button'><FcLike /></button>
    </div>
  )
}

export default ModSong;
