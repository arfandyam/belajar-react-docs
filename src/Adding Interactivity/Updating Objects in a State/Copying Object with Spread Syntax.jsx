/**
 * In the previous example, the position object is always created fresh from the current cursor
 * position. But often, you will want to include existing data as a part of the new object you’re
 * creating. For example, you may want to update only one field in a form, but keep the previous
 * values for all other fields.
 * 
 * The reliable way to get the behavior you’re looking for is to create a new object and pass it to
 * setPerson. But here, you want to also copy the existing data into it because only one of the
 * fields has changed
 * 
 * You can use the ... object spread syntax so that you don’t need to copy every property separately.
 */

import { useState } from "react";

export default function Form(){
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com'
  });

  function handleFirstNameChange(e){
    setPerson({
      ...person,
      firstName: e.target.value
    });
  }

  function handleLastNameChange(e){
    setPerson({
      ...person,
      lastName: e.target.value
    });
  }

  function handleEmailChange(e){
    setPerson({
      ...person,
      email: e.target.value
    });
  }

  return(
    <>
      <label>Firstname: 
        <input 
          value={person.firstName} 
          onChange = {handleFirstNameChange}
        />
      </label>
      <label>
        <input
          value = {person.lastName}
          onChange = {handleLastNameChange}
        />
      </label>
      <label>
        <input
          value = {person.email}
          onChange = {handleEmailChange}
        />
      </label>
      <p>
        {person.firstName}{' '}
        {person.lastName}{' '}
        {person.email}{' '}
      </p>
    </>
  )
}

/**
 * Note that the ... spread syntax is “shallow”—it only copies things one level deep. This makes it
 * fast, but it also means that if you want to update a nested property, you’ll have to use it more
 * than once.
 */

