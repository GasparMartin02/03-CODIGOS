import React from 'react';
import ButtonsNav from './ButtonsNav';


const Navbar = () => {

  const persona = {
    name: 'Gaspar',
    lastName: 'Martin'
  };

  const despedirse = () =>{
    alert('Adios');
  }
  return (
    <div>
        <ol>
            <li>Menu</li>
            <li>Contacto</li>
            <li>Login</li>
            <ButtonsNav nameButton={'Saludar'} message={'Buenas como estas??'} data={persona} functionNew = {despedirse}/>
            <ButtonsNav message={'I love react'}/>
            <ButtonsNav message={'Que onda'}/>
            <ButtonsNav message={'Hola'}/>
        </ol>
    </div>
  )
}

export default Navbar;