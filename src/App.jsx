import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle.js";

import Header from "./components/Header.jsx";
import Basic from "./pages/Basic.jsx";
import Home from "./pages/Home.jsx";
import Advanced from "./pages/Advanced.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/advanced" element={<Advanced />} />
      </Routes>
    </BrowserRouter>
  );
}
