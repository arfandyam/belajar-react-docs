import PropTypes from 'prop-types';
import { useState } from "react";

export default function Chat({person}){

  const [text, setText] = useState('');
  return (
    <div>
      <textarea
        placeholder={'Chat to ' + person.name}
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
      />
      <br />
      <button>
        Send to {person.email}
      </button>
    </div>
  )
}

Chat.propTypes = {
  person: PropTypes.object
}