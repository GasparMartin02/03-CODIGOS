import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const UserPanel = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async() => {
    try {
      const { data } = await axios.get();
    } catch (error) {
      
    }
  }
  return (
    <Container>
      <Row>
        <Col>

        </Col>
      </Row>
    </Container>
  )
}

export default UserPanel;