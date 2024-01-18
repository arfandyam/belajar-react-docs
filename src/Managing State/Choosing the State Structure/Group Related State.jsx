/**
 * if some two state variables always change together, it might be a good idea to unify them into a
 * single state variable. Then you won’t forget to always keep them in sync. But you can separate it
 * if you want.In this example where moving the cursor updates both coordinates of the red dot:
 */

import {useState} from 'react';

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}

/**
 * Another case where you’ll group data into an object or an array is when you don’t know how many
 * pieces of state you’ll need. For example, it’s helpful when you have a form where the user can
 * add custom fields.
 */


