import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './backendLogic/input';
import List from './backendLogic/list';

function App() {

  const [taskArr, setTask] = useState([]);


  const addTask = (inputValue) => {
    const newTask = inputValue;
    let newTaskArr = [...taskArr, newTask];
    setTask(newTaskArr);
  }

  return (
    <>
      <InputBox addTask={addTask} />
      <List taskArr={taskArr} />
    </>
  )

 
 
}

export default App
