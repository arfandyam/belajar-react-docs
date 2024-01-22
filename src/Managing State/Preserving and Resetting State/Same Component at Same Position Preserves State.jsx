/**
 * In this example, there are two different <Counter /> tags:
 * 
 * When you tick or clear the checkbox, the counter state does not get reset. Whether isFancy is 
 * true or false, you always have a <Counter /> as the first child of the div returned from the 
 * root App component
 * 
 * It’s the same component at the same position, so from React’s perspective, it’s the same counter.
 * 
 * Remember that it’s the position in the UI tree—not in the JSX markup—that matters to React!
 */

import { useState } from 'react';
import PropTypes from 'prop-types'

export default function App() {
  const [isFancy, setIsFancy] = useState(false);
  if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
        <label>oi</label>
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={e => {
              setIsFancy(e.target.checked)
            }}
          />
          Use fancy styling
        </label>
      </div>
    );
  }
  return (
    <div>
      <Counter isFancy={false} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={e => {
            setIsFancy(e.target.checked)
          }}
        />
        Use fancy styling
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = 'counter';
  if (hover) {
    className += ' hover';
  }
  if (isFancy) {
    className += ' fancy';
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>
        Add one
      </button>
    </div>
  );
}

Counter.propTypes = {
  isFancy: PropTypes.bool
}