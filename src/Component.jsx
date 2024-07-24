
import React, { useState } from 'react';

// Higher-order component that adds hover effect
function withHover(Component) {
  return function WrappedComponent(props) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundColor: isHovered ? 'lightblue' : 'white' }}
      >
        <Component {...props} isHovered={isHovered} />
      </div>
    );
  };
}

export default withHover;
