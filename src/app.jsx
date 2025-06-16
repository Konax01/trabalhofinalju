import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Animais from "./pages/animais";
import Sobre from "./pages/sobre";
import Adotar from "./pages/adotar";
import GlobalStyles from "./styles/globalStyles";

const App = () => (
  <Router>
    <GlobalStyles />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animais" element={<Animais />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/adotar/:id" element={<Adotar />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;