import { React, useContext } from 'react';
import Song from '../Song/Song';
import './SongsList.scss';
import { SongContextComponent } from '../../context/context';

function SongsList() {
  const [{songs}, dispatch] = useContext(SongContextComponent);
  return (
    <div className="songs-wrapper">
      <ul className="songs">
        {
          songs.map(song => (
            <Song song={song} key={song.id}/>
          ))
        }
      </ul>
    </div>
  )
}

export default SongsList;