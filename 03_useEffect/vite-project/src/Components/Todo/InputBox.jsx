import React, { useState } from 'react';
import {Input} from 'react-dom'

function InputBox(props) {
    const [inputValue,setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const addTaskChild = () =>{
        props.addTask(inputValue);
        setInputValue("");
    }
  return (
    // fragments <></>
    <>
    <div className='inputBox'>
      <input type='text' value={inputValue} onChange={handleInput}/>
      <button onClick={addTaskChild}>Add Task</button>
    </div>
    </>
  )
}

export default InputBox
