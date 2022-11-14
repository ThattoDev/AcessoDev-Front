import { Route, BrowserRouter, Routes, Navigate, Outlet } from 'react-router-dom';
import { Home } from '../pages/Home';
// import { Login } from '../pages/Login';
import { Contato } from '../pages/Contato';

export const PrivateRoutes = () => {
  function isAuthenticated() {

    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      return false;
    }
  }

  return (
    isAuthenticated() ? <Outlet /> : <Navigate to="/" />
  );
};

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </BrowserRouter>

  );
}