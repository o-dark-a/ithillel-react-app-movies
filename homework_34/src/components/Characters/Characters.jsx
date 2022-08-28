import React from 'react';

function Characters({ characters }) {
  const defaultFoto = 'empty.png';
  return (
    <ul id="charactersList">
      {characters.map((item, i) => (
        <li className="character" key={i}>
          <h2>{item.name}</h2>
          <p>House: {item.house}</p>
          <img src={item.image ? item.image : defaultFoto} alt={item.name}></img>
        </li>
      ))}
    </ul>
  );
}

export default Characters;
