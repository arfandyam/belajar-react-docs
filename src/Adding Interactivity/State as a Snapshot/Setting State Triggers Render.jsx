/**
 * You might think of your user interface as changing directly in response to the user event like a 
 * click. In React, it works a little differently from this mental model. On the previous page, you 
 * saw that setting state requests a re-render from React. This means that for an interface to react
 * to the event, you need to update the state.
 */

import { useState } from "react";

function sendMessage(){
  //
}

export default function Form(){
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('Hi!');

  if(isSent){
    return <h1>Your message: {message} its on its way</h1>
  }

  return (
    <form onSubmit = { e => {
      e.preventDefault();
      setIsSent(true);
      sendMessage(message);
    }}>
      <textarea 
      placeholder = "Message!"
      value = {message}
      onChange = {e => setMessage(e.target.value)}/>
      <button type="submit">Send</button>
    </form>
  )
}

/**
 * Here’s what happens when you click the button:
 * 
 * 1. The onSubmit event handler executes.
 * 2. setIsSent(true) sets isSent to true and queues a new render.
 * 3. React re-renders the component according to the new isSent value.
 */