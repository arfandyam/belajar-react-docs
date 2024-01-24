/**
 * Swap two form fields 
 * This form lets you enter first and last name. It also has a checkbox controlling which field goes
 * first. When you tick the checkbox, the “Last name” field will appear before the “First name” 
 * field.
 * 
 * It almost works, but there is a bug. If you fill in the “First name” input and tick the checkbox,
 * the text will stay in the first input (which is now “Last name”). Fix it so that the input text 
 * also moves when you reverse the order.
 */

import PropTypes from 'prop-types';
import { useState } from "react";

function Field({ label }) {

  const [text, setText] = useState('');
  return (
    <label>
      {label}:
      <input
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  )
}

export default function ReverseForm() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        value={reverse}
        onChange={(e) => {
          setReverse(e.target.checked);
        }}
      />
      Reverse Order
    </label>
  )

  if (reverse) {
    return (
      <>
        <Field key="last" label="lastName"/>
        <Field key="first" label="firstName"/>
        { checkbox }
      </>
    )
  } else {
    return (
      <>
        <Field key="first" label="firstName"/>
        <Field key="last" label="lastName"/>
        { checkbox }
      </>
    )
  }
}

Field.propTypes = {
  label: PropTypes.bool
}