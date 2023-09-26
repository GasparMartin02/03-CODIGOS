import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [count, setCount] = useState(0);

  let usuario = {
    name: 'Gaspar',
    lastname: 'Martin' 
  };
  
  return (
    <>
      <Navbar user={usuario}/>
      <main>
        <button onClick={ () =>{
          setCount(count + 1);
        }}>Incrementar +1</button>

        <button onClick={ () =>{
          setCount(count - 1);
        }}>Decremento -1</button>
        <h1>{count}</h1>
      </main>
    </>
  )
}

export default App;