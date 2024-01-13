/**
 * Objects are not really located “inside” arrays. They might appear to be “inside” in code, but 
 * each object in an array is a separate value, to which the array “points”. This is why you need 
 * to be careful when changing nested fields like list[0]. Another person’s artwork list may point 
 * to the same element of the array!
 * 
 * When updating nested state, you need to create copies from the point where you want to update,
 * and all the way up to the top level.
 * 
 * The problem on code like this:
 * 
 *    const myNextList = [...myList];
 *    const artwork = myNextList.find(a => a.id === artworkId);
 *    artwork.seen = nextSeen; // Problem: mutates an existing item
 *    setMyList(myNextList);
 * 
 * Although the myNextList array itself is new, the items themselves are the same as in the original
 * myList array. So changing artwork.seen changes the original artwork item. That artwork item is 
 * also in yourList, which causes the bug. Bugs like this can be difficult to think about, but 
 * thankfully they disappear if you avoid mutating state.
 * 
 * You can use map to substitute an old item with its updated version without mutation.
 * 
 *    setMyList(myList.map(artwork => {
 *      if (artwork.id === artworkId) {
 *        // Create a *new* object with changes
 *        return { ...artwork, seen: nextSeen };
 *      } else {
 *        // No changes
 *        return artwork;
 *      }
 *    }));
 */

import { useState } from 'react';
import PropTypes from 'prop-types'

// let nextId = 3;
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList(){
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleMyListToggle(artworkId, nextSeen){
    setMyList(myList.map(artwork => {
      if(artwork.id === artworkId){
        return {...artwork, seen: nextSeen}
      } else {
        return artwork;
      }
    }));
  }

  function handleYourListToggle(artworkId, nextSeen){
    setYourList(yourList.map(artwork => {
      if(artwork.id === artworkId){
        return {...artwork, seen: nextSeen}
      } else {
        return artwork;
      }
    }))
  }

  return (
    <>
      <h1>My List of Art to See:</h1>
      <ItemList
        artworks = {myList}
        onToggle = {handleMyListToggle}
      />
      <h1>Your List of Art to See:</h1>
      <ItemList
        artworks = {yourList}
        onToggle = {handleYourListToggle}
      />
    </>
    
  )
}

function ItemList({artworks, onToggle}){
  return (
    <ul>
      {
        artworks.map(artwork => (

          <li key={artwork.id}>
            <label>
              <input
                type="checkbox"
                checked={artwork.seen}
                onChange={e => {
                  onToggle(
                    artwork.id,
                    e.target.checked,
                  )
                }}
              />
              {artwork.title}
            </label>
          </li>
        ))
      }
    </ul>
  )
}

ItemList.propTypes = {
  artworks: PropTypes.array,
  onToggle: PropTypes.bool
}