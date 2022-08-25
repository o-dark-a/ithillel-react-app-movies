import { React, useContext, useEffect } from 'react';
import './Songs.mudule.scss';
import AddNewSong from '../../components/AddNewSong/AddNewSong';
import SongsCount from '../../components/SongsCount/SongsCount';
import SongsList from '../../components/SongsList/SongsList';
import SortSongs from '../../components/SortSongs/SortSongs';
import { SongContextComponent } from '../../context/context';
import { getAllSongs } from '../../api/playListAPI';
import { SET_SONGS } from '../../reducer/songReducer';
import { Link } from "react-router-dom";

function Songs() {
  const [{ songs }, dispatch] = useContext(SongContextComponent);

  useEffect(() => {
    getAllSongs()
      .then(songs => dispatch({
        type: SET_SONGS,
        payload: { songs }
      }))
  }, []);

  return (
    <div className="playlist-wrapper">
      <div className='playlist-nav'>
        <Link to='favorites'>Favorite songs</Link>
        <Link to='login'>Login</Link>
      </div>
      <h2>Playlist</h2>
      <AddNewSong />
      <SortSongs />
      <SongsList songs={songs} />
      <SongsCount songsCount={songs.length} />
    </div>
  );
}

export default Songs;
