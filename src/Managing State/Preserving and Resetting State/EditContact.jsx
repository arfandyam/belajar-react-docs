import PropTypes from 'prop-types';
import { useState } from "react";

export default function EditContact({selectedPerson, onChangePerson}){
  const [name, setName] = useState(selectedPerson.name);
  const [email, setEmail] = useState(selectedPerson.email);

  return (
    <>
      <label>
        Name:
        {' '}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Email:
        {' '}
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <button onClick={() => {
        // onChangePerson(n)
        const updatedData = {
          id: selectedPerson.id,
          name: name,
          email: email,
        }
        onChangePerson(updatedData);
      }}>
        Save
      </button>
      <button onClick={() => {
        setName(selectedPerson.name);
        setEmail(selectedPerson.email);
      }}>
        Reset
      </button>
    </>
  )
}

EditContact.propTypes = {
  selectedPerson: PropTypes.object,
  onChangePerson: PropTypes.func
}