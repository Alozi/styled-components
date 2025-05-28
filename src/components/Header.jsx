import styled from "styled-components";
import { Link } from "react-router-dom";

import styledComponentsLogo from "../assets/styled-components.svg";

const CustomHeader = styled.header`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
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

const StyledLink = styled(Link)`
  color: black;
  font-size: 1em;
  display: inline-block;
  margin: 0 5px;
  text-decoration: none;

  &:hover {
    color: #bf4f74;
  }
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
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <span>|</span>
        <StyledLink to="/basic">Basic</StyledLink>
        <span>|</span>
        <StyledLink to="/theme-toogle">Theme Toogle</StyledLink>
      </nav>
    </CustomHeader>
  );
}
