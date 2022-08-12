import React from "react";
import './ModSong.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';

function ModSong({song, removeSong, changeLikestatus}) {

  return (
    <div className='song-mod'>
      <button onClick={() => removeSong(song.id)} className='song-delete-btn' type='button'><AiOutlineDelete /></button>
      <button onClick={() => changeLikestatus(song)} className={song.isLiked ? 'song-like-btn liked' : 'song-like-btn'} type='button'><FcLike /></button>
    </div>
  )
}

export default ModSong;
