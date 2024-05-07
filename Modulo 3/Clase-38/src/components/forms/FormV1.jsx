import React, { useState } from 'react'
import { Form , Button } from 'react-bootstrap';

const FormV1 = () => {
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
    <Form onSubmit={handlechange}> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        onChange={(e) => setemail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      {password}
      <br />
      {email}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormV1;