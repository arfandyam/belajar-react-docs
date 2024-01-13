/**
 * If your state is deeply nested, you might want to consider flattening it. But, if you don’t want
 * to change your state structure, you might prefer a shortcut to nested spreads. Immer is a popular
 * library that lets you write using the convenient but mutating syntax and takes care of producing
 * the copies for you. With Immer, the code you write looks like you are “breaking the rules” and
 * mutating an object.
 * 
 * To try Immer, install its dependencies first
 */

import { useImmer } from "use-immer";

export default function Form(){
  const [person, updatePerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    }
  });

  function handleNameChange(e){
    updatePerson(draft => {
      draft.name = e.target.value;
    });
  }

  function handleTitleChange(e){
    updatePerson(draft => {
      draft.artwork.title = e.target.value;
    });
  }

  function handleCityChange(e){
    updatePerson(draft => {
      draft.artwork.city = e.target.value;
    });
  }

  function handleImageChange(e){
    updatePerson(draft => {
      draft.artwork.image = e.target.value;
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
