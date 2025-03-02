import { useState } from 'react'
import HandleAllTodo from './Components/Todo/HandleAllTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HandleAllTodo />
    </>
  )
}

export default App
