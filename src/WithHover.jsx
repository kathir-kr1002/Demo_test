import React from 'react';
import withHover from './Component';

// Define a simple component
function SimpleComponent({ isHovered }) {
  return (
    <div>
      <h1>{isHovered ? 'Hovering!' : 'Not hovering'}</h1>
    </div>
  );
}

// Wrap the SimpleComponent with the HOC
const EnhancedComponent = withHover(SimpleComponent);

export default EnhancedComponent;
