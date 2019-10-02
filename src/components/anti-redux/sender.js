import { SampleConsumer, useSample } from '../../contexts/sample';

class Sender extends React.Component {
  state = {
    input: '',
  };

  handleChange = event => {
    this.setState({ input: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.setValue(this.state.input);
  };

  componentDidMount() {
    this.setState({
      input: this.props.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <span>SENDER: </span>
        <input value={this.state.value} onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default useSample(Sender);
