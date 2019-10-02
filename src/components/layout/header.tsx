import Link from 'next/link';

type Props = {

}

const Header: React.FC<Props> = () => (
  <div>
    <style jsx>
      {`
        ul {
          display: inline-block;
          width: 100%;
          list-style: none;
        }

        li {
          float: left;
          margin: 0 10px 0 0;
        }

        li:last-of-type {
          background: #ff0000;
        }
      `}
    </style>

    {/* <ul>
      {[
        { label: 'HOME', pathname: '/' },
        { label: 'ABOUT', pathname: '/about' },
        { label: 'FETCH', pathname: '/fetch' },
        { label: 'ANTI-REDUX', pathname: '/anti-redux' },
      ].reduce((target, item) => {
        target.push(
          <li key={item.label}>
            <Link href={item.pathname}>
              <a>{item.label}</a>
            </Link>
          </li>,
        );

        return target;
      }, [])}
    </ul> */}

    <Link href={'/'}>
      <a>HOME</a>
    </Link>

    <Link href={'/about'}>
      <a>ABOUT</a>
    </Link>

    <Link href={'/ssr-test'}>
      <a>SSR-TEST</a>
    </Link>
  </div>
);

export default Header;
