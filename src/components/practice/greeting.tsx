type GreetingProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
}

const Greeting = ({ name, mark, optional, onClick }: GreetingProps) => {
  const handleClick = () => onClick(name);

  return (
    <div>
      hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <button type="button" onClick={handleClick}>Click</button>
    </div>
  )
}

export default Greeting;