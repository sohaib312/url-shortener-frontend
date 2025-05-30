import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9090/shorten', {
        longUrl: inputUrl
      });
      setShortUrl(response.data);
    } catch (error) {
      console.error('Error shortening URL:', error);
      alert('Failed to shorten URL.');
    }
  };

  return (
    <div className="app-container">
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter long URL"
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>

      {shortUrl && (
        <div className="result">
          <p>Shortened URL:</p>
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
