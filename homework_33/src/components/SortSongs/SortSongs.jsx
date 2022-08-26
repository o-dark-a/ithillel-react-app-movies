import {React, useContext} from 'react';
import './SortSongs.scss';
import {SongContextComponent} from '../../context/context';
import { SET_SORT_ORDER } from '../../reducer/songReducer';

function SortSongs() {
  const [_, dispatch] = useContext(SongContextComponent);

  function setSortOrder(order) {
    dispatch({
      type: SET_SORT_ORDER,
      payload: {order}
    })
  }

  return (
    <div className="sort-container">
      <p>Sort: </p>
      <button onClick={() => setSortOrder('first liked')} type="buttun" className="sort-btn sort-liked-first">liked first</button>
      <button onClick={() => setSortOrder('last liked')} type="buttun" className="sort-btn sort-liked-last">liked last</button>
    </div>
  )
}

export default SortSongs;
