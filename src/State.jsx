import React, { useState } from 'react';

export default function State() {

  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };


  return (
    <div>
      <h1>State Management</h1>
      <h2> Update the component's state based on user interactions, like button clicks or input
      changes. Show proficiency in using useState hook or setState method to manage component state.</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
