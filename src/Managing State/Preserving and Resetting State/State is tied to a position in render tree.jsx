/**
 * React builds render trees for the component structure in your UI.
 * 
 * When you give a component state, you might think the state “lives” inside the component. But the
 * state is actually held inside React. React associates each piece of state it’s holding with the
 * correct component by where that component sits in the render tree.
 * 
 * In React, each component on the screen has fully isolated state. For example, if you render two 
 * Counter components side by side, each of them will get its own, independent, score and hover 
 * states.
 * 
 * React will keep the state around for as long as you render the same component at the same 
 * position in the tree. To see this, increment both counters, then remove the second component by 
 * unchecking “Render the second counter” checkbox, and then add it back by ticking it again
 */

import { useState } from "react";

function Counter(){
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if(hover){
    className += ' hover';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score+1)}>
        Add one
      </button>
    </div>
  )
}

export default function RenderTree(){
  const [showB, setShowB] = useState(true);

  return (
    <div>
      <Counter/>
      {showB && <Counter/>}
      <label>
        <input 
          type="checkbox"
          checked={showB}
          onChange={(e) => setShowB(e.target.checked)}
        />
        Render the secound counter
      </label>
    </div>
  )
}