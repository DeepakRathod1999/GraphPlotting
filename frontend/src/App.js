 import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSampleData();
  }, []);

  const fetchSampleData = async () => {
    try {
      const response = await fetch('api/sampleData');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
<div>
  <h1>Cycle Status</h1>
  <div className="bar-graph">
    {data.map((item, index) => (
      <div
        key={index}
        className={`bar machine-status-${item.machine_status}`}
      >
        {item.machine_status}
      </div>
    ))}
  </div>
</div>
  );
}; 

export default App;


