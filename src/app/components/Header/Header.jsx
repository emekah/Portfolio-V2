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
              <Link to="about" className="nav-link">
                about
              </Link>
              <Link to="projects" className="nav-link">
                projects
              </Link>
              <Link to="contact" className="nav-link">
                contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
