import styled, { ThemeProvider, css } from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.main};
  border: 2px solid ${(props) => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
Button.defaultProps = {
  theme: {
    main: "#BF4F74",
  },
};

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};

// Static object
const Box = styled.div({
  background: "#BF4F74",
  height: "50px",
  width: "50px",
  marginTop: "20px",
});

// Adapting based on props
const PropsBox = styled.div((props) => ({
  background: props.$background,
  height: "50px",
  width: "50px",
}));

const Wrapper = styled.section`
  padding: 4rem;
  marfing: 2rem;
  background-color: ${({ color }) => (color ? color : "papayawhip")};
  ${({ is3D }) =>
    is3D &&
    css`
      background-color: yellow;
      box-shadow: 1rem 1rem black;
    `}
`;

export default function Advanced() {
  return (
    <Container>
      <div>
        <Button>Normal</Button>

        <ThemeProvider theme={theme}>
          <Button>Themed</Button>
        </ThemeProvider>
      </div>
      <div>
        <p>
          styled-components optionally supports writing CSS as JavaScript
          objects instead of strings. This is particularly useful when you have
          existing style objects and want to gradually move to
          styled-components.
        </p>
        <Box />
        <PropsBox $background="blue" />
      </div>
      <Wrapper>
        <h1>Hello World!</h1>
      </Wrapper>
      <Wrapper is3D={true}>
        <h1>Hello World 3D!</h1>
      </Wrapper>
    </Container>
  );
}
