import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllTodo() {
    const [taskArr,setTaskArr] = useState([]);
    const addTask = (inputValue) => {
        const newValue = inputValue;
        const newTaskArr = [...taskArr,newValue];
        setTaskArr(newTaskArr);
    }
  return (
    <div>
      <InputBox addTask={addTask}/>
      <List taskArr={taskArr}/>
    </div>
  )
}

export default HandleAllTodo
