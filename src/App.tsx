import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
// import Cart from "./pages/Cart";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
