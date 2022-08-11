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
      Counter Yeah here is your score: {count}
      <button
        className='decrease'
        onClick={() => handleSetCountDecrease(count)}></button>
      <button
        className='increase'
        onClick={() => handleSetCountAdd(count)}></button>
    </div>
  );
}
