import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(Math.max(0, count - 1));

  return (
    <div>
      <style jsx={true}>{`
        background:#ff6600;

        h1 {
          display: block;
          width: 100%;
          text-align: center;
        }

        button {
          background: #fff;
        }
      `}</style>

      <h1>USE-STATE : {count}</h1>

      <button type="button" onClick={increment}>+1</button>
      <button type="button" onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter;