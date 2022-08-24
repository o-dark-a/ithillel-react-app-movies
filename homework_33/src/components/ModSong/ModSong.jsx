import {React, useContext} from 'react';
import './ModSong.scss';
import { AiOutlineDelete } from 'react-icons/ai';
import { FcLike } from 'react-icons/fc';
import { SongContextComponent } from '../../context/context';
import { REMOVE_SONG, CHANGE_LIKE_STATUS, SET_FAVORITE_SONGS } from '../../reducer/SongReducer';

function ModSong({song}) {
  const [songs, dispatch] = useContext(SongContextComponent);

  function removeSong(songId) {
    dispatch({
      type: REMOVE_SONG,
      payload: {songId}
    })
  }

  const changeLikestatus = function(likedSong) {
    dispatch({
      type: CHANGE_LIKE_STATUS,
      payload: {likedSong}
    });
  }

  return (
    <div className='song-mod'>
      <button onClick={() => removeSong(song.id)} className='song-delete-btn' type='button'><AiOutlineDelete /></button>
      <button onClick={() => changeLikestatus(song)} className={song.isLiked ? 'song-like-btn liked' : 'song-like-btn'} type='button'><FcLike /></button>
    </div>
  )
}

export default ModSong;
