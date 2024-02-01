import { createContext, useContext, useReducer } from "react";
import PropTypes from 'prop-types';

/**
 * File ini dibuat untuk memasangkan antara reducer dan context, hal ini lazim digunakan ketika
 * aplikasi semakin kompleks dan menaikkan state ke top level komponen untuk pengaksesan props pada
 * seluruh komponen tree bahkan terdalam sekalipun
 */

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];

/**
 * STEP 1
 * Buat Context untuk props yang akan di pass dari top level component
 */

export const TasksContext = createContext(null);
export const DispatchContext = createContext(null);

/**
   * STEP 3:
   * Gunakan dispatch yang dipassing dari top level component
   * Disini menggunakan fungsi useDispatch karena di fungsi ini telah menggunakan useContext pada
   * modulenya
   */
export const useTasks = () =>  useContext(TasksContext);
export const useDispatch = () => useContext(DispatchContext);
/**
 * STEP 2:
 * tasks dan disptach yang dikembalikan oleh reducer dimasukkan ke dalam context provider
 */
const TaskProvider = ({children}) => {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  )
}

const TaskReducer = (states, action) => {
  switch(action.type){
    case 'add_task':
      return [
        ...states,
        {
        id: action.id,
        text: action.text,
        done: false,
        }
      ];
    
    case 'edit_task':
      return states.map(state => {
        if(state.id === action.id){
          return {
            ...state,
            text: action.text
          }
        } else {
          return state
        }
      })

    case 'delete_task':
      return states.filter(state => state.id !== action.id);
  }
}

export default TaskProvider;

TaskProvider.propTypes = {
  children: PropTypes.any
}
