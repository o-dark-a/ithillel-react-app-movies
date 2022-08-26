import {React, useContext} from 'react';
import SongInput from '../SongInput/SongInput';
import AddSongButton from '../AddSongButton/AddSongButton';
import { v4 as uuidv4 } from 'uuid';
import { SongContextComponent } from '../../context/context';
import { ADD_SONG, UPDATE_NEW_SONG_NAME} from '../../reducer/songReducer';

function AddNewSong() {
  const [{ newSongName }, dispatch] = useContext(SongContextComponent);

  const onChange = function(event) {
    dispatch({
      type: UPDATE_NEW_SONG_NAME,
      payload: {newSongName: event.target.value}
    })
  }

  const onSubmit = function(event) {
    event.preventDefault();

    const newSong = {
      id: uuidv4(),
      songName: newSongName,
      singer: 'No name',
      isLiked: false
    }

    dispatch({
      type: ADD_SONG,
      payload: { newSong }
    })

    dispatch({
      type: UPDATE_NEW_SONG_NAME,
      payload: {newSongName: ''}
    })
  }

  return (
    <form className='add-song-form' onSubmit={onSubmit}>
      <SongInput onChange={onChange}/>
      <AddSongButton />
    </form>
  )
}

export default AddNewSong;