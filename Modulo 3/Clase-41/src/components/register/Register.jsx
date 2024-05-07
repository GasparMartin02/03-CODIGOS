import React from 'react';
import { Form , Button , Container , Row , Col} from 'react-bootstrap';
import { alertGeneric } from '../../../utils/alertCustom';
// import { messages } from '../../utils/messages';
// import { alertGeneric } from '../../utils/alertCustom';

const Register = () => {
  // Declaraciones de funciones
  
  const [fromData, setFromData] = useState({
    email: '',
    name: '',
    lastName: '',
    password: '',
    passwordCheck: '',
    termsAndConditions: ''
  });

  const [message, setMessage] = useState('');

  const handleSumbit = async (e) => {
    e.preventDefault();
    setMessage('');
    const validationEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const calidationPass = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    try {
      if(!validationEmail.test(fromData.email)) return
      alertGeneric(messages.failEmailFormat, 'Uppss...', 'error'),
      setMessage (messages.failEmailFormat);
      if(!validationPass.test(fromData.password)) return
      alertGeneric(messages.failPasswordFormat, 'Uppss...', 'error'),
      setMessage (messages.failPasswordFormat);
      if(fromData.password !== formData.passwordCheck) return 
      alertGeneric(message.failPasswordCheck,'Uppss...', 'error'), setMessage(message.failPasswordCheck);

      const {data} = await

      const userExist = await axios.get()
    } catch (error) {
      
    }
  };

  const handleChangeFormData = (e) => {
    const textTolowerCase = (data) => data.toLowerCase();
    setFromData ((prev) => ({
      ...prev,
      [e.target.name]: e.target.name == 'password' || e.target.name ==
      'passwordCheck' ? e.target.value : textTolowerCase(e.target.value),
      termsAndconditions: e.target.checked,
    }));
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default Register;