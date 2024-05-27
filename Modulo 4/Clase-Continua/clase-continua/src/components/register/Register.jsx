import {React, useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { messages } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertCustom';
import { useSearchParams } from 'react-router-dom';
import { useSyncExternalStore } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    email:'',
    name:'',
    lastname:'',
    password:'',
    passwordCheck:'',
    termsAndConditions:''
  });

  const [message, setMessage] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    setMessage('');
    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validationPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    try {
      if(!validationEmail.test(formData.email)) return alertGeneric(messages.
      failEmailFormat, 'Upps...', 'error'), setMessage(messages.failEmailFormat);  
      if(!validationEmail.test(formData.email)) return alertGeneric(messages.
      failPasswordFormat, 'Upps...', 'error'), setMessage(messages.failPasswordFormat); 
    } catch (error) {
      
    }
  };

  const handleChangeFormData = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      termsAndConditions: e.target.checked,
    }));
  };

  return (
    <Container>
     <Row className='justify-content-center my-5'>
      <Col xs={12} md={8} lg={6}>
       <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
         <Form.Label>Email address</Form.Label>
         <Form.Control type="email" placeholder="Enter email" 
         name='email' required onChange={handleChangeFormData}/>
        </Form.Group>

        <Form.Group className="mb-3">
         <Form.Label>Name</Form.Label>
         <Form.Control type="text" placeholder="Enter Name" 
         name='name' required />
        </Form.Group>

        <Form.Group className="mb-3">
         <Form.Label>LastName</Form.Label>
         <Form.Control type="text" placeholder="Enter LastName" 
         name='lastName' required onChange={handleChangeFormData}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" 
         name='password' placeholder="Password" required onChange={handleChangeFormData}/>
        </Form.Group>

        <Form.Group className="mb-3">
         <Form.Label>Repeat Password</Form.Label>
         <Form.Control type="password" 
         name='passwordCheck' placeholder="Repeat Password" required onChange={handleChangeFormData}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="Acept terms and conditions" 
         name='termsAndConditions' required onChange={handleChangeFormData}/>
        </Form.Group>
        <Col className='text-danger my-3'>
        <strong>{message}</strong>
        </Col>
       <Button variant="primary" type="submit">
         Register
       </Button>
       </Form>
      </Col>
     </Row>
    </Container>
    
    
  )
};

export default Register;