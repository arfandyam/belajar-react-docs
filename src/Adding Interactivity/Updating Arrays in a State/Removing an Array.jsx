/**
 * The easiest way to remove an item from an array is to filter it out. In other words, you will
 * produce a new array that will not contain that item. To do this, use the filter method
 */

import { useState } from "react";

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
]

export default function RemoveList(){

  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Inspiring Sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key = {artist.id}>
            {artist.name}
            <button 
            onClick = {() => {
              setArtists(
                artists.filter(a => a.id !== artist.id)
              )
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}