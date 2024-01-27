import { useState } from "react";
import PropTypes from 'prop-types';

function TaskEdit({task, onChangeTask}){
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(task.text);
  return (
    <>
      {isEdit ? (
        <>
          <input 
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button onClick={() => {
            onChangeTask({
              ...task,
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
          <button onClick={() => {
            setIsEdit(!isEdit);
          }}>
            Edit
          </button>
        </>
      )}
    </>
  )
}

export default function TaskList({tasks, onChangeTask, onDeleteTask}){
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskEdit 
            key={task.id}
            task = {task}
            onChangeTask={onChangeTask}
          />
          {' '}
          <button onClick={() => {
            onDeleteTask(task.id);
          }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.object,
  onChangeTask: PropTypes.func,
  onDeleteTask: PropTypes.func
}

TaskEdit.propTypes = {
  task: PropTypes.object,
  onChangeTask: PropTypes.func,
}