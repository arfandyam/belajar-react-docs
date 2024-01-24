/**
 * This example shows a message when you press the button. However, pressing the button also 
 * accidentally resets the input. Why does this happen? Fix it so that pressing the button does 
 * not reset the input text.
 */

import { useState } from "react";

function Form(){
  const [text, setText] = useState('');
  return (
    <textarea
      value = {text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  )
}

export default function Message(){
  const [showHint, setShowHint] = useState(false);

  return (
    <div>
      {showHint && 
        <p><i>Hint: Your favorite city?</i></p>
      }
      <Form/>
      {
        showHint ? (
          <button
            onClick={() => {
              setShowHint(false);
            }}
          >
            Hide hint
          </button>
        ) : (
          <button
            onClick={() => {
              setShowHint(true);
            }}
          >
            Show hint
          </button>
        )
      }
    </div>
  )
}