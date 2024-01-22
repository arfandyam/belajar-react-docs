/**
 * By default, React preserves state of a component while it stays at the same position. Usually, 
 * this is exactly what you want, so it makes sense as the default behavior. But sometimes, you may
 * want to reset a component’s state.
 * 
 * There are two ways to reset state when switching between them:
 * 
 * 1. Render components in different positions
 * 2. Give each component an explicit identity with key
 * 
 * ONLY OPTION 2 IN THIS EXAMPLE
 * 
 * Keys are using when rendering lists. Keys can also used to distinguish between any components. 
 * By default, React uses order within the parent (“first counter”, “second counter”) to discern 
 * between components. But keys let you tell React that this is not just a first counter, or a 
 * second counter, but a specific counter
 */

import PropTypes from 'prop-types';
import { useState } from "react";

function Counter({ person }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter"
  if (hover) {
    className += " hover"
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{person}s score: {score}</h1>
      <button onClick={() => {
        setScore(score + 1);
      }}>
        Add one
      </button>
    </div>
  )
}

export default function ScoreBoard() {
  const [isPlayer, setIsPlayer] = useState(true);

  return (
    <div>
      {
        isPlayer ? (
          <Counter
            key="Player"
            person="Arfandy"
          />
        ) : (
          <Counter
            key="Computer"
            person="Computer"
          />
        )
      }
      <button onClick={() => {
        setIsPlayer(!isPlayer);
      }}>
        Change Player
      </button>
    </div>
  )
}

Counter.propTypes = {
  person: PropTypes.string
}



