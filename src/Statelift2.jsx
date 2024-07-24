import React from 'react';

export default function Statelift2({ sharedState }) {
  return (
    <div>
      <h2>Child B</h2>
      <p>Shared State: {sharedState}</p>
    </div>
  );
}
