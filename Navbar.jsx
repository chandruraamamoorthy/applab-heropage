import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function CollapsibleExample() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar-section bg-body-tertiary pt-5 pb-5"
    >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <span className="logo-app">App</span>Lab
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#features" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              Key Features
            </Nav.Link>
            <Nav.Link href="#features" className="nav-item">
              Pricing
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#pricing" className="nav-item">
              FAQ
            </Nav.Link>
            <Button variant="primary" className="navbar-button">
              Try for Free
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
