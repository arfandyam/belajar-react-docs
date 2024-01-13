/**
 * In JavaScript, arrays are just another kind of object. Like with objects, you should treat 
 * arrays in React state as read-only. Instead, every time you want to update an array, you’ll want
 * to pass a new array to your state setting function. To do that, you can create a new array from
 * the original array in your state by calling its non-mutating methods like filter() and map().
 * Then you can set your state to the resulting new array.
 * 
 * Adding to An Array
 */

import { useState } from "react";


export default function List(){
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  
  let nextId = 0;
  function handleClickButton(){
    setArtists([
      ...artists,
      {
        id: nextId++,  
        name: name,
      },
    ]);
  }

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <input 
        value = {name}
        onChange = {e => {
          setName(e.target.value);
        }}
      />
      <button onClick = {handleClickButton}>
        Add
      </button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}