import { useState } from "react";
import PropTypes from 'prop-types';

export default function AddTask({onAddTask}){
  const [text, setText] = useState('');

  return (
    <>
      <input
        value={text}
        placeholder="Add task"
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        onAddTask(text);
      }}>
        Add
      </button>
    </>
  )
}

AddTask.propTypes = {
  onAddTask: PropTypes.func
}