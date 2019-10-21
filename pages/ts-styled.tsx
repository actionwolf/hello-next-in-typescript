import styled, { css, createGlobalStyle } from 'styled-components';

type ButtonProps = {
  children?: any;
  danger?: boolean;
}

const Page = () => {
  return (
    <Container>
      <GlobalStyle />
      <Button>SUCCESS</Button>
      <Button danger={true}>DANGER</Button>
      <Button2>?????</Button2>
      <Button as='a'>AS A tag</Button>
      <Button as={ReverseButton}>abcd-1234567890</Button>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    background: #000;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #000;

  @media (max-width:1000px) {
    background: #bdc3c7;
  }

  @media (max-width: 600px) {
    background: #333;
  }
`;

const Button = styled.button<ButtonProps>`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: #fff;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;

  background-color:${props => props.danger ? '#e74c3c' : '#3498db'};

  &:active,
  &:focus,
  &:hover {
    background: #ff6600;
  }
`;

const Button2 = styled(Button)`
  border-radius: 0;

  &:hover {
    ${css`
      background: #ff0000;
    `}
  }
`

const ReverseButton = (props: ButtonProps) =>
  <Button
    {...props}
    children={props.children.split('').reverse()} />

export default Page;