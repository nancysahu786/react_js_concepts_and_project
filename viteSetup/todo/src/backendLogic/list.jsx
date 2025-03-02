

function List(props) {
    return (
      <div className='list'>
        <ul>
          {
            props.taskArr.map((task,index) => (
             
                <li key={index}>{task}</li>
            
            ))
          }
        </ul>

      </div>
    )
  }

  export default List