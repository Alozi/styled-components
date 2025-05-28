import styled from "styled-components";

import styledComponentsLogo from "../assets/styled-components.svg";

const CustomHeader = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid #bf4f74;
  margin: 0 auto 20px;
  background-color: #f5f5f5;
  border-radius: 0 0 8px 8px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

export default function Header() {
  return (
    <CustomHeader>
      <a href="https://styled-components.com/" target="_blank">
        <img
          src={styledComponentsLogo}
          className="logo styled components library"
          alt="Styled components library logo"
          height={100}
          width={100}
        />
      </a>
      <Title>Styled components pet project</Title>
    </CustomHeader>
  );
}
