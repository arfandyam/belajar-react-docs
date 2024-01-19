/**
 * Synced inputs 
 * 
 * These two inputs are independent. Make them stay in sync: editing one input should update the 
 * other input with the same text, and vice versa.
 */

import { useState } from "react";
import PropTypes from 'prop-types';

// function Input({label}){
function Input({label, text, onSetText}){
  // const [text, setText] = useState('');
  function handleChange(e){
    // setText(e.target.value);
    onSetText(e.target.value);
  }
  return (
    <>
      <label>
        {label}
        {' '}
        <input 
          value={text}
          onChange={handleChange}
        />
      </label>
    </>
  )
}

export default function SyncedInputs(){
  const [text, setText] = useState('');
  return (
    <>
      <Input
        label = "First input"
        text = {text}
        onSetText={setText}
      />
      <Input
        label = "Second input"
        text = {text}
        onSetText={setText}
      />
    </>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  text: PropTypes.string,
  onSetText: PropTypes.func
}