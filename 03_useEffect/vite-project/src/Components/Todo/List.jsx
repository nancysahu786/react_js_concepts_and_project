import React from 'react'

function List(props) {
    const {taskArr} = props;

    const onDeleteItem = (value) => {
        console.log("value",value);
        
    }
  return (
    <>
    <div className='list'>
      <ul>
        {
            taskArr.map(((task,index)=>{
                return <>
                <li key={index}>{task}</li>
                <button onClick={() => onDeleteItem(index)}>Delete</button>
                </>

            
}))
        }
      </ul>
    </div>
    </>
  )
}

export default List
