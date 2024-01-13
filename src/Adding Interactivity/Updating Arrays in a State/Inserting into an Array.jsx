/**
 * Sometimes, you may want to insert an item at a particular position that’s neither at the 
 * beginning nor at the end. To do this, you can use the ... array spread syntax together with 
 * the slice() method. The slice() method lets you cut a “slice” of the array. To insert an item, 
 * you will create an array that spreads the slice before the insertion point, then the new item, 
 * and then the rest of the original array.
 */

// import { func } from "prop-types";
import { useState } from "react";

let nextId = 3;
let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
]

export default function InsertList(){
  const [artists, setArtists] = useState(initialArtists);
  const [name, setName] = useState('');

  function handleClick(){
    const insertAt = 1;
    const nextArtists = [
      ...artists.slice(0, insertAt),
      {id: nextId++, name: name},
      ...artists.slice(insertAt)
    ]

    setArtists(nextArtists);
    setName('');
  }

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input 
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      <button onClick={
        handleClick
      }>
        Insert
      </button>
      <ul>
        {
          artists.map((artist) => (
            <li key={artist.id}>
              {artist.name}
            </li>
          ))
        }
      </ul>
    </>
  )
}