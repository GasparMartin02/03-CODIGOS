import React from 'react';
import { Col } from 'react-bootstrap';
import spinnerLogo from '../../assets/logosteam.png';
import {spinner, spinnerContainer } from './loadingScreen.module.css';

const LoadingScreem = () => {
  return (
    <Col className={spinnerContainer}>
    <img className={spinner} src={spinnerLogo} alt="logo de steam" />
    </Col>
  )
}

export default LoadingScreem;