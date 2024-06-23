import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='parent-div'>
      <nav className='navbar'>
        <div className='logo'>
          <h1>Logo</h1>
        </div>
      </nav>
      <div className='input-div'>
        <h1>Create Short URLs</h1>
        <input className='link-input' type='text' placeholder='Paste Link Here'></input>
        <Button />

        <div className='description'>
          <h3>Link House is a free tool to shorten URLs and generate short links.
            URL shortener allows you to create a shortened link making it easy to share.</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
