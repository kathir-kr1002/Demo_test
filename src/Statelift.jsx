import React from 'react'

export default function Statelift({ sharedState, onChange }) {
    const handleInputChange = (event) => {
   onChange(event.target.value);
};
  return (
    <div>
        <h1>Statelift</h1>
        <input
        type="text"
        value={sharedState}
        onChange={handleInputChange}  />

    </div>
  )
}
