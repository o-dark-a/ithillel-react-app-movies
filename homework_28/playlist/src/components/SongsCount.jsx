import React from 'react';

function CountSongs({songsCount}) {
  return <p className="count-title">Count of songs: <span className="count"> {songsCount} </span></p>
}

export default CountSongs;