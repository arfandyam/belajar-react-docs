/**
 * Lastly, create event handlers that update the state. Below is the final form, with all event
 * handlers wired up:
 */

import { useState } from "react";

export default function FullForm(){
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('typing');

  if(status === 'success'){
    return (
      <h1>Thats Right!</h1>
    )
  }

  async function handleSubmit(e){
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err){
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextAreaChange(e){
    setAnswer(e.target.value);
  }

  return(
    <>
      <h1>City Quiz</h1>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value = {answer}
          onChange={handleTextAreaChange}
          disabled = {status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 || status === 'submitting'
        }>
          Submit
        </button>
        {
          error !== null && <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  )
}

function submitForm(answer){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== 'lima';
      if(shouldError){
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve();
      }
    }, 1500);
  });
}