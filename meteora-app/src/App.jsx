import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

// Context Provider
import { ContextProvider } from "./context";

// Components
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import PaginaErro from "./pages/PaginaErro";

import "./App.css";

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
