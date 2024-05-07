import './App.css'
import CardEdit from './components/card/CardEdit'
import NavbarDefault from './components/navbar/NavbarDefault'
function App() {
  const persona = [
  {
    name: 'Gaspar',
    desc: 'loremmmm',
    img:'https://www.w3schools.com/howto/img_avatar.png'
  },

  {
    name: 'Juan',
    desc: 'loremmmm',
    img:'https://www.w3schools.com/howto/img_avatar.png'
  },

  {
    name: 'Jorge',
    desc: 'loremmmm',
    img:'https://www.w3schools.com/howto/img_avatar.png'
  }

]
  return (
    <>
    <NavbarDefault/> 
    {persona.map((persona, index) => <CardEdit key={index} data={persona}/>)}
    </>
  )
}

export default App
