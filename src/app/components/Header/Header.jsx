import React from "react";
import "./../Header/Header.scss";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Header = () => {
  const [state, setState] = React.useState(false);
    React.useEffect(() => {
     window.addEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if(window.scrollY > 120) {
            setState(true); 
        } else {
            setState(false);
        }
    }
  return (
    <>
      <Navbar variant="light" expand="lg" className={`navbar ${state ? 'bgShadow' : 'navbar'} `}>
        <Container>
          <Navbar.Brand >
            <div className="nav-logo">
              <h3 className="mx-1">Emeka</h3>
              <div className="logo-square"></div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto navbarFlex">
              <Nav.Link to="/" className="nav-link">about</Nav.Link>
              <Nav.Link className="nav-link">projects</Nav.Link>
              <Nav.Link className="nav-link">contact</Nav.Link>
              <Nav.Link className="">
              <Button className="btn-green">resume</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
