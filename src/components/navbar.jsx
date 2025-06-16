import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/animais">Animais</Link>
    <Link to="/sobre">Sobre</Link>
  </nav>
);

export default Navbar;
