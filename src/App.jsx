import styled, { keyframes } from "styled-components";

import styledComponentsLogo from "./assets/styled-components.svg";
import { GlobalStyle } from "./styles/GlobalStyle.js";

const Container = styled.div`
  padding: 20px;
`;

const Wrapper = styled.section`
  display: flex;
  border: 1px solid red;
  max-width: 1200px;
  margin: 0 auto; /* Центруємо по горизонталі */
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 4em;
  background: papayawhip;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.$primary ? "#BF4F74" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#BF4F74")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #bf4f74;
  border-radius: 3px;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

const Link = ({ className, children }) => (
  <a className={className}>{children}</a>
);

const StyledLink = styled(Link)`
  color: #bf4f74;
  font-weight: bold;
`;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

// / Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Wrapper>
        <a href="https://styled-components.com/" target="_blank">
          <img
            src={styledComponentsLogo}
            className="logo styled components library"
            alt="Styled components library logo"
            height={200}
            width={200}
          />
        </a>
        <h1>Styled components pet project</h1>
      </Wrapper>

      <Wrapper>
        <Title>Hello World!</Title>
      </Wrapper>

      <div>
        <Button>Normal</Button>
        <Button $primary>Primary</Button>
        <Button as="a" href="#">
          Link with Button styles
        </Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <TomatoButton as="a" href="#">
          Link with Tomato Button styles
        </TomatoButton>
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button>
      </div>

      <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </div>

      <div>
        <Input defaultValue="@probablyup" type="text" />
        <Input defaultValue="@geelen" type="text" $inputColor="rebeccapurple" />
      </div>

      <Rotate>&lt; 💅🏾 &gt;</Rotate>
    </Container>
  );
}
