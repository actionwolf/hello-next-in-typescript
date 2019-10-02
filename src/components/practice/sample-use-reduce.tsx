import { useReducer } from 'react';

type Color =
  | 'Red'
  | 'Green'
  | 'Blue'
  | null;

type Action =
  | { type: 'SET_COUNT', count: number }
  | { type: 'SET_TEXT', text: string }
  | { type: 'SET_COLOR', color: Color }
  | { type: 'TOGGLE_LIKE' };

type State = {
  count: number;
  text: string;
  color: Color;
  isLike: boolean;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count
      };

    case 'SET_TEXT':
      return {
        ...state,
        text: action.text
      };

    case 'SET_COLOR':
      return {
        ...state,
        color: action.color
      };

    case 'TOGGLE_LIKE':
      return {
        ...state,
        isLike: !state.isLike
      };

    default:
      throw new Error('unhandled');
  }
}

const SampleReduce = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: '',
    color: 'Red',
    isLike: false
  });

  const setCount = () => dispatch({ type: 'SET_COUNT', count: 5 });
  const setText = () => dispatch({ type: 'SET_TEXT', text: 'Wolf' });
  const setColor = () => dispatch({ type: 'SET_COLOR', color: 'Blue' });
  const toggleLike = () => dispatch({ type: 'TOGGLE_LIKE' });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isLike: </code> {state.isLike
          ? 'true'
          : 'false'
        }
      </p>
      <ul>
        <li>
          <button type="button" onClick={setCount}>SET_COUNT</button>
        </li>
        <li>
          <button type="button" onClick={setText}>SET_TEXT</button>
        </li>
        <li>
          <button type="button" onClick={setColor}>SET_COLOR</button>
        </li>
        <li>
          <button type="button" onClick={toggleLike}>TOGGLE_LIKE</button>
        </li>
      </ul>
    </div>
  )
}

export default SampleReduce;