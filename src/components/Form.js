import React from 'react'
import { useState } from 'react';

const Form = () => {

  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = parseInt(num1) + parseInt(num2);
    setSum(result);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          
          <input type="number" value={num1} onChange={(event) => setNum1(event.target.value)} />
        </label>
        <br />
        <label>
          
          <input type="number" value={num2} onChange={(event) => setNum2(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Two Numbers</button>
      </form>
      {sum && <p>Total : {sum}.</p>}
    </div>
  )
}

export default Form