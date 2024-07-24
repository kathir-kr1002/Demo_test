import React, { useState } from 'react';
export default function Third() {
  
  const [isToggled, setIsToggled] = useState(false);

  
  const toggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <h1>Conditional Rendering</h1>
      <h3> Display different messages or elements depending on certain conditions.
Demonstrate understanding of conditional rendering techniques using if statements, ternary
operators, or logical && operator</h3>
      <p>{isToggled ? 'The toggle is ON' : 'The toggle is OFF'}</p>
      <button onClick={toggle}>
        {isToggled ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  );
}

