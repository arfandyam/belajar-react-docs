/**
 * In order to change nested object, you would first need to produce the new 2nd level object 
 * (pre-populated with data from the previous one), and then produce the new 1st level object
 * 
 *    const nextArtwork = { ...person.artwork, city: 'New Delhi' };
 *    const nextPerson = { ...person, artwork: nextArtwork };
 *    setPerson(nextPerson);
 * 
 * Or, written as a single function call:
 * 
 * setPerson({
 *    ...person, // Copy other fields
 *    artwork: { // but replace the artwork
 *    ...person.artwork, // with the same one
 *    city: 'New Delhi' // but in New Delhi!
 *    }
 *  });
 */

import { useState } from "react";

export default function Form(){
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e){
    setPerson({
      ...person,
      name: e.target.value,
    });
  }

  function handleTitleChange(e){
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handleCityChange(e){
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handleImageChange(e){
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <label>Name:
        <input
          value = {person.name}
          onChange = {handleNameChange}
        />
      </label>
      <label>Title:
        <input
          value = {person.artwork.title}
          onChange = {handleTitleChange}
        />
      </label>
      <label>City:
        <input
          value = {person.artwork.city}
          onChange = {handleCityChange}
        />
      </label>
      <label>Image:
        <input
          value = {person.artwork.image}
          onChange = {handleImageChange}
        />
      </label>

      <p>
        {person.artwork.title} by {person.name}
        <br/>
        (located in {person.artwork.city})
        <br/>
        <img 
          src={person.artwork.image}
          alt={person.artwork.title}
        />
      </p>
    </>
  )
}

