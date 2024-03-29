/**
 * A component that holds a page that choose a single track level snack out of a travel. Currently it
 * stores the selected item as an object in the selectedItem state variable. However, this is not 
 * great: the contents of the selectedItem is the same object as one of the items inside the items 
 * list. This means that the information about the item itself is duplicated in two places.
 * 
 * Why is this a problem? Notice how if you first click “Choose” on an item and then edit it, the
 * input updates but the label at the bottom does not reflect the edits. This is because you have
 * duplicated state, and you forgot to update selectedItem.
 * 
 * an easier fix is to remove duplication. In this example, instead of a selectedItem object 
 * (which creates a duplication with objects inside items), you hold the selectedId in state, and 
 * then get the selectedItem by searching the items array for an item with that ID
 * 
 */

import { useState } from "react";

const initialItems = [
  {title: 'pretzels', id: 0},
  {title: 'crispy seaweed', id: 1},
  {title: 'granola bar', id: 2},
];

export default function Menu(){
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find(item =>
    item.id === selectedId  
  );

  function handleChangeTitle(id, e){
    setItems(items.map(item => {
      if(item.id === id){
        return {
          ...item,
          title: e.target.value
        };
      } else {
        return item;
      }
    }));
  }

  return (
    <>
      <h1>Whats your travel snack?</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <input 
              value={item.title}
              onChange={(e) => handleChangeTitle(item.id, e)}
            />
            <button onClick={() => {
              setSelectedId(item.id)
            }}>
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem.title}</p>
    </>
  )
}
