/**
 * If you want to change some or all items of the array, you can use map() to create a new array. 
 * The function you will pass to map can decide what to do with each item, based on its data or 
 * its index (or both).
 * 
 * In this example, an array holds coordinates of two circles and a square. When you press the 
 * button, it moves only the circles down by 50 pixels.
 */

import { useState } from "react";

const initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
]

export default function ShapeEditor(){
  const [shapes, setShapes] = useState(initialShapes);

  function handleClick(){
    const nextShapes = shapes.map(shape => {
      if(shape.type === 'square'){
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y+50,
        };
      }
    });

    setShapes(nextShapes);
  }

  return (
    <>
      <button onClick = {handleClick}>
        Move circles down!
      </button>
      <div style = {{
        position: 'relative'
      }}>
        {
          shapes.map(shape => (
            <div
              key = {shape.id}
              style = {{
                background: 'purple',
                position: 'absolute',
                left: shape.x,
                top: shape.y,
                borderRadius:
                  shape.type === 'circle' ? '50%' : '',
                width: 20,
                height: 20,
              }}
            />
          ))
        }
      </div>
    </>
  )
}