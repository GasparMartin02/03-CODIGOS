import { useEffect, useLayoutEffect, useState } from 'react';
import NavbarCustom from './components/navbar/NavbarCustom';
import CardCustom from './components/Cards/CardCustom';
import axios from 'axios';
import FormV1 from './components/forms/FormV1';
import FormV2 from './components/forms/FormV2';


function App() {
  const [personajes, setpersonajes] = useState([]);

  const getCharacters = async () => {
    try{
      const {data} = await axios.get('https://rickandmortyapi.com/api/character');
      setpersonajes(data.results);
    }catch (error){
      console.log(error);
    }
  }
  
  useEffect(() => {
    getCharacters();
  }, [])
  
  return (
    <>
    <NavbarCustom/>
    {/* <FormV1/> */}
    <FormV2/>
    {personajes.map((personaje, i) => <CardCustom key={i} data = {personaje}/>)}
    </>
  )
}

export default App;
