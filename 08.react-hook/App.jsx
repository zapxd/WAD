import React, { useState } from 'react';

function App() {
  // State to store the list of to-dos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Handle change in the input field
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Add a new to-do
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Handle delete of a to-do
  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <div className="todo-input">
        <input 
          type="text" 
          value={newTodo} 
          onChange={handleChange} 
          placeholder="Add a new task" 
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
