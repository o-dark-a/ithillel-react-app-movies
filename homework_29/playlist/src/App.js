import React from 'react';
import './App.scss';
import songs from './data/data';
import AddNewSong from './components/AddNewSong/AddNewSong';
import SongsCount from './components/SongsCount/SongsCount';
import SongsList from './components/SongsList/SongsList';
import { useState } from 'react';

function App() {
  const [allSongs, setNewSong] = useState(songs);

  function addNewSong(newSong) {
    setNewSong([newSong, ...allSongs]);
  }

  function removeSong(songId) {
    const updateSongsList = allSongs.filter(song => song.id !== songId);
    setNewSong(updateSongsList);
  }

  const changeLikestatus = function(likedSong) {
    const updateSongsList = allSongs.map(song => likedSong.id === song.id ? ({...song, isLiked: !song.isLiked}) : song);
    setNewSong(updateSongsList);
  }

  return (
    <div className="playlist-wrapper">
      <h2>Playlist</h2>
      <AddNewSong addNewSong={addNewSong}/>
      <SongsList songs={allSongs} removeSong={removeSong} changeLikestatus={changeLikestatus}/>
      <SongsCount songsCount={allSongs.length} />
    </div>
  );
}

export default App;
