import AddTaskReducerContext from "./AddTaskReducerContext";
import TaskListReducerContext from "./TaskListReducerContext";
import TaskProvider from "./TaskReducerContext";

const TaskAppReducerContext = () => {

  return (
    <>
      <TaskProvider>
        <h1>Day off in Kyoto</h1>
        <AddTaskReducerContext/>
        <TaskListReducerContext/>
      </TaskProvider>
    </>
  )
}

export default TaskAppReducerContext;