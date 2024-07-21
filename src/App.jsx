import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Button from './components/Button'

function App() {
  const [url, setUrl] = useState('')
  const [shortenedUrl, setShortenedUrl] = useState('')

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
      )
      setShortenedUrl(response.data.link)
    } catch (error) {
      console.error('Error shortening URL:', error)
    }
  }

  return (
    <div className='input-div'>
      <h1>Create Short URLs</h1>
      <div className='input-button'>
        <input
          className='link-input'
          type='text'
          placeholder='Paste Link Here'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button onClick={handleShorten} />
      </div>
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target='_blank' rel='noopener noreferrer'>
            {shortenedUrl}
          </a>
        </div>
      )}
      <div className='description'>
        <h3>
          Link House is a free tool to shorten URLs and generate short links.
          URL shortener allows you to create a shortened link, making it easy to share.
        </h3>
      </div>
    </div>
  )
}

export default App
