import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Jeffery Trinh - Portfolio</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/references">References</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>&copy; Jeffery Trinh | COMP 229 | Fall 2026</p>
      </footer>
    </>
  );
}

export default Layout;