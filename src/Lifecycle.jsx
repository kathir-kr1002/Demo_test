import React, { useState, useEffect } from 'react';
export default function Lifecycle() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const result = await response.json();
        setData(result);
        console.log(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

  
    fetchData();

    
    return () => {
      console.log('Cleanup on unmount');
    
    };
  }, []); 


  return (
    <div>
      <h3>Demonstrate proper initialization, updating, and cleanup procedures. Understand the
      purpose of lifecycle methods or the useEffect hook and know when to use them</h3>
      <h1>Lifecycle Component</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
