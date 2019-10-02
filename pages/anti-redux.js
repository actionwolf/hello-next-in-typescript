import { SampleProvider } from '../src/contexts/sample';
import { AnotherProvider } from '../src/contexts/another';

import Sender from '../src/components/anti-redux/sender';
import Receiver from '../src/components/anti-redux/receiver';
import Counter from '../src/components/anti-redux/counter';

const Providers = ({ contexts, children }) =>
  contexts.reduce(
    (target, context) =>
      React.createElement(context, {
        children: target,
      }),
    children,
  );

class AntiRedux extends React.Component {
  render() {
    return (
      <Providers contexts={[SampleProvider, AnotherProvider]}>
        {/* <SampleProvider>
          <AnotherProvider> */}
        <Sender />
        <Receiver />
        <Counter />
        {/* </AnotherProvider>
        </SampleProvider> */}
      </Providers>
    );
  }
}

export default AntiRedux;
