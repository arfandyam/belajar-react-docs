/**
 * In this example, ticking the checkbox will replace <Counter> with a <p>:
 * 
 * Here, you switch between different component types at the same position. Initially, the first 
 * child of the <div> contained a Counter. But when you swapped in a p, React removed the Counter 
 * from the UI tree and destroyed its state
 */

import { useState } from "react";

function Counter(){
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if(hover){
    className += "hover";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button
        onClick={() => setScore(score+1)}
      >
        Add one
      </button>
    </div>
  )
}

export default function DiffComponents(){
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      {
        isPaused ? (
          <p>See you later!</p>
        ) : (
          <Counter/>
        ) 
      }
      <label>
          <input
            type="checkbox"
            checked = {isPaused}
            onChange = {(e) => setIsPaused(e.target.checked)}
          />
        </label>
    </div>
  )
}
/**
 * Also, when you render a different component in the same position, it resets the state of its 
 * entire subtree.
 * 
 * Changing p to counter component in UI tree but in a section tag will reset state
 */