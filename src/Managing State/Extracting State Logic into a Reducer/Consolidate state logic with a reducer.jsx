/**
 * Kompleksnya aplikasi akan membuat pemantauan pembaharuan state menjadi lebih sulit, react
 * menyediakan useReducer untuk pengelolaan state. Cara migrasi dari useState ke useReducer
 * 
 * 1. Mengubah penentuan state menjadi penugasan aksi
 * Seluruh logika yang ada pada event handler di gantikan dengan command dispatch untuk menentukan
 * aktivitas yang baru saja dilakukan user
 * 
 * 2. Menulis reducer function
 * Fungsi ini berisi seluruh logika inisialisasi state yang ada pada event handler sebelumnya,
 * fungsi ini menerima argumen state sekarang dan object aksi dan mengembalikan state selanjutnya.
 * Secara konvensi penentuan kondisi aksi pada fungsi reducer menggunakan switch statement
 * 
 * 3. Menggunakan fungsi reducer
 * fungsi reducer tadi digunakan pada hook useReducer yang menerima (1) fungsi reducer, (2) state
 * awal dan mengembalikan (1) state selanjutnya, (2) fungsi dispatch
 */

import { useReducer } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import tasksReducer from "./tasksReducer";

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];

export default function TaskApp(){

  // Migrasi dari useState ke useReducer
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  // Dibawah adalah event handler yang menggunakan dispatch
  function handleAddTask(text){
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    });
  }

  function handleChangeTask(task){
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId){
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague Itinerary</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList
        tasks = {tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  )
}

