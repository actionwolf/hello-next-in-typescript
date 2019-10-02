import axios from 'axios';

import Layout from '../src/components/layout';

class SSRTest extends React.Component {
  static async getInitialProps({ req }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );

    return Object.assign(
      {},
      { users: response.data },
      req ? { from: 'server' } : { from: 'client' },
    );
  }

  render() {
    let { users, from } = this.props;

    return (
      <Layout>
        <span>Render from {from}</span>

        <ul>
          {(users || []).map(user => (
            <li key={user['id']}>{user['name']}</li>
          ))}
        </ul>
      </Layout>
    );
  }
}

export default SSRTest;
