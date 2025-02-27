import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarCustom = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Link to='/'><Navbar.Brand>Home</Navbar.Brand></Link>
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