/**
 * It is an uncommon use case, but if you would like to update the same state variable multiple
 * times before the next render, instead of passing the next state value like setNumber(number + 1),
 * you can pass a function that calculates the next state based on the previous one in the queue,
 * like setNumber(n => n + 1). It is a way to tell React to “do something with the state value”
 * instead of just replacing it.
 */

import { useState } from "react";

export default function Counter(){
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick = {() => {
        setNumber(n => n + 1);
        setNumber(n => n + 1);
        setNumber(n => n + 1);
      }}>
        +3
      </button>
    </>
  )
}

/**
 * Here, n => n + 1 is called an updater function. When you pass it to a state setter:
 * 
 * 1. React queues this function to be processed after all the other code in the event handler 
 *  has run.
 * 2. During the next render, React goes through the queue and gives you the final updated state.
 * 
 * Here’s how React works through these lines of code while executing the event handler:
 * 
 * 1. setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
 * 2. setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
 * 3. setNumber(n => n + 1): n => n + 1 is a function. React adds it to a queue.
 * 
 * queued update	 n	  returns
 * 
 * n => n + 1	     0	  0 + 1 = 1
 * n => n + 1	     1	  1 + 1 = 2
 * n => n + 1	     2	  2 + 1 = 3
 */