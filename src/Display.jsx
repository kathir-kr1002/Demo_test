// import React from 'react';
import { useAppContext } from './Context';

const Display = () => {
  const { state } = useAppContext();

  return <div>Current Count from Display Component: {state.count}</div>;
};

export default Display;
