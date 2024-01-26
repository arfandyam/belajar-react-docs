import PropTypes from 'prop-types';
import { useState } from "react";

export default function Contact({person}){
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <h1>{person.name}</h1>
      {
        isShow ? (
          <div>
            <label><i>{person.email}</i></label>
            <button onClick={() => {
              setIsShow(false);
            }}>
              Hide email
            </button>
          </div>
        ) : (
          <button onClick={() => {
            setIsShow(true);
          }}>
            Show email
          </button>
        )
      }
    </>
  )
}

Contact.propTypes = {
  person: PropTypes.object
}