import React, {useEffect, useState} from 'react'
import { Container, Navbar, Button } from 'react-bootstrap';

const NavbarDefault = () => {

    const [user, setUser] = useState('Bienvenido');
    
    const handleButton = (x) => {
        setUser(Math.random());
        console.log(x);
    };

    useEffect(() => {
        console.log('Estamos en el UseEffect');
    }, [user])
    
  return (
    <>
    <Container fluid>
        <Navbar expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Brand href='#'>{user}</Navbar.Brand>
                <Button onClick={ () => handleButton('test')} variant='danger' size='sm'>{name}</Button>
            </Container>
        </Navbar>
    </Container>
    </>
  )
}

export default NavbarDefault;