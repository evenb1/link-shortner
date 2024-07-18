import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

const App = () => {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post(
        'https://api-ssl.bitly.com/v4/shorten',
        {
          long_url: url,
        },
        {
          headers: {
            Authorization: 'Bearer 9d18df9b0ead34e9d38a5c8751bca8eac039c7a5',
            'Content-Type': 'application/json',
          },
        }
      );
      setShortenedUrl(response.data.link);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter your URL here"
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
