import React, { useState } from 'react';
import Statelift from './Statelift';
import Statelift2 from './Statelift2';

export default function App() {
  const [sharedState, setSharedState] = useState('');

  const handleChange = (newValue) => {
    setSharedState(newValue);
  };

  return (
    <div>
      <h3>Restructure the components to optimize state management and improve component
reusability. Understand how to pass data between components using props and when to lift state to a
common ancestor component</h3>
      <h1>State Lift-Up and Props Drilling</h1>
      <Statelift sharedState={sharedState} onChange={handleChange} />
      <Statelift2 sharedState={sharedState} />
    </div>
  );
}
