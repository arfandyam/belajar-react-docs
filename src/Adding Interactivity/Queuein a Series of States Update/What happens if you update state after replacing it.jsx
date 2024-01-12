import { useState } from "react";

export default function Counter(){
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick = {() => {
        setNumber(number + 5);
        setNumber(n => n+1);
      }}> Counter++
      </button>
    </>
  )
}

/**
 * Here’s what this event handler tells React to do:
 * 
 * 1. setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its
 *  queue.
 * 2. setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its queue.
 * 
 * During the next render, React goes through the state queue:
 * 
 * queued update	           n	          returns
 * 
 * ”replace with 5”	    0 (unused)	         5
 * n => n + 1	               5	         5 + 1 = 6
 * 
 * React stores 6 as the final result and returns it from useState.
 */
