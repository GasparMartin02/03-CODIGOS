import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] =useState({
    name: 'Gaspar',
    lastname: 'Martin' 
  })

  
  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <Navbar user={user} setUser={setUser}/>
      <Navbar user={user} setUser={setUser}/>
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