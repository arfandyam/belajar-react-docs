/**
 * Here’s a component that renders a sculpture image. Clicking the “Next” button should show the next
 * sculpture by changing the index to 1, then 2, and so on. However, this won’t work
 * 
 * The handleClick event handler is updating a local variable, index. But two things prevent that 
 * change from being visible:
 * 
 * 1. Local variables don’t persist between renders. When React renders this component a second time, 
 * it renders it from scratch—it doesn’t consider any changes to the local variables.
 * 
 * 2. Changes to local variables won’t trigger renders. React doesn’t realize it needs to render the 
 * component again with the new data.
 * 
 * To update a component with new data, two things need to happen:
 * 
 * 1. Retain the data between renders.
 * 2. Trigger React to render the component with new data (re-rendering).
 * 
 * The useState Hook provides those two things:
 * 
 * 1. A state variable to retain the data between renders.
 * 2. A state setter function to update the variable and trigger React to render the component again.
 */

import { useState } from 'react';
import { sculptureList } from './data';
export default function Gallery() {

  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img
        src={sculpture.url}
        alt={sculpture.alt}
      />
      <p>
        {sculpture.description}
      </p>
    </div>
  )

  /**
   * In React, useState, as well as any other function starting with “use”, is called a Hook.
   * Hooks are special functions that are only available while React is rendering 
   * They let you “hook into” different React features.
   * 
   * State is just one of those features, but you will meet the other Hooks later.
   */

  /**
   * Hooks—functions starting with use—can only be called at the top level of your components or 
   * your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions. Hooks
   * are functions, but it’s helpful to think of them as unconditional declarations about your 
   * component’s needs. You “use” React features at the top of your component similar to how you 
   * “import” modules at the top of your file.
   */

  /**
   * The only argument to useState is the initial value of your state variable. In this example, 
   * the index’s initial value is set to 0 with useState(0).
   * 
   * Every time your component renders, useState gives you an array containing two values:
   * 
   * 1. The state variable (index) with the value you stored.
   * 2. The state setter function (setIndex) which can update the state variable and trigger React 
   *  to render the component again.
   * 
   * Here’s how that happens in action:
   * 
   * 1. Your component renders the first time. Because you passed 0 to useState as the initial value 
   *  for index, it will return [0, setIndex]. React remembers 0 is the latest state value.
   * 2. You update the state. When a user clicks the button, it calls setIndex(index + 1). index is 0,
   *  so it’s setIndex(1). This tells React to remember index is 1 now and triggers another render.
   * 3. Your component’s second render. React still sees useState(0), but because React remembers 
   *  that you set index to 1, it returns [1, setIndex] instead.
   */
}