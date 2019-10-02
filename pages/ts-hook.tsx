import Greeting from '~components/practice/greeting';
import CounterUseState from '~components/practice/counter-use-state';
import CounterUseReduce from '~components/practice/counter-use-reduce';
import FormUseStateRef from '~components/practice/form-use-state-ref';
import SampleUseReduce from '~components/practice/sample-use-reduce';

type PageProps = {
  name: string;
  children: React.ReactNode;
};

const Page = ({ name, children }: PageProps) => {
  const onClick = (name: string) => {
    console.log(`Welcome ${name}~!!!`);
  }

  const onSubmit = (form: { name: string, description: string }) => {
    console.log(form);
  }

  return (
    <>
      TS #3
    <br />
      {name}
      <br />
      {children}

      <Greeting
        name={'wolf'}
        mark={'X'}
        optional={'love your fucking job'}
        onClick={onClick} />

      <CounterUseState />

      <CounterUseReduce />

      <FormUseStateRef
        onSubmit={onSubmit} />

      <SampleUseReduce />
    </>
  )
};

Page.getInitialProps = async () => {
  return {
    name: 'Wolfman'
  }
}

export default Page;