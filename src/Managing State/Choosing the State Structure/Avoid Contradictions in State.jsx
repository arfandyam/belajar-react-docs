/**
 * Imagine a component that render a hotel feedback form with isSending and isSent state variables.
 * While those code works, it leaves the door open for “impossible” states. if you forget to call 
 * setIsSent and setIsSending together, you may end up in a situation where both isSending and 
 * isSent are true at the same time. Since isSending and isSent should never be true at the same 
 * time, it is better to replace them with one status state variable that may take one of three 
 * valid states: 'typing' (initial), 'sending', and 'sent':
 */

import { useState } from "react";

export default function FeedbackForm() {
  const [status, setStatus] = useState('typing');
  const [text, setText] = useState('');

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent){
    return(<h1>Thanks for feedback!</h1>)
  }

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('sending');
    await sendMessage(text);
    setStatus('sent');
  }

  return (
    <>
      <p>How was your stay at the Prancing Pony?</p>
      <form onSubmit={handleSubmit}>
        <textarea
        disabled = {isSending}
          value = {text}
          onChange={(e) => {
            setText(e.target.value);
        }}/>
        <br />
        <button type = "submit">
          Send
        </button>
      </form>
    </>
  )
}

function sendMessage(text){
  return new Promise(resolve => {
    setTimeout(resolve, 1500);
  })
}