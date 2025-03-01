

import { useState } from 'react'


function InputBox(props) {
    const [inputValue, setInputValue] = useState("");
    const handleUserInput = (event) => {
      setInputValue(event.target.value);
    };

    const addTaskToChild = () => {
      console.log("add task called");
      props.addTask(inputValue);
      setInputValue("");


    }
    return (
      <div className='inputBox'>
        <input type='text' value={inputValue} onChange={handleUserInput} />
        <button onClick={addTaskToChild}>Add Task</button>
      </div>
    )
  }

  export default InputBox;