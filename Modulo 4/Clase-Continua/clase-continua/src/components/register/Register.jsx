import {React, useState} from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { messages } from '../../utils/messages';
import { alertGeneric } from '../../utils/alertCustom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingScreem from '../loadingScreen/LoadingScreen';

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
  const [isLoading, setIsLoading] = useState(false)
  const URL_BASE = import.meta.env.VITE_URL_BASE;
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setMessage('');
    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validationPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    try {
      if(!validationEmail.test(formData.email)) return alertGeneric(messages.
      failEmailFormat, 'Upps...', 'error'), setMessage(messages.failEmailFormat);  
      if(!validationPass.test(formData.password)) return alertGeneric(messages.
      failPasswordFormat, 'Upps...', 'error'), setMessage(messages.failPasswordFormat);
      if(formData.password !== formData.passwordCheck) return alertGeneric(messages.
      failPasswordCheck, 'Upps...', 'error'), setMessage(messages.failPasswordCheck); 
      setIsLoading(true);
      
      const { data } = await axios.get(`${URL_BASE}/users/?email=${formData.email}`);

      if (data.length != 0 ) return alertGeneric(messages.userAlreadyExist, 'Upsss...', 'error');

      await axios.post(`${URL_BASE}/users`, formData);
      alertGeneric(messages.registerSuccess, 'Genial', 'success', () => navigate('/login'));
    
    } catch (error) {
      alertGeneric(messages.serveErrorGeneric, 'Upsss...', 'error');
    }finally{
      setIsLoading(false);
    }
  };

  const handleChangeFormData = (e) => {
    const texToLowerCase = (data) => data.toLowerCase();
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.name == 'password' || e.target.name == 'paswordCheck' ? e.target.value : 
      texToLowerCase(e.target.value),
      termsAndConditions: e.target.checked,
    }));
  };

  return (
    <Container>
     <Row className='justify-content-center my-5'>
      { isLoading
        ? <LoadingScreem/>
        :
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
      } 
     </Row>
    </Container>
    
    
  )
};

export default Register;