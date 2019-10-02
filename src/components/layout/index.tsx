import Header from './header';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
