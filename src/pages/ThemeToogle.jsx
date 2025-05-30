import styled, { ThemeProvider } from "styled-components";

import MoonIcon from "../components/icons/MoonIcon";
import SunIcon from "../components/icons/SunIcon";
import Switch from "../components/Switch";
import { useState } from "react";

const StyleApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${(props) => props.theme.body};
`;

const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.title};
`;

const Info = styled.p`
  margin: 1rem;
  color: ${(props) => props.theme.subtitle};
`;

const Link = styled.a`
  color: ${(props) => props.theme.subtitle};

  &:hover {
    color: #bf4f74;
  }
`;

const lightTheme = {
  body: "#fff",
  title: "#1c1c1c",
  subtitle: "#333",
  icon: "#1c1c1c",
};

const darkTheme = {
  body: "#1c1c1c",
  title: "#fff",
  subtitle: "#b6b6b6",
  icon: "#fff",
};

export default function ThemeToogle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function onToggle() {
    setIsDarkTheme((prev) => !prev);
  }

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <StyleApp>
        <SunIcon />
        <Switch isDarkTheme={isDarkTheme} onToggle={onToggle} />
        <MoonIcon />
        <Name>Victoria Bogustka</Name>
        <Info color="red">Username: Alozi</Info>
        <Info>
          GitHub:{" "}
          <Link target="_blank" href="https://github.com/Alozi">
            https://github.com/Alozi
          </Link>
        </Info>
      </StyleApp>
    </ThemeProvider>
  );
}
