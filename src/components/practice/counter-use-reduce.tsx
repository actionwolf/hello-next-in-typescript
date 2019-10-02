import { useReducer } from 'react';

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' };

function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;

    case 'DECREMENT':
      return Math.max(0, state - 1);

    default:
      throw new Error('Unhandled action')
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0);

  const increment = () => dispatch({ type: 'INCREMENT' });

  const decrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <style jsx={true}>{`
        background: #999;

        h1 {
          display: block;
          width: 100%;
          color: #fff;
          text-align: center;
        }

        button {
          background: #fff;
        }
      `}</style>

      <h1>USE-REDUCER :  {count}</h1>

      <button type="button" onClick={increment}>+1</button>
      <button type="button" onClick={decrement}>-1</button>
    </div>
  )
}

export default Counter;