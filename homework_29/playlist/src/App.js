import React from 'react';
import './App.scss';
import songs from './data/data';
import AddNewSong from './components/AddNewSong/AddNewSong';
import SongsCount from './components/SongsCount/SongsCount';
import SongsList from './components/SongsList/SongsList';
import SortSongs from './components/SortSongs/SortSongs';
import { useMemo } from 'react';
import { useState } from 'react';

function App() {
  const [allSongs, setNewSong] = useState(songs);
  const [sortOrder, setSortOrder] = useState('first liked');

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

  const sortedSongsList = useMemo(() => {
    if(sortOrder === 'first liked') {
      return [...allSongs].sort(song => !song.isLiked ? 1 : -1);
    }
    return [...allSongs].sort(song => song.isLiked ? 1 : -1);
  }, [allSongs]);

  const setSortSongsOrder = function(order) {
    if (allSongs.some((song) => song.isLiked) && sortOrder !== order) {
      setSortOrder(order);
      setNewSong(sortedSongsList);
    }
  }

  return (
    <div className="playlist-wrapper">
      <h2>Playlist</h2>
      <AddNewSong addNewSong={addNewSong}/>
      <SortSongs setSortOrder={setSortSongsOrder} />
      <SongsList songs={sortedSongsList} removeSong={removeSong} changeLikestatus={changeLikestatus}/>
      <SongsCount songsCount={allSongs.length} />
    </div>
  );
}

export default App;
