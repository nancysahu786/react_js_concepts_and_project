import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
const [taskArr, setTask] = useState([]);

  const handleUserInput = (event) => {
    setInputValue(event.target.value);
  }

  const addTask = () =>{
    const newTask = inputValue;
    let newTaskArr = [...taskArr, newTask];
    setTask(newTaskArr);
  }

  return (
    <>
      <div className='inputBox'> 
        <input type='text' value={inputValue} onChange={handleUserInput}/>
        <button onClick={addTask}>Add Task</button>
       </div>
       <div className='list'>
        <ul>
        {
          taskArr.map((task) => {
            return <>
            <li>{task}</li>
            </>
          })
        }
        </ul>

       </div>
    </>
  )
}

export default App
