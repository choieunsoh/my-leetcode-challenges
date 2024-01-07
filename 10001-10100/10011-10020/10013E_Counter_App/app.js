// 10013. Counter App
// https://leetcode.com/problems/counter-app/description/
import React from 'react';

/**
 * @return {JSX.Element}
 */
export const Counter = () => {
  const [count, setCount] = React.useState(0);
  const handleIncreaseClick = () => setCount((prevCount) => prevCount + 1);
  const handleDecreaseClick = () => setCount((prevCount) => prevCount - 1);
  const handleResetClick = () => setCount(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={handleIncreaseClick}>Increment</button>
        <button onClick={handleDecreaseClick}>Decrement</button>
        <button onClick={handleResetClick}>Reset</button>
      </div>
    </>
  );
};
