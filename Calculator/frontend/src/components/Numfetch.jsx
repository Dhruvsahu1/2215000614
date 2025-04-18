import React, { useState } from 'react';
import axios from 'axios';

const NumFetch = () => {
  const [numberType, setNumberType] = useState('e');
  const [data, setData] = useState(null);

  const handleFetch = async () => {
    try {
      const res = await axios.get(`http://localhost:9876/numbers/${numberType}`);
      setData(res.data);
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
    }
  };

  return (
    <div className="container">
      <h2>Average Calculator</h2>

      <div>
        <label htmlFor="numberType">Select Number Type:</label>
        <select id="numberType" value={numberType} onChange={(e) => setNumberType(e.target.value)}>
          <option value="p">Prime</option>
          <option value="f">Fibonacci</option>
          <option value="e">Even</option>
          <option value="r">Random</option>
        </select>
        <button onClick={handleFetch}>get</button>
      </div>

      {data && (
        <div style={{ marginTop: '20px' }}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default NumFetch;
