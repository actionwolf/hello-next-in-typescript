import { withRouter, useRouter } from 'next/router';

import Layout from '~components/layout';

const About = (props: any) => {
  const router = useRouter();

  return (
    <Layout>
      <h2>About</h2>
      <span
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(props),
        }}
      />
      <br />
      <br />
      <span
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(router)
        }} />
    </Layout>
  );
};

About.getInitialProps = async () => {
  return { a: 100 };
}

export default withRouter(About);
