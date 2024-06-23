import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  
    <div className='input-div'>
        
      <h1>Create Short URLs</h1>
      <input className='link-input' type='text'></input>
    </div>
  )
}

export default App
