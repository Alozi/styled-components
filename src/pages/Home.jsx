import styled from "styled-components";

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color:rgb(158, 12, 60);
  margin: 100px 0;
`;

export default function Home() {
  return <Title>This is a Home page!</Title>;
}
