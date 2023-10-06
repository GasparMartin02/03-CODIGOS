import React from 'react'
import {nav} from './navbar.module.css'
const Navbar = ({user}) => {
    const {name, lastname} = user;
    return (
    <nav className={nav}>
        <ul>
            <li>Menu</li>
            <li>Contacto</li>
            <li>Login</li>
        </ul>
        <h3>{name} {lastname}</h3>
    </nav>
  )
}

export default Navbar;