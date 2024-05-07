import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ErrorPage from './pages/ErrorPage';
import ErrorPage from './pages/RegisterPage';
import NavbarCustom from './components/navbar/NavbarCustom';

const user = {
  isLog: true,
  role: 'client',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavbarCustom/>
    <Routes>
      <Route path='/' element={<HomePage test={'hola'}/>}/>
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/admin' element={user.isLog && user.role == 'admin' ? 
      <AdminPage/> : <ErrorPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
