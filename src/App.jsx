import styledComponentsLogo from "./assets/styled-components.svg";

import { GlobalStyle } from "./styles/GlobalStyle.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
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
      </div>
    </>
  );
}

export default App;
