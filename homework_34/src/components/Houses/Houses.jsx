import React from "react";
import { useDispatch } from 'react-redux';
import { setSelectedHouse, filterCharacters } from "../../actions/characters";

function Houses({ houses, searchStrVal }) {
  const dispatch = useDispatch();

  const filterByHouse = (house) => {
    dispatch(setSelectedHouse(house));
    dispatch(filterCharacters(searchStrVal));
  }

  return (
    <div className="hogwarts-houses">
      {houses.map((house, i) => (
        <div
          className="house"
          key={i}
          onClick={() => filterByHouse(house)}
        >
          <img src={`houses/${house}.png`} alt={house} />
        </div>
      ))}
    </div>
  )
}

export default Houses;
