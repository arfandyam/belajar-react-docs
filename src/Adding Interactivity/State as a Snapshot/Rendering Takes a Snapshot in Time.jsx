/**
 * “Rendering” means that React is calling your component, which is a function. The JSX you return
 * from that function is like a snapshot of the UI in time. Its props, event handlers, and local
 * variables were all calculated using its state at the time of the render.
 * 
 * When React re-renders a component:
 * 
 * 1. React calls your function again.
 * 2. Your function returns a new JSX snapshot.
 * 3. React then updates the screen to match the snapshot your function returned.
 * 
 * As a component’s memory, state is not like a regular variable that disappears after your function
 * returns. State actually “lives” in React itself—as if on a shelf!—outside of your function. When
 * React calls your component, it gives you a snapshot of the state for that particular render. Your
 * component returns a snapshot of the UI with a fresh set of props and event handlers in its JSX,
 * all calculated using the state values from that render!
 * 
 * Here’s a little experiment to show you how this works. In this example, you might expect that
 * clicking the “+3” button would increment the counter three times because it calls 
 * setNumber(number + 1) three times.
 */
import { useState } from "react";


export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick = {() => {
        setNumber(number+1)
        setNumber(number+1)
        setNumber(number+1)
      }}>
        +3
      </button>
    </>
  )
}

/**
 * Setting state only changes it for the next render. During the first render, number was 0. 
 * This is why, in that render’s onClick handler, the value of number is still 0 even after 
 * setNumber(number + 1) was called:
 */

