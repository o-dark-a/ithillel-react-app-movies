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

  return (
    <div className="playlist-wrapper">
      <h2>Playlist</h2>
      <AddNewSong addNewSong={addNewSong}/>
      <SongsList songs={allSongs}/>
      <SongsCount songsCount={allSongs.length} />
    </div>
  );
}

export default App;
