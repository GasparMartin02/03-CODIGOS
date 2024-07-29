import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ErrorPage from './pages/ErrorPage';
import NavbarCustom from '../src/components/navbar/NavbarCustom';
import RegisterPages from './pages/RegisterPages';

const user = {
  islog: true,
  role: 'admin',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      < NavbarCustom />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/admin' element={ user.islog && 
        user.role == 'admin' ? <AdminPage /> : <ErrorPage />} />
        <Route path='/register' element={<RegisterPages/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
