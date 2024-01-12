import { useState } from "react";

export default function Counter(){
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick = {() => {
        setNumber(number+1);
        setNumber(n => n+1);
        setNumber(42);
      }}>-
        Counter++
      </button>
    </>
  ) 
}

/**
 * Here’s how React works through these lines of code while executing this event handler:
 * 
 * 1. setNumber(number + 5): number is 0, so setNumber(0 + 5). React adds “replace with 5” to its 
 *  queue.
 * 2. setNumber(n => n + 1): n => n + 1 is an updater function. React adds that function to its 
 *  queue.
 * 3. setNumber(42): React adds “replace with 42” to its queue.
 * 
 * During the next render, React goes through the state queue:
 * 
 * queued update	            n	          returns
 * 
 * ”replace with 5”	      0 (unused)	      5
 * n => n + 1	                5	        5 + 1 = 6
 * ”replace with 42”	    6 (unused)	      42
 * 
 * Then React stores 42 as the final result and returns it from useState.
 * 
 * To summarize, here’s how you can think of what you’re passing to the setNumber state setter:
 * 
 * 1. An updater function (e.g. n => n + 1) gets added to the queue.
 * 2. Any other value (e.g. number 5) adds “replace with 5” to the queue, ignoring what’s already 
 *  queued.
 * 
 * After the event handler completes, React will trigger a re-render. During the re-render, 
 * React will process the queue. Updater functions run during rendering, so updater functions 
 * must be pure and only return the result. Don’t try to set state from inside of them or run 
 * other side effects. In Strict Mode, React will run each updater function twice (but discard 
 * the second result) to help you find mistakes.
 * 
 * It’s common to name the updater function argument by the first letters of the corresponding state
 * variable:
 * 
 * setEnabled(e => !e);
 * setLastName(ln => ln.reverse());
 * setFriendCount(fc => fc * 2);
 * 
 * If you prefer more verbose code, another common convention is to repeat the full state variable
 * name, like setEnabled(enabled => !enabled), or to use a prefix like 
 * setEnabled(prevEnabled => !prevEnabled).
 */