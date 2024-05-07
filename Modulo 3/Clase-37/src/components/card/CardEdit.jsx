import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardEdit = (props) => {
    const {name, desc, img} = props.data;
    const [ClassList, setClassList] = useState({
        bg: '',
    });
    
    const changeState = () => {
        setClassList({bg: 'bg-dark text-white'});
    }

    useEffect(() => {
      console.log('se ejecuta useefec');
    }, [ClassList])
    

  return (
    <Card className={`${ClassList.bg} m-3`} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
        {desc}
    </Card.Text>
    <Button variant="primary" onClick={() => changeState()}>Cambiar bg</Button>
    </Card.Body>
    </Card>
    
  )
}

export default CardEdit