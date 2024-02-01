import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useTasks } from './TaskReducerContext';

const TaskDetail = ({task}) => {
  const [text, setText] = useState(task.text);
  const [isEdit, setIsEdit] = useState(false);
  /**
   * STEP 3:
   * Gunakan dispatch yang dipassing dari top level component
   * Disini menggunakan fungsi useDispatch karena di fungsi ini telah menggunakan useContext pada
   * modulenya
   */
  const dispatch = useDispatch();
  return (
    <li key={task.id}>
      {isEdit ? (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
          />
          {' '}
          <button onClick={() => {
            dispatch({
              type: 'edit_task',
              id: task.id,
              text: text
            });
            setIsEdit(!isEdit);
          }}>
            Save
          </button>
        </>
      ) : (
        <>
          {task.text}
          {' '}
          <button onClick={() => setIsEdit(!isEdit)}>
            Edit
          </button>
        </>
      )}
      {' '}
      <button onClick={() => {
        dispatch({
          type: 'delete_task',
          id: task.id
        });
      }}>
        Delete
      </button>
    </li>
  )
}

const TaskListReducerContext = () => {
  /**
   * STEP 3:
   * Gunakan dispatch yang dipassing dari top level component
   * Disini menggunakan fungsi useTasks karena di fungsi ini telah menggunakan useContext pada
   * modulenya
   */
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <TaskDetail
          key={task.id}
          task = {task}
        />
      ))}
    </ul>
  )
}

TaskDetail.propTypes = {
  task: PropTypes.object,
}

export default TaskListReducerContext;