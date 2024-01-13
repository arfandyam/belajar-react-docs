/**
 * In other words, you should treat any JavaScript object that you put into state as read-only.
 * 
 * This example holds an object in state to represent the current pointer position. The red dot is
 * supposed to move when you touch or move the cursor over the preview area. But the dot stays in
 * the initial position:
 */

import { useState } from "react";

export default function MovingDot(){
  const [position, setPosition] = useState(
    {
      x: 0,
      y: 0,
    }
  );

  return (
    <div onPointerMove={e => {
      setPosition({
        x : e.clientX,
        y : e.clientY,
      });
    }}
    style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
    }}>
      <div  style = {{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }}/>
    </div>
  )
}