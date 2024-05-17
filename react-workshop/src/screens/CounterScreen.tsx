import { useState } from 'react';

export const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="secondary" onClick={() => setCount(count - 1)}>
        -
      </button>
      <h2>{count}</h2>
      <button className="secondary" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button className="tertiary" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
};
