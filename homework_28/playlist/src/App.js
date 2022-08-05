import React from 'react';
import './App.css';
import songs from './data/data';
import AddSongButton from './components/AddSongButton';
import SongInput from './components/SongInput';
import SongsCount from './components/SongsCount';
import SongsList from './components/SongsList';

function App() {
  return (
    <div className="playlist-wrapper">
      <h2>Playlist</h2>
      <SongInput />
      <AddSongButton />
      <SongsList songs={songs}/>
      <SongsCount songsCount={songs.length} />
    </div>
  );
}

export default App;
