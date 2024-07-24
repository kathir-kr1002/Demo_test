import React from 'react';
import { useAppContext } from './Context';

const Counter = () => {
  const { state, dispatch } = useAppContext();

  return (
    <div>
      <h3>Demonstrate understanding of global state management and implement actions,
reducers, and dispatchers accordingly. Set up the chosen state management solution, define actions
and reducers, and connect components to the global state.</h3>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
