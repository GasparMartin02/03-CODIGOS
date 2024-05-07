import React from 'react'
import { Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';



const NavbarCustom = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link className='btn btn-success' to='/login'>Ir a Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCustom;