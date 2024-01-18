/**
 * If you can calculate some information from the component’s props or its existing state variables
 * during rendering, you should not put that information into that component’s state.
 */

import { useState } from "react";

export default function RedundantStateForm(){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // const [fullName, setFullName] = useState('');

  const fullName = firstName + ' ' + lastName;

  function handleFirstNameChange(e){
    setFirstName(e.target.value);
    // setFullName(e.target.value + '' + lastName);
  }

  function handleLastNameChange(e){
    setLastName(e.target.value);
    // setFullName(firstName + '' + e.target.value);
  }

  return (
    <>
      <h1>Lets check you in</h1>
      <p>
        First name:
        <input 
          value = {firstName}
          onChange={handleFirstNameChange}
        />
      </p>
      <p>
        Last name:
        <input 
          value = {lastName}
          onChange={handleLastNameChange}
        />
      </p>
      <p>Your ticket will be issued to: {fullName}</p>
    </>
  )

  // function handleFullNm
}