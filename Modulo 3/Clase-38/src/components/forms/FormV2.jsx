import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap';

const FormV2 = () => {

    const [formData, setformData] = useState({
        email: '',
        password:'',
        checked: null
    });

    const handleSubmit = (e) => {
        e.prevntDefault();
    };

    const handlechange = (e) => {
        setformData((prev) => ({
            ...prev,
            [e.target.name] : e.target.value,
            checked: e.target.checked, 
        }))
    };

  return (
    <Form onSubmit={handleSubmit}>  
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handlechange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={handlechange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" name='checked' onChange={handlechange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormV2;