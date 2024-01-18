/**
 * Fix a component that’s not updating 
 * 
 * This Clock component receives two props: color and time. When you select a different color in the 
 * select box, the Clock component receives a different color prop from its parent component. 
 * However, for some reason, the displayed color doesn’t update. Why? Fix the problem.
 */

// import { useState } from 'react';
import PropTypes from 'prop-types'

// export default function Clock({props}) {
export default function Clock({color, time}) {
  return (
    <h1 style={{ color: color }}>
      {time}
    </h1>
  );
}

Clock.propTypes = {
  color: PropTypes.string,
  time: PropTypes.object
}


