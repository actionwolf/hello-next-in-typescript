import { useSample } from '../../contexts/sample';

class Receiver extends React.Component {
  render() {
    return <div>RECEIVER: {this.props.value}</div>;
  }
}

export default useSample(Receiver);
