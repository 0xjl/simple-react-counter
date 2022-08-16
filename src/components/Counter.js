import React, { useState } from 'react';

export default function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  function handleSetCountAdd() {
    setCount((prevState) => prevState + 1);
  }

  function handleSetCountDecrease() {
    setCount((prevState) => prevState - 1);
  }

  return (
    <div className='counter'>
      Your Score: {count}
      <button className='increase' onClick={() => handleSetCountAdd(count)}>
        Increase
      </button>
      <button
        className='decrease'
        onClick={() => handleSetCountDecrease(count)}>
        Decrease
      </button>
    </div>
  );
}
