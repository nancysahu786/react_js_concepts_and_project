

function List(props) {
    return (
      <div className='list'>
        <ul>
          {
            props.taskArr.map((task) => {
              return <>
                <li>{task}</li>
              </>
            })
          }
        </ul>

      </div>
    )
  }

  export default List