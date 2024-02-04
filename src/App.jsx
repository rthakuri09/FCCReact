import { useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(19)

  //let counter = 15
  const addValue = () =>{
   setCounter(counter + 1)
  }
  return (
    <>
    <h1>React course with Raj!! {counter}</h1>
    <h2>Counter value: {counter}</h2>
    <button 
    onClick={addValue}
    >Add value</button>
    <button>remove value</button>
    <footer>footer: {counter}</footer>
    </>
  )
}

export default App
