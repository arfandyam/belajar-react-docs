/**
 * Ref merupakan hook pada react yang dapat menyimpan informasi pada suatu komponen tanpa mentrigger
 * re-render
 */

import { useRef } from "react";

const CounterRef = () => {
  let ref = useRef(0);

  const handleClick = () => {
    /**
     * Ref dapat menampung apa saja termasuk object, string, dan function
     */
    ref.current += 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  )
}

export default CounterRef;
