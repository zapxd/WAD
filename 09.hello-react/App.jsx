import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the user's name
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Handle button click to display greeting
  const handleSubmit = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="App">
      <h1>{greeting ? greeting : 'Enter your name to say Hello!'}</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name} 
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Say Hello</button>
    </div>
  );
}

export default App;
