import React from 'react';
export default function Basic() {

  const handleClick = () => {
    alert('Button clicked!');
  };


  return (
    <div>
      <h4>: Ensure that the component renders without errors and displays some basic content.
Demonstrate your understanding of JSX syntax and how to define and export functional or class
components in React.
</h4>
      <button onClick={handleClick}>Click Me!</button>
    </div>
    
  );
}
