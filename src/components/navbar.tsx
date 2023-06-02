import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const menuLinks = [
  { id: 1, name: 'Главная', link: '#'},
  { id: 2, name: 'Регистрация', link: '#register'},
  { id: 3,  name: 'Наша команда', link: '#commands'}
]

interface IProps {
  className?: string | null;
}

{/* <a className="nav-link active" aria-current="page" href="#">Главная</a> */}

export const NavbarComponent: React.FC<IProps> = (props: IProps) => {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Главная</Nav.Link>
            <Nav.Link href="#register">Регистрация</Nav.Link>
            <Nav.Link href="#commands">Наша команда</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
