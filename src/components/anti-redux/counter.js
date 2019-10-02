import { useAnother } from '../../contexts/another';

const Counter = props => (
  <div>
    <style jsx>{`
      background: #ff6600;
    `}</style>

    <h1>{props.number}</h1>

    <button type="button" onClick={props.increment}>
      INCREMENT
    </button>
  </div>
);

export default useAnother(Counter);
