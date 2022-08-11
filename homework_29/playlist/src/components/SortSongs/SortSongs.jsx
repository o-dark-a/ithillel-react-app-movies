import React from "react";
import './SortSongs.scss';

function SortSongs({setSortOrder}) {
  return (
    <div className="sort-container">
      <p>Sort: </p>
      <button onClick={() => setSortOrder('first liked')} type="buttun" className="sort-btn sort-liked-first">liked first</button>
      <button onClick={() => setSortOrder('last liked')} type="buttun" className="sort-btn sort-liked-last">liked last</button>
    </div>
  )
}

export default SortSongs;
