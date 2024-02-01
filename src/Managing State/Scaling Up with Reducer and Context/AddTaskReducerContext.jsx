import { useState } from "react";
import { useDispatch } from './TaskReducerContext';

let nextId = 3;

const AddTaskReducerContext = () => {
  const [text, setText] = useState('');
  /**
   * STEP 3:
   * Gunakan dispatch yang dipassing dari top level component
   * Disini menggunakan fungsi useDispatch karena di fungsi ini telah menggunakan useContext pada
   * modulenya
   */
  const dispatch = useDispatch();
  return (
    <>
      <input
        placeholder="Add Task"
        value = {text}
        onChange={e => setText(e.target.value)}
      />
      {' '}
      <button onClick={() => {
        dispatch({
          type: 'add_task',
          id: nextId++,
          text: text
        })  
      }}>
        Add
      </button>
    </>
  )
}

export default AddTaskReducerContext;