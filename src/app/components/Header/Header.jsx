import React from "react";
import "./../Header/Header.scss";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const Header = () => {
  const [state, setState] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 120) {
      setState(true);
    } else {
      setState(false);
    }
  };
  return (
    <>
      <Navbar
        variant="light"
        expand="lg"
        className={`navbar ${state ? "bgShadow" : "navbar"} `}
      >
        <Container>
          <Navbar.Brand>
            <div className="nav-logo">
              <Link className="mx-1 text-bold" to="hero">
                Emeka
              </Link>
              <div className="logo-square"></div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="custom-toggler"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto navbarFlex">
              <a
                href="https://www.linkedin.com/in/emeka-peacewill/"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/emekah"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                GitHub
              </a>
              <a
                href="https://www.behance.net/emekah"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                Behance
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
