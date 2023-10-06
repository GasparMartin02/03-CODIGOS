import React from 'react'
import {nav} from './navbar.module.css'
const Navbar = ({user, setUser}) => {
    const {name, lastname} = user;

    const [changeMenu, setchangeMenu] = useState('Menu')

    const updateUserName = () => {
        setUser({...user, name: 'Enrique'})
    }

    return (
    <nav className={nav}>
        <ul>
            <li>Menu</li>
            <li>Contacto</li>
            <li>Login</li>

            <button onClick={() => updateUserName}>
                Actualizar nombre
            </button>

            <button onClick={() => setchangeMenu('El nuevo Menu')}>
                Cambiar nombre de Menu
            </button>
        </ul>
        <h3>{name} {lastname}</h3>
    </nav>
    )
}

export default Navbar;