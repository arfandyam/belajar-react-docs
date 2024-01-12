/**
 * A state variable’s value never changes within a render, even if its event handler’s code is 
 * asynchronous.
 * 
 * Here is an example of how that makes your event handlers less prone to timing mistakes. Below is
 * a form that sends a message with a five-second delay. Imagine this scenario:
 * 
 * 1. You press the “Send” button, sending “Hello” to Alice.
 * 2. Before the five-second delay ends, you change the value of the “To” field to “Bob”.
 */

import { useState } from "react";

export default function Form(){
  const [to, setTo] = useState('Alice');
  const [message, setMessage] = useState('Hello');

  function handleSubmit(e){
    e.preventDefault();
    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 3000);
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>
        To: {' '}
        <select 
        value={to}
        onChange={e=>setTo(e.target.value)}>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>
      <textarea 
      placeholder="Message"
      value={message}
      onChange={e=>setMessage(e.target.value)}/>
      <button type="submit">Send</button>
    </form>
  )
}

/**
 * React keeps the state values “fixed” within one render’s event handlers. You don’t need to worry
 * whether the state has changed while the code is running.
 */