import React, { useState } from 'react';

export default function Forms() {

  const [formData, setFormData] = useState({
    name: '',
    age: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    age: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setErrors({
      ...errors,
      [name]: ''
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, age } = formData;

    let validationErrors = {};
    if (!name) validationErrors.name = 'Name is required';
    if (!age) validationErrors.age = 'Age is required';
    else if (isNaN(age)) validationErrors.age = 'Age must be a number';

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h3>Create input fields for various data types (text, number, etc.), and update the
      component's state as the user inputs data. Handle form submission and validation.</h3>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        <br></br>
        <div>
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
          
        </div>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

