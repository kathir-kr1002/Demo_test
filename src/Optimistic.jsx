import React, { useState } from 'react';

export default function Optimistic() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const addTask = async (newTask) => {
    const optimisticTasks = [...tasks, newTask];
    setTasks(optimisticTasks);

    try {
    
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));

    } catch (err) {
      setTasks(tasks); 
      setError('Failed to add task');
    }
  };

  const removeTask = async (taskToRemove) => {
    const optimisticTasks = tasks.filter(task => task !== taskToRemove);
    setTasks(optimisticTasks);

    try {

      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    } catch (err) {
      setTasks(tasks);
      setError('Failed to remove task');
    }
  };

  const handleAddTask = () => {
    const newTask = `Task ${tasks.length + 1}`;
    addTask(newTask);
  };

  const handleRemoveTask = (task) => {
    removeTask(task);
  };

  return (
    <div>
      <h3>Design a feature that updates the UI optimistically before receiving confirmation from
the server. Show understanding of handling asynchronous actions, updating UI state optimistically,
and reverting changes if the server request fails</h3>
      <h1>Optimistic UI Updates</h1>
      <button onClick={handleAddTask}>Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(task)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

