import React from 'react';
import SongInput from '../SongInput/SongInput';
import AddSongButton from '../AddSongButton/AddSongButton';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function AddNewSong({ addNewSong }) {
  const [newSong, setNewSong] = useState('');

  const onChange = function(event) {
    setNewSong(event.target.value);
  }

  const onSubmit = function(event) {
    event.preventDefault();
    addNewSong({
      id: uuidv4(),
      songName: newSong,
      singer: 'No name'
    });
  }

  return (
    <form className='add-song-form' onSubmit={onSubmit}>
      <SongInput onChange={onChange} newSong={newSong}/>
      <AddSongButton />
    </form>
  )
}

export default AddNewSong;