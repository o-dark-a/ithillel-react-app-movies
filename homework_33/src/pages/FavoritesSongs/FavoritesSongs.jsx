import { React, useContext, useEffect } from 'react';
import './FavoritesSongs.scss';
import SongsList from '../../components/SongsList/SongsList';
import { SET_FAVORITE_SONGS } from '../../reducer/SongReducer';
import { SongContextComponent } from '../../context/context';
import { Link } from "react-router-dom";

function FavoritesSongs() {
  const [{favoritesSongs }, dispatch] = useContext(SongContextComponent);

  useEffect(() => {
    dispatch({
      type: SET_FAVORITE_SONGS
    })
  }, []);

  return (
    <div className="favorite-songs-wrapper">
      <h1>FavoritesSongs Page</h1>
      <Link to='/'>Home Page</Link>
      <SongsList songs={favoritesSongs}/>
    </div>
  )
}

export default FavoritesSongs;
