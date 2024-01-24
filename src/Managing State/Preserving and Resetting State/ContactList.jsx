import PropTypes from 'prop-types'
// import { useState } from "react";

export default function ContactList({persons, onSetTo, onSelectedId}){
  return (
    <ul>
      {
        persons.map(person => (
          <li key={person.id}>
            {/* <button onClick={() => onSetTo(person)}> */}
            <button onClick={() => onSelectedId(person.id)}>
              {person.name}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

ContactList.propTypes = {
  persons: PropTypes.object,
  onSetTo: PropTypes.func,
  onSelectedId: PropTypes.func
}