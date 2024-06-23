import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='input-div'>
        
      <h1>Create Short URLs</h1>
      <input className='link-input' type='text' placeholder='Paste Link Here'></input>
      <div className='description'> 
      <h3>Link House is a free tool to shorten URLs and generate short links
      URL shortener allows to create a shortened link making it easy to share</h3>
      </div>
      </div>
  )
}

export default App
