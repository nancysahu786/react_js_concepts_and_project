import React, { useState } from 'react'
import InputBox from './InputBox';
import List from './List';

function HandleAllTodo() {
  const [taskArr, setTaskArr] = useState([]);
  const addTask = (inputValue) => {
    const newValue = inputValue;
    const newTaskArr = [...taskArr, newValue];
    setTaskArr(newTaskArr);
  }

  const deleteTask = (value) => {
    console.log("delete index", value);
    const newTaskArr = taskArr.filter((task, index) => { return index != value }

    );
    console.log("newTaskArr", newTaskArr);
    // console.log("taskArr",taskArr);
    setTaskArr(newTaskArr);
  }
  return (
    <div>
      <InputBox addTask={addTask} />
      <List taskArr={taskArr} deleteTask={deleteTask} />
    </div>
  )
}

export default HandleAllTodo
