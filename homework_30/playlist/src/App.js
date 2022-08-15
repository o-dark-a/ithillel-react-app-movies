import { React, useContext, useEffect } from 'react';
import './App.scss';
import AddNewSong from './components/AddNewSong/AddNewSong';
import SongsCount from './components/SongsCount/SongsCount';
import SongsList from './components/SongsList/SongsList';
import SortSongs from './components/SortSongs/SortSongs';
import { SongContextComponent } from './context/context';
import { getAllSongs } from './api/playListAPI';
import { SET_SONGS } from './reducer/SongReducer';


function App() {
  const [{ songs }, dispatch] = useContext(SongContextComponent);

  useEffect(() => {
    getAllSongs().then(songs => dispatch({
      type: SET_SONGS,
      payload: {songs}
    }));
  }, []);

  return (
    <div className="playlist-wrapper">
      <h2>Playlist</h2>
      <AddNewSong />
      <SortSongs />
      <SongsList songs={songs}/>
      <SongsCount songsCount={songs.length} />
    </div>
  );
}

export default App;
